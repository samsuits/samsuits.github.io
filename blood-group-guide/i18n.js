'use strict';

/* ---------- Translations ---------- */

const I18N = {
  en: {
    app_title: "Blood Group Guide",
    product_blood: "Blood",
    product_plasma: "Plasma",
    product_group_aria: "Blood product",
    lang_select_aria: "Language",

    check_lead: "Pick a blood group to see who it can give to and get from.",
    test_donor_patient_heading: "Test a donor and patient",
    donor_label: "Donor",
    patient_label: "Patient",

    chart_lead_rbc: "Blood compatibility for all eight groups.",
    chart_lead_plasma: "Plasma compatibility for all eight groups. RhD does not matter for plasma.",
    chart_note: "Rows are donors, columns are patients. A drop means compatible.",
    chart_sr_donor_patient: "Donor, patient",
    chart_compatible_sr: "compatible",
    chart_not_compatible_sr: "not compatible",

    learn_s1_summary: "What decides your blood group",
    learn_s1_p1: "Your red cells may carry an A antigen, a B antigen, both (AB) or neither (O). A separate antigen called RhD decides plus or minus: if you have it you are positive, if not you are negative.",
    learn_s1_p2: "Your plasma naturally carries antibodies against the A or B antigens you do not have. That is why a wrong transfusion can be dangerous.",
    learn_s2_summary: "Red cells and plasma work in opposite ways",
    learn_s2_p1: "For red cells, the donor's cells must not carry an antigen the patient lacks. So O negative can give red cells to everyone, and AB positive can receive red cells from everyone.",
    learn_s2_p2: "For plasma it flips. The donor's plasma must not carry antibodies against the patient's cells. So AB plasma suits every ABO group, and group O patients can receive plasma from any ABO group. RhD does not matter for plasma.",
    learn_s3_summary: "Rh negative blood",
    learn_s3_p1: "Only a small share of people in India, roughly 5 in 100, are Rh negative. Rh negative patients should normally get Rh negative red cells. This matters most for girls and women who may become pregnant, because exposure to RhD can affect future pregnancies.",
    learn_s4_summary: "Bombay blood group",
    learn_s4_p1: "A rare type first described in Mumbai in 1952. These people lack the H antigen and often test as group O on routine checks. They can only receive blood from other Bombay group donors. It is estimated at around 1 in 10,000 people in India, and is much rarer elsewhere.",
    learn_s4_p2: "If you have been told you are Bombay group, note it on your Me page and keep your donor card with you.",
    learn_s5_summary: "Whole blood and platelets",
    learn_s5_p1: "Whole blood is usually given as the same ABO and RhD group. For platelets, the same ABO group is preferred, but hospitals decide case by case. This app covers red cells and plasma only.",
    learn_s6_summary: "Who can donate in India",
    learn_s6_p1: "Under the national blood donor guidelines (NBTC, 2017), a donor should generally be 18 to 65 years old (first-time donors up to 60), weigh at least 45 kg, have haemoglobin of at least 12.5 g/dL, and be in good health on the day.",
    learn_s6_p2: "The gap between two whole blood donations is at least 90 days for men and 120 days for women. The blood bank checks all of this before you donate.",
    learn_s7_summary: "Before you rely on this",
    learn_s7_p1: "Every transfusion is cross-matched in a lab before it is given. Use this app to learn and to plan donations, not to make medical decisions.",

    me_name_label: "Name (optional)",
    me_group_legend: "Your blood group",
    me_sex_label: "Sex (used for the donation gap)",
    me_sex_prefer_not: "Prefer not to say",
    me_sex_male: "Male",
    me_sex_female: "Female",
    me_last_label: "Last whole blood donation (optional)",
    me_notes_label: "Notes (optional)",
    me_notes_placeholder: "For example: Bombay group, donor card number",
    me_save_btn: "Save details",
    me_delete_btn: "Delete my details",
    me_privacy: "Your details are saved only on this phone. The app has no internet access, so nothing is collected or shared.",
    me_default_heading: "Your group",
    me_status_choose_group: "Choose your blood group to save.",
    me_status_saved: "Details saved on this phone.",
    me_status_error: "Could not save. Check that the phone has free storage and try again.",
    me_status_deleted: "Details deleted.",
    me_delete_confirm: "Delete your saved details from this phone?",

    nav_check: "Check",
    nav_chart: "Chart",
    nav_learn: "Learn",
    nav_me: "Me",
    nav_sections_aria: "Sections",

    label_selected_group: "Selected group",
    label_your_group: "Your group",
    label_can_give_to: "Can give {product} to",
    label_can_get_from: "Can get {product} from",
    label_count: "{n} of 8",
    label_blood_group_aria: "Blood group {group}",

    product_name_rbc: "blood",
    product_name_plasma: "plasma",

    universal_donor_note_rbc: "Can give to everyone",
    universal_recipient_note_rbc: "Can get from everyone",
    universal_donor_note_plasma: "Suits every group",
    universal_recipient_note_plasma: "Can get from any group",
    diagram_universal_donor_title: "Universal donor",
    diagram_universal_recipient_title: "Universal recipient",
    diagram_caption: "{donor} can give {unit} to all eight groups. All eight groups can give {unit} to {recipient}.",

    pair_verdict_yes: "Yes. {donor} {product} can be given to a {patient} patient.",
    pair_verdict_no: "No. {donor} {product} should not be given to a {patient} patient.",

    next_donation_can_now: "You can donate whole blood again now, based on a {days} day gap{note}.",
    next_donation_from: "You can donate whole blood again from {date}{note}.",
    next_donation_female_note: " (120 days after your last donation if you are female)"
  },

  hi: {
    app_title: "ब्लड ग्रुप गाइड",
    product_blood: "रक्त",
    product_plasma: "प्लाज़्मा",
    product_group_aria: "रक्त उत्पाद",
    lang_select_aria: "भाषा",

    check_lead: "यह देखने के लिए एक ब्लड ग्रुप चुनें कि वह किसे दे सकता है और किससे ले सकता है।",
    test_donor_patient_heading: "दाता और रोगी की जांच करें",
    donor_label: "दाता",
    patient_label: "रोगी",

    chart_lead_rbc: "सभी आठ ग्रुप के लिए रक्त अनुकूलता।",
    chart_lead_plasma: "सभी आठ ग्रुप के लिए प्लाज़्मा अनुकूलता। प्लाज़्मा के लिए RhD मायने नहीं रखता।",
    chart_note: "पंक्तियाँ दाता हैं, स्तंभ रोगी हैं। बिंदु का मतलब है अनुकूल।",
    chart_sr_donor_patient: "दाता, रोगी",
    chart_compatible_sr: "अनुकूल",
    chart_not_compatible_sr: "अनुकूल नहीं",

    learn_s1_summary: "आपका ब्लड ग्रुप क्या तय करता है",
    learn_s1_p1: "आपकी लाल रक्त कोशिकाओं में A एंटीजन, B एंटीजन, दोनों (AB) या कोई नहीं (O) हो सकता है। RhD नामक एक अलग एंटीजन यह तय करता है कि आप पॉज़िटिव हैं या निगेटिव: अगर यह आपमें है तो आप पॉज़िटिव हैं, नहीं है तो निगेटिव।",
    learn_s1_p2: "आपके प्लाज़्मा में स्वाभाविक रूप से उन A या B एंटीजन के खिलाफ एंटीबॉडी होती हैं जो आपमें नहीं हैं। इसीलिए गलत रक्ताधान (ट्रांसफ्यूज़न) खतरनाक हो सकता है।",
    learn_s2_summary: "लाल रक्त कोशिकाएं और प्लाज़्मा विपरीत तरीके से काम करते हैं",
    learn_s2_p1: "लाल रक्त कोशिकाओं के लिए, दाता की कोशिकाओं में ऐसा कोई एंटीजन नहीं होना चाहिए जो रोगी में न हो। इसलिए O निगेटिव सभी को रक्त दे सकता है, और AB पॉज़िटिव सभी से रक्त ले सकता है।",
    learn_s2_p2: "प्लाज़्मा के लिए यह उल्टा होता है। दाता के प्लाज़्मा में ऐसी कोई एंटीबॉडी नहीं होनी चाहिए जो रोगी की कोशिकाओं के खिलाफ हो। इसलिए AB प्लाज़्मा हर ABO ग्रुप के लिए उपयुक्त है, और O ग्रुप के रोगी किसी भी ABO ग्रुप से प्लाज़्मा ले सकते हैं। प्लाज़्मा के लिए RhD मायने नहीं रखता।",
    learn_s3_summary: "Rh निगेटिव रक्त",
    learn_s3_p1: "भारत में बहुत कम लोग, लगभग 100 में से 5, Rh निगेटिव होते हैं। Rh निगेटिव रोगियों को सामान्यतः Rh निगेटिव लाल रक्त कोशिकाएं ही दी जानी चाहिए। यह उन लड़कियों और महिलाओं के लिए सबसे ज़्यादा महत्वपूर्ण है जो भविष्य में गर्भवती हो सकती हैं, क्योंकि RhD के संपर्क में आने से आगे की गर्भावस्थाओं पर असर पड़ सकता है।",
    learn_s4_summary: "बॉम्बे ब्लड ग्रुप",
    learn_s4_p1: "यह एक दुर्लभ प्रकार है जिसका पहली बार वर्णन 1952 में मुंबई में हुआ था। इन लोगों में H एंटीजन नहीं होता और सामान्य जांच में वे अक्सर O ग्रुप के रूप में दिखते हैं। वे केवल अन्य बॉम्बे ग्रुप दाताओं से ही रक्त ले सकते हैं। भारत में यह लगभग 10,000 में 1 व्यक्ति में पाया जाता है, और अन्यत्र यह और भी दुर्लभ है।",
    learn_s4_p2: "अगर आपको बताया गया है कि आप बॉम्बे ग्रुप के हैं, तो इसे अपने 'मैं' पेज पर नोट करें और अपना डोनर कार्ड अपने पास रखें।",
    learn_s5_summary: "संपूर्ण रक्त और प्लेटलेट्स",
    learn_s5_p1: "संपूर्ण रक्त आमतौर पर समान ABO और RhD ग्रुप में ही दिया जाता है। प्लेटलेट्स के लिए, समान ABO ग्रुप को प्राथमिकता दी जाती है, लेकिन अस्पताल हर मामले में अलग निर्णय लेते हैं। यह ऐप केवल लाल रक्त कोशिकाओं और प्लाज़्मा को कवर करता है।",
    learn_s6_summary: "भारत में कौन रक्तदान कर सकता है",
    learn_s6_p1: "राष्ट्रीय रक्तदाता दिशानिर्देशों (NBTC, 2017) के अनुसार, दाता की उम्र सामान्यतः 18 से 65 वर्ष के बीच होनी चाहिए (पहली बार दान करने वालों के लिए अधिकतम 60 वर्ष), वजन कम से कम 45 किलोग्राम होना चाहिए, हीमोग्लोबिन कम से कम 12.5 g/dL होना चाहिए, और उस दिन स्वस्थ होना चाहिए।",
    learn_s6_p2: "दो संपूर्ण रक्तदानों के बीच का अंतराल पुरुषों के लिए कम से कम 90 दिन और महिलाओं के लिए 120 दिन होता है। रक्तदान से पहले ब्लड बैंक यह सब जांचता है।",
    learn_s7_summary: "इस पर भरोसा करने से पहले",
    learn_s7_p1: "हर रक्ताधान को देने से पहले लैब में क्रॉस-मैच किया जाता है। इस ऐप का उपयोग जानकारी लेने और दान की योजना बनाने के लिए करें, चिकित्सा संबंधी निर्णय लेने के लिए नहीं।",

    me_name_label: "नाम (वैकल्पिक)",
    me_group_legend: "आपका ब्लड ग्रुप",
    me_sex_label: "लिंग (दान के अंतराल के लिए उपयोग)",
    me_sex_prefer_not: "बताना नहीं चाहते",
    me_sex_male: "पुरुष",
    me_sex_female: "महिला",
    me_last_label: "पिछला संपूर्ण रक्तदान (वैकल्पिक)",
    me_notes_label: "टिप्पणियाँ (वैकल्पिक)",
    me_notes_placeholder: "उदाहरण के लिए: बॉम्बे ग्रुप, डोनर कार्ड नंबर",
    me_save_btn: "विवरण सहेजें",
    me_delete_btn: "मेरा विवरण हटाएं",
    me_privacy: "आपका विवरण केवल इस फ़ोन पर सहेजा जाता है। इस ऐप की इंटरनेट तक पहुंच नहीं है, इसलिए कुछ भी एकत्र या साझा नहीं किया जाता।",
    me_default_heading: "आपका ग्रुप",
    me_status_choose_group: "सहेजने के लिए अपना ब्लड ग्रुप चुनें।",
    me_status_saved: "विवरण इस फ़ोन पर सहेजा गया।",
    me_status_error: "सहेजा नहीं जा सका। जांचें कि फ़ोन में पर्याप्त स्टोरेज है और फिर से कोशिश करें।",
    me_status_deleted: "विवरण हटा दिया गया।",
    me_delete_confirm: "इस फ़ोन से आपका सहेजा गया विवरण हटाएं?",

    nav_check: "जांच",
    nav_chart: "चार्ट",
    nav_learn: "जानें",
    nav_me: "मैं",
    nav_sections_aria: "अनुभाग",

    label_selected_group: "चयनित ग्रुप",
    label_your_group: "आपका ग्रुप",
    label_can_give_to: "{product} किसे दे सकते हैं",
    label_can_get_from: "{product} किससे ले सकते हैं",
    label_count: "8 में से {n}",
    label_blood_group_aria: "ब्लड ग्रुप {group}",

    product_name_rbc: "रक्त",
    product_name_plasma: "प्लाज़्मा",

    universal_donor_note_rbc: "सबको दे सकते हैं",
    universal_recipient_note_rbc: "सबसे ले सकते हैं",
    universal_donor_note_plasma: "हर ग्रुप के लिए उपयुक्त",
    universal_recipient_note_plasma: "किसी भी ग्रुप से ले सकते हैं",
    diagram_universal_donor_title: "सार्वभौमिक दाता",
    diagram_universal_recipient_title: "सार्वभौमिक प्राप्तकर्ता",
    diagram_caption: "{donor} सभी आठ ग्रुप को {unit} दे सकता है। सभी आठ ग्रुप {recipient} को {unit} दे सकते हैं।",

    pair_verdict_yes: "हां। {donor} {product} एक {patient} रोगी को दिया जा सकता है।",
    pair_verdict_no: "नहीं। {donor} {product} एक {patient} रोगी को नहीं दिया जाना चाहिए।",

    next_donation_can_now: "आप अभी फिर से संपूर्ण रक्तदान कर सकते हैं, {days} दिन के अंतराल के आधार पर{note}।",
    next_donation_from: "आप {date} से फिर से संपूर्ण रक्तदान कर सकते हैं{note}।",
    next_donation_female_note: " (यदि आप महिला हैं तो अंतिम दान के 120 दिन बाद)"
  },

  gu: {
    app_title: "બ્લડ ગ્રુપ ગાઇડ",
    product_blood: "લોહી",
    product_plasma: "પ્લાઝ્મા",
    product_group_aria: "લોહીનું ઉત્પાદન",
    lang_select_aria: "ભાષા",

    check_lead: "કોણ કોને આપી શકે અને કોની પાસેથી લઈ શકે તે જોવા માટે બ્લડ ગ્રુપ પસંદ કરો.",
    test_donor_patient_heading: "દાતા અને દર્દીની ચકાસણી કરો",
    donor_label: "દાતા",
    patient_label: "દર્દી",

    chart_lead_rbc: "તમામ આઠ ગ્રુપ માટે લોહીની અનુકૂળતા.",
    chart_lead_plasma: "તમામ આઠ ગ્રુપ માટે પ્લાઝ્મા અનુકૂળતા. પ્લાઝ્મા માટે RhD મહત્વનું નથી.",
    chart_note: "પંક્તિઓ દાતા છે, સ્તંભો દર્દી છે. ટપકું એટલે અનુકૂળ.",
    chart_sr_donor_patient: "દાતા, દર્દી",
    chart_compatible_sr: "અનુકૂળ",
    chart_not_compatible_sr: "અનુકૂળ નથી",

    learn_s1_summary: "તમારું બ્લડ ગ્રુપ શું નક્કી કરે છે",
    learn_s1_p1: "તમારા લાલ રક્તકણોમાં A એન્ટિજન, B એન્ટિજન, બંને (AB) અથવા કોઈ નહીં (O) હોઈ શકે છે. RhD નામનું એક અલગ એન્ટિજન નક્કી કરે છે કે તમે પોઝિટિવ છો કે નેગેટિવ: જો તે તમારામાં હોય તો તમે પોઝિટિવ છો, ન હોય તો નેગેટિવ.",
    learn_s1_p2: "તમારા પ્લાઝ્મામાં કુદરતી રીતે એવા A અથવા B એન્ટિજન સામે એન્ટિબોડી હોય છે જે તમારામાં નથી. એટલે જ ખોટું ટ્રાન્સફ્યુઝન જોખમી બની શકે છે.",
    learn_s2_summary: "લાલ રક્તકણો અને પ્લાઝ્મા વિરુદ્ધ રીતે કામ કરે છે",
    learn_s2_p1: "લાલ રક્તકણો માટે, દાતાના કણોમાં એવું કોઈ એન્ટિજન ન હોવું જોઈએ જે દર્દીમાં ન હોય. તેથી O નેગેટિવ દરેકને લોહી આપી શકે છે, અને AB પોઝિટિવ દરેક પાસેથી લોહી લઈ શકે છે.",
    learn_s2_p2: "પ્લાઝ્મા માટે આ ઊલટું છે. દાતાના પ્લાઝ્મામાં એવી કોઈ એન્ટિબોડી ન હોવી જોઈએ જે દર્દીના કણો સામે હોય. તેથી AB પ્લાઝ્મા દરેક ABO ગ્રુપ માટે યોગ્ય છે, અને O ગ્રુપના દર્દીઓ કોઈપણ ABO ગ્રુપમાંથી પ્લાઝ્મા લઈ શકે છે. પ્લાઝ્મા માટે RhD મહત્વનું નથી.",
    learn_s3_summary: "Rh નેગેટિવ લોહી",
    learn_s3_p1: "ભારતમાં બહુ ઓછા લોકો, લગભગ 100માંથી 5, Rh નેગેટિવ હોય છે. Rh નેગેટિવ દર્દીઓને સામાન્ય રીતે Rh નેગેટિવ લાલ રક્તકણો જ આપવા જોઈએ. આ ખાસ કરીને એવી છોકરીઓ અને મહિલાઓ માટે મહત્વનું છે જેઓ ભવિષ્યમાં ગર્ભવતી બની શકે છે, કારણ કે RhDના સંપર્કમાં આવવાથી ભવિષ્યની ગર્ભાવસ્થા પર અસર થઈ શકે છે.",
    learn_s4_summary: "બોમ્બે બ્લડ ગ્રુપ",
    learn_s4_p1: "આ એક દુર્લભ પ્રકાર છે જેનું સૌપ્રથમ વર્ણન 1952માં મુંબઈમાં થયું હતું. આ લોકોમાં H એન્ટિજન નથી હોતું અને સામાન્ય તપાસમાં તેઓ ઘણી વાર O ગ્રુપ તરીકે દેખાય છે. તેઓ ફક્ત અન્ય બોમ્બે ગ્રુપ દાતાઓ પાસેથી જ લોહી લઈ શકે છે. ભારતમાં આશરે 10,000માંથી 1 વ્યક્તિમાં આ જોવા મળે છે, અને અન્યત્ર તે વધુ દુર્લભ છે.",
    learn_s4_p2: "જો તમને કહેવામાં આવ્યું હોય કે તમે બોમ્બે ગ્રુપના છો, તો તેને તમારા 'હું' પેજ પર નોંધો અને તમારું ડોનર કાર્ડ તમારી પાસે રાખો.",
    learn_s5_summary: "સંપૂર્ણ લોહી અને પ્લેટલેટ્સ",
    learn_s5_p1: "સંપૂર્ણ લોહી સામાન્ય રીતે સમાન ABO અને RhD ગ્રુપમાં આપવામાં આવે છે. પ્લેટલેટ્સ માટે, સમાન ABO ગ્રુપને પ્રાધાન્ય આપવામાં આવે છે, પરંતુ હોસ્પિટલો દરેક કેસ પ્રમાણે નિર્ણય લે છે. આ એપ ફક્ત લાલ રક્તકણો અને પ્લાઝ્માને આવરી લે છે.",
    learn_s6_summary: "ભારતમાં કોણ રક્તદાન કરી શકે",
    learn_s6_p1: "રાષ્ટ્રીય રક્તદાતા માર્ગદર્શિકા (NBTC, 2017) મુજબ, દાતાની ઉંમર સામાન્ય રીતે 18 થી 65 વર્ષની હોવી જોઈએ (પ્રથમ વખતના દાતાઓ માટે વધુમાં વધુ 60 વર્ષ), વજન ઓછામાં ઓછું 45 કિગ્રા હોવું જોઈએ, હિમોગ્લોબિન ઓછામાં ઓછું 12.5 g/dL હોવું જોઈએ, અને તે દિવસે તંદુરસ્ત હોવું જોઈએ.",
    learn_s6_p2: "બે સંપૂર્ણ રક્તદાન વચ્ચેનો ગાળો પુરુષો માટે ઓછામાં ઓછો 90 દિવસ અને મહિલાઓ માટે 120 દિવસ છે. રક્તદાન પહેલાં બ્લડ બેંક આ બધું ચકાસે છે.",
    learn_s7_summary: "આના પર આધાર રાખતા પહેલાં",
    learn_s7_p1: "દરેક ટ્રાન્સફ્યુઝન આપતા પહેલાં લેબમાં ક્રોસ-મેચ કરવામાં આવે છે. આ એપનો ઉપયોગ જાણવા અને દાનનું આયોજન કરવા માટે કરો, તબીબી નિર્ણયો લેવા માટે નહીં.",

    me_name_label: "નામ (વૈકલ્પિક)",
    me_group_legend: "તમારું બ્લડ ગ્રુપ",
    me_sex_label: "લિંગ (દાનના ગાળા માટે વપરાય છે)",
    me_sex_prefer_not: "કહેવા માંગતા નથી",
    me_sex_male: "પુરુષ",
    me_sex_female: "સ્ત્રી",
    me_last_label: "છેલ્લું સંપૂર્ણ રક્તદાન (વૈકલ્પિક)",
    me_notes_label: "નોંધો (વૈકલ્પિક)",
    me_notes_placeholder: "ઉદાહરણ તરીકે: બોમ્બે ગ્રુપ, ડોનર કાર્ડ નંબર",
    me_save_btn: "વિગતો સાચવો",
    me_delete_btn: "મારી વિગતો કાઢી નાખો",
    me_privacy: "તમારી વિગતો ફક્ત આ ફોન પર જ સાચવવામાં આવે છે. આ એપને ઇન્ટરનેટ ઍક્સેસ નથી, તેથી કંઈ પણ એકત્રિત કે શેર કરવામાં આવતું નથી.",
    me_default_heading: "તમારું ગ્રુપ",
    me_status_choose_group: "સાચવવા માટે તમારું બ્લડ ગ્રુપ પસંદ કરો.",
    me_status_saved: "વિગતો આ ફોન પર સાચવવામાં આવી.",
    me_status_error: "સાચવી શકાયું નહીં. તપાસો કે ફોનમાં પૂરતી સ્ટોરેજ છે અને ફરી પ્રયાસ કરો.",
    me_status_deleted: "વિગતો કાઢી નાખવામાં આવી.",
    me_delete_confirm: "આ ફોન પરથી તમારી સાચવેલી વિગતો કાઢી નાખવી છે?",

    nav_check: "તપાસો",
    nav_chart: "ચાર્ટ",
    nav_learn: "જાણો",
    nav_me: "હું",
    nav_sections_aria: "વિભાગો",

    label_selected_group: "પસંદ કરેલ ગ્રુપ",
    label_your_group: "તમારું ગ્રુપ",
    label_can_give_to: "{product} કોને આપી શકાય",
    label_can_get_from: "{product} કોની પાસેથી લઈ શકાય",
    label_count: "8માંથી {n}",
    label_blood_group_aria: "બ્લડ ગ્રુપ {group}",

    product_name_rbc: "લોહી",
    product_name_plasma: "પ્લાઝ્મા",

    universal_donor_note_rbc: "બધાને આપી શકે",
    universal_recipient_note_rbc: "બધા પાસેથી લઈ શકે",
    universal_donor_note_plasma: "દરેક ગ્રુપ માટે યોગ્ય",
    universal_recipient_note_plasma: "કોઈપણ ગ્રુપમાંથી લઈ શકે",
    diagram_universal_donor_title: "સાર્વત્રિક દાતા",
    diagram_universal_recipient_title: "સાર્વત્રિક પ્રાપ્તકર્તા",
    diagram_caption: "{donor} તમામ આઠ ગ્રુપને {unit} આપી શકે છે. તમામ આઠ ગ્રુપ {recipient}ને {unit} આપી શકે છે.",

    pair_verdict_yes: "હા. {donor} {product} એક {patient} દર્દીને આપી શકાય છે.",
    pair_verdict_no: "ના. {donor} {product} એક {patient} દર્દીને ન આપવું જોઈએ.",

    next_donation_can_now: "તમે હવે ફરીથી સંપૂર્ણ રક્તદાન કરી શકો છો, {days} દિવસના ગાળાના આધારે{note}.",
    next_donation_from: "તમે {date}થી ફરીથી સંપૂર્ણ રક્તદાન કરી શકો છો{note}.",
    next_donation_female_note: " (જો તમે સ્ત્રી હો તો છેલ્લા દાન પછી 120 દિવસ)"
  },

  te: {
    app_title: "బ్లడ్ గ్రూప్ గైడ్",
    product_blood: "రక్తం",
    product_plasma: "ప్లాస్మా",
    product_group_aria: "రక్త ఉత్పత్తి",
    lang_select_aria: "భాష",

    check_lead: "ఏ గ్రూప్ ఎవరికి ఇవ్వగలదు మరియు ఎవరి నుండి తీసుకోగలదో చూడటానికి బ్లడ్ గ్రూప్‌ని ఎంచుకోండి.",
    test_donor_patient_heading: "దాత మరియు రోగిని పరీక్షించండి",
    donor_label: "దాత",
    patient_label: "రోగి",

    chart_lead_rbc: "అన్ని ఎనిమిది గ్రూపులకు రక్త అనుకూలత.",
    chart_lead_plasma: "అన్ని ఎనిమిది గ్రూపులకు ప్లాస్మా అనుకూలత. ప్లాస్మాకు RhD ముఖ్యం కాదు.",
    chart_note: "వరుసలు దాతలు, నిలువు వరుసలు రోగులు. చుక్క అంటే అనుకూలం.",
    chart_sr_donor_patient: "దాత, రోగి",
    chart_compatible_sr: "అనుకూలం",
    chart_not_compatible_sr: "అనుకూలం కాదు",

    learn_s1_summary: "మీ బ్లడ్ గ్రూప్‌ను ఏది నిర్ణయిస్తుంది",
    learn_s1_p1: "మీ ఎర్ర రక్త కణాలలో A యాంటిజన్, B యాంటిజన్, రెండూ (AB) లేదా ఏదీ లేకపోవడం (O) ఉండవచ్చు. RhD అనే ప్రత్యేక యాంటిజన్ మీరు పాజిటివ్ లేదా నెగటివ్ అని నిర్ణయిస్తుంది: ఇది మీలో ఉంటే మీరు పాజిటివ్, లేకపోతే నెగటివ్.",
    learn_s1_p2: "మీ ప్లాస్మాలో మీకు లేని A లేదా B యాంటిజన్‌లకు వ్యతిరేకంగా సహజంగా యాంటీబాడీలు ఉంటాయి. అందుకే తప్పు రక్తమార్పిడి ప్రమాదకరం కావచ్చు.",
    learn_s2_summary: "ఎర్ర రక్త కణాలు మరియు ప్లాస్మా వ్యతిరేక విధంగా పనిచేస్తాయి",
    learn_s2_p1: "ఎర్ర రక్త కణాల విషయంలో, దాత కణాలలో రోగికి లేని యాంటిజన్ ఉండకూడదు. అందుకే O నెగటివ్ అందరికీ రక్తం ఇవ్వగలదు, మరియు AB పాజిటివ్ అందరి నుండి రక్తం తీసుకోగలదు.",
    learn_s2_p2: "ప్లాస్మా విషయంలో ఇది తారుమారు అవుతుంది. దాత ప్లాస్మాలో రోగి కణాలకు వ్యతిరేకంగా యాంటీబాడీలు ఉండకూడదు. అందుకే AB ప్లాస్మా ప్రతి ABO గ్రూప్‌కు సరిపోతుంది, మరియు O గ్రూప్ రోగులు ఏ ABO గ్రూప్ నుండైనా ప్లాస్మా తీసుకోవచ్చు. ప్లాస్మాకు RhD ముఖ్యం కాదు.",
    learn_s3_summary: "Rh నెగటివ్ రక్తం",
    learn_s3_p1: "భారతదేశంలో కేవలం కొద్దిమంది, సుమారు 100కు 5 మంది, Rh నెగటివ్ ఉంటారు. Rh నెగటివ్ రోగులకు సాధారణంగా Rh నెగటివ్ ఎర్ర రక్త కణాలే ఇవ్వాలి. భవిష్యత్తులో గర్భం దాల్చే అమ్మాయిలు మరియు మహిళలకు ఇది చాలా ముఖ్యం, ఎందుకంటే RhD బహిర్గతం భవిష్యత్ గర్భధారణలను ప్రభావితం చేయవచ్చు.",
    learn_s4_summary: "బాంబే బ్లడ్ గ్రూప్",
    learn_s4_p1: "1952లో ముంబైలో మొదటిసారి వివరించబడిన ఒక అరుదైన రకం ఇది. ఈ వ్యక్తులలో H యాంటిజన్ ఉండదు మరియు సాధారణ పరీక్షలలో తరచుగా O గ్రూప్‌గా కనిపిస్తారు. వారు ఇతర బాంబే గ్రూప్ దాతల నుండి మాత్రమే రక్తం తీసుకోగలరు. భారతదేశంలో ఇది సుమారు 10,000 మందిలో 1 మందికి ఉంటుందని అంచనా, మరియు ఇతర ప్రాంతాలలో ఇది మరింత అరుదు.",
    learn_s4_p2: "మీరు బాంబే గ్రూప్ అని చెప్పబడితే, దానిని మీ 'నేను' పేజీలో గమనించండి మరియు మీ దాత కార్డును మీతో ఉంచుకోండి.",
    learn_s5_summary: "పూర్తి రక్తం మరియు ప్లేట్‌లెట్స్",
    learn_s5_p1: "పూర్తి రక్తం సాధారణంగా అదే ABO మరియు RhD గ్రూప్‌లో ఇవ్వబడుతుంది. ప్లేట్‌లెట్స్ కోసం, అదే ABO గ్రూప్‌కు ప్రాధాన్యత ఇవ్వబడుతుంది, కానీ ఆసుపత్రులు ప్రతి సందర్భాన్ని బట్టి నిర్ణయిస్తాయి. ఈ యాప్ ఎర్ర రక్త కణాలు మరియు ప్లాస్మాను మాత్రమే కవర్ చేస్తుంది.",
    learn_s6_summary: "భారతదేశంలో ఎవరు దానం చేయవచ్చు",
    learn_s6_p1: "జాతీయ రక్తదాత మార్గదర్శకాల (NBTC, 2017) ప్రకారం, దాత సాధారణంగా 18 నుండి 65 సంవత్సరాల వయస్సు కలిగి ఉండాలి (మొదటిసారి దానం చేసేవారికి గరిష్టంగా 60 సంవత్సరాలు), కనీసం 45 కిలోల బరువు ఉండాలి, కనీసం 12.5 g/dL హిమోగ్లోబిన్ ఉండాలి, మరియు ఆ రోజు మంచి ఆరోగ్యంతో ఉండాలి.",
    learn_s6_p2: "రెండు పూర్తి రక్తదానాల మధ్య అంతరం పురుషులకు కనీసం 90 రోజులు మరియు మహిళలకు 120 రోజులు. మీరు దానం చేసే ముందు బ్లడ్ బ్యాంక్ వీటన్నింటినీ పరిశీలిస్తుంది.",
    learn_s7_summary: "దీనిపై ఆధారపడే ముందు",
    learn_s7_p1: "ప్రతి రక్తమార్పిడిని ఇచ్చే ముందు ల్యాబ్‌లో క్రాస్-మ్యాచ్ చేస్తారు. ఈ యాప్‌ను తెలుసుకోవడానికి మరియు దానాలను ప్లాన్ చేయడానికి వాడండి, వైద్య నిర్ణయాలు తీసుకోవడానికి కాదు.",

    me_name_label: "పేరు (ఐచ్ఛికం)",
    me_group_legend: "మీ బ్లడ్ గ్రూప్",
    me_sex_label: "లింగం (దాన వ్యవధి కోసం ఉపయోగించబడుతుంది)",
    me_sex_prefer_not: "చెప్పదలచుకోలేదు",
    me_sex_male: "పురుషుడు",
    me_sex_female: "స్త్రీ",
    me_last_label: "చివరి పూర్తి రక్తదానం (ఐచ్ఛికం)",
    me_notes_label: "గమనికలు (ఐచ్ఛికం)",
    me_notes_placeholder: "ఉదాహరణకు: బాంబే గ్రూప్, దాత కార్డు నంబర్",
    me_save_btn: "వివరాలను సేవ్ చేయండి",
    me_delete_btn: "నా వివరాలను తొలగించండి",
    me_privacy: "మీ వివరాలు ఈ ఫోన్‌లో మాత్రమే సేవ్ చేయబడతాయి. ఈ యాప్‌కు ఇంటర్నెట్ యాక్సెస్ లేదు, కాబట్టి ఏదీ సేకరించబడదు లేదా పంచుకోబడదు.",
    me_default_heading: "మీ గ్రూప్",
    me_status_choose_group: "సేవ్ చేయడానికి మీ బ్లడ్ గ్రూప్‌ని ఎంచుకోండి.",
    me_status_saved: "వివరాలు ఈ ఫోన్‌లో సేవ్ చేయబడ్డాయి.",
    me_status_error: "సేవ్ చేయలేకపోయాము. ఫోన్‌లో తగినంత నిల్వ ఉందో చూసి మళ్ళీ ప్రయత్నించండి.",
    me_status_deleted: "వివరాలు తొలగించబడ్డాయి.",
    me_delete_confirm: "ఈ ఫోన్ నుండి మీ సేవ్ చేసిన వివరాలను తొలగించాలా?",

    nav_check: "చెక్",
    nav_chart: "చార్ట్",
    nav_learn: "నేర్చుకోండి",
    nav_me: "నేను",
    nav_sections_aria: "విభాగాలు",

    label_selected_group: "ఎంచుకున్న గ్రూప్",
    label_your_group: "మీ గ్రూప్",
    label_can_give_to: "{product}ను ఎవరికి ఇవ్వగలరు",
    label_can_get_from: "{product}ను ఎవరి నుండి తీసుకోగలరు",
    label_count: "8లో {n}",
    label_blood_group_aria: "బ్లడ్ గ్రూప్ {group}",

    product_name_rbc: "రక్తం",
    product_name_plasma: "ప్లాస్మా",

    universal_donor_note_rbc: "అందరికీ ఇవ్వగలదు",
    universal_recipient_note_rbc: "అందరి నుండి తీసుకోగలదు",
    universal_donor_note_plasma: "ప్రతి గ్రూప్‌కు సరిపోతుంది",
    universal_recipient_note_plasma: "ఏ గ్రూప్ నుండైనా తీసుకోగలదు",
    diagram_universal_donor_title: "సార్వత్రిక దాత",
    diagram_universal_recipient_title: "సార్వత్రిక గ్రహీత",
    diagram_caption: "{donor} అన్ని ఎనిమిది గ్రూపులకు {unit} ఇవ్వగలదు. అన్ని ఎనిమిది గ్రూపులు {recipient}కు {unit} ఇవ్వగలవు.",

    pair_verdict_yes: "అవును. {donor} {product}ను {patient} రోగికి ఇవ్వవచ్చు.",
    pair_verdict_no: "కాదు. {donor} {product}ను {patient} రోగికి ఇవ్వకూడదు.",

    next_donation_can_now: "మీరు ఇప్పుడు మళ్ళీ పూర్తి రక్తదానం చేయవచ్చు, {days} రోజుల వ్యవధి ఆధారంగా{note}.",
    next_donation_from: "మీరు {date} నుండి మళ్ళీ పూర్తి రక్తదానం చేయవచ్చు{note}.",
    next_donation_female_note: " (మీరు స్త్రీ అయితే చివరి దానం తర్వాత 120 రోజులు)"
  }
};

const LANG_LOCALE = { en: 'en-IN', hi: 'hi-IN', gu: 'gu-IN', te: 'te-IN' };

/* ---------- Helper ---------- */

const I18n = {
  lang: 'en',
  setLang(l) {
    this.lang = I18N[l] ? l : 'en';
    document.documentElement.lang = this.lang;
  },
  t(key, vars) {
    let str = (I18N[this.lang] && I18N[this.lang][key]) || I18N.en[key] || key;
    if (vars) {
      Object.keys(vars).forEach(k => {
        str = str.split('{' + k + '}').join(vars[k]);
      });
    }
    return str;
  },
  locale() {
    return LANG_LOCALE[this.lang] || 'en-IN';
  }
};
