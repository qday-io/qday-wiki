---
sidebar_position: 2
---

# Abelian 行動錢包用戶指引

## Abelian 行動錢包介紹

Abelian 行動錢包是為 Abelian 區塊鏈及其 Layer 2 網路 QDay 設計的行動錢包應用程式，支援 iOS 和 Android 平台。

作為後量子時代的加密貨幣錢包，Abelian 行動錢包具有以下核心特性：

- **量子安全**：基於抗量子密碼學算法，保護您的數位資產免受未來量子計算威脅；
- **多層隱私（MLP）**：支援偽隱私（Pseudo-Private）和全隱私（Fully-Private）兩種地址類型，讓您根據需求選擇隱私級別；
- **雙鏈支援**：同時管理 Abelian Layer 1（ABEL）和 Layer 2（QDAY）資產；
- **重新設計的界面**：直觀易用的用戶界面，提供順暢的操作體驗；
- **自動同步**：快速同步區塊鏈資料，確保交易資訊即時更新；
- **跨平台相容**：在 iOS 和 Android 裝置之間無縫切換。

:::tip[重要提示]
- **ABEL** 是 Abelian Layer 1 區塊鏈的原生代幣，使用量子安全的隱私技術；
- **QDAY** 是 Abelian Layer 2 網路的代幣，相容以太坊虛擬機（EVM），**可以匯出私鑰並匯入到 MetaMask**。
:::

## 下載 Abelian 行動錢包應用程式

### iOS 平台

