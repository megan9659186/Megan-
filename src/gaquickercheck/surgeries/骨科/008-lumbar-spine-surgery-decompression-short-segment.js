{
    checked: "2026-08-07",
    specialty:"骨科",
    name:"腰椎手術(減壓／短節融合)",
    en:"Lumbar Spine Surgery (Decompression / Short-segment Fusion)",
    summary:{ position:"Prone (Wilson frame / bolsters)", posType:"prone", time:"參考捷格手術排程時間", blood:"中(融合較多)", airway:"GA / ETT(Non-kinking ETT)" },
    preop:[
      "紀錄神經功能基準值(肌力、感覺)→ 供術後比對",
      "共病與出血風險:抗凝／抗血小板藥物、狹窄程度、肥胖、OSA(阻塞性睡眠呼吸中止)",
      "退化性狹窄多屬高齡族群;心肺功能與衰弱(frailty)評估"
    ],
    airway:[
      "<b class='w'>俯臥後氣管內管(ETT)固定與位置確認極重要</b>(翻身後易移位／脫出)",
      "俯臥使氣道壓上升、功能餘量下降;臉部與眼睛受壓保護",
      "翻身前後聽診雙側呼吸音、確認 ETCO₂ 波形"
    ],
    monitor:[
      "標準監測;短節減壓失血少,長節或融合加<b>動脈導管</b>",
      "置放內固定或有神經風險時採<b>神經監測(MEP／SSEP)</b><button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden><b>MEP(運動誘發電位,motor evoked potential)</b>刺激運動皮質、記錄肢體肌肉反應,監測皮質脊髓運動路徑;<b>SSEP(體感誘發電位,somatosensory evoked potential)</b>刺激周邊神經、記錄至皮質,監測後索感覺路徑。兩者可即時偵測脊髓／神經根受牽拉或缺血。重點:<b>鹵素類吸入麻醉與肌肉鬆弛劑會壓抑訊號(尤其 MEP)</b>,故監測期間常改用全靜脈麻醉並避免持續肌鬆。</span>",
      "肌鬆與神經監測協調:<b>MEP／EMG 監測期間不可使用肌鬆劑</b>;本院脊椎手術<b>不使用 succinylcholine(SCC)</b>——困難插管時採 <b>awake intubation(清醒插管)</b>,或以<b>高劑量 rocuronium 插管、再用 sugammadex 逆轉</b>以恢復可監測狀態<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>為什麼這樣安排:MEP／EMG 靠肌肉電位判讀,肌鬆劑會壓掉訊號,所以監測期間不給肌鬆。傳統會用短效的 succinylcholine 插管(插完很快退、可儘早開始監測),但本院脊椎手術不使用。遇到困難插管時,可選<b>清醒插管(awake intubation)</b>,或先給<b>高劑量 rocuronium</b> 取得良好插管條件、插管後立刻以 <b>sugammadex</b> 快速逆轉,讓肌力恢復而不影響後續神經監測。</span>",
      "脊髓在約 L1／L2 高度結束於<b>脊髓圓錐(conus medullaris)</b>,再往下只剩馬尾(cauda equina)神經根;<b>多數腰椎手術正落在這個只有神經根、沒有脊髓的區段</b> → 可用 <b>free EMG(自由肌電圖)</b> 即時監測個別神經根是否受刺激<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>為什麼腰椎特別會用到 free EMG:MEP／SSEP 監測的是脊髓由上到下的長傳導路徑,但腰椎手術常在脊髓已經結束、只剩神經根(馬尾)的高度進行,長徑路訊號在這裡幫助有限。<b>free EMG(自由肌電圖)</b>作法不同——把針電極放在特定神經根所支配的肌肉上,持續聽這些肌肉有沒有自發放電(不是主動給刺激再看反應,那叫誘發電位)。一旦手術器械牽拉或壓到某條神經根,對應肌肉就會突然放電、機器即時示警,提醒術者該神經根有受傷風險。</span>",
      "俯臥時 NIBP／動脈壓感測器歸零於心臟高度"
    ],
    hemo:[
      "俯臥使腹部懸空(Wilson frame／墊塊)→ 降腹內壓、減少硬脊膜外靜脈叢充血與出血<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>俯臥時若腹部受壓,腹內壓(IAP)上升會壓迫下腔靜脈,血液改經硬脊膜外靜脈叢回流 → 該叢充血、術野出血增加。使用 Wilson frame 或胸／髂骨墊(bolster)讓腹部懸空,可降低腹內壓、減少靜脈叢充血與失血,同時利於通氣。</span>",
      "<b>膀胱一脹,術中出血就會變多</b>——腹壓會透過沒有瓣膜的硬脊膜外靜脈叢傳到手術部位;所以預計開超過 2 小時的刀,先放導尿管、順便盯著尿量",
      "融合手術:<b>抗纖溶劑(TXA 10 mg/kg bolus → 2 mg/kg/hr,腎功能不全減量)＋術中血液回收(cell salvage)</b>減少失血與異體輸血;限制性輸血目標 Hb 7–8 g/dL<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>失血嚴重度隨融合節數、年齡 >50、肥胖、腫瘤手術、俯臥腹內壓上升與經椎弓截骨而增加。<b>腫瘤(尤其轉移)手術須留意:惡性細胞播散疑慮使血液回收受限,且部分病人處於高凝狀態 → 抗纖溶劑使用需權衡。</b></span>",
      "維持平均動脈壓(MAP)接近術前基準以保脊髓與視神經灌流;<b class='w'>不再建議以控制性降壓(induced hypotension)減少失血</b><button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>硬脊膜外靜脈叢壓與骨內壓是脊椎手術失血的主要決定因素,而兩者<b>與動脈血壓無關</b> → 刻意降壓對減少失血助益有限,卻增加脊髓缺血(尤其嚴重狹窄或置入器械／撐開時)、POVL、急性腎損傷與心肌／神經損傷風險。需要時以 phenylephrine 等升壓藥維持 MAP。</span>"
    ],
    intraop:[
      "<b class='w'>前位腰椎入路(ALIF／人工椎間盤)鄰近大血管:髂血管／下腔靜脈損傷可致大出血</b> → 需血管外科即時支援;後位 PLIF／TLIF 失血通常較少,但硬脊膜外靜脈出血可能難以止血<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden><b>PLIF(後位腰椎椎體間融合)</b>經後方椎板切除減壓、移除椎間盤置入植入物,再以椎弓根螺釘與連桿固定;<b>TLIF</b>採較外側入路、肌肉損傷較少。<b>前位入路(ALIF、人工椎間盤置換)</b>用於退化性椎間盤病變,但須經腹部／腹膜後、鄰近髂血管與下腔靜脈 → 血管損傷可能大量出血,應預先安排血管外科支援,極端情況曾需主動脈夾閉。</span>",
      "俯臥擺位:手臂外展 ≤90°、置於身體平面前並輕度內旋以降低臂神經叢傷害;保護肘部尺神經與所有受壓點;MEP 監測時於臼齒間放置 bite block 防咬傷舌／唇",
      "俯臥並發症:眼壓上升／術後視力喪失(POVL)、周邊神經壓迫、壓瘡",
      "<b>長時間俯臥腹部受壓 → 罕見肝／胰缺血</b>:不明原因代謝性酸中毒、乳酸上升、低血糖、ALT 上升、血小板消耗 → 儘早改回仰臥並加護監測<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>俯臥時腹部持續受壓可能損及內臟血流。文獻有俯臥脊椎手術後肝或胰功能障礙的零星報告(含致命個案),典型於手術約 2 小時後出現心血管不穩、代謝性酸中毒、乳酸上升、血糖下降、ALT 上升與消耗性血小板低下。處置為支持療法並儘早恢復仰臥、轉加護照護;預防重點是讓腹部懸空、避免局部受壓。</span>",
      "積極保溫、定期檢查受壓點與眼睛"
    ],
    drug:[
      "有神經監測時偏好 <b>TIVA(全靜脈麻醉,propofol±remifentanil)</b>,限制吸入麻醉與肌鬆以保留訊號<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>神經監測(尤其 MEP)對麻醉深度敏感:鹵素類吸入麻醉與肌鬆會壓抑波幅。改以 propofol 為主的全靜脈麻醉(TIVA)搭配 remifentanil,可在維持足夠麻醉深度下保留可判讀訊號;肌鬆僅於插管時使用或全程避免。</span>",
      "Multimodal 止痛:術前 <b>gabapentin／pregabalin</b> 可降圍術期與慢性疼痛(pregabalin 生體可用率較穩定)、ketamine 為有用輔劑;搭配 acetaminophen、必要時鴉片",
      "區域技術:後位手術之<b>豎脊肌平面阻滯(ESP block)</b>證據不一;<b>前位腰椎</b>手術可考慮雙側 TAP／腰方肌(QL)阻滯、傷口局部浸潤"
    ],
    emergence:[
      "甦醒後評估神經功能;smooth extubation、避免嗆咳致內固定張力",
      "<b>拔管分級</b>:1–2 節俯臥減壓通常可常規拔管;<b class='w'>俯臥 >4 小時者翻仰臥後評估顏面水腫</b>,顯著者延遲拔管、頭高 30°、必要時經換管器(tube changer)拔管;失血 >2000 mL、大量輸液或前後聯合入路 → 保留插管入 ICU<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>長時間俯臥加上大量輸液會造成氣道與顏面水腫,拔管後阻塞風險升高。拔管決策須綜合手術時長、失血與輸液量、術式與病人因素(肥胖、睡眠呼吸中止)。即使短期術後機械通氣也與術後肺炎風險上升相關,故在安全前提下仍盡量爭取拔管。</span>"
    ],
    postop:[
      "Multimodal 止痛;<b>NSAID</b> 對骨癒合影響之證據尚無定論,術後 48 小時內於無不癒合風險因子(抽菸、長期 NSAID)且與外科討論下可使用;<b class='w'>即刻術後大劑量／長期使用須謹慎(硬脊膜外血腫壓迫脊髓之顧慮)</b>",
      "早期活動(ERAS 脊椎路徑);監測傷口血腫與新出現之神經功能缺損"
    ],
    flags:[
      "術後視力喪失(POVL／缺血性視神經病變)",
      "前位入路大血管(髂血管／下腔靜脈)損傷致大出血",
      "硬脊膜撕裂／腦脊髓液漏、神經根損傷",
      "俯臥壓傷、周邊神經病變、腹部受壓致肝／胰缺血(罕見)",
      "長時間俯臥＋大量輸液致氣道／顏面水腫、拔管後阻塞",
      "傷口血腫壓迫馬尾／神經"
    ],
    refs:[
      "Feix, B., & Sturgess, J. (2014). Anaesthesia in the prone position. Continuing Education in Anaesthesia Critical Care & Pain, 14(6), 291–297.",
      "Kwee, M. M., Ho, Y.-H., & Rozen, W. M. (2015). The prone position during surgery and its complications: A systematic review and evidence-based guidelines. International Surgery, 100(2), 292–303.",
      "Apfelbaum, J. L., Roth, S., Connis, R. T., et al. (2019). Practice advisory for perioperative visual loss associated with spine surgery 2019: An updated report by the American Society of Anesthesiologists Task Force on Perioperative Visual Loss. Anesthesiology, 130(1), 12–30.",
      "Nowicki, R. W. A. (2014). Anaesthesia for major spinal surgery. Continuing Education in Anaesthesia, Critical Care & Pain, 14(4), 147–152.",
      "Brown, M. J. (2026). Anesthesia for elective spine surgery in adults. In UpToDate. Wolters Kluwer. (Topic last updated June 19, 2026)."
    ],
    collapse:true
  }