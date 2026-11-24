{
    topic: "疼痛路徑",
    group: "臨床應用",
    id: "multimodal-sites",
    updated: "2026-11-24",
    name: "多模式止痛:藥物作用在哪裡",
    en: "Multimodal Analgesia by Site of Action",
    key: "在疼痛路徑的不同位置同時下手 → 每種藥用較少劑量、副作用較少",
    sections: [
      {
        h: "依作用位置整理",
        table: {
          head: ["作用位置", "藥物 / 技術", "機轉"],
          rows: [
            ["周邊(受傷組織)", "NSAID、COX-2 抑制劑;傷口局部浸潤", "減少 PG → 減少周邊敏化;阻斷受器去極化"],
            ["周邊神經 / 神經叢", "局部麻醉:神經阻斷、plane block(PECS、ESP、TAP 等)", "阻斷 Na⁺ 通道 → 訊號無法傳到脊髓"],
            ["脊髓背角", "Opioid(全身或脊髓腔內)、ketamine、magnesium、α2 agonist、gabapentinoid", "突觸前減少 glutamate / SP 釋放、突觸後過極化;阻斷 NMDA;α2δ 減少 Ca²⁺ 內流"],
            ["腦幹下行路徑", "Opioid、tramadol、tapentadol、SNRI(duloxetine)", "增強 PAG → RVM 下行抑制;增加背角的 NE / 5-HT"],
            ["大腦", "全身麻醉、paracetamol、dexmedetomidine", "抑制意識與疼痛知覺;paracetamol 主要為中樞作用,機轉仍未完全清楚"]
          ]
        },
        diagram: { caption: "多模式止痛:在疼痛路徑的不同位置同時下手(字母為作用位置)。點圖上的英文字可看說明。", legend: [
          { k:"A", c:"#B5716A", t:"受傷組織(① 轉導)", d:"NSAID、COX-2 抑制劑;傷口局部浸潤" },
          { k:"B", c:"#C39A5B", t:"周邊神經 / 神經叢(② 傳遞)", d:"局部麻醉:神經阻斷、plane block(PECS、ESP、TAP 等)" },
          { k:"C", c:"#6F8F7A", t:"脊髓背角", d:"Opioid(全身或脊髓腔內)、ketamine、magnesium、α2 agonist、gabapentinoid" },
          { k:"D", c:"#6E7FA3", t:"腦幹下行路徑(④ 調控)", d:"Opioid、tramadol、tapentadol、SNRI(duloxetine)→ 背角 NE / 5-HT↑" },
          { k:"E", c:"#8C6E9A", t:"大腦(③ 知覺)", d:"全身麻醉、paracetamol(中樞作用)、dexmedetomidine" }
        ], svg: `<svg class="pain-map" viewBox="0 30 1226 1190" width="100%" role="img" xmlns="http://www.w3.org/2000/svg"><title>多模式止痛作用位置</title><desc>疼痛傳導四步驟圖上標示多模式止痛藥物的作用位置:A 受傷組織、B 周邊神經、C 脊髓背角、D 下行路徑、E 大腦。</desc><image href="@@IMG:pain-pathway.webp:webp@@" x="0" y="0" width="1226" height="1283"/><line x1="296" y1="166" x2="372" y2="166" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><line x1="790" y1="184" x2="996" y2="184" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="1010" y="172" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">知覺</text><line x1="196" y1="524" x2="432" y2="524" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="288" y="568" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">傳遞</text><line x1="740" y1="526" x2="952" y2="526" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="966" y="514" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">調控</text><line x1="716" y1="998" x2="956" y2="998" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="970" y="988" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">傳遞</text><line x1="634" y1="1194" x2="892" y2="1194" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="906" y="1182" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">轉導</text><line x1="408" y1="1110" x2="530" y2="1110" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><circle cx="582" cy="1100" r="62" fill="none" stroke="#B5716A" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="582" cy="1100" r="38" fill="#B5716A" stroke="#FFFFFF" stroke-width="6"/><text x="582" y="1114" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">A</text><circle cx="962" cy="905" r="62" fill="none" stroke="#C39A5B" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="962" cy="905" r="38" fill="#C39A5B" stroke="#FFFFFF" stroke-width="6"/><text x="962" y="919" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">B</text><circle cx="700" cy="668" r="62" fill="none" stroke="#6F8F7A" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="700" cy="668" r="38" fill="#6F8F7A" stroke="#FFFFFF" stroke-width="6"/><text x="700" y="682" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">C</text><circle cx="676" cy="395" r="62" fill="none" stroke="#6E7FA3" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="676" cy="395" r="38" fill="#6E7FA3" stroke="#FFFFFF" stroke-width="6"/><text x="676" y="409" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">D</text><circle cx="470" cy="150" r="62" fill="none" stroke="#8C6E9A" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="470" cy="150" r="38" fill="#8C6E9A" stroke="#FFFFFF" stroke-width="6"/><text x="470" y="164" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">E</text><rect class="tip-hot" x="288" y="120" width="92" height="48" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'brain')" onkeydown="if(event.key==='Enter')painTip(this,'brain')"/><rect class="tip-hot" x="740" y="130" width="360" height="56" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'perception')" onkeydown="if(event.key==='Enter')painTip(this,'perception')"/><rect class="tip-hot" x="140" y="474" width="300" height="104" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'transmission2')" onkeydown="if(event.key==='Enter')painTip(this,'transmission2')"/><rect class="tip-hot" x="690" y="474" width="366" height="54" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'modulation')" onkeydown="if(event.key==='Enter')painTip(this,'modulation')"/><rect class="tip-hot" x="662" y="946" width="398" height="54" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'transmission1')" onkeydown="if(event.key==='Enter')painTip(this,'transmission1')"/><rect class="tip-hot" x="576" y="1140" width="420" height="56" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'transduction')" onkeydown="if(event.key==='Enter')painTip(this,'transduction')"/><rect class="tip-hot" x="400" y="1064" width="136" height="48" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'stimulus')" onkeydown="if(event.key==='Enter')painTip(this,'stimulus')"/></svg>` }
      },
      {
        h: "臨床應用重點",
        items: [
          "<b>基本盤</b>:paracetamol + NSAID(無禁忌時)→ 再依手術加上區域阻斷或局部浸潤",
          "<b>鴉片類作為救援</b>:多模式止痛的目的之一是減少 opioid 用量與其副作用(呼吸抑制、PONV、腸蠕動變慢、痛覺過敏)",
          "<b>鴉片耐受或大手術</b>:考慮加上 ketamine 或 α2 agonist",
          "<b>神經病變性痛成分</b>(神經受損、截肢、長期疼痛):gabapentinoid、SNRI 較有幫助,傳統止痛藥效果差",
          "<b class='w'>Tramadol 與 SSRI / SNRI、methylene blue 併用 → serotonin syndrome 風險</b>",
          "各手術的具體止痛組合,見各台手術卡的『術後照護』與文獻"
        ]
      }
    ],
    refs: [
      "Yam, M. F., Loh, Y. C., Tan, C. S., et al. (2018). General pathways of pain sensation and the major neurotransmitters involved in pain regulation. International Journal of Molecular Sciences, 19(8), 2164.",
      "McDonald, J., & Lambert, D. G. (2022). Drug–receptor interactions in anaesthesia. BJA Education, 22(1), 20–25.",
      "Bannister, K., Patel, R., & Hughes, S. (2025). The descending modulation of pain. Pain, 166(11S), S55–S59."
    ]
  }