1. 在 iPhone 或 iPad 上開啟 App Store
2. 搜尋 "Abelian" 或直接前往 [Abelian 行動錢包 App Store](https://apps.apple.com/us/app/abelian-pro/id6475756639)
3. 點擊 "獲取" 按鈕下載並安裝應用程式
4. 安裝完成後，在主屏幕上點擊 Abelian 圖標啟動應用

**系統要求**：iOS 13.0 或更高版本

### Android 平台

方法一：Google Play Store

1. 在 Android 裝置上開啟 Google Play Store；
2. 搜尋 "Abelian" 或直接前往 [Abelian 行動錢包 Google Play](https://play.google.com/store/apps/details?id=info.abelian.walletpro)；
3. 點擊 "安裝" 按鈕下載並安裝應用程式；
4. 安裝完成後，在應用列表中點擊 Abelian 圖標啟動應用。

方法二：直接下載 Apk 檔案

1. 前往 [Abelian 社群網站下載頁面](https://community.pqabelian.io/zh/downloads/latest#abelian-移動應用) 下載 Abelian 行動錢包 的 Apk 檔案；
2. 在 Android 裝置上開啟檔案管理器；
3. 找到下載的 Apk 檔案；
4. 點擊 Apk 檔案開始安裝；
5. 安裝完成後，在應用列表中點擊 Abelian 圖標啟動應用。

**系統要求**：Android 6.0 或更高版本

## 初次使用引導

首次啟動 Abelian 行動錢包應用程式時，您將看到歡迎界面。

![歡迎畫面](/abelian/welcome.png)

- 連續點擊 "Continue（繼續）" 按鈕，閱讀 Abelian 行動錢包的特性介紹頁面，然後點擊 "Get Started（開始）" 按鈕，進入語言選擇界面，選擇您的語言後，點擊 "Next（下一步）" 按鈕進入錢包主界面；
    ![語言選擇](/abelian/language-selection.png)

- 主界面底部導航欄分為以下四個部分：
    ![主螢幕](/abelian/main-screen.png)
    1. **Abelian（ ABEL）**：\$ABEL 錢包頁面，可以操作 ABEL 的購買、轉帳操作和查看 ABEL 的錢包類型餘額、交易記錄等資訊；
    2. **QDay（ QDAY）**：\$QDAY 錢包頁面，可以操作 QDAY 的轉帳操作和查看 QDAY、WQDAY、WABEL、USD8 的餘額、交易記錄等資訊，並且支援 USD8 兌換，還包含 ABEL 跨鏈橋、ABEL 質押、QDay 質押、QDay 交換的網頁連結；
    3. **Discover（發現）**：發現頁面，顯示 Abelian 官網的網站集群、市場數據、以及官方社交網路；
    4. **Settings（設定）**：設定頁面，提供錢包的語言、主題、指紋鎖、網路設定，以及關於資訊和應用程式日誌。

## 創建 ABEL 錢包帳戶

Abelian 行動錢包支援 Legacy 和 MLP 兩種不同類型的錢包，每種都有其特定的用途和優勢。

- **創建偽隱私錢包**：偽隱私（Pseudo-Private）錢包提供了隱私性和性能之間的平衡，適合日常交易使用，可轉帳金額上限最高。
- **創建全隱私錢包**：全隱私（Fully-Private）錢包提供最高級別的隱私保護，完全隱藏交易資訊，轉帳金額上限高於 Legacy 錢包。
- **創建經典錢包**：經典（Legacy）錢包是舊版本的錢包類型，已被新的多層隱私（MLP）錢包取代。除非您需要從舊版 Abelian 錢包遷移資產，否則**不建議創建經典錢包**。

**創建步驟**：

1. 在 Abelian 錢包主界面點擊 "I don't haove an ABEL account（我沒有 ABEL 帳戶）" 按鈕開始創建 ABEL 錢包；
   ![創建帳戶](/abelian/create-account-1.png)
2. 第一次建立錢包時會自動彈出錢包密碼（Passcode）設定畫面，輸入六位數字密碼兩次，如果裝置有指紋或 "Touch ID" 功能，會彈出生物辨識登入（Biometric Login）確認啟用的畫面，點擊 "確認（Confirm）" 按鈕完成安全設定；
   ![設定密碼](/abelian/set-passcode.png)
3. 在 Create Account（創建帳戶）界面，設定 “錢包名稱（Name）”⓵，點擊 "Create（創建）" 按鈕⓷ 創建錢包；
   ![創建帳戶2](/abelian/create-account-2.png)
4. 下方的進階（Advanced）選項可以展開⓶，可以選擇 "建立 MLP 偽隱私帳戶（Create an MLP Pseudo-Private account）" 、"建立 MLP 全隱私帳戶（Create an MLP Fully-Private account）" 和 "建立經典帳戶（Create a Legacy account）" 三種類型，預設為偽隱私錢包；
5. 確認密碼或生物辨識後，點擊 "完成（Done）" 按鈕即可完成錢包建立並進入錢包主畫面。


## 創建 QDAY 錢包帳戶

QDay 錢包帳戶使用 EVM 相容的私鑰格式，在 Abelian 行動錢包中無需設定 QDay 網路，只需與已存在的 ABEL 錢包關聯即可。

:::tip[注意]
如果您的 ABEL 錢包是經典錢包，將無法進行 QDay 錢包的創建，需要升級到 MLP 錢包。
:::

**創建步驟**：

1. 在主界面選擇 QDay 標籤頁；
2. 點擊 "開啟關聯帳戶（Open linked account）" 按鈕，開始建立與目前使用的 ABEL 錢包關聯的 QDay 錢包。

## 獲取錢包地址接收代幣

創建錢包後，您需要獲取錢包地址以接收代幣資產。

### 接收 ABEL

1. 在錢包主界面，選擇 Abelian 標籤页
2. 在上面 ABEL 金額顯示部分的右側，有一行 "地址（Address）"，點擊它後面的複製圖標，即可將 ABEL 短地址複製到剪貼板
3. 點擊金額部分下方的 "接收（Receive）" 按鈕，將顯示您的 ABEL 錢包完整短地址和對應的 QR 碼
   - 點擊短地址下方的複製圖標，即可將 ABEL 短地址複製到剪貼板
   - 或讓對方掃描 QR 碼發送資產

### 接收 QDAY

1. 在錢包主畫面，選擇 QDay 標籤頁
2. 在上面 QDAY 金額顯示部分的右側，有一行 "地址（Address）"，點擊它後面的複製圖標，即可將 QDAY 短地址複製到剪貼板
3. 點擊金額部分下方的 "接收（Receive）" 按鈕，將顯示您的 QDAY 錢包完整短地址和對應的 QR 碼
   - 點擊短地址下方的複製圖標，即可將 QDAY 短地址複製到剪貼板
   - 或讓對方掃描 QR 碼發送資產

## 切換錢包帳戶

1. 在主界面選擇 Abelian 標籤頁
2. 點擊 ABEL 錢包頂部的錢包名稱，會展開 "選擇帳戶（Select Account）" 選單，選擇您要切換的錢包即可；
3. 切換到 QDay 標籤頁，會自動切換到當前 ABEL 錢包關聯的 QDAY 錢包。

## 導出 ABEL 錢包

:::danger[安全警告]
助記詞和私鑰擁有您錢包的完全控制權，是恢復錢包的唯一憑證，請務必：
- 抄寫在紙上並保存在安全的地方
- 不要截圖或保存在聯網設備上
- 不要與任何人分享
- 遺失助記詞將無法恢復錢包資產
- **ABEL 錢包的私鑰和助記詞無法導入到 MetaMask**
:::

### 導出 ABEL 錢包私鑰或助記詞

ABEL 錢包匯出助記詞或私鑰可用於備份，以便在其他裝置上恢復錢包。

**導出助記詞或私鑰步驟**：

1. 在主畫面選擇 Abelian 標籤頁，點擊右上角的 "個人資料（Profile）" 圖示
2. 在個人資料（Profile）頁面，點選 "備份（Backup）" 按鈕
3. 輸入密碼或生物辨識驗證後，將顯示助記詞或私鑰內容，點選 "複製（Copy）" 按鈕複製助記詞或私鑰
4. 請妥善保管複製的助記詞或私鑰

### 導出 QDay 錢包私鑰

QDay 錢包使用 EVM 相容的私鑰格式，可以匯出並匯入到 MetaMask 等 EVM 錢包。

**導出步驟**：

1. 在主畫面選擇 QDay 標籤頁，點擊右上角的 "個人資料（Profile）" 圖示
2. 在個人資料（Profile）頁面，點選 "備份（Backup）" 按鈕
3. 輸入密碼或生物辨識驗證後，將顯示私鑰內容，點選 "複製（Copy）" 按鈕複製私鑰
4. 請妥善保管複製的私鑰

:::tip[提示]
QDay 私鑰格式：`0x` 開頭的 64 位十六進制字符串，例如：
`0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`
:::

## 將 QDay 錢包導入 Metamask

導出 QDay 私鑰後，您可以將其導入到 MetaMask 錢包中使用。

詳細步驟請參考：[MetaMask 錢包帳戶用戶指引 - 導入 QDAY 錢包](/guide/handbook/user-guide/metamask#匯入-qday-钱包)

## 導入 ABEL 錢包

如果您已有 ABEL 錢包的助記詞或私鑰，可以將其導入到 Abelian 行動錢包。

**通過助記詞或私鑰導入**：

1. 在錢包主界面，選擇 Abelian 標籤頁
2. 點選 "匯入既有帳戶（Import an existing account）" 按鈕
3. 當已有錢包時，如需建立新錢包，同樣在 "選擇帳戶（Select Account）" 選單中底部選擇 "新增帳戶（Add a new account）"
4. 在 "匯入帳戶（Import Account）" 頁面，填寫錢包的 "名稱（Name）" 和 "助記詞或私鑰（Mnemonic Phrase or Private Key）"
5. 點擊 "匯入（Import）" 按鈕完成 ABEL 錢包匯入。

## 導入 QDay 錢包

1. 在錢包主畫面，選擇 QDay 標籤頁；
2. 點擊 "匯入既有帳戶（Import existing account）" 按鈕，在 "私鑰（Private Key）" 輸入框中輸入 QDay 錢包的私鑰；
3. 點擊 "匯入（Import）" 按鈕完成匯入並關聯目前 ABEL 錢包。

## 轉帳 ABEL

發送 ABEL 代幣到其他 Abelian 錢包地址（包含偽隱私、全隱私、經典錢包地址）

:::warning[注意事項]
- ABEL 交易通常需要多個區塊確認才算完成
- 您可以在交易記錄中實時查看確認進度
- 錢包會自動同步並更新餘額
:::

**轉帳步驟**：

1. 在錢包主畫面，選擇 Abelian 標籤頁；
2. 點擊 "發送（Send）" 按鈕；
3. 在 "Send ABEL（發送 ABEL）" 選擇選單，可以選擇：
   - "New address（新位址）"：輸入接收者的 ABEL 位址
   - "ABEL Bridge（ABEL 橋）"：透過掃描 ABEL Bridge 網頁中的 QR 碼，將自動填入 ABEL 地址，用於兌換質押用 WABEL 代幣
   - 「Your Accounts（我的帳戶）」：選擇目前 Abelian 行動錢包中已有的 ABEL 錢包帳戶
   - “Contacts（聯絡人）”：選擇目前 Abelian 行動錢包中已儲存的聯絡人 ABEL 位址
4. 這裡以 "新地址（New address）" 為例，進入 "發送 ABEL（Send ABEL）" 頁面，透過下列兩種方法輸入 "接收者地址（Recipient's address）"：
   - 點擊 "掃描 QR 碼（Scan QR）" 按鈕，透過掃描其他裝置上的 ABEL 地址 QR 碼，自動填入 ABEL 地址
   - 點擊 "貼上（Paste）" 按鈕，從剪貼板貼上 ABEL 地址
5. 在 “Amount of ABEL（ Abel 代幣金額）” 輸入轉帳金額
   - 可以點擊 "Max" 按鈕發送全部餘額（扣除手續費）
6. 查看交易詳情並點擊 "發送（Send）" 按鈕，輸入密碼或生物驗證，等待交易確認上鏈，完成 ABEL 代幣轉帳。
7. 返回 Abelian 標籤頁的 "交易記錄（Transactions）" 部分可以查看交易詳情，包括：
   - 交易哈希
   - 交易時間
   - 轉帳金額
   - 確認狀態
   - ABEL 瀏覽器連結

:::tip[轉帳建議]
- 首次向新地址轉帳時，建議先發送小額測試
- 仔細核對接收地址，區塊鏈交易不可撤銷
- 網路擁堵時可能需要更長的確認時間
- 可以在交易記錄中查看交易雜湊和詳細資訊
:::

## 轉帳 QDay

發送 QDAY 代幣到其他 QDay 錢包地址。

**轉帳步驟**：

1. 在錢包主畫面，切換到 QDay 標籤頁；
2. 點擊 "Send（發送）" 按鈕；
3. 在 "Send QDAY（發送 QDAY）" 選擇選單，可以選擇：
   - "New address（新位址）"：輸入接收者的 QDAY 位址
   - “ABEL Bridge（ABEL 橋）”：透過掃描 ABEL Bridge 網頁中的 QR 碼，將自動填入 QDAY 地址，用於兌換質押用 WABEL 代幣（暫未上線）
4. 這裡以 “New address（新位址）” 為例，進入 “Send QDAY（發送 QDAY）” 頁面，通過下面兩種方法輸入 “Recipient's address（接收者地址）”：
   - 點擊 “Scan QR（掃描 QR 碼）” 按鈕，通過掃描其他設備上的 QDAY 地址 QR 碼，自動填入 QDAY 地址
   - 點擊 “Paste（粘貼）” 按鈕，從剪貼板粘貼 QDAY 地址
5. 在 “Amount of QDAY（ Abel 代幣金額）” 輸入轉帳金額
   - 可以點擊 "Max" 按鈕發送全部餘額（扣除手續費）
6. 查看交易詳情並點擊 "Send（發送）" 按鈕，輸入密碼或生物驗證，等待交易確認上鏈，完成 QDAY 代幣轉帳。
7. 返回 QDay 標籤頁的 “Transactions（交易記錄）” 部分可以查看交易詳情，包括：
   - 交易哈希
   - 交易時間
   - 發送者地址
   - 接收者地址
   - 轉帳金額
   - 確認狀態
   - QDay 瀏覽器連結

**QDay 轉帳特點**：

- 交易速度快，通常幾秒到幾分鐘即可確認
- Gas 費用較低，適合頻繁交易
- 支援發送 QDAY 和各種 ERC20 代幣
- 可在 QDay 區塊鏈瀏覽器查看交易詳情

:::warning[注意事項]
- 確保接收地址支援 QDay 網路
- 發送 ERC20 代幣時，確保錢包有足夠的 QDAY 支付 Gas 費
- QDay 地址與 ABEL 地址格式不同，請勿混淆
:::

## 查看錢包資訊和同步狀態

Abelian 行動錢包提供詳細的錢包帳戶資訊詳情和同步狀態顯示。

**ABEL 錢包帳戶詳情**：

1. 在主畫面選擇 Abelian 標籤頁，點擊右上角的 "個人資料（Profile）" 圖示
2. 選擇 “Account Details（帳戶詳情）” 選項，可以查看以下資訊：
   - 錢包名稱（此處可重命名錢包）
   - 錢包地址（長地址/短地址）
   - 錢包隱私類型（偽隱私/全隱私/經典）
   - 可用餘額
   - 區塊同步狀態
   - 交易統計
   - 創建日期
   - 錢包相關的密鑰：View（查看）、Serial Number（序列號）、Detector Root（檢測器根）

**QDAY 錢包帳戶詳情**：

1. 在主畫面選擇 QDay 標籤頁，點擊右上角的 "個人資料（Profile）" 圖示
2. 選擇 “Account Details（帳戶詳情）” 選項，可以查看以下資訊：
   - 錢包地址
   - 網路參數
   - 關聯 ABEL 錢包地址（偽隱私）

**ABEL 網路同步狀態**：

1. 在 Abelian 錢包的 "帳戶詳情（Account Details）" 頁面中查看同步狀態
2. 同步狀態包括：
   - **Active（活動）**：綠色圓點，錢包已與區塊鏈完全同步
   - **Inactive（不活動）**：紅色圓點，錢包未連接到網路或同步失敗

## 購買 ABEL

 Abelian 行動錢包提供了購買 ABEL 的功能，可以使用 USDT 和 USDC 進行購買。

**購買步驟**：

1. 在錢包主畫面，選擇 Abelian 標籤頁
2. 點擊 "購買 ABEL（Buy ABEL）" 按鈕
3. 在 "新訂單（New Order）" 頁面，輸入購買金額（USD），會自動換算出可購買的 ABEL 代幣數量，點擊 "下單（Place Order）" 按鈕
4. 在 "支付方式（Payment Method）" 頁面，選擇支付方式：
   - USDT：使用 USDT(Ethereum、Binance Smart Chain、TRON) 購買 ABEL
   - USDC：使用 USDC(Ethereum) 購買 ABEL
5. 選擇後點擊 "支付（Checkout）" 按鈕，查看交易詳情，並使用支付工具掃描 QR 碼支付。
6. 等待交易確認，交易成功後，ABEL 將自動加入到 Abelian 錢包；
7. 在 "歷史記錄（History）" 頁面，可以查看交易記錄。

## 轉換 USD8

 Abelian 行動錢包提供了轉換 USD8 穩定幣的功能，可以使用 USDT 和 USDC 進行轉換。

**轉換步驟**：

1. 在錢包主畫面，選擇 QDay 標籤頁
2. 點擊 USD8 代幣後的 "轉換（Convert）" 按鈕
3. 在 "獲取 USD8（Get USD8）" 頁面，輸入需要轉換的 USD8 代幣數量，會自動換算出需要支付的 USDT 或 USDC 金額，點擊 "繼續（Continue）" 按鈕
4. 選擇支付方式：
   - USDT：使用 USDT(Ethereum、Binance Smart Chain、TRON) 轉換 USD8
   - USDC：使用 USDC(Ethereum) 轉換 USD8
5. 選擇後點擊 "支付（Checkout）" 按鈕，查看交易詳情，並使用支付工具掃描 QR 碼支付。
6. 等待交易確認，交易成功後，USD8 將自動加入到 QDay 錢包；
7. 在 "歷史記錄（History）" 頁面，可以查看交易記錄。

---

## 常見問題

**Q: ABEL 錢包可以導入到 MetaMask 嗎？**

A: 不可以。ABEL 使用量子安全的密碼學算法，與 MetaMask 使用的 EVM 標準不相容。只有 QDay 錢包可以導出私鑰並導入到 MetaMask。

**Q: 我應該使用哪種錢包類型？**

A:
- 日常交易和頻繁使用：推薦偽隱私錢包
- 大額資產存儲或極高隱私需求：推薦全隱私錢包
- 舊版錢包不建議再使用，已有的錢包請遷移至新的 MLP 錢包

**Q: 忘記錢包密碼怎麼辦？**

A: 如果您有助記詞或私鑰備份，可以刪除應用重新安裝，然後使用助記詞或私鑰導入錢包並設置新密碼。如果沒有備份，將無法恢復錢包。

**Q: 交易一直顯示待處理怎麼辦？**

A:
- ABEL 交易：檢查網路同步狀態，等待更多區塊確認
- QDay 交易：可能是 Gas 費設置過低，可以嘗試加速交易或等待網路不擁堵時自動確認

---

如需更多幫助，請訪問 [QDay 官方網站](https://www.qday.io) 或加入 [Discord 社群](https://discord.gg/Rrb33mC3Kc) 討論。