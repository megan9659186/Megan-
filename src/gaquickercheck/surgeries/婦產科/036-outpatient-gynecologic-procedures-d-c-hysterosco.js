{
    specialty:"婦產科",
    name:"門診婦科小手術(子宮擴刮術、子宮鏡)",
    en:"Outpatient Gynecologic Procedures (D&C / Hysteroscopy)",
    updated:"2026-08-10",
    summary:{ position:"Lithotomy", posType:"supine", time:"參考捷格手術排程時間", blood:"少", airway:"GA / LMA 或面罩・共用會陰術野" },
    preop:[
      "多為短時間、當日往返的手術,但<b class='w'>子宮鏡手術有致命併發症,不可以因為時間短就放鬆</b>",
      "確認適應症:診斷性子宮鏡、瘜肉或黏膜下肌瘤切除、子宮內膜切除、流產後或不完全流產的清宮",
      "<b>流產或產後相關清宮</b>:可能出血多、感染甚至凝血功能異常 → 查 Hb、凝血,建立可靠靜脈",
      "與外科確認<b class='w'>使用的灌流液種類、灌流壓與預估手術時間</b>,並事先講好液體差額的通報數字"
    ],
    airway:[
      "短時間手術常採 <b>GA + LMA</b> 或面罩加深度鎮靜;診斷性子宮鏡有時只需鎮靜或子宮頸旁阻斷",
      "手術長、頭低位或吸收風險高者改用 <b>ETT</b>",
      "<b class='w'>術野在會陰、麻醉端離氣道較遠</b> → 固定確實、隨時可以介入"
    ],
    monitor:[
      "標準 ASA 基本監測;<b>持續看呼氣末二氧化碳</b>,即使使用 LMA 或面罩也不能省",
      "<b class='w'>灌流液的進出量與差額由外科與巡迴護理師持續計算並定時報數</b>,麻醉端要主動追問",
      "手術時間拉長或液體差額上升時,考慮抽血檢查鈉離子與滲透壓"
    ],
    hemo:[
      "<b class='w'>擴張子宮頸與牽拉子宮可引起迷走反射</b>,出現心搏過緩、血壓下降甚至短暫心搏停止 → 停止操作、給氧,依主治醫師指示給 atropine",
      "多數失血少;流產後清宮或血管豐富的病灶可能出血較多",
      "外科在子宮頸注射含血管收縮劑的局部麻醉藥時,注意心跳血壓變化"
    ],
    intraop:[
      "<b class='w'>灌流液吸收過多會造成體液超載、低血鈉與低滲透壓</b>,嚴重可致肺水腫、腦水腫與抽搐;使用低張液時風險最高",
      "<b>盡量使用等張生理食鹽水</b>、把灌流壓降到能看清楚的最低值、限制靜脈輸液,並隨時掌握液體差額",
      "<b class='w'>呼氣末二氧化碳突然下降合併去飽和與低血壓 → 先想到氣體栓塞</b><button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>子宮鏡手術時子宮腔被撐開,靜脈竇被切開又處於較高位置,空氣或氣體可能被吸入靜脈。臨床表現是<b>呼氣末二氧化碳突然下降</b>、血氧下降、血壓下降與心律不整,嚴重時心血管崩潰。處置原則:立刻通知外科停止手術、把子宮鏡取出並讓灌流停止、把病人放平或稍微頭低左側臥、給百分之百氧氣、停用氧化亞氮、大量輸液並依麻醉主治醫師指示給升壓藥,必要時開始心肺復甦。預防上要避免重複進出子宮鏡、避免讓子宮位置高於心臟太多、擴張子宮頸時避免動作過大。</span>",
      "子宮穿破時可能傷及腸道或血管;突然出血、腹脹或灌流液大量流失都要警覺"
    ],
    diagram:{ section:"intraop", caption:"子宮鏡灌流液差額的參考通報與停手術門檻(原創示意圖;實際數值依主治醫師與本院規範)", svg:`<svg viewBox="0 0 680 300" width="100%" role="img" xmlns="http://www.w3.org/2000/svg"><title>子宮鏡灌流液差額門檻示意圖</title><desc>示意圖比較等張生理食鹽水與低張灌流液的液體差額門檻,顯示低張液約在七百五十毫升通報、一千毫升停止手術,等張液約在一千五百毫升通報、二千五百毫升停止手術,年長或有心肺共病者門檻應下修。</desc><rect x="8" y="8" width="664" height="284" rx="16" fill="#F4F1EB" stroke="#E0D9CD" stroke-width="1"/><text x="340" y="34" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="600" fill="#423E39">灌流液差額(進入量減去回收量)</text><g transform="translate(40,56)"><text x="0" y="14" font-family="sans-serif" font-size="13" font-weight="600" fill="#8F2B20">低張灌流液(電解質不足)</text><rect x="0" y="26" width="600" height="26" rx="6" fill="#EDE7DC"/><rect x="0" y="26" width="180" height="26" rx="6" fill="#C7B9A4"/><rect x="180" y="26" width="60" height="26" fill="#C0392B"/><line x1="180" y1="20" x2="180" y2="58" stroke="#8F2B20" stroke-width="2"/><line x1="240" y1="20" x2="240" y2="58" stroke="#8F2B20" stroke-width="2"/><text x="180" y="72" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#8F2B20">750 mL 通報</text><text x="252" y="72" text-anchor="start" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#8F2B20">1000 mL 停止手術</text></g><g transform="translate(40,146)"><text x="0" y="14" font-family="sans-serif" font-size="13" font-weight="600" fill="#5E6B68">等張生理食鹽水</text><rect x="0" y="26" width="600" height="26" rx="6" fill="#EDE7DC"/><rect x="0" y="26" width="330" height="26" rx="6" fill="#A9B6AF"/><rect x="330" y="26" width="220" height="26" fill="#C0392B"/><line x1="330" y1="20" x2="330" y2="58" stroke="#8F2B20" stroke-width="2"/><line x1="550" y1="20" x2="550" y2="58" stroke="#8F2B20" stroke-width="2"/><text x="330" y="72" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#5E6B68">1500 mL 通報</text><text x="550" y="72" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#8F2B20">2500 mL 停止手術</text></g><text x="340" y="258" text-anchor="middle" font-family="sans-serif" font-size="12.5" font-weight="600" fill="#8F2B20">年長者或有心肺共病者門檻要往下修</text><text x="340" y="278" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#726B62">差額上升時:抽血看鈉離子、限制靜脈輸液、降低灌流壓、與外科一起決定是否停手術</text></svg>` },
    drug:[
      "多用 propofol 為主的短效方案;維持吸入或 TIVA 皆可",
      "<b class='w'>疑似氣體栓塞時停用氧化亞氮</b>",
      "止痛以 paracetamol 與 NSAID 為主,搭配子宮頸旁阻斷或局部浸潤,盡量少用鴉片",
      "PONV 預防不可省;年輕女性、婦科手術屬高風險"
    ],
    emergence:[
      "多數可迅速甦醒;拔除 LMA 前確認氣道反射恢復",
      "甦醒異常延遲、躁動或抽搐 → <b class='w'>先想到低血鈉與體液超載</b>,立即抽血並通知主治醫師",
      "確認陰道出血量與生命徵象穩定再送恢復室"
    ],
    postop:[
      "恢復室觀察出血量、腹痛與排尿;達標後當日離院",
      "液體差額偏高者延長觀察並追蹤鈉離子、尿量與呼吸狀況",
      "衛教返診時機:大量出血、劇烈腹痛、發燒、呼吸困難或意識改變"
    ],
    flags:[
      "灌流液吸收造成體液超載、低血鈉與低滲透壓(肺水腫、腦水腫、抽搐)",
      "氣體栓塞(呼氣末二氧化碳驟降、低血壓、心血管崩潰)",
      "子宮穿破合併腸道或血管損傷、腹腔內出血",
      "擴張子宮頸引起的迷走反射性心搏過緩",
      "流產後清宮相關:大出血、感染與敗血症"
    ],
    refs:[
      "Elahmedawy, H., & Snook, N. J. (2021). Complications of operative hysteroscopy: An anaesthetist's perspective. BJA Education, 21(7), 240–242.",
      "AAGL. (2013). AAGL practice report: Practice guidelines for the management of hysteroscopic distending media. Journal of Minimally Invasive Gynecology, 20(2), 137–148.",
      "Gan, T. J., Belani, K. G., Bergese, S., Chung, F., Diemunsch, P., Habib, A. S., ... Philip, B. K. (2020). Fourth consensus guidelines for the management of postoperative nausea and vomiting. Anesthesia & Analgesia, 131(2), 411–448."
    ],
    collapse:true
  }