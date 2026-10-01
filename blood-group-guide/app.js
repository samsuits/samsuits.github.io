'use strict';

/* ---------- Compatibility rules ---------- */

const GROUPS = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

const show = g => g.replace('-', '\u2212'); // proper minus sign for display
const abo = g => g.replace(/[+-]$/, '');
const antigens = g => (abo(g) === 'O' ? [] : abo(g).split(''));
const isPos = g => g.endsWith('+');

// Red cells: donor cells must not carry an antigen the patient lacks.
function redCellsOk(donor, patient) {
  const pa = antigens(patient);
  if (!antigens(donor).every(a => pa.includes(a))) return false;
  if (isPos(donor) && !isPos(patient)) return false;
  return true;
}

// Plasma: donor plasma must not carry antibodies against the patient's cells.
// A donor has antibodies against the ABO antigens they lack. RhD is ignored.
function plasmaOk(donor, patient) {
  const da = antigens(donor);
  return antigens(patient).every(a => da.includes(a));
}

const RULES = { rbc: redCellsOk, plasma: plasmaOk };
const productName = p => I18n.t(p === 'rbc' ? 'product_name_rbc' : 'product_name_plasma');

// The classic universal donor / universal recipient facts, shown as a diagram.
// RhD does not matter for plasma, so those groups are given without a sign.
const UNIVERSAL = {
  rbc: { donor: show('O-'), recipient: show('AB+') },
  plasma: { donor: 'AB', recipient: 'O' }
};
const universalNote = (product, which) => I18n.t(`universal_${which}_note_${product}`);

const canGiveTo = (g, p) => GROUPS.filter(x => RULES[p](g, x));
const canGetFrom = (g, p) => GROUPS.filter(x => RULES[p](x, g));

/* ---------- Local storage (stays on the phone) ---------- */

const KEY = 'profile.v1';

const Store = {
  get prefs() {
    return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Preferences;
  },
  async get() {
    try {
      const raw = this.prefs
        ? (await this.prefs.get({ key: KEY })).value
        : localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },
  async set(obj) {
    const raw = JSON.stringify(obj);
    if (this.prefs) await this.prefs.set({ key: KEY, value: raw });
    else localStorage.setItem(KEY, raw);
  },
  async clear() {
    if (this.prefs) await this.prefs.remove({ key: KEY });
    else localStorage.removeItem(KEY);
  }
};

/* ---------- Language preference (stays on the phone) ---------- */

const LANG_KEY = 'lang.v1';
const SUPPORTED_LANGS = ['en', 'hi', 'gu', 'te'];

const LangStore = {
  get prefs() {
    return Store.prefs;
  },
  async get() {
    try {
      const raw = this.prefs
        ? (await this.prefs.get({ key: LANG_KEY })).value
        : localStorage.getItem(LANG_KEY);
      return raw || null;
    } catch (e) {
      return null;
    }
  },
  async set(lang) {
    if (this.prefs) await this.prefs.set({ key: LANG_KEY, value: lang });
    else localStorage.setItem(LANG_KEY, lang);
  }
};

/* ---------- First-run intro (stays on the phone) ---------- */

const INTRO_KEY = 'intro.dismissed.v1';

const IntroStore = {
  get prefs() {
    return Store.prefs;
  },
  async dismissed() {
    try {
      const raw = this.prefs
        ? (await this.prefs.get({ key: INTRO_KEY })).value
        : localStorage.getItem(INTRO_KEY);
      return raw === '1';
    } catch (e) {
      return false;
    }
  },
  async dismiss() {
    if (this.prefs) await this.prefs.set({ key: INTRO_KEY, value: '1' });
    else localStorage.setItem(INTRO_KEY, '1');
  }
};

function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = I18n.t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', I18n.t(el.getAttribute('data-i18n-aria-label')));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', I18n.t(el.getAttribute('data-i18n-placeholder')));
  });
  document.title = I18n.t('app_title');
}

async function initLang() {
  const saved = await LangStore.get();
  let lang = saved;
  if (!lang) {
    const nav = (navigator.language || 'en').toLowerCase();
    lang = SUPPORTED_LANGS.find(l => nav.startsWith(l)) || 'en';
  }
  I18n.setLang(lang);
  $('lang-select').value = I18n.lang;
  applyStaticI18n();
}

