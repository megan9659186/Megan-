{
    checked: "2026-08-07",
    updated:"2026-11-22",
    specialty:"骨科",
    name:"全膝關節置換術",
    en:"Total Knee Arthroplasty (TKA)",
    summary:{ position:"Supine", posType:"supine", time:"參考捷格手術排程時間", blood:"中(止血帶)", airway:"GA 或 半身麻醉/區域" },
    preop:[
      "老年共病評估:心肺功能、糖尿病、OSA",
      "抗凝/抗血小板藥物、活動度、跌倒風險"
    ],
    airway:[
      "全麻採標準氣道;半身麻醉則清醒或輕鎮靜"
    ],
    monitor:[
      "標準監測;失血較多時可考慮動脈管"
    ],
    hemo:[
      "<b class='w'>止血帶放氣→再灌流</b>:代謝性酸、鉀↑、暫時性低血壓<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden>放氣後缺血肢體的乳酸、K⁺、CO₂ 等代謝產物流回循環,加上下肢血管床突然打開、周邊血管阻力下降 → <b>平均動脈壓明顯下降</b>,EtCO₂ 短暫上升。放氣前先告知、確認容積、備升壓藥;自發呼吸者會出現呼吸變快。放氣後傷口開始出血,且可持續到術後 24 小時。</span>",
      "<b>止血帶痛</b>:充氣約 1 小時後血壓、心跳逐漸上升,放氣後緩解 → <span class='term' role='button' tabindex='0' aria-expanded='false' onclick='toggleTerm(this)' onkeydown='termKey(event,this)'>Tourniquet pain(止血帶痛)</span><span class='term-panel' hidden onclick='toggleTerm(this.previousElementSibling)'>止血帶充氣約 <b>45–60 分鐘後</b>出現的大腿鈍痛、灼熱痛,即使半身麻醉對手術本身已足夠也可能發生;全身麻醉下則表現為<b>血壓逐漸上升、心跳變快</b>,加深麻醉或給 opioid 效果有限,<b>放氣後很快緩解</b>。<b>機轉</b>:可能與半身麻醉逐漸消退時,細的無髓 C 纖維先恢復傳導有關,加上組織缺血與局部壓迫。<b>處理</b>:先排除麻醉過淺;spinal / epidural 加 opioid 可減輕;與外科討論縮短充氣時間或提早放氣;止血帶壓力一般為收縮壓加 50–100 mmHg,總時間上限約 3 小時,時間過長可放氣 30 分鐘讓肢體再灌流以減少神經缺血。</span>",
      "TXA可減少失血"
    ],
    intraop:[
      "止血帶壓力與時間管理(>2hr風險升高)",
      "<b class='w'>骨水泥植入症候群(BCIS)</b>:低血壓、低氧、心律不整、甚至心跳停止<button class='info-btn' type='button' aria-expanded='false' onclick='toggleInfo(this)'>ⓘ 說明</button><span class='info-panel' hidden><b>機轉</b>:骨水泥(methyl methacrylate)加壓時髓腔內壓可高達數百 mmHg,把骨髓脂肪與碎屑推入靜脈 → 肺栓塞、肺血管阻力上升、<b>右心衰竭</b>;骨水泥單體與發炎物質也可能造成血管擴張與支氣管收縮。TKA 有止血帶時,栓子可能在<b>放氣後</b>才進入循環。<b>辨識</b>:置入骨水泥/假體或放氣後數分鐘內,血壓驟降、SpO₂ 下降、<b>EtCO₂ 突降</b>、心律不整,嚴重時心跳停止。<b>預防</b>:置入前請外科告知、提高 FiO₂、確認容積足夠、備升壓藥;高風險者(心肺儲備差、肺高壓、病理性骨折)考慮動脈導管。<b>處理</b>:100% 氧並確保通氣、快速輸液、升壓藥(phenylephrine、norepinephrine);右心衰竭或循環崩潰用 <b>epinephrine</b>,心跳停止依 ACLS;詳見危機處理『骨水泥植入症候群』卡。</span>",
      "積極保溫"
    ],
    drug:[
      "Multimodal + 區域(收肌管阻滯、股神經、關節周圍浸潤)",
      "注意局部麻醉藥總量以防LAST"
    ],
    emergence:[
      "一般平順"
    ],
    postop:[
      "積極multimodal止痛以利早期復健",
      "VTE預防、PONV預防"
    ],
    flags:[
      "骨水泥植入症候群、脂肪栓塞",
      "VTE / 肺栓塞",
      "止血帶放氣後血流動力學波動",
      "局部麻醉藥全身毒性(LAST)"
    ],
    lit:[
      {
        tag:"Miller", cls:"miller", label:"Miller's Anesthesia 教科書重點", note:"第 10 版,第 60 章(骨科手術麻醉)",
        preop:[
          "雙側同時 TKA:只需一次麻醉與復健,但心肌梗塞、脂肪栓塞與血栓事件較多 → 高風險者考慮分次手術"
        ],
        hemo:[
          "<b>止血帶</b>:壓力一般為收縮壓 +50–100 mmHg,最長約 3 小時;時間過長可放氣 30 分鐘讓肢體再灌流,減少神經缺血",
          "<b>放氣後</b>:缺血肢體的代謝產物回流加上周邊血管阻力下降 → 平均動脈壓明顯下降;傷口出血從放氣開始,可持續到術後 24 小時",
          "已有坐骨神經損傷、神經病變性痛或患肢血管疾病者,可不使用止血帶"
        ],
        intraop:[
          "全身麻醉與半身麻醉都可;系統性回顧顯示半身麻醉效果相當、未增加併發症,術後鴉片用量較少",
          "<b>止血帶痛</b>:充氣約 60 分鐘後出現,即使半身麻醉對手術已足夠;可能與麻醉消退時 C 纖維先恢復傳導有關,spinal / epidural 加 opioid 可減輕"
        ],
        postop:[
          "股神經阻斷與硬脊膜外止痛會延遲下床 → 趨勢改用<b>內收肌管阻斷(ACB)</b>保留股四頭肌力量",
          "ACB 合併關節周圍浸潤比單用浸潤更早下床,止痛效果相近",
          "關節內多藥注射(ropivacaine、ketorolac、clonidine、epinephrine)合併口服 acetaminophen、celecoxib 可減少鴉片用量"
        ]
      }
    ],
    refs:[
      "Castro de Oliveira, B. M., & Vazquez, R. (2025). Anesthesia for orthopedic surgery. In M. A. Gropper, L. I. Eriksson, L. A. Fleisher, et al. (Eds.), Miller's anesthesia (10th ed., pp. 1952–1983.e7). Elsevier.",
      "Donaldson, A. J., Thomson, H. E., Harper, N. J., & Kenny, N. W. (2009). Bone cement implantation syndrome. British Journal of Anaesthesia, 102(1), 12–22."
    ],
    collapse:true
  }