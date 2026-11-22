{
    specialty:"婦產科",
    name:"剖腹產",
    en:"Cesarean Section (CS)",
    updated:"2026-08-14",
    summary:{ position:"Supine · left uterine displacement (LUD)", posType:"supine", time:"參考捷格手術排程時間", blood:"中–多", airway:"SA 或 GA(依緊急度與禁忌分流)" },
    common:[
      "<b>麻醉方式分流</b>:非緊急、無區域麻醉禁忌 → 首選脊髓麻醉;Category 1 緊急、區域麻醉禁忌或阻斷失敗 → 全身麻醉<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>剖腹產緊急度常分四級:<b>Category 1</b> 母體或胎兒立即有生命威脅,要求最短時間內娩出;<b>Category 2</b> 母胎狀況不佳但無立即生命威脅;<b>Category 3</b> 需要提早娩出但目前穩定;<b>Category 4</b> 完全擇期。分級只是溝通用語,實際麻醉方式仍依主治醫師判斷與產科團隊共識。</span>",
      "<b class='w'>孕婦一律視同飽胃(full stomach)</b>;不論選哪一種麻醉,吸引器、喉頭鏡與困難氣道器材都要事先備妥",
      "<b>子宮左傾(LUD)</b>或左側墊高,減少主動脈腔靜脈壓迫;娩出前避免長時間完全仰臥",
      "娩出後給子宮收縮劑:oxytocin 稀釋後緩慢給或以滴注方式,<b class='w'>避免快速 bolus</b>(→ 低血壓、心搏過速、心肌缺血)",
      "常規大口徑靜脈路徑並依醫囑備血;前置或植入性胎盤、多胎、子癇前症等高風險先加開管路、提前知會血庫",
      "新生兒團隊到場;產婦積極保溫(暖毯、輸液加溫)"
    ],
    variants:[
      {
        cls:"v-ga",
        name:"剖腹產(全身麻醉)",
        en:"Cesarean Section (GA)",
        note:"用於 Category 1 緊急、區域麻醉禁忌或阻斷失敗。重點在 RSI、困難氣道與術中知曉。",
        summary:{ position:"Supine · left tilt (LUD) · ramped for induction", posType:"supine", time:"參考捷格手術排程時間", blood:"中–多", airway:"GA / RSI・ETT" },
        preop:[
          "適應症:Category 1 緊急剖腹產、區域麻醉禁忌(凝血異常、血小板過低、穿刺部位感染、產婦拒絕)、脊髓或硬脊膜外阻斷失敗與不足",
          "<b class='w'>視同飽胃</b>;依主治醫師指示給制酸劑(sodium citrate)與 H2 blocker 或 PPI,時間允許時併用 metoclopramide",
          "氣道評估必做:Mallampati、開口度、頸圍、門齒;<b class='w'>孕期黏膜水腫,產程中 Mallampati 分級還會再上升</b>",
          "與產科團隊確認緊急度與時間壓力、預估失血、胎兒狀況,並確認新生兒團隊已到位"
        ],
        airway:[
          "<b class='w'>Rapid sequence induction(RSI)</b>;預充氧要足:密合面罩、100% 氧氣三分鐘,或八次 vital capacity 呼吸",
          "<b>FRC 下降、耗氧上升 → 去飽和極快</b>,誘導前把所有器材與人力先就位",
          "誘導採<b>頭高 ramped 姿勢</b>(耳屏與胸骨切跡同高),改善喉鏡視野並延長安全呼吸暫停時間",
          "<b class='w'>備小一號氣管內管(6.0–7.0)</b>:氣道黏膜水腫、容易出血;避免經鼻操作",
          "第一次插管就用 <b>videolaryngoscope</b>;備 bougie、第二代 supraglottic airway 與 front-of-neck access 器材",
          "cricoid pressure 依主治醫師指示施行;<b>若妨礙通氣或喉鏡視野應先放鬆</b>",
          "插管失敗 → 依產科失敗插管流程處理,<b class='w'>維持氧合優先於再次嘗試插管</b><button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>產科失敗插管流程的核心是<b>先決定要不要叫醒</b>:插管失敗但面罩或聲門上呼吸道能維持氧合時,依母胎狀況決定喚醒產婦改行區域麻醉,或在維持氧合下繼續手術。<b>無法插管也無法通氣</b>時立即進行環甲膜切開等頸前氣道處置,同時考慮以 sugammadex 逆轉肌鬆。整個過程只有一個優先順序:母體氧合。</span>"
        ],
        monitor:[
          "標準監測 + 定量肌鬆監測(TOF)",
          "<b>建議加測麻醉深度</b>:以呼氣末吸入麻醉濃度確認,必要時加 BIS;<b class='w'>產科全麻的術中知曉發生率明顯高於一般手術</b><button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>英國一項針對產科全麻的多中心前瞻研究,以主動、重複詢問的方式收案,發現術中知曉的盛行率約 <b>0.39%,大約每 256 例一例</b>,遠高於一般手術族群。主要原因是誘導到娩出這段時間刻意維持較淺的麻醉、以及緊急情況下的流程壓縮。這也是產科全麻要特別重視麻醉深度監測與術後回訪的理由。</span>",
          "至少一條大口徑靜脈;預期大出血(前置或植入性胎盤)再加一條並考慮動脈導管",
          "體溫、尿量;產後密切記錄出血量"
        ],
        hemo:[
          "<b class='w'>主動脈腔靜脈壓迫會造成低血壓</b>;維持左傾 15 度以上或手動子宮左推",
          "誘導與插管的交感反應會使血壓劇升;<b class='w'>子癇前症產婦要先鈍化</b>,以 labetalol 等短效藥物依主治醫師指示處理,降低腦出血風險",
          "娩出後 oxytocin 稀釋緩慢給;<b class='w'>快速推注會造成低血壓與心搏過速</b>",
          "產後出血備援:第二線子宮收縮劑、tranexamic acid、備血與大量輸血流程"
        ],
        intraop:[
          "娩出前維持足夠麻醉深度,但避免過深壓抑胎兒;<b class='w'>不可為顧慮胎兒而讓麻醉過淺,這是術中知曉的主要來源</b>",
          "娩出前吸入麻醉一般維持 <b>0.75 MAC 以上</b>,以呼氣末濃度確認;<b>本院未配置 nitrous oxide</b>",
          "<b>娩出前避免長效鴉片</b>;若因母體血行不穩或子癇前症需先給,務必事先告知新生兒團隊",
          "娩出後加深麻醉、給鴉片(必要時併 benzodiazepine,依主治醫師指示),並可提高吸入濃度",
          "娩出後注意子宮收縮與出血量,高濃度吸入麻醉會抑制子宮收縮"
        ],
        drug:[
          "誘導:propofol 2–2.5 mg/kg;血行不穩時考慮 etomidate 或 ketamine,依主治醫師指示",
          "肌鬆:<b>rocuronium 1.0–1.2 mg/kg</b>(本院 NMB 標準),<b class='w'>備 sugammadex 16 mg/kg 供無法插管無法通氣時緊急回復</b>",
          "維持:sevoflurane 或 desflurane;<b>本院無 nitrous oxide</b>",
          "子宮收縮劑:oxytocin 為主;必要時 carbetocin、methylergometrine(<b class='w'>高血壓、子癇前症禁用</b>)、carboprost(<b class='w'>氣喘禁用</b>)",
          "抗生素切皮前給;止吐藥依需要"
        ],
        emergence:[
          "<b class='w'>飽胃 → 完全清醒、氣道保護反射恢復、TOF ratio 達 0.9 以上才拔管</b>",
          "以 sugammadex 回復肌鬆(本院標準);拔管前備妥吸引器",
          "採頭高或側躺姿勢拔管;<b class='w'>拔管期是誤吸的高風險時段</b>",
          "拔管後續觀察上呼吸道阻塞與殘餘肌鬆"
        ],
        postop:[
          "多模式止痛:paracetamol 加 NSAID(無禁忌時)為基礎,再加 TAP block 或 quadratus lumborum block;<b>減少鴉片有利哺乳與早期下床</b>",
          "PONV 預防;鴉片使用者注意鎮靜與呼吸速率",
          "子宮收縮、惡露與出血量密切監測",
          "<b class='w'>全身麻醉後務必回訪詢問有無術中記憶</b>;有疑慮者記錄並及早轉介心理支持"
        ],
        flags:[
          "誤吸(Mendelson syndrome)",
          "困難或失敗插管、無法插管也無法通氣",
          "術中知曉(產科全麻風險最高)",
          "產後大出血、子宮收縮乏力",
          "主動脈腔靜脈壓迫造成低血壓",
          "羊水栓塞",
          "新生兒呼吸抑制"
        ],
        refs:[
          "Mushambi, M. C., Kinsella, S. M., Popat, M., et al. (2015). Obstetric Anaesthetists' Association and Difficult Airway Society guidelines for the management of difficult and failed tracheal intubation in obstetrics. Anaesthesia, 70(11), 1286–1306.",
          "Odor, P. M., Bampoe, S., Lucas, D. N., Moonesinghe, S. R., Andrade, J., & Pandit, J. J. (2021). Incidence of accidental awareness during general anaesthesia in obstetrics: A multicentre, prospective cohort study. Anaesthesia, 76(6), 759–776.",
          "Odor, P. M., Bampoe, S., Moonesinghe, S. R., Andrade, J., Pandit, J. J., & Lucas, D. N. (2021). General anaesthetic and airway management practice for obstetric surgery in England: A prospective, multicentre observational study. Anaesthesia, 76(4), 460–471.",
          "Apfelbaum, J. L., Hawkins, J. L., Agarkar, M., et al. (2016). Practice guidelines for obstetric anesthesia: An updated report by the American Society of Anesthesiologists Task Force on Obstetric Anesthesia and the Society for Obstetric Anesthesia and Perinatology. Anesthesiology, 124(2), 270–300."
        ],
        collapse:true
      },
      {
        cls:"v-sa",
        name:"剖腹產(脊髓麻醉)",
        en:"Cesarean Section (SA)",
        note:"非緊急剖腹產的首選。重點在阻斷高度、低血壓處置與鴉片相關副作用。",
        summary:{ position:"Sitting or lateral for block → supine with LUD", posType:"supine", time:"參考捷格手術排程時間", blood:"中", airway:"SA / 自主呼吸(隨時可轉 GA)" },
        preop:[
          "確認無禁忌:產婦拒絕、凝血異常或抗凝藥未停、血小板過低、穿刺部位感染、未矯正的低血容或敗血症、部分心臟疾病(嚴重主動脈瓣狹窄、肺高壓)<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>血小板數值<b>沒有一個絕對安全的門檻</b>可以直接決定能不能做。實務上要合併看數值的<b>趨勢</b>(急速下降比單一低值更危險)、<b>病因</b>(妊娠性血小板低下與 HELLP、DIC 風險不同)以及有沒有<b>臨床出血表現</b>。最終仍依主治醫師判斷。</span>",
          "確認禁食狀況與制酸劑;<b class='w'>即使做區域麻醉仍視同飽胃</b>,因為隨時可能轉全身麻醉",
          "術前解釋:阻斷過程、<b>術中會保持清醒</b>、可能出現牽扯感、噁心、肩痛與發抖",
          "<b class='w'>全身麻醉的器材與藥物必須事前備妥</b>,阻斷失敗或高位阻斷時要能立刻使用"
        ],
        airway:[
          "保留自主呼吸;<b class='w'>面罩、喉頭鏡、氣管內管與吸引器仍須備妥並在手邊</b>",
          "<b class='w'>高位阻斷或全脊髓麻醉</b>的徵象:手部麻木無力、呼吸費力、講話變小聲、噁心躁動、意識改變 → 立即支持通氣、必要時插管並積極升壓<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>局部麻醉藥往頭端擴散過高時,依序阻斷肋間肌(呼吸變淺、咳嗽無力)、上肢(手麻無力)、心臟交感神經 T1–T4(心搏過緩、低血壓),最高影響到腦幹造成意識喪失與呼吸停止,也就是<b>全脊髓麻醉</b>。處置重點是<b>維持氧合與循環</b>:給氧、必要時插管與正壓通氣、升壓劑與輸液、保持子宮左傾,阻斷會隨時間自行退去。</span>",
          "給氧依主治醫師指示;<b>不需要為了提升胎兒氧合而常規給高濃度氧氣</b>"
        ],
        monitor:[
          "標準監測;<b class='w'>阻斷後到娩出前建議每分鐘量一次血壓</b>,穩定後再拉長間隔",
          "以冷覺或針刺確認阻斷高度,目標達 <b>T4</b>;高度不足會有牽扯痛與轉全麻的風險<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>剖腹產不只切皮要不痛,還要蓋住<b>子宮與腹膜被牽拉的內臟感覺</b>。這些內臟傳入神經沿交感神經進入脊髓的範圍大約在 <b>T4 到 T10</b>,所以阻斷高度只到 T10(肚臍)並不夠,常見的做法是確認達到 <b>T4,大約乳頭高度</b>。</span>",
          "至少一條大口徑靜脈;高風險再加",
          "體溫與寒顫觀察;新生兒團隊到場"
        ],
        hemo:[
          "<b class='w'>脊髓麻醉後低血壓非常常見</b>:交感阻斷造成周邊血管阻力下降與靜脈回流減少;目標維持收縮壓在<b>基準值的 90% 以上</b>",
          "<b>建議阻斷完成後即開始 phenylephrine 預防性滴注</b>,再依血壓滴定;比等血壓掉了才補救更能減少噁心嘔吐與胎兒酸血症",
          "同時進行晶體液 <b>co-load</b>(阻斷後立即快速輸注),效果優於事前 pre-load",
          "低血壓合併<b>心搏過緩</b>時改用 ephedrine,或依主治醫師指示給 atropine、glycopyrrolate;<b class='w'>嚴重心搏過緩合併低血壓要警覺可能進展為心跳停止</b>",
          "<b class='w'>阻斷後完全仰臥會加重低血壓</b>,務必維持子宮左傾"
        ],
        intraop:[
          "阻斷擺位:坐姿或側臥;穿刺點取 L3-4 或以下,<b class='w'>不高於 L3-4 以免傷及脊髓圓錐</b>",
          "全程無菌;肥胖或觸摸不到骨性標記時可用超音波定位",
          "<b>牽扯不適與噁心</b>常見:先確認血壓與阻斷高度是否足夠,再依主治醫師指示給靜脈輔助藥",
          "阻斷不全的處理階梯:追加靜脈鴉片或 ketamine → 請外科局部浸潤 → <b class='w'>仍持續疼痛就果斷轉全身麻醉,不可讓產婦忍痛</b>",
          "娩出後積極保溫;發抖常見,注意與寒顫、輸血反應區分"
        ],
        drug:[
          "常見配方(<b>實際劑量依主治醫師指示</b>):0.5% hyperbaric bupivacaine 約 9–12 mg,加 fentanyl 10–25 µg,可再加 morphine 100–150 µg",
          "<b>加入 intrathecal 鴉片</b>可改善術中舒適並延長術後止痛;morphine 約可提供 12–24 小時鎮痛",
          "升壓劑:<b>phenylephrine 為第一線</b>,ephedrine 用於合併心搏過緩;<b class='w'>血管收縮劑與血管擴張劑不可放在同一區</b>",
          "娩出後 oxytocin 稀釋緩慢給;必要時第二線子宮收縮劑",
          "止吐藥與抗癢藥(鴉片相關搔癢)備用"
        ],
        emergence:[
          "手術結束確認血行穩定、出血量與子宮收縮無虞後轉出",
          "轉出前確認升壓劑已停或穩定、疼痛控制到位、阻斷高度開始下降",
          "<b class='w'>中途轉全身麻醉者,依全麻的清醒拔管標準處理</b>"
        ],
        postop:[
          "<b class='w'>給過 intrathecal morphine 者需依規定監測呼吸速率與鎮靜程度,一般 12–24 小時</b>;臨床顯著呼吸抑制罕見(文獻估計約每萬例個位數),但肥胖、睡眠呼吸中止、併用全身鴉片者風險較高",
          "多模式止痛:paracetamol 加 NSAID 為基礎;未給 intrathecal morphine 者可加 TAP block",
          "常見副作用:搔癢、噁心嘔吐、尿滯留",
          "剖腹產術後加速康復:早期進食、早期下床、及早移除導尿管、血栓預防",
          "<b class='w'>注意硬脊膜穿刺後頭痛(PDPH)</b>與任何持續的神經症狀,發現即回報並記錄"
        ],
        flags:[
          "脊髓麻醉後低血壓與心搏過緩,嚴重者可致心跳停止",
          "高位阻斷或全脊髓麻醉造成呼吸衰竭",
          "阻斷不全或失敗而需轉全身麻醉",
          "硬脊膜穿刺後頭痛(PDPH)",
          "Intrathecal 鴉片相關呼吸抑制、搔癢、尿滯留",
          "產後大出血、子宮收縮乏力、羊水栓塞",
          "硬脊膜外血腫或膿瘍(罕見但需及早辨識)"
        ],
        refs:[
          "Kinsella, S. M., Carvalho, B., Dyer, R. A., et al. (2018). International consensus statement on the management of hypotension with vasopressors during caesarean section under spinal anaesthesia. Anaesthesia, 73(1), 71–92.",
          "Bollag, L., Lim, G., Sultan, P., et al. (2021). Society for Obstetric Anesthesia and Perinatology: Consensus statement and recommendations for enhanced recovery after cesarean. Anesthesia & Analgesia, 132(5), 1362–1377.",
          "Sharawi, N., Carvalho, B., Habib, A. S., Blake, L., Mhyre, J. M., & Sultan, P. (2018). A systematic review evaluating neuraxial morphine and diamorphine-associated respiratory depression after cesarean delivery. Anesthesia & Analgesia, 127(6), 1385–1395.",
          "Bauchat, J. R., Weiniger, C. F., Sultan, P., et al. (2019). Society for Obstetric Anesthesia and Perinatology consensus statement: Monitoring recommendations for prevention and detection of respiratory depression associated with administration of neuraxial morphine for cesarean delivery analgesia. Anesthesia & Analgesia, 129(2), 458–474.",
          "Apfelbaum, J. L., Hawkins, J. L., Agarkar, M., et al. (2016). Practice guidelines for obstetric anesthesia: An updated report by the American Society of Anesthesiologists Task Force on Obstetric Anesthesia and the Society for Obstetric Anesthesia and Perinatology. Anesthesiology, 124(2), 270–300."
        ],
        collapse:true
      }
    ],
    refs:[
      "Apfelbaum, J. L., Hawkins, J. L., Agarkar, M., et al. (2016). Practice guidelines for obstetric anesthesia: An updated report by the American Society of Anesthesiologists Task Force on Obstetric Anesthesia and the Society for Obstetric Anesthesia and Perinatology. Anesthesiology, 124(2), 270–300.",
      "Kinsella, S. M., Carvalho, B., Dyer, R. A., et al. (2018). International consensus statement on the management of hypotension with vasopressors during caesarean section under spinal anaesthesia. Anaesthesia, 73(1), 71–92.",
      "Mushambi, M. C., Kinsella, S. M., Popat, M., et al. (2015). Obstetric Anaesthetists' Association and Difficult Airway Society guidelines for the management of difficult and failed tracheal intubation in obstetrics. Anaesthesia, 70(11), 1286–1306."
    ],
    collapse:true
  }