/* ---------- State ---------- */

const state = {
  product: 'rbc',
  checkGroup: 'O-',
  profile: null,
  draftGroup: null
};

const $ = id => document.getElementById(id);

/* ---------- Shared UI pieces ---------- */

function renderPicker(el, selected, onPick) {
  el.innerHTML = '';
  el.setAttribute('role', 'radiogroup');
  GROUPS.forEach(g => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'group';
    b.textContent = show(g);
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', String(g === selected));
    b.addEventListener('click', () => onPick(g));
    el.appendChild(b);
  });
}

function chips(list, mine) {
  return list
    .map(g => `<span class="chip${g === mine ? ' mine' : ''}">${show(g)}</span>`)
    .join('');
}

function labelCard(group, heading) {
  const p = state.product;
  const mine = state.profile && state.profile.group;
  const give = canGiveTo(group, p);
  const get = canGetFrom(group, p);
  const name = productName(p);
  return `
    <div class="label-band" aria-hidden="true"></div>
    <div class="label-body">
      <div class="label-head">
        <div class="big" aria-label="${I18n.t('label_blood_group_aria', { group: show(group) })}">${show(group)}</div>
        <div class="label-meta">${heading}<br><span class="muted">${name}</span></div>
      </div>
      <h3>${I18n.t('label_can_give_to', { product: name })} <span class="count">${I18n.t('label_count', { n: give.length })}</span></h3>
      <div class="chips">${chips(give, mine)}</div>
      <h3>${I18n.t('label_can_get_from', { product: name })} <span class="count">${I18n.t('label_count', { n: get.length })}</span></h3>
      <div class="chips">${chips(get, mine)}</div>
    </div>`;
}

/* ---------- Donor/recipient diagram ---------- */

const BOX_W = 44, BOX_H = 50, STEP = 50, BIG_W = 70, BIG_H = 50;

function diagramBox(x, y, text) {
  return `<rect x="${x}" y="${y}" width="${BOX_W}" height="${BOX_H}" rx="8" class="diagram-box"/>` +
    `<text x="${x + BOX_W / 2}" y="${y + BOX_H / 2 + 5}" text-anchor="middle" class="diagram-box-text">${text}</text>`;
}

function diagramBigBox(x, y, text) {
  return `<rect x="${x}" y="${y}" width="${BIG_W}" height="${BIG_H}" rx="10" class="diagram-big"/>` +
    `<text x="${x + BIG_W / 2}" y="${y + BIG_H / 2 + 6}" text-anchor="middle" class="diagram-big-text">${text}</text>`;
}

function diagramArrow(x1, x2, y) {
  return `<line x1="${x1}" y1="${y}" x2="${x2 - 10}" y2="${y}" class="diagram-arrow"/>` +
    `<polygon points="${x2 - 10},${y - 6} ${x2},${y} ${x2 - 10},${y + 6}" class="diagram-arrowhead"/>`;
}

function diagramMarkup(product) {
  const u = UNIVERSAL[product];
  const unit = productName(product);
  const row1 = GROUPS.map((g, i) => diagramBox(160 + i * STEP, 28, show(g))).join('');
  const row2 = GROUPS.map((g, i) => diagramBox(10 + i * STEP, 138, show(g))).join('');
  const caption = I18n.t('diagram_caption', { donor: u.donor, unit, recipient: u.recipient });

  return `
    <svg viewBox="0 0 570 224" role="img" aria-label="${caption}">
      <text x="10" y="16" class="diagram-title">${I18n.t('diagram_universal_donor_title')}</text>
      ${diagramBigBox(10, 28, u.donor)}
      ${diagramArrow(90, 150, 53)}
      ${row1}
      <text x="282" y="100" text-anchor="middle" class="diagram-note">${universalNote(product, 'donor')}</text>

      <text x="554" y="126" text-anchor="end" class="diagram-title">${I18n.t('diagram_universal_recipient_title')}</text>
      ${row2}
      ${diagramArrow(414, 474, 163)}
      ${diagramBigBox(484, 138, u.recipient)}
      <text x="282" y="210" text-anchor="middle" class="diagram-note">${universalNote(product, 'recipient')}</text>
    </svg>`;
}

