{
    topic: "疼痛路徑",
    group: "藥理",
    id: "opioid-signaling",
    updated: "2026-11-24",
    name: "類鴉片受體訊號",
    en: "Classical Opioid Receptor Signaling",
    key: "Gi/o 蛋白:cAMP↓、K⁺ 外流(過極化)、Ca²⁺ 進不來(少放傳導物質)→ 痛訊號傳不上去",
    sections: [
      {
        h: "受體與內生性配體",
        table: {
          head: ["受體", "主要內生性配體", "作用", "副作用 / 臨床"],
          rows: [
            ["μ(MOR)", "β-endorphin、enkephalin", "強效止痛(脊髓與腦)", "呼吸抑制、欣快與成癮、便秘、噁心、搔癢、瞳孔縮小"],
            ["δ(DOR)", "enkephalin", "止痛、調節情緒", "臨床藥物少"],
            ["κ(KOR)", "dynorphin", "脊髓止痛、鎮靜、利尿", "煩躁不安(dysphoria)、幻覺;nalbuphine、butorphanol 為 κ agonist / μ antagonist"],
            ["NOP(ORL1)", "nociceptin / orphanin FQ", "依部位可止痛或抗止痛", "不被 naloxone 拮抗"]
          ]
        }
      },
      {
        h: "細胞內發生什麼事",
        items: [
          "四種受體都是 <b>G 蛋白偶聯受體(GPCR)</b>,接 <b>Gi/Go</b>",
          "藥物結合 → Gα 把 GDP 換成 GTP → 分成 <b>Gαi/o</b> 與 <b>Gβγ</b> 兩部分",
          "<b>Gαi 抑制 adenylyl cyclase → cAMP↓</b>(cAMP 與周邊痛覺過敏有關)",
          "<b>Gβγ 打開 GIRK(Kir3)K⁺ 通道</b> → K⁺ 外流、細胞膜過極化 → 不容易產生動作電位(主要在突觸後神經元)",
          "<b>Gβγ 關閉電壓型 Ca²⁺ 通道</b> → Ca²⁺ 進不來,突觸小泡無法融合 → glutamate、substance P 釋放減少(主要在突觸前末梢)",
          "淨效果:<b>突觸前少放、突觸後難以興奮</b> → 疼痛訊號傳遞被抑制"
        ]
      },
      {
        h: "作用在哪裡",
        items: [
          "<b>脊髓背角</b>:第一級神經元末梢(突觸前)與第二級神經元(突觸後)→ intrathecal / epidural opioid 的作用位置",
          "<b>PAG / RVM</b>:抑制 GABA 中間神經元 → 解除對下行抑制神經元的煞車 → 活化下行抑制",
          "<b>周邊</b>:發炎組織的感覺神經末梢也表現 opioid 受體"
        ],
        diagram: { caption: "Opioid 在疼痛路徑上的作用位置(字母為作用位置)。點圖上的英文字可看說明。", legend: [
          { k:"A", c:"#6F8F7A", t:"脊髓背角", d:"突觸前:第一級末梢 Ca²⁺ 進不來 → glutamate、SP 少放;突觸後:第二級神經元 K⁺ 外流、過極化 → intrathecal / epidural opioid 的作用位置" },
          { k:"B", c:"#6E7FA3", t:"腦幹 PAG / RVM", d:"抑制 GABA 中間神經元 → 解除煞車 → 下行抑制增強(④ 調控)" },
          { k:"C", c:"#B5716A", t:"周邊", d:"發炎組織的感覺神經末梢也有 opioid 受體" }
        ], svg: `<svg class="pain-map" viewBox="0 30 1226 1190" width="100%" role="img" xmlns="http://www.w3.org/2000/svg"><title>類鴉片作用位置</title><desc>疼痛傳導四步驟圖上標示 opioid 的三個作用位置:A 脊髓背角、B 腦幹 PAG 與 RVM、C 周邊。</desc><image href="@@IMG:pain-pathway.webp:webp@@" x="0" y="0" width="1226" height="1283"/><line x1="296" y1="166" x2="372" y2="166" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><line x1="790" y1="184" x2="996" y2="184" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="1010" y="172" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">知覺</text><line x1="196" y1="524" x2="432" y2="524" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="288" y="568" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">傳遞</text><line x1="740" y1="526" x2="952" y2="526" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="966" y="514" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">調控</text><line x1="716" y1="998" x2="956" y2="998" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="970" y="988" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">傳遞</text><line x1="634" y1="1194" x2="892" y2="1194" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><text x="906" y="1182" text-anchor="start" font-family="'Noto Sans TC',sans-serif" font-size="44" font-weight="700" fill="#2E6B3A" stroke="#FFFFFF" stroke-width="8" paint-order="stroke">轉導</text><line x1="408" y1="1110" x2="530" y2="1110" stroke="#2E6B3A" stroke-width="3" stroke-dasharray="8 6" opacity="0.75"/><circle cx="700" cy="668" r="62" fill="none" stroke="#6F8F7A" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="700" cy="668" r="38" fill="#6F8F7A" stroke="#FFFFFF" stroke-width="6"/><text x="700" y="682" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">A</text><circle cx="585" cy="272" r="62" fill="none" stroke="#6E7FA3" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="585" cy="272" r="38" fill="#6E7FA3" stroke="#FFFFFF" stroke-width="6"/><text x="585" y="286" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">B</text><circle cx="582" cy="1100" r="62" fill="none" stroke="#B5716A" stroke-width="7" stroke-dasharray="14 9" opacity="0.9"/><circle cx="582" cy="1100" r="38" fill="#B5716A" stroke="#FFFFFF" stroke-width="6"/><text x="582" y="1114" text-anchor="middle" font-family="'Noto Sans TC',sans-serif" font-size="42" font-weight="700" fill="#FFFFFF">C</text><rect class="tip-hot" x="288" y="120" width="92" height="48" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'brain')" onkeydown="if(event.key==='Enter')painTip(this,'brain')"/><rect class="tip-hot" x="740" y="130" width="360" height="56" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'perception')" onkeydown="if(event.key==='Enter')painTip(this,'perception')"/><rect class="tip-hot" x="140" y="474" width="300" height="104" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'transmission2')" onkeydown="if(event.key==='Enter')painTip(this,'transmission2')"/><rect class="tip-hot" x="690" y="474" width="366" height="54" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'modulation')" onkeydown="if(event.key==='Enter')painTip(this,'modulation')"/><rect class="tip-hot" x="662" y="946" width="398" height="54" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'transmission1')" onkeydown="if(event.key==='Enter')painTip(this,'transmission1')"/><rect class="tip-hot" x="576" y="1140" width="420" height="56" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'transduction')" onkeydown="if(event.key==='Enter')painTip(this,'transduction')"/><rect class="tip-hot" x="400" y="1064" width="136" height="48" rx="10" fill="transparent" tabindex="0" role="button" aria-label="說明" onclick="painTip(this,'stimulus')" onkeydown="if(event.key==='Enter')painTip(this,'stimulus')"/></svg>` }
      },
      {
        h: "μ 受體副作用的機轉",
        items: [
          "<b>欣快與成癮</b>:VTA 的 GABA 中間神經元被抑制 → 對 dopamine 神經元的抑制解除 → dopamine 釋放增加(抑制『抑制者』的雙重否定)",
          "<b class='w'>呼吸抑制</b>:抑制腦幹呼吸節律神經元 → 呼吸變慢、變淺,過量時停止呼吸;是鴉片類過量死亡的主因",
          "κ 的煩躁不安:可能與 nucleus accumbens 的 dopamine 減少、p38 MAPK 訊號改變有關,機轉仍不明確"
        ]
      },
      {
        h: "耐受與拮抗",
        items: [
          "長期或高劑量使用 → 受體磷酸化、<b>β-arrestin</b> 結合 → 受體內化、去敏感化 → <b>耐受</b>",
          "長期抑制後 adenylyl cyclase 代償性上調 → 停藥時 cAMP 反彈 → <b>戒斷症狀</b>",
          "<b>Naloxone</b>:競爭性拮抗,作用時間比多數 opioid 短 → 拮抗後要持續觀察是否再度呼吸抑制"
        ]
      }
    ],
    refs: [
      "McDonald, J., & Lambert, D. G. (2022). Drug–receptor interactions in anaesthesia. BJA Education, 22(1), 20–25.",
      "Yam, M. F., Loh, Y. C., Tan, C. S., et al. (2018). General pathways of pain sensation and the major neurotransmitters involved in pain regulation. International Journal of Molecular Sciences, 19(8), 2164.",
      "Cummings, C., Cancemi, C., Bajpai, R., & Abakah, C. (2019). General opioid signaling; Mu receptors; Kappa receptors [Course project website]. Opioid Peptides, Tufts University. https://sites.tufts.edu/opioidpeptides/pathways-and-receptors/"
    ]
  }
