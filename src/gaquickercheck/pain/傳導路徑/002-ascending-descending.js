{
    topic: "疼痛路徑",
    group: "傳導路徑",
    id: "pain-pathways",
    updated: "2026-11-22",
    name: "上行與下行疼痛路徑",
    en: "Ascending & Descending Pain Pathways",
    key: "上行路徑讓我們『感受到痛』;下行路徑讓大腦『把痛關小聲』",
    sections: [
      {
        h: "上行路徑(感受疼痛)",
        items: [
          "受器被活化 → 第一級神經元(Aδ / C)在脊髓背角釋放 <b>glutamate</b> 與 <b>substance P</b>",
          "第二級神經元多數<b>交叉到對側</b> → 沿 <b>lateral spinothalamic tract</b> 上行到<b>視丘</b> → 第三級神經元到<b>體感皮質</b>(判斷位置與強度)",
          "另一路經 parabrachial nucleus、杏仁核 → <b>扣帶迴、腦島</b>(產生不愉快感與情緒)",
          "anterior spinothalamic tract 傳粗觸覺與壓覺;lateral 傳痛覺與溫度覺",
          "上行訊號同時送到腦幹的 <b>PAG</b> 與 <b>RVM</b> → 啟動下行回饋"
        ]
      },
      {
        h: "下行路徑(調控疼痛)",
        items: [
          "<b>PAG</b>(中腦導水管周圍灰質)整合大腦皮質、下視丘、杏仁核與上行的疼痛訊息",
          "PAG → <b>RVM</b>(延腦頭端腹內側)與背外側橋腦被蓋(含<b>藍斑核 LC</b>)→ 沿脊髓下行到背角",
          "在背角釋放<b>內生性鴉片(enkephalin、dynorphin)、5-HT、NE</b> → 減少第一級神經元釋放傳導物質、使第二級神經元過極化 → 痛訊號往上傳的量變少",
          "<b>下行調控是雙向的</b>:RVM 有抑制疼痛的 <span class='term' role='button' tabindex='0' aria-expanded='false' onclick='toggleTerm(this)' onkeydown='termKey(event,this)'>OFF-cell 與促進疼痛的 ON-cell</span><span class='term-panel' hidden onclick='toggleTerm(this.previousElementSibling)'>RVM 裡有兩群功能相反的神經元:<b>OFF-cell</b> 在疼痛反射要發生前停止放電,活躍時<b>抑制</b>背角的疼痛傳遞;<b>ON-cell</b> 在疼痛反射前開始放電,活躍時<b>促進</b>疼痛傳遞。<b>Opioid</b> 會抑制 ON-cell、讓 OFF-cell 活躍 → 止痛。慢性疼痛時下行系統可能偏向『促進』,使疼痛持續。</span>;壓力、注意力、情緒都會改變平衡",
          "慢性疼痛時下行抑制可能減弱、促進增強 → 疼痛持續或擴散"
        ]
      },
      {
        h: "麻醉與止痛的關聯",
        items: [
          "<b>Opioid</b> 同時作用在背角(脊髓)與 PAG / RVM(活化下行抑制)",
          "<b>Dexmedetomidine、clonidine</b>(α2 agonist):作用在背角與藍斑核 → 止痛與鎮靜",
          "<b>Tramadol、tapentadol、SNRI(duloxetine)</b>:增加下行路徑的 NE / 5-HT",
          "全身麻醉抑制的是『知覺』,但脊髓背角仍持續接收疼痛訊號 → 手術刺激仍可造成敏感化,這是加上區域阻斷與多模式止痛的理由"
        ]
      }
    ],
    diagram: { img:"@@IMG:pain-four-steps.jpg:jpeg@@", alt:"疼痛傳導四步驟:轉導、傳遞、知覺、調控", caption:"疼痛傳導四步驟:① 轉導(受器)→ ② 傳遞(周邊神經 → 脊髓背角 → 上行到大腦)→ ③ 知覺(大腦)→ ④ 調控(下行路徑回到背角)" },
    refs: [
      "Yam, M. F., Loh, Y. C., Tan, C. S., et al. (2018). General pathways of pain sensation and the major neurotransmitters involved in pain regulation. International Journal of Molecular Sciences, 19(8), 2164.",
      "De Preter, C. C., & Heinricher, M. M. (2024). The 'in's and out's' of descending pain modulation from the rostral ventromedial medulla. Trends in Neurosciences, 47(6), 447–460.",
      "Bannister, K., Patel, R., & Hughes, S. (2025). The descending modulation of pain. Pain, 166(11S), S55–S59.",
      "Cummings, C., Cancemi, C., Bajpai, R., & Abakah, C. (2019). Pain transmission pathway [Course project website]. Opioid Peptides, Tufts University. https://sites.tufts.edu/opioidpeptides/pathways-and-receptors/classical-opioid-signaling/"
    ]
  }