/* ---------- Check tab ---------- */

function renderCheck() {
  renderPicker($('check-picker'), state.checkGroup, g => {
    state.checkGroup = g;
    renderCheck();
  });
  const mine = state.profile && state.profile.group;
  $('check-card').innerHTML = labelCard(
    state.checkGroup,
    state.checkGroup === mine ? I18n.t('label_your_group') : I18n.t('label_selected_group')
  );
  $('check-diagram').innerHTML = diagramMarkup(state.product);
  renderPair();
}

function fillSelect(sel, value) {
  sel.innerHTML = GROUPS.map(g => `<option value="${g}">${show(g)}</option>`).join('');
  sel.value = value;
}

function renderPair() {
  const d = $('pair-donor').value;
  const p = $('pair-patient').value;
  const ok = RULES[state.product](d, p);
  const v = $('pair-verdict');
  v.className = 'verdict ' + (ok ? 'yes' : 'no');
  const vars = { donor: show(d), product: productName(state.product), patient: show(p) };
  v.textContent = I18n.t(ok ? 'pair_verdict_yes' : 'pair_verdict_no', vars);
}

/* ---------- Chart tab ---------- */

function renderChart() {
  const p = state.product;
  const mine = state.profile && state.profile.group;
  $('chart-lead').textContent = I18n.t(p === 'rbc' ? 'chart_lead_rbc' : 'chart_lead_plasma');

  let html = `<thead><tr><th scope="col"><span class="sr">${I18n.t('chart_sr_donor_patient')}</span></th>`;
  GROUPS.forEach(g => {
    html += `<th scope="col" class="${g === mine ? 'mine' : ''}">${show(g)}</th>`;
  });
  html += '</tr></thead><tbody>';
  GROUPS.forEach(d => {
    html += `<tr class="${d === mine ? 'mine' : ''}"><th scope="row">${show(d)}</th>`;
    GROUPS.forEach(r => {
      const ok = RULES[p](d, r);
      html += `<td class="${ok ? 'ok' : ''}${r === mine ? ' mine' : ''}">${
        ok ? `<span class="dot" aria-label="${I18n.t('chart_compatible_sr')}"></span>` : `<span class="sr">${I18n.t('chart_not_compatible_sr')}</span>`
      }</td>`;
    });
    html += '</tr>';
  });
  $('chart').innerHTML = html + '</tbody>';
}

/* ---------- Me tab ---------- */

function nextDonationText(profile) {
  if (!profile || !profile.lastDonation) return '';
  const last = new Date(profile.lastDonation + 'T00:00:00');
  if (isNaN(last)) return '';
  const days = profile.sex === 'f' ? 120 : 90;
  const next = new Date(last);
  next.setDate(next.getDate() + days);
  const fmt = next.toLocaleDateString(I18n.locale(), { day: 'numeric', month: 'short', year: 'numeric' });
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const note = profile.sex ? '' : I18n.t('next_donation_female_note');
  return next <= today
    ? I18n.t('next_donation_can_now', { days, note })
    : I18n.t('next_donation_from', { date: fmt, note });
}

function renderMe() {
  const prof = state.profile;
  const card = $('me-card');
  if (prof && prof.group) {
    card.hidden = false;
    card.innerHTML =
      labelCard(prof.group, prof.name ? escapeHtml(prof.name) : I18n.t('me_default_heading')) +
      (prof.lastDonation ? `<p class="label-foot">${nextDonationText(prof)}</p>` : '') +
      (prof.notes ? `<p class="label-foot">${escapeHtml(prof.notes)}</p>` : '');
  } else {
    card.hidden = true;
  }

  renderPicker($('me-picker'), state.draftGroup, pickDraft);
}

function pickDraft(g) {
  state.draftGroup = g;
  renderPicker($('me-picker'), g, pickDraft);
}

