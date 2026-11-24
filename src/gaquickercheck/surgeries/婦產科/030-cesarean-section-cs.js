{
    specialty:"婦產科",
    name:"剖腹產",
    en:"Cesarean Section (CS)",
    updated:"2026-11-24",
    summary:{ position:"Supine · left uterine displacement (LUD)", posType:"supine", time:"參考捷格手術排程時間", blood:"中–多", airway:"SA 或 ETGA(依緊急度與禁忌分流)" },
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
        summary:{ position:"Supine · left tilt (LUD) · ramped for induction", posType:"supine", time:"參考捷格手術排程時間", blood:"中–多", airway:"ETGA / RSI" },
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
        lit:[
          {
            tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 58 章(產科麻醉)",
            preop:[
              "孕婦全麻比區域麻醉多了<b>誤吸、插管失敗與術後通氣不足</b>的風險,緊急時更明顯;近年因 SGA、videolaryngoscope 與困難氣道流程普及,兩者死亡風險差距已縮小",
              "<b class='w'>產科誤吸一旦發生,死亡率約 5–15%</b>;ASA 建議術前給 nonparticulate antacid、H2 blocker 和/或 metoclopramide",
              "全麻常見適應症:胎兒心搏過緩、母體出血或凝血異常、子宮破裂、母體外傷"
            ],
            airway:[
              "RSI:預充氧 → cricoid pressure → propofol + 肌鬆;<b>所有產科全麻都應備妥 videolaryngoscope</b>",
              "VL 與直接喉鏡首次插管成功率相近;<b>預期困難插管或直接喉鏡失敗時,以 VL 為首選</b>",
              "插管失敗 → 第二代 SGA 或面罩加 cricoid pressure 維持氧合;<b class='w'>SGA 不防誤吸,定位是救援</b>",
              "<b class='w'>氣道相關死亡也會發生在甦醒與恢復室</b>,不只在誘導;肥胖、監測不足、緊急情況與經驗不足都增加風險"
            ],
            monitor:[
              "<b>產科全麻術中知曉約 1/256</b>,一般全麻約 1/19,000(用肌鬆時約 1/8,000)",
              "<b class='w'>用過 magnesium sulfate → 非去極化肌鬆作用增強、恢復延長</b> → 以客觀定量肌鬆監測決定劑量與拔管時機"
            ],
            hemo:[
              "Oxytocin 稀釋後長時間給,血行影響小;<b class='w'>大劑量 bolus(> 10 U)→ 明顯血行不穩、噁心、頭痛</b>",
              "Oxytocin 不足時的第二線:methylergonovine 0.2 mg IM(<b class='w'>高血壓、心臟病相對禁忌</b>:冠狀動脈痙攣、肺高壓)、carboprost(PGF2α)0.25 mg IM(<b class='w'>氣喘小心</b>:支氣管痙攣、去飽和)、misoprostol 600–800 µg",
              "<b>Tranexamic acid</b>:確診產後出血後盡早給(3 小時內給可降低出血死亡),臍帶夾後再給;預防性使用證據不足",
              "大量出血:啟動大量輸血流程、早期補 cryoprecipitate / fibrinogen(常偏低)、以 viscoelastic test 引導;cell salvage 加白血球過濾器可用(Rh 陰性者事後給 anti-D)",
              "<b class='w'>前置胎盤合併剖腹史 → 植入性胎盤機率隨剖腹次數上升</b>(0、1、2、≥ 3 次:約 3%、11%、40%、> 60%);術前影像可能漏診,高風險者一律準備大量出血"
            ],
            intraop:[
              "吸入麻醉可降低知曉;懷孕使 MAC 下降,但腦波上吸入麻醉的作用與非孕時相近",
              "臍帶夾後再給鴉片、propofol 或 benzodiazepine,吸入濃度降到約 0.5 MAC(原文含 N₂O,<b>本院無 N₂O</b>)",
              "<b class='w'>只靠高濃度吸入麻醉維持 → 子宮收縮乏力、失血增加</b>",
              "預期娩出前全麻時間長(多次腹部手術沾黏、極度肥胖)→ 事先與產科溝通;新生兒團隊須能協助通氣(吸入麻醉造成的新生兒抑制,以輔助通氣排出)"
            ],
            drug:[
              "誘導前一般避免 lidocaine、fentanyl(減少胎兒暴露);<b>子癇前症或心臟病</b>需穩定血行時,可用 remifentanil 1–2 µg/kg 或 esmolol、labetalol",
              "Propofol 2–2.5 mg/kg 不影響 Apgar;<b>重複或累積大劑量(約 9 mg/kg)會抑制新生兒</b>",
              "Etomidate 0.3 mg/kg 血行影響小,適用血行不穩(噁心嘔吐較多、降低抽搐閾值);ketamine 1–1.5 mg/kg 適合出血低血容,<b class='w'>子癇前症可能造成高血壓</b>",
              "Rocuronium 0.9–1.2 mg/kg 60 秒內可插管,sugammadex 12–16 mg/kg 可快速逆轉;<b>肌鬆劑幾乎不通過胎盤</b>,不影響子宮張力",
              "<b>Sugammadex 用於剖腹產已證實安全有效</b>"
            ],
            postop:[
              "多模式止痛:規律 NSAID + acetaminophen,口服鴉片救援,少用靜脈鴉片;良好止痛有助早期活動、哺乳與減少慢性痛",
              "全麻或不能給 neuraxial morphine 時:TAP 與 QL block 止痛效果相近、皆優於對照;持續傷口浸潤亦可",
              "<b class='w'>TAP block 曾有 LAST 致心跳停止報告</b> → bupivacaine 濃度 ≤ 0.25%、每側 ≤ 20–25 mL、超音波下分次回抽注射"
            ],
            flags:[
              "<b>羊水栓塞</b>:產程中或胎盤娩出後 30 分鐘內突發心肺衰竭合併 DIC;處置為立即 CPR 並準備娩出、ROSC 後 TTE 看右心與容積、升壓強心、矯正凝血,持續不穩考慮 ECMO",
              "<b>孕婦心跳停止</b>:手動子宮左推、IV 打在橫膈以上、電擊能量同一般成人;<b class='w'>4 分鐘無 ROSC → 原地剖腹產,目標 5 分鐘內娩出</b>;懷疑 LAST 立即給 lipid emulsion"
            ]
          },
          {
            tag:"UpToDate", cls:"uptodate", label:"UpToDate 臨床主題重點", note:"Anesthesia for cesarean delivery",
            preop:[
              "<b>懷孕本身不延遲胃排空</b>,擇期剖腹的禁食原則同一般手術;進入產程後(尤其用過 neuraxial 或全身鴉片)胃排空才會延遲",
              "緊急剖腹(胎兒窘迫、產程中臀位、剖腹後試產或肌瘤切除後)→ 給藥物預防誤吸,<b>不因禁食時間延誤手術</b>",
              "熟悉者可用 gastric ultrasound 評估胃內容,但在臨床決策中的角色尚未確立"
            ],
            airway:[
              "<b>先消毒鋪單、外科就位再誘導</b> → 縮短胎兒藥物暴露;氣道確定後麻醉端說可以,外科才下刀",
              "部分指引建議 RSI 時給低壓面罩通氣,維持氧合並確認可面罩通氣",
              "<b class='w'>產科氣道併發症在甦醒與術後比誘導時更常見</b>"
            ],
            hemo:[
              "<b>Oxytocin 為第一線子宮收縮劑</b>(合併子宮按摩):擇期剖腹 → 控制速率輸注 ± 1 U bolus;產程中剖腹 → 稀釋 3 U,給藥時間 > 30 秒",
              "<b class='w'>用最低有效劑量</b>:副作用(低血壓、噁心嘔吐、胸痛與 ECG 變化,甚至心血管崩潰)與劑量及給藥速度相關;oxytocin 屬高警訊藥物,依本院標準流程",
              "子宮收縮乏力高風險(產程長、產程中已用 oxytocin、絨毛膜羊膜炎、多胞胎)→ 起始輸注可提高到 7.5–15 U/h",
              "產程中用過 oxytocin → 受體減敏,所需 bolus 約為擇期剖腹的 9 倍;多胞胎、羊水過多、肥胖也需要較高劑量"
            ],
            intraop:[
              "誘導後以高濃度吸入麻醉快速達到 <b>1 MAC</b>,或追加 propofol,降低知曉",
              "娩出後給 midazolam 2 mg、fentanyl 100 µg,吸入降到 0.5 MAC 或改 propofol 輸注,減少子宮收縮乏力(原文另含 N₂O,<b>本院無 N₂O</b>)",
              "通氣目標 EtCO₂ 約 30 mmHg(足月孕婦正常 PaCO₂ 約 30–32 mmHg)"
            ],
            drug:[
              "誘導:propofol 2–2.5 mg/kg 或 etomidate 0.3–0.5 mg/kg;血行不穩、低血容可用 ketamine 1–2 mg/kg;產婦分布體積大,<b>依實際體重給足誘導劑量</b>",
              "多數在娩出前不給靜脈鴉片;<b>子癇前症則在誘導時給鴉片等藥物</b>,鈍化喉鏡插管的升壓反應",
              "肌鬆不通過胎盤;一般剖腹產除插管外不需追加肌鬆,若追加則以肌鬆監測引導、避免殘餘肌鬆",
              "逆轉可用 neostigmine + glycopyrrolate 或 sugammadex;sugammadex 分子大、不易進入乳汁,LactMed 列為哺乳可用"
            ]
          }
        ],
        refs:[
          "Sharpe, E. E., & Sviggum, H. P. (2025). Anesthesia for obstetrics. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1884–1920.e8). Elsevier.",
          "Nixon, H., & Leffert, L. (2025). Anesthesia for cesarean delivery. In UpToDate. Wolters Kluwer. (Topic last updated July 28, 2025).",
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
        lit:[
          {
            tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 58 章(產科麻醉)",
            preop:[
              "非緊急剖腹的首選:<b>脊髓麻醉比硬脊膜外快、阻斷較密、成本低、失敗率 < 1%</b>;通常用 24G 以下 pencil-point 針",
              "已放分娩用硬脊膜外導管 → 直接加藥延伸成手術麻醉;預期手術較久或需要緩慢起效(合併症)也可選硬脊膜外",
              "高風險產婦(例如病態肥胖合併困難氣道)可考慮刻意放<b>連續脊髓導管</b>",
              "術前評估不論麻醉方式都要做;<b class='w'>全麻器材與藥物隨時備妥</b>"
            ],
            hemo:[
              "脊髓麻醉的低血壓比硬脊膜外常見;子宮左傾、輸液加升壓劑可減少",
              "<b>Phenylephrine 為首選升壓劑</b>:胎兒轉移較少、胎兒酸血症比 ephedrine 少;<b>預防性輸注最有效</b>(低血壓 RR 0.36、噁心嘔吐 RR 0.39)",
              "國際共識:phenylephrine 預防性輸注 + 晶體 co-load + 子宮左傾;co-load 單獨使用效果有限",
              "Phenylephrine 會反射性心跳變慢、CO 下降;norepinephrine 維持血壓效果相近、心跳與 CO 較高,作為首選仍待更多證據"
            ],
            drug:[
              "Hyperbaric bupivacaine <b>10–12 mg</b> 可達 T4;身高體重不影響阻斷擴散(極端身高才需調整)",
              "加脂溶性鴉片(fentanyl、sufentanil)→ 減少局麻藥量與內臟牽拉不適",
              "Preservative-free morphine 0.1–0.2 mg 或 hydromorphone 0.075 mg → 術後 18–24 小時止痛",
              "<b>硬脊膜外延伸</b>:由 T10 分娩止痛升到 T4 約 5 分鐘(3% chloroprocaine 或鹼化 2% lidocaine);一般需 10–20 mL,<b class='w'>分次給藥</b>以排除導管跑進血管或蜘蛛膜下腔;0.5% bupivacaine 因 LAST 風險較少用",
              "<b>CSE</b>:兼具脊髓快速可靠與導管可延伸;缺點是導管尚未測試、可能無效;低劑量序貫 CSE 適用心臟病或身材矮小"
            ],
            postop:[
              "<b class='w'>Neuraxial opioid 是剖腹產術後止痛的金標準</b>,優於全身鴉片與 TAP block;合併規律 NSAID、acetaminophen,口服鴉片救援",
              "已給 neuraxial morphine 時,TAP 或 QL block 不再增加止痛效果",
              "<b>PDPH</b>:姿勢性頭痛;先排除腦膜炎(發燒、頸僵)、產後子癇前症(高血壓)、腦靜脈栓塞、硬腦膜下血腫、中風",
              "PDPH 先保守治療(補液、caffeine、NSAID、acetaminophen);影響照顧嬰兒或日常生活 → epidural blood patch(約 20 mL);<b class='w'>出現複視等腦神經症狀 → 立即 blood patch</b>",
              "<b>硬脊膜外血腫</b>極罕見(約 1/251,463);<b class='w'>背痛加持續運動阻斷 → 立即影像、盡快清除</b>;追蹤到阻斷完全消退;血小板 > 70,000 且無其他危險因子時風險很低(SOAP)"
            ],
            flags:[
              "<b class='w'>注射時病人喊痛 → 立即停止注射</b>(穿刺點過高可能傷及脊髓)",
              "<b>全脊髓阻斷</b>危險因子:肥胖、硬脊膜外失敗後改打脊髓、身材矮、意外穿破硬膜後的硬脊膜外、脊椎變形;處置為支持通氣(意識喪失即插管)、輸液與升壓",
              "<b>LAST</b>:產科少見(低濃度局麻藥、剖腹多用 lidocaine / chloroprocaine);治療為 lipid emulsion 加 BLS / ACLS",
              "<b>羊水栓塞</b>:產程中或胎盤娩出後 30 分鐘內突發心肺衰竭合併 DIC;處置為立即 CPR 並準備娩出、ROSC 後 TTE 看右心與容積、升壓強心、矯正凝血,持續不穩考慮 ECMO",
              "<b>孕婦心跳停止</b>:手動子宮左推、IV 打在橫膈以上、電擊能量同一般成人;<b class='w'>4 分鐘無 ROSC → 原地剖腹產,目標 5 分鐘內娩出</b>;懷疑 LAST 立即給 lipid emulsion"
            ]
          },
          {
            tag:"UpToDate", cls:"uptodate", label:"UpToDate 臨床主題重點", note:"Anesthesia for cesarean delivery",
            preop:[
              "多數產婦<b>強烈建議 neuraxial 而非全麻</b>;neuraxial 與較低的 VTE、手術部位感染與嚴重產後憂鬱相關",
              "沒有分娩硬脊膜外導管者,<b>建議脊髓或 CSE,而非單純硬脊膜外</b>(Grade 2C);已有可用導管 → 以導管達到手術麻醉",
              "脊髓配方:局麻藥(bupivacaine)+ 脂溶性鴉片(fentanyl,改善術中)+ 水溶性鴉片(PF morphine,術後止痛)"
            ],
            monitor:[
              "擇期剖腹在<b>消毒鋪單前</b>確認阻斷高度,才有時間補救或重打",
              "<b class='w'>阻斷不足時不可只靠靜脈止痛藥讓手術進行</b>"
            ],
            hemo:[
              "沒有心搏過緩時,<b>建議 phenylephrine 優於 ephedrine</b>(Grade 2C);低劑量 norepinephrine 為合理替代(起始約 2.5–4 µg/min,先確認 IV 通暢)",
              "健康產婦:低劑量 phenylephrine <b>預防性輸注</b> + bolus 救援 + 無糖晶體 <b>co-load</b>,血壓維持在基準值 20% 以內",
              "脊髓注射時給 <b>ondansetron 4 mg</b> 預防噁心,並可能減輕脊髓後低血壓",
              "<b>Oxytocin 為第一線子宮收縮劑</b>(合併子宮按摩):擇期剖腹 → 控制速率輸注 ± 1 U bolus;產程中剖腹 → 稀釋 3 U,給藥時間 > 30 秒",
              "<b class='w'>用最低有效劑量</b>:副作用(低血壓、噁心嘔吐、胸痛與 ECG 變化,甚至心血管崩潰)與劑量及給藥速度相關;oxytocin 屬高警訊藥物,依本院標準流程",
              "子宮收縮乏力高風險(產程長、產程中已用 oxytocin、絨毛膜羊膜炎、多胞胎)→ 起始輸注可提高到 7.5–15 U/h",
              "產程中用過 oxytocin → 受體減敏,所需 bolus 約為擇期剖腹的 9 倍;多胞胎、羊水過多、肥胖也需要較高劑量"
            ],
            intraop:[
              "脊髓不足:先等滿 <b>10 分鐘</b>讓阻斷完全起效;部分阻斷 → 放硬脊膜外導管滴定;<b>20 分鐘後仍完全沒有阻斷</b> → 通常可安全重打全劑量脊髓",
              "<b class='w'>硬脊膜外失敗後不可直接打全劑量單次脊髓</b>(高位或全脊髓阻斷)→ 重放導管滴定;緊急剖腹則直接全麻",
              "寒顫可達 50%:需要治療時 dexmedetomidine 20–30 µg IV(網絡統合分析最有效、噁心最少,其次 tramadol、nalbuphine、meperidine)",
              "高位阻斷常見呼吸困難;罕見進展為低血氧、低血壓、心跳停止,是需要插管的最常見麻醉相關事件"
            ]
          }
        ],
        refs:[
          "Sharpe, E. E., & Sviggum, H. P. (2025). Anesthesia for obstetrics. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1884–1920.e8). Elsevier.",
          "Nixon, H., & Leffert, L. (2025). Anesthesia for cesarean delivery. In UpToDate. Wolters Kluwer. (Topic last updated July 28, 2025).",
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
      "Sharpe, E. E., & Sviggum, H. P. (2025). Anesthesia for obstetrics. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1884–1920.e8). Elsevier.",
      "Nixon, H., & Leffert, L. (2025). Anesthesia for cesarean delivery. In UpToDate. Wolters Kluwer. (Topic last updated July 28, 2025).",
      "Apfelbaum, J. L., Hawkins, J. L., Agarkar, M., et al. (2016). Practice guidelines for obstetric anesthesia: An updated report by the American Society of Anesthesiologists Task Force on Obstetric Anesthesia and the Society for Obstetric Anesthesia and Perinatology. Anesthesiology, 124(2), 270–300.",
      "Kinsella, S. M., Carvalho, B., Dyer, R. A., et al. (2018). International consensus statement on the management of hypotension with vasopressors during caesarean section under spinal anaesthesia. Anaesthesia, 73(1), 71–92.",
      "Mushambi, M. C., Kinsella, S. M., Popat, M., et al. (2015). Obstetric Anaesthetists' Association and Difficult Airway Society guidelines for the management of difficult and failed tracheal intubation in obstetrics. Anaesthesia, 70(11), 1286–1306."
    ],
    collapse:true
  }