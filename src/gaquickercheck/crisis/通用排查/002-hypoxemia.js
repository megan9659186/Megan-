{
    group: "通用排查",
    id: "hypoxemia",
    name: "低血氧",
    en: "Hypoxemia",
    key: "100% 氧氣、改手動通氣 → 照順序查:氧氣 → 管子 → 肺 → 循環;插管後 10 分鐘內先想食道插管",
    recog: [
      "SpO₂ 下降超過 5%,或 &lt;90%",
      "術中可能看到深色血液;麻醉下對低血氧的心跳呼吸反應被壓抑",
      "晚期:心搏過緩、心律不整、低血壓、心跳停止",
      "## 先排除假警報(但不要先假設是假的)",
      "電燒干擾、低體溫或末梢循環差、探頭位置或外界光線、指甲油、亞甲藍等染劑",
      "## 常見原因",
      "吸入氧濃度不足(供氧或迴路問題)、通氣不足、肺塌陷、單側支氣管插管、支氣管痙攣、吸入、氣胸、肺水腫、肺栓塞",
      "心輸出量下降也會讓血氧下降"
    ],
    act: [
      "<b class='w'>通知麻醉主治醫師、Call Help!</b>",
      "<b>FiO₂ 100%、高流量氧氣</b>,確認氧氣分析儀上的濃度真的上升",
      "<b class='w'>插管後 10 分鐘內出現低血氧,先當食道插管處理</b>,除非持續有正常 EtCO₂ 波形,或直接看到管子通過聲門",
      "<b>改手動通氣</b>,感覺肺順應性,確認 EtCO₂ 波形與氣道壓",
      "氣道壓高 → 依高氣道壓卡排查;氣道壓低 → 找漏氣或脫落",
      "聽診兩側並看胸廓起伏:排除單側支氣管插管、支氣管痙攣、氣胸",
      "以抽痰管通過氣管內管,排除扭折或痰栓;分泌物多就積極抽吸,必要時纖維支氣管鏡",
      "確認血氧計:看波形、換探頭位置,但<b>邊處理邊確認</b>",
      "血壓穩定時做肺部復張,並加 PEEP 約 5 cmH₂O",
      "維持循環與血紅素;抽動脈血氣",
      "告知外科:放掉氣腹、恢復平躺、移開壓迫胸腹的拉鉤、暫停骨水泥或擴髓;單肺通氣時讓上側肺恢復通氣",
      "仍未改善:考慮吸入、肺栓塞、氣體栓塞、過敏、肺水腫、甲基血紅素血症、惡性高熱;儘快結束手術並安排加護病房"
    ],
    dose: [
      ["潮氣量", "6–8 mL/kg 預測體重", "依 EtCO₂ 調整呼吸次數"],
      ["PEEP", "約 5 cmH₂O 起", "減少肺塌陷;注意血壓"]
    ],
    avoid: [
      "<b class='w'>不要執著於血氧計是否故障而延誤處理</b>,先當成真的低血氧",
      "不要在血壓不穩時做肺部復張",
      "拔管後的低血氧:別忘了殘餘肌鬆與鴉片類造成的通氣不足"
    ],
    after: [
      "找出原因並記錄;安排胸部 X 光或血氣追蹤",
      "拔管前重新評估氧合與通氣;必要時延後拔管、轉加護病房",
      "神經學評估:嚴重或長時間低血氧可能造成意識改變或延遲甦醒"
    ],
    refs: [
      "Kane, A. D., Kothmann, E., & Giussani, D. A. (2020). Detection and response to acute systemic hypoxia. BJA Education, 20(2), 58–64.",
      "Lumb, A. B. (2019). Why do patients need extra oxygen during a general anaesthetic? BJA Education, 19(2), 37–39.",
      "Chrimes, N., Higgs, A., Hagberg, C. A., et al. (2022). Preventing unrecognised oesophageal intubation: A consensus guideline from the Project for Universal Management of Airways and international airway societies. Anaesthesia, 77(12), 1395–1415.",
      "Goldhaber-Fiebert, S. N., Austin, N., Sultan, E., et al. (2021). Emergency manual: Cognitive aids for perioperative crises (Version 4). Stanford Anesthesia Cognitive Aid Program.",
      "Gaba, D. M., Howard, S. K., & Burden, A. (Eds.). (2026). Crisis management in anesthesiology (3rd ed.). Elsevier."
    ]
  }