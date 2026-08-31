---
sidebar_position: 1
---

# MetaMask 錢包用戶指引

## 下載 MetaMask 擴充程式

1. 開啟瀏覽器，訪問 [MetaMask 官網](https://metamask.io/)。
2. Chrome 瀏覽器的安裝 Metamask 擴充程式示例：點擊 “[Install MetaMask for Chrome（為 Chrome 安裝 MetaMask）](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)”，然後根據提示完成安裝。

   ![Chrome 瀏覽器安裝 MetaMask 擴充程式](/qday/metamask/chrome-metamask-install.png)

3. 其他支援的瀏覽器擴充程式下載：
   - [為 Firefox 安裝 MetaMask](https://addons.mozilla.org/zh-CN/firefox/addon/ether-metamask/)
   - [為 Microsoft Edge 安裝 MetaMask](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)

4. 安裝完成後，點擊瀏覽器工具欄中的 MetaMask 擴充程式圖標即可開始設定。

## 建立 MetaMask 錢包帳戶

1. 點擊瀏覽器工具列中的 MetaMask 擴充程式圖標開始設定。
2. 選擇「建立新錢包 (Create a new wallet)」。
3. 根據畫面指示建立高強度密碼。
4. MetaMask 會產生一組助記詞 (Secret Recovery Phrase)。請務必按照精確順序將所有 12 個單字抄寫下來，並保存在安全、離線的地方。
5. 在系統要求時驗證您的助記詞，以完成錢包建立流程。

:::warning[重要提示：]
您的助記詞是您 MetaMask 錢包的主要備份。任何擁有此助記詞的人都可以控制您的資產。
建立 MetaMask 錢包會使用您的助記詞生成一個新的錢包備份。
如果您之後使用私鑰匯入帳戶，該匯入的帳戶可能無法使用您剛剛建立的 MetaMask 錢包助記詞來恢復。
請務必安全備份任何匯入的私鑰，或確保您能存取建立該帳戶的原始錢包。
:::

:::danger[絕對不要做以下事情：]
- 絕對不要與任何人分享您的助記詞
- 絕對不要將其輸入到任何網站
- 絕對不要將其儲存在截圖、電子郵件、聊天應用程式或雲端筆記中
- 絕對不要提供給任何自稱是客服支援的人
:::

## 取得錢包地址

1. 開啟 MetaMask。
2. 選擇您想使用的帳戶。
3. 點擊帳戶名稱或地址區域，將您的錢包地址複製到剪貼簿。

:::info[備註：]
您的錢包地址是公開的，可以分享給他人以接收資產。
:::

:::warning[安全提示：]
在發送或接收資金之前，請務必再次檢查貼上的地址。某些惡意軟體可能會替換您剪貼簿中複製的錢包地址。
:::

![複製 MetaMask 錢包地址](/qday/metamask/get-metamask-address3.png)

## 新增 QDAY 網路到 MetaMask

### 自動新增 QDAY 網路

1. 訪問 [QDay 區塊鏈瀏覽器](https://explorer.qday.io)。
2. 點擊頁面右上角的 “Add QDay Mainnet（新增 QDay 主網）” 按鈕，確認後即可自動將 QDAY 網路新增至 MetaMask。
3. 如果 MetaMask 開啟網路核准提示，請在核准前仔細確認網路詳情。
   確認以下資訊無誤後再行確認：
   - 網路名稱 (Network Name): QDAY
   - RPC 連結 (RPC URL): https://rpc.qday.io
   - 鏈 ID (Chain ID): 44001
   - 貨幣代碼 (Currency Symbol): QDAY
   - 區塊瀏覽器 (Block Explorer URL): https://explorer.qday.io

### 手動新增 QDAY 網路

如果自動新增失敗，您可以選擇手動新增：

1. 打開 MetaMask，點擊右上角的 “☰” 選單圖標，然後選擇 **“網路 (Networks)”**。
2. 點擊 **“Add a custom network（新增自訂網路）”** 並填寫以下資訊：
   - **網路名稱**: QDAY
   - **預設 RPC 連結**: `https://rpc.qday.io`
   - **鏈 ID**: 44001
   - **貨幣代碼**: QDAY
   - **區塊瀏覽器**: `https://explorer.qday.io`

   ![手動新增 QDAY 網路](/qday/metamask/add-metamask-network2.png)

3. 點擊 **“儲存”** 即可切換並連接到 QDAY 網路。

## 匯入 QDAY 錢包

1. 首先從 Abelian 行動錢包應用程式匯出您的 QDAY 錢包私鑰。
2. 在 MetaMask 中，點擊左上角的帳戶下拉圖標，選擇 **“Add wallet（新增錢包）”** > **“Import an account（匯入一個帳戶）”**。

   ![匯入 QDAY 錢包帳戶](/qday/metamask/import-qday-account.png)

3. 選擇 **“私鑰”** 並貼上您剛剛備份的私鑰字串，點擊 **“匯入”**，您的 QDAY 錢包便成功匯入 MetaMask。

   ![輸入 QDAY 錢包私鑰](/qday/metamask/input-qday-privatekey.png)

## 新增 ERC20 代幣到 MetaMask

### 新增 USD8 代幣到 MetaMask

1. 首先請確認 MetaMask 已切換至 QDAY 網路。
2. 在 **“Tokens（代幣）”** 標籤頁下方點擊 **“Import tokens（匯入代幣）”**。

   ![MetaMask 匯入 USD8 代幣1](/qday/metamask/import-tokens1.png)

3. 將下方表格中對應的代幣合約地址貼入 “Token contract address（代幣合約地址）” 欄位。

   ![MetaMask 匯入 USD8 代幣2](/qday/metamask/import-tokens2.png)

4. 其餘資訊會自動載入，點擊 **“Next（下一步）”** 然後點擊 **“Import（匯入）”** 即可完成。

   ![MetaMask 匯入 USD8 代幣3](/qday/metamask/import-tokens3.png)

### 新增 WQDAY、WABEL 代幣

#### 代幣合約地址清單

| 合約名稱  | 代幣合約地址                               |
| --------- | ------------------------------------------ |
| **USD8**  | 0x668FaAFd6b363d6cED62491BfCBE2A39da3D14cB |
| **WQDAY** | 0xEF253e9FC2d063869FD5B3C0E1c326aB7E030660 |
| **WABEL** | 0x3a4D0834fe667D780c0fa434Ec9c1c3b08181882 |

提示：按照上方相同步驟，將 WQDAY 和 WABEL 代幣新增到 MetaMask。
