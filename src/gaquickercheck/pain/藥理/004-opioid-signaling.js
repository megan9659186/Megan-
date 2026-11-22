{
    group: "疼痛路徑:藥理",
    id: "opioid-signaling",
    updated: "2026-11-22",
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
        ]
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
