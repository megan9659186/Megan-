{
    checked: "2026-08-07",
    specialty:"胸腔外科",
    name:"達文西機器人胸腔手術",
    en:"Robotic-Assisted Thoracic Surgery (RATS / da Vinci)",
    summary:{ position:"Lateral decubitus", posType:"lateral", time:"參考捷格手術排程時間", blood:"中", airway:"ETGA / DLT・單肺通氣(OLV)・CVC + Flowtrac" },
    preop:[
      "病人選擇同肺葉切除:肺功能(PFT、DLCO)、運動耐受度、預測術後肺功能;戒菸、心臟評估",
      "相較傳統 VATS,機器人器械自由度高、傷口小;但常需 CO₂ 灌注建立<b>capnothorax</b>(人工二氧化碳氣胸)、手術與 docking(機器對接)時間較長 → 對<b class='w'>心肺儲備差</b>者仍須審慎評估",
      "術前與外科團隊確認 docking 方位、port(器械孔)配置與<b class='w'>緊急轉開胸(conversion)動線</b>"
    ],
    airway:[
      "<b>肺隔離</b>:左側雙腔管(DLT)為首選;或以 Fiber 精準置放之支氣管阻塞器(blocker)",
      "<b class='w'>docking 後病人幾乎無法接近,任何氣道處理都困難</b> → 擺好側臥、docking 前務必以 Fiber 再次確認 DLT 最終位置並牢固固定;採<b>透明頭部覆單(clear head drape)</b>可於術中直視病人臉部<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>機器人手臂與器械塔在 docking(對接到病人身上)後,會把病人團團圍住,麻醉團隊常被推到病人腳側或側邊,離氣道很遠。這代表一旦 DLT 移位或需要重新抽痰、調整,處理起來非常不便,甚至得先請外科<b>undock(退出對接)</b>才能靠近。因此所有『擺位後才會發生的移位』都要在 docking 前先解決:擺成側臥、把手術床調到定位後,用 Fiber 再看一次 DLT,確認深度、確認兩側都能通氣,再確實固定管路。</span>",
      "<b class='w'>需足夠肌鬆(深度神經肌肉阻斷)以確保病人完全不動</b>:器械在胸腔內時,病人若體動或咳嗽,鄰近大血管與肺可能被撕裂<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>一般手術病人稍微動一下多半無妨,但機器人手術不同:剛性的器械被鎖定在固定支點上,深入胸腔操作。此時病人若因肌鬆不足而<b>橫膈抽動、咳嗽或體動</b>,器械與病人之間會產生相對位移,可能劃傷肺動脈、主動脈或肺實質 → 大出血。所以要維持<b>深度神經肌肉阻斷</b>並以定量 TOF 監測,確保整段手術病人紋風不動;直到 undock、器械完全退出胸腔後才考慮讓肌力回復。</span>",
      "CO₂ 灌注使患側肺塌陷更完全、視野更好;但同時帶來血流動力學影響(見 hemo)"
    ],
    monitor:[
      "標準 + <b>動脈管</b>(連續血壓、OLV 低氧與高碳酸之血氣追蹤)",
      "<b class='w'>兩條大口徑靜脈導管</b>:大血管鄰近操作,警覺難以壓迫止血之出血",
      "<b>置放 CVC</b>:利於給藥、輸注血管活性藥,並協助評估 capnothorax 對循環的影響"
    ],
    hemo:[
      "<b class='w'>CO₂ 灌注(capnothorax)→ 胸內壓上升、靜脈回流下降 → 低血壓、心輸出下降</b>;<b>右胸灌注時影響更明顯</b>(易壓迫右心房與腔靜脈)<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>為了把塌陷的肺推離術野、看得更清楚,外科會把 CO₂ 打進胸膜腔,形成人工氣胸(capnothorax)。胸膜腔平時是負壓,灌氣後變成正壓,會像從外面壓迫一樣把<b>心臟與大靜脈(腔靜脈)</b>壓扁 → 回到心臟的血變少(靜脈回流下降)→ 心輸出與血壓跟著掉。右胸的縱膈構造(右心房、上下腔靜脈)更貼近,所以<b>右側灌注時血壓掉得更兇</b>。處理原則:請外科<b>降低灌注壓與流速</b>、補充輸液、必要時給升壓劑;若嚴重,先暫停灌注讓壓力釋放。</span>",
      "<b>CO₂ 要由外科緩慢、逐步灌注,不要一口氣大量打入</b>:一般在胸腔內建立約 5–10 cmH₂O 的正壓,壓迫肺、壓低橫膈以改善視野;<b class='w'>壓力越高,心臟與大靜脈被壓得越扁、靜脈回流掉得越多,就越容易低血壓與心搏過緩</b>,對心室功能差或血容不足者影響更明顯",
      "<b class='w'>張力性 capnothorax(tension capnothorax)</b>:突發或過快灌注 → 縱膈血管受壓致嚴重低血壓、胸膜牽張引發迷走性心搏過緩 → <b>首要處置為立即停灌並解除氣胸</b>,再以輸液、升壓劑、atropine 支持<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>把 capnothorax 想成腹腔鏡的『氣腹』搬到胸腔:壓力若失控累積,就成了<b>張力性氣胸的二氧化碳版</b>。典型畫面是灌注開始或加壓時,血壓驟降(收縮壓可掉到很低)、心跳可能因迷走反射而過慢、末梢 CO₂ 先升後因心輸出崩跌而驟降、患側呼吸音變小。處置順序要果斷:①請外科<b>立刻停止灌注、打開閥門洩壓</b>(解除氣胸是根本);②輸液擴容;③低血壓給升壓劑、心搏過緩給抗膽鹼藥(如 atropine);④必要時退出對接(undock)。穩定前不要糾結於找其他原因。</span>",
      "CO₂ 吸收 → 高碳酸血症與酸中毒,長時間手術更明顯 → 增加分鐘通氣量代償(受 OLV 限制,常採允許性高碳酸)"
    ],
    intraop:[
      "保護性肺通氣:低潮氣量(約 5–6 mL/kg 理想體重)、氣道壓限制約 30 cmH₂O、允許性高碳酸(可容忍至 pH 約 7.25;<b class='w'>顱內壓升高者不宜</b>——高碳酸使腦血管擴張,恐惡化顱內壓)",
      "<b class='w'>docking 後失去接近病人的機會、機器手臂又無順應性</b>:導管、監測、氣道皆於 docking 前完成並確認;<b class='w'>手術床鎖定後不可再移動</b>(病人或床面移動而手臂不動 → 器械傷及肺與大血管);預先與團隊約定<b>緊急 undock 流程</b>",
      "擺位與機器手臂:患側手臂常需大幅後伸以讓出空間 → <b class='w'>臂神經叢(brachial plexus)牽張受傷風險</b>;警覺機器手臂壓迫頭頸/上肢之壓砸傷,受壓處確實皮膚保護貼保護",
      "縱膈與大血管(主動脈、肺動脈)鄰近操作;<b class='w'>難控制之大出血 → 緊急 undock、轉開胸</b>",
      "<b>RATS 是全團隊手術</b>:主刀在遠端 console 操作,術前 briefing 須明確分配各角色(含專責 docking / undocking 者)與緊急分工;<b class='w'>主刀不在檯邊 → 緊急止血有兩段內建延遲</b>,務必事先演練<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>傳統手術遇到大出血,主刀當下就能出手;但 RATS 的主刀坐在遠端 console、沒有刷手上檯,器械又是機器手臂。一旦發生機器器械壓不住的大出血,搶救路徑會多出兩段延遲:①要先把機器<b>安全 undock、移離病人</b>才能靠近;②主刀還要<b>刷手、走到檯邊</b>才能開胸止血。這兩段在災難性出血時分秒關鍵,所以團隊必須<b>事先演練、模擬</b>整套 undock 與轉開胸流程,並在術前 briefing 就把誰負責 undock、誰遞器械、誰幫主刀著袍分配清楚;中途換人要完整交班。</span>",
      "<b>長時間手術的常規設置</b>:置放導尿管(短小 VATS 常不需);<b>間歇性氣動加壓靴(IPC)列為必要</b>,預防靜脈栓塞並促進靜脈回流",
      "<b>主動保溫</b>:長時間手術加上 CO₂ 灌注易失溫 → 保溫毯、輸液加溫,維持正常體溫"
    ],
    drug:[
      "TIVA 與吸入麻醉對 OLV 預後無明確優劣;偏好短效藥利早拔管",
      "<b>維持深度神經肌肉阻斷</b>並以定量 TOF 監測;術後以 sugammadex 逆轉、確認完全回復,避免殘餘肌鬆致術後肺部併發症",
      "區域止痛:<b>椎旁阻滯(PVB, paravertebral block)</b>可於置入 port 時即施行,提供全程止痛、降低麻醉需求,長時間手術尤其有利;或用筋膜平面阻滯(前鋸肌、豎脊肌)為 opioid-sparing 選項"
    ],
    emergence:[
      "目標早期拔管;undock 後再處理氣道",
      "回復雙肺並 recruitment(再擴張);拔管前確認<b>肌鬆完全逆轉(定量 TOF)</b>與殘餘 CO₂ 已代償"
    ],
    postop:[
      "微創但取檢體仍需撐開 → 仍建議<b>良好急性止痛(PVB/筋膜平面)</b>以利深呼吸、咳嗽、早期動員",
      "胸管照護、肺復張、呼吸治療",
      "監測<b>皮下氣腫</b>(CO₂ 灌注後可能出現)與殘餘氣胸"
    ],
    flags:[
      "張力性 capnothorax → 循環衰竭",
      "OLV 頑固性低氧、高碳酸血症",
      "DLT / blocker 移位(docking 後難處理)",
      "臂神經叢損傷、機器手臂壓砸傷",
      "大血管出血 → 緊急 undock、轉開胸",
      "心律不整(AF 常見)"
    ],
    refs:[
      "McCall, P., Steven, M., & Shelley, B. (2019). Anaesthesia for video-assisted and robotic thoracic surgery. BJA Education, 19(12), 405–411.",
      "Pauli, H., Eladawy, M., & Park, J. (2019). Anaesthesia for robotic thoracic surgery. Annals of Cardiothoracic Surgery, 8(2), 263–268.",
      "Batchelor, T. J. P., Rasburn, N. J., Abdelnour-Berchtold, E., et al. (2019). Guidelines for enhanced recovery after lung surgery: Recommendations of the Enhanced Recovery After Surgery (ERAS) Society and the European Society of Thoracic Surgeons (ESTS). European Journal of Cardio-Thoracic Surgery, 55, 91–115."
    ],
    collapse:true
  }