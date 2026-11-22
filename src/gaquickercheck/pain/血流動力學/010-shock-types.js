{
    group: "血流動力學",
    id: "shock-types",
    updated: "2026-11-22",
    name: "休克分類速查",
    en: "Types of Shock",
    key: "看 CO、SVR、CVP 三個方向,先猜出休克類型,再對因處理",
    sections: [
      { h: "互動判讀:像哪一種休克?", widget: "shock-match" },
      {
        h: "各類型比較",
        table: {
          head: ["類型", "常見原因", "HR", "CO", "SVR", "CVP / PAOP", "末梢", "處置"],
          rows: [
            ["低血容性", "出血、脫水", "↑", "↓", "↑", "↓", "冰冷、回填慢", "止血、輸液/輸血"],
            ["心因性", "心肌梗塞、心肌炎、心律不整", "↑", "↓", "↑", "↑", "冰冷、回填慢", "強心劑、謹慎給水、必要時 ECMO"],
            ["阻塞性", "心包填塞、張力性氣胸、肺栓塞", "↑", "↓", "↑", "↑", "冰冷、回填慢", "心包膜穿刺、胸管、肺栓塞處置"],
            ["分佈性", "敗血症、過敏性休克", "↑", "↑ 或 ↓", "↓", "↓", "溫暖或冰冷", "抗生素與輸液;過敏用 epinephrine;升壓劑"],
            ["神經性", "脊髓損傷、創傷性腦損傷", "<b>↓</b>", "↓", "↓", "↓", "溫暖", "輸液、升壓劑、atropine"],
            ["解離型", "一氧化碳、氰化物中毒", "↑", "↑ 或正常", "低到正常", "—", "正常", "解毒劑、高壓氧"]
          ]
        }
      },
      {
        h: "臨床重點",
        items: [
          "<b>乳酸 &gt;2 mmol/L</b> 合併低血壓 → 組織灌流不足的重要指標",
          "床邊超音波可快速區分:心臟收縮差(心因性)、心包積液或右心擴大(阻塞性)、下腔靜脈塌陷(低血容)",
          "<b>神經性休克</b>的特徵是低血壓合併心搏過緩、四肢溫暖,與其他類型的代償性心搏過速不同",
          "解離型休克的問題在『氧氣無法被細胞利用』,血流動力學數字可能看起來正常",
          "真實病人常是<b>混合型</b>(例如敗血症合併心肌抑制),要反覆評估"
        ]
      }
    ],
    refs: [
      "Vincent, J.-L., & De Backer, D. (2013). Circulatory shock. New England Journal of Medicine, 369(18), 1726–1734.",
      "Monnet, X., Marik, P. E., & Teboul, J.-L. (2016). Prediction of fluid responsiveness: An update. Annals of Intensive Care, 6(1), 111.",
      "Edwards, M. R., & Grocott, M. P. W. (2025). Perioperative fluid and electrolyte therapy. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1331–1373.e6). Elsevier."
    ]
  }
