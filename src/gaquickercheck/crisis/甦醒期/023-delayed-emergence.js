{
    group: "甦醒期",
    id: "delayed",
    name: "延遲甦醒",
    en: "Delayed Emergence",
    key: "藥物 → 代謝 → 呼吸 → 神經,照順序排查",
    recog: [
      "停止麻醉藥後超過預期時間仍未恢復意識,一般以 15–30 分鐘為開始找原因的門檻",
      "<b>先確認生命徵象、氧合、通氣與體溫</b>,再開始鑑別",
      "<b>藥物</b>:殘留吸入麻醉藥、鴉片、benzodiazepine、殘餘神經肌肉阻斷、術前用藥、酒精或藥物濫用",
      "<b>代謝</b>:低血糖、嚴重高血糖、低鈉或高鈉、高鈣、低體溫、肝腎功能不全、甲狀腺功能低下、敗血症",
      "<b>呼吸</b>:低血氧、高碳酸血症",
      "<b>神經</b>:腦中風、顱內出血、癲癇後狀態、腦水腫、顱內壓上升、氣體栓塞",
      "檢查瞳孔大小與對稱性、有無局部神經學徵象"
    ],
    actNote: "延遲甦醒最怕的是把神經學事件當成藥物殘留而錯過黃金時間;但也不要在排除低血糖與殘餘肌鬆之前就急著送影像。",
    act: [
      "<b class='w'>通知麻醉主治醫師、Call Help!</b>",
      "<b>維持氣道與通氣,不要急著拔管</b>",
      "確認吸入麻醉藥已完全停止,吐氣端濃度接近零;檢查蒸發器與新鮮氣體流量",
      "驗血糖、電解質、血氣,並量測體溫",
      "<b>以定量 TOF 確認肌力恢復</b>,不足就逆轉",
      "體溫維持到 36 °C 以上,低體溫會顯著延長藥物作用",
      "懷疑鴉片過量:naloxone 小量滴定;懷疑 benzodiazepine:flumazenil,但要留意癲癇風險",
      "<b>藥物與代謝原因都排除後仍不醒,立即神經科會診並安排腦部影像</b>"
    ],
    dose: [
      ["Naloxone", "20–40 µg IV,每 2 分鐘依反應滴定", "<b class='w'>不可一次全量推注</b>,會引發劇痛、高血壓、心律不整與肺水腫"],
      ["Flumazenil", "200 µg IV,之後每分鐘 100 µg,總量至 1 mg", "癲癇病史或三環抗憂鬱劑過量者<b class='w'>禁用</b>"],
      ["Sugammadex", "TOF 有二個反應時 2 mg/kg;深度阻斷時 4 mg/kg", "以定量 TOF 判斷,不要憑臨床徵象猜"],
      ["低血糖", "50% 葡萄糖水 20–50 mL IV", "先驗再給,給完追蹤血糖"]
    ],
    avoid: [
      "<b class='w'>不要在排除殘餘肌鬆與低血糖之前就假設是中風</b>",
      "不要在肌力未恢復時拔管,病人可能是清醒但無法動",
      "Naloxone 與 flumazenil 的作用時間都比被逆轉的藥短,給了之後要持續觀察是否再度昏睡"
    ],
    after: [
      "延長恢復室或加護病房觀察,確認意識完全恢復再轉出",
      "找到原因並記錄,提供後續麻醉參考",
      "若為神經學事件,依中風流程處理並及早復健介入"
    ],
    refs: [
      "Cascella, M., Bimonte, S., & Di Napoli, R. (2020). Delayed emergence from anesthesia: What we know and how we act. Local and Regional Anesthesia, 13, 195–206.",
      "Thilen, S. R., Weigel, W. A., Todd, M. M., et al. (2023). 2023 American Society of Anesthesiologists practice guidelines for monitoring and antagonism of neuromuscular blockade: A report by the American Society of Anesthesiologists Task Force on Neuromuscular Blockade. Anesthesiology, 138(1), 13–41.",
      "Murphy, G. S., & Brull, S. J. (2022). Quantitative neuromuscular monitoring and postoperative outcomes: A narrative review. Anesthesiology, 136(2), 345–361."
    ]
  }