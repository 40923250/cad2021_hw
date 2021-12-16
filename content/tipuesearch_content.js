var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 40923250 \n 網站倉儲:  https://github.com/40923250/cad2021_hw \n 網站連結:  https://40923250.github.io/cad2021_hw \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Videos', 'text': '\n Inventory繪圖: Link \n', 'tags': '', 'url': 'Videos.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': '40723217    40723217  \n 40732331    40732331  \n 40823114    40823114  \n 40823115    40823115  \n pyc40823117    pyc40823117  \n 40823122    40823122  \n 40823127    40823127  \n 40823146    40823146  \n 40823148    40823148  \n 40871106    40871106  \n 40923201    40923201  \n youshin40923203    youshin40923203  \n 40923204    40923204  \n 40923205    40923205  \n 40923206-1    40923206-1  \n nfu40923208    nfu40923208  \n nfu40923209    nfu40923209  \n 40923210    40923210  \n a40923211    a40923211  \n 40923212    40923212  \n 40923213    40923213  \n 40923214    40923214  \n 40923216    40923216  \n 40923217    40923217  \n 40923218    40923218  \n nfu40923219    nfu40923219  \n 40923220    40923220  \n 40923221    40923221  \n 40923223    40923223  \n s40923224    s40923224  \n 40923225    40923225  \n 40923226    40923226  \n 40923227    40923227  \n 40923228    40923228  \n 40923229    40923229  \n 40923230    40923230  \n 40923231    40923231  \n 40923232    40923232  \n 40923233    40923233  \n 40923234    40923234  \n 40923235    40923235  \n 40923236    40923236  \n 40923237    40923237  \n 40923238    40923238  \n 40923239    40923239  \n 40923240    40923240  \n 40923241    40923241  \n 40923242    40923242  \n 40923243    40923243  \n 40923244    40923244  \n 40923245-1    40923245-1  \n 40923246    40923246  \n 40923247    40923247  \n 40923248    40923248  \n 40923249-1    40923249-1  \n 40923250    40923250  \n 40923251    40923251  \n 40923252    40923252  \n 40923253    40923253  \n 40971220    40971220  \n 40971227    40971227 \n 將範例修改後讓他可以一次跑出全部的網址 \n data = open(\'Y:/cad2021_2b_w2_list.txt\').readlines()\n# 檢查資料筆數, 第一筆為 title\n#print(data)\n#print(len(data))\ndata = data[1:]\n#print(data)\nfor i in range(len(data)):\n    num_github = data[i] \n    num = num_github.split("\\t")[0]\n    account = num_github.split("\\t")[1]\n    if account == "":\n        account = num\n    print("<p><a href=\'https://github.com/" + str(account) + "/cad2021_hw\'>" + str(account) + "" + "</a>")\n    print("<a href=\'https://" + str(account) + "/github.io/cad2021_hw\'>" + str(account) + "</a><p>")\n    print("") \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'W11', 'text': '零件 \n 下載 \n', 'tags': '', 'url': 'W11.html'}, {'title': '繪圖影片', 'text': '在家還沒上傳 \n', 'tags': '', 'url': '繪圖影片.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1-Inventor', 'text': '\n Inventor 為 3D 機械設計、產品模擬、模具建立與設計溝通提供一套彈性且全方位的軟體，整合直接建模和參數式工作流程。使用簡單的推/拉控制項，對導入的幾何圖形中的要素進行移動、旋轉、大小調整或縮放。有多個內建輔助系統，可方便快捷的生成複雜的標準鍵，且可跟Autodisk的其他軟體保持設計關聯性。 \n \n', 'tags': '', 'url': 'CAD1-Inventor.html'}, {'title': 'CAD1-Iventor安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1-Iventor安裝配置.html'}, {'title': 'CAD1-Inventor操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1-Inventor操作流程.html'}, {'title': 'CAD2-solvespace', 'text': '\n solvespace於2008年發布，以C++編寫，是一款免費且開源的2D和3D建模模擬程序，可以模擬有約束性的機構，特點是極小的程式大小，可攜帶在隨身裝置中，目前最新版為3.0，可在windows、Linux、MacOS上運行。 \n 開啟的檔案必須是 solvespace自身的檔案(*.slvs)，但匯出時可匯成2D的DXF, EPS, PDF, SVG, HPGL, STEP、3D的DXF,STEP \n 倉儲:https://github.com/solvespace/solvespace \n \n \n', 'tags': '', 'url': 'CAD2-solvespace.html'}, {'title': 'CAD2-solvespace安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2-solvespace安裝配置.html'}, {'title': 'CAD2-solvespace操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2-solvespace操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': '軟體載點', 'text': 'Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載 \xa0 (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載 \xa0 (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載 \xa0 (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從 \xa0 https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html \xa0 嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至 \xa0 https://www.onshape.com/en/ \xa0 申請帳號後使用. \n Solvespace: \n 至 \xa0 https://solvespace.com \xa0 下載或從 \xa0 https://github.com/solvespace/solvespace \xa0 下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': '軟體載點.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': '零件繪製', 'text': '\n \n 請建立一個 Wink 檔案說明截至目前所完成的兩套 CAD 零組件繪圖進度 (30%). \n \n \n \n \n \n   \n \n', 'tags': '', 'url': '零件繪製.html'}, {'title': '第一軸', 'text': '請建立一個 Wink 檔案, 將 1. 已經完成的 meArm 機械手臂第一軸, 加入 \xa0 https://www.coppeliarobotics.com/helpFiles/en/simUI-widgets.htm \xa0 slider, 可以在執行時, 利用滑鼠拖動旋轉 360 度 (30%). \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '第一軸.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'RUN', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n Modiasim <<  Previous \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n', 'tags': '', 'url': 'RUN.html'}, {'title': '更新日誌', 'text': '2021/10/6 增加token \n 2021/10/7 修改IPV4 \n 2021/10/13 增加Task \n 2021/10/20 增加組員名單 \n 2021/11/1 增加HW1/CAD1-Inventor、CAD2-solvespace內容 \n 2021/11/18 增加RUN', 'tags': '', 'url': '更新日誌.html'}]};