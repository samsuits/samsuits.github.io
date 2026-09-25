# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal site for Satish Samala, served by GitHub Pages from the `main` branch at the custom domain in `CNAME` (`satishsamala.com`). There is no build step, package manager, linter, or test suite: every page is a single self-contained HTML file with inline `<style>` and `<script>`. Pushing to `main` deploys.

To preview locally, serve the repo root (relative links like `upi-mdr-checker/` need a server, not `file://`):

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Structure

- `index.html` — profile/résumé page. Design tokens live as CSS custom properties on `:root` (paper/ink/rust palette; Fraunces, Inter, JetBrains Mono from Google Fonts). The only JS is an `IntersectionObserver` that adds `.is-visible` to `.reveal` elements. The contact section links to the tools hosted in subdirectories.
- `upi-mdr-checker/index.html` — standalone calculator for UPI Merchant Discount Rate under NPCI's Sept 2026 circular. Commit history ("Sync UPI MDR Checker with app v1.0.2") indicates this file is a copy of a separately maintained app; changes may need to be mirrored with that source.

## UPI MDR Checker internals

- **i18n**: a single `translations` object with 23 languages: English plus the 22 Eighth Schedule languages of India (codes include three-letter ones like `brx`, `doi`, `kok`, `mai`, `mni`, `sat`).
  - Static text: `setLang()` writes each key into the element with id `i18n-<key>`, using `innerHTML` only when the string contains `<strong>`, otherwise `textContent`. A new static string needs both the translation key and a matching `id="i18n-<key>"` element.
  - Dynamic text (results): `t(key, val)` looks up `translations[currentLang][key]`, falls back to `en`, then to the key itself, and substitutes `{val}`. Add new keys under `en` at minimum; other languages fall back to English.
  - The language list exists twice as `<option>`s: the header `#langSelect` and the first-visit `#langPickerSelect` modal. Adding or removing a language means editing both dropdowns plus the `translations` entry.
- **Language selection on load**: a saved choice in `localStorage` (`upiMdrLang`) wins; otherwise `detectLang()` uses the browser language (`navigator.language`, primary subtag) if translated, else `en`, and the picker modal is shown. Only `changeLang()` (dropdown / picker confirm) persists the choice; `setLang()` alone does not.
- **Rules** are encoded in `calcMDR()` in this order: P2P → free; amount ≤ ₹2,000 → free; monthly QR receipts > 0 and ≤ ₹1,00,000 → free (small-merchant exemption); essential categories → flat ₹5; capital markets → 0.02% capped at ₹300; otherwise standard 0.4% capped at ₹300. `checkEligibility()` handles the separate small-merchant tab. The same thresholds/rates also appear in translated explanatory strings, so rule changes require updating the text in every language, not just the logic.
- Numeric inputs use Indian digit grouping as you type (`bindIndianNumberInput`, `formatIndianNumberStr`); read values via `getNumValue(id)`, not `.value` directly. Currency display goes through `fmt()` (`en-IN` locale).
- Supports dark mode via `prefers-color-scheme` with a `data-theme` override on `:root`.
