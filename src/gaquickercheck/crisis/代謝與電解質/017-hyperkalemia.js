{
    group: "代謝與電解質",
    id: "hyperk",
    name: "高血鉀",
    en: "Hyperkalemia",
    key: "心電圖有變化 → 先給鈣穩定心肌,再把鉀推回細胞內、排出體外",
    recog: [
      "血鉀 &gt;5.5 mmol/L;多在 &gt;6.5 mmol/L 後出現心電圖變化",
      "心電圖依序:T 波高尖 → PR 延長、P 波消失 → QRS 變寬 → 正弦波 → VF 或 asystole",
      "<b class='w'>鉀上升很快時,第一個表現可能就是 VF 或心跳停止</b>",
      "## 術中常見情境",
      "<b>肝移植再灌流</b>、主動脈或大血管阻斷放開、止血帶放氣",
      "大量輸血(儲存較久的紅血球)、組織壞死或擠壓傷、溶血",
      "腎衰竭、酸中毒、惡性高熱;易感病人給 succinylcholine(燒傷、脊髓損傷、長期臥床、神經肌肉疾病)",
      "## 先排除假性高血鉀",
      "抽血溶血、抽血技術不良、血小板或白血球極高"
    ],
    act: [
      "<b class='w'>通知麻醉主治醫師、Call Help!</b>貼上電擊貼片,持續看心電圖",
      "<b>停止所有含鉀輸液</b>(含乳酸林格氏液);輸血改用較新鮮的血品並經加溫器",
      "<b class='w'>心電圖有變化或血鉀 ≥6.5:立即給鈣</b>,可重複",
      "<b>把鉀推回細胞內</b>:insulin 加葡萄糖、過度換氣、合併酸中毒時給碳酸氫鈉、吸入型 β₂ 促效劑",
      "<b>把鉀排出體外</b>:有尿量者給 furosemide;腎衰竭者緊急聯絡腎臟科安排透析",
      "立即抽血確認(血氣機最快),之後每 30–60 分鐘追蹤血鉀與血糖",
      "心跳停止 → 依心跳停止卡處置,同時給鈣",
      "<b>肝移植</b>:再灌流前先把鉀降下來、備好鈣與升壓藥,並與外科溝通沖洗與放開時機"
    ],
    dose: [
      ["Calcium chloride", "10% CaCl₂ <b>500–1000 mg IV</b>", "中心靜脈給藥為佳;作用快但只維持約 30–60 分鐘"],
      ["Calcium gluconate", "10% <b>30 mL(3 g)IV</b>", "周邊靜脈可用;等同 CaCl₂ 1 g 的鈣量"],
      ["Insulin + 葡萄糖", "Regular insulin <b>10 U IV</b> + 50% 葡萄糖 <b>50 mL</b>", "15–30 分鐘起效;<b class='w'>給完追蹤血糖,低血糖可延遲數小時出現</b>"],
      ["Sodium bicarbonate", "50–100 mEq IV", "合併代謝性酸中毒時"],
      ["Salbutamol 吸入", "經氣管內管 6–10 下", "輔助降鉀,注意心搏過速"],
      ["Furosemide", "20–40 mg IV", "有尿量者"]
    ],
    avoid: [
      "<b class='w'>不要只給降鉀藥而不先給鈣</b>(心電圖有變化時)",
      "<b class='w'>易感病人不要給 succinylcholine</b>",
      "不要用含鉀溶液做大量輸液"
    ],
    after: [
      "insulin 的作用會消退,鉀可能再升:持續追蹤至穩定",
      "監測血糖至少數小時",
      "找出原因並與腎臟科討論後續透析需求"
    ],
    refs: [
      "Chang, W., Xu, M. R., George, A., Kingeter, M., Henson, C. P., Mishra, K., et al. (2025). Hyperkalemia in liver transplantation. Journal of Clinical Anesthesia, 103, 111822.",
      "Clase, C. M., Carrero, J. J., Ellison, D. H., Grams, M. E., Hemmelgarn, B. R., Jardine, M. J., et al. (2020). Potassium homeostasis and management of dyskalemia in kidney diseases: Conclusions from a Kidney Disease: Improving Global Outcomes (KDIGO) Controversies Conference. Kidney International, 97(1), 42–61.",
      "Cao, D., Arens, A. M., Chow, S. L., Easter, S. R., Hoffman, R. S., Lagina, A. T., et al. (2025). Part 10: Adult and pediatric special circumstances of resuscitation: 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation, 152(16_suppl_2), S578–S672.",
      "Gaba, D. M., Howard, S. K., & Burden, A. (Eds.). (2026). Crisis management in anesthesiology (3rd ed.). Elsevier."
    ]
  }