function fillForm() {
  const p = state.profile || {};
  $('me-name').value = p.name || '';
  $('me-sex').value = p.sex || '';
  $('me-last').value = p.lastDonation || '';
  $('me-notes').value = p.notes || '';
  state.draftGroup = p.group || null;
  $('me-last').max = new Date().toISOString().slice(0, 10);
  renderDateDisplay();
}

// Shows the stored yyyy-mm-dd value as dd/mm/yyyy over the native date input.
function renderDateDisplay() {
  const v = $('me-last').value;
  const display = $('me-last-display');
  display.textContent = v ? v.split('-').reverse().join('/') : 'dd/mm/yyyy';
  display.classList.toggle('empty', !v);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function saveProfile(e) {
  e.preventDefault();
  const status = $('me-status');
  if (!state.draftGroup) {
    status.textContent = I18n.t('me_status_choose_group');
    return;
  }
  const profile = {
    name: $('me-name').value.trim(),
    group: state.draftGroup,
    sex: $('me-sex').value,
    lastDonation: $('me-last').value,
    notes: $('me-notes').value.trim()
  };
  try {
    await Store.set(profile);
    state.profile = profile;
    state.checkGroup = profile.group;
    status.textContent = I18n.t('me_status_saved');
    renderAll();
  } catch (err) {
    status.textContent = I18n.t('me_status_error');
  }
}

async function deleteProfile() {
  if (!confirm(I18n.t('me_delete_confirm'))) return;
  try {
    await Store.clear();
  } catch (e) { /* nothing stored */ }
  state.profile = null;
  fillForm();
  $('me-status').textContent = I18n.t('me_status_deleted');
  renderAll();
}

/* ---------- Navigation ---------- */

function setTab(name) {
  document.querySelectorAll('.tab').forEach(t => (t.hidden = t.id !== 'tab-' + name));
  document.querySelectorAll('nav.bottom button').forEach(b =>
    b.setAttribute('aria-selected', String(b.dataset.tab === name))
  );
  document.body.dataset.tab = name;
  window.scrollTo(0, 0);
}

function setProduct(p) {
  state.product = p;
  document.body.dataset.product = p;
  document.querySelectorAll('.seg button').forEach(b =>
    b.setAttribute('aria-checked', String(b.dataset.product === p))
  );
  renderAll();
}

function renderAll() {
  renderCheck();
  renderChart();
  renderMe();
}

/* ---------- Start ---------- */

async function init() {
  await initLang();

  state.profile = await Store.get();
  if (state.profile && state.profile.group) state.checkGroup = state.profile.group;

  fillSelect($('pair-donor'), 'O-');
  fillSelect($('pair-patient'), state.profile && state.profile.group ? state.profile.group : 'A+');
  $('pair-donor').addEventListener('change', renderPair);
  $('pair-patient').addEventListener('change', renderPair);

  document.querySelectorAll('nav.bottom button').forEach(b =>
    b.addEventListener('click', () => setTab(b.dataset.tab))
  );
  document.querySelectorAll('.seg button').forEach(b =>
    b.addEventListener('click', () => setProduct(b.dataset.product))
  );

  $('lang-select').addEventListener('change', async e => {
    I18n.setLang(e.target.value);
    await LangStore.set(I18n.lang);
    applyStaticI18n();
    renderAll();
  });

  $('me-form').addEventListener('submit', saveProfile);
  $('me-delete').addEventListener('click', deleteProfile);
  $('me-last').addEventListener('input', renderDateDisplay);
  $('me-last').addEventListener('change', renderDateDisplay);
  $('me-last').addEventListener('click', e => {
    // Desktop browsers only open the picker from the (now invisible) icon.
    try { e.target.showPicker(); } catch (err) { /* unsupported; native tap still works */ }
  });

  $('about-btn').addEventListener('click', () => {
    setTab('learn');
    $('learn-about').open = true;
  });

  $('intro').hidden = await IntroStore.dismissed();
  $('intro-dismiss').addEventListener('click', async () => {
    $('intro').hidden = true;
    try { await IntroStore.dismiss(); } catch (e) { /* shows again next launch */ }
  });

  fillForm();
  setTab('check');
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
