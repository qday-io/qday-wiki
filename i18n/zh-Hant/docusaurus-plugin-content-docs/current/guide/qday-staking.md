---
sidebar_position: 4
---

# QDAY 質押用戶指引

## 前置要求

在開始質押之前，請確保您具備以下條件：

- 一個支援 EVM 的錢包（例如 MetaMask），並已新增 QDay 主網
- 錢包中有足夠的 QDAY 或 WQDAY
- 少量 QDAY 用於支付網路交易手續費
- 確保訪問正確的 QDAY 官方質押入口網站
- 了解所選鎖定期限及其限制

:::warning[重要風險提示：]
- 質押涉及與智慧合約互動
- 區塊鏈交易一旦確認通常不可逆轉
- 鎖定的代幣在鎖定期到期前無法解除質押
- 獎勵率和分配可能會根據協議設計隨時間變化
- 批准交易前，請務必核對網站 URL 及錢包提示詳情
:::

### 我如何獲得 QDAY？

- **方法 1：質押 ABEL 賺取 QDAY**
  1. 首先需要購買 ABEL，您可以透過 MEXC、BitMart 交易所，或使用 Abelian 行動錢包（Abelian Mobile Wallet）的應用程式內購（In-app purchase）功能來取得。
  2. 將 ABEL 質押即可獲得 QDAY 獎勵。詳細教學請參考 [ABEL 質押用戶指引](/docs/guide/abel-staking)。

- **方法 2：使用 USD8 兌換 QDAY**
  1. 透過 **[QDay Bridge](https://portal.qday.io/zh-HK/bridge)**：使用 USDT (ETH) 購買 USD8；或者使用 Abelian 行動錢包的應用程式內購功能購買 USD8。
  2. 透過 **[QDay 兌換 (Swap)](https://portal.qday.io/zh-HK/qday-swap)** 或 Abelian 行動錢包內的兌換功能：將 USD8 兌換為 QDAY。詳細教學請參考 [QDay Swap 用戶指引](/docs/guide/swap)。

### 質押機制說明

- 質押時系統會自動將 QDAY 轉換為 WQDAY（封裝代幣）
- 鎖定期越長，獲得的份額越高
- 獎勵每天自動累積，可隨時領取並提領到錢包

## 教學

請按照以下步驟開始質押：

### 步驟 1: 設定錢包

登入您的 EVM 錢包（例如 MetaMask）並新增 QDay 主網為自訂網路。詳細步驟請參考 [MetaMask 錢包帳戶用戶指引 - 新增 QDay 網路](/docs/guide/metamask#新增-qday-網路到-metamask)。

### 步驟 2: 訪問質押頁面

- 前往 https://portal.qday.io/
- 在左側導覽列點擊 **「質押(Staking)」**，進入質押頁面。

  ![質押門戶主頁](/qday/staking/portal-2-zh.png)

- 點擊 **「連接錢包(Connect Wallet)」**，選擇您偏好的錢包（支援 MetaMask、WalletConnect、Rainbow）並完成連結。

  ![連接錢包選項](/qday/staking/qday-connect-wallet-dialog-zh.png)

### 步驟 3: 質押

#### 質押

- 確保在「選擇代幣」下拉選單中選擇 **WQDAY**。

  ![WQDAY 質押介面](/qday/staking/wqday-staking-zh.png)

- 輸入金額，選擇鎖定期限，然後點擊 **「質押(Stake)」** 並在您的錢包中確認交易。

:::warning[注意]
1. 最長鎖定期限為 1460 天（4 年）。
2. 質押 **QDAY** 時，如果您有足夠餘額，系統會自動將 QDAY 轉換為 WQDAY（封裝代幣）。
:::

#### 我的質押 (My Staking)

質押完成後，您可以在「我的質押(My Staking)」分頁查看詳情：

- **每日獎勵自動累積** → **領取** 您的待領獎勵 → 從金庫餘額 **提領** 至您的 EVM 錢包。
- 每筆記錄將顯示質押數量、鎖定期及剩餘天數，並提供以下操作：
  - **延長鎖定期 (Extend Lock Period)**: 延長現有質押的鎖定期限，以繼續累積獎勵。
  - **增加質押 (Add Stake)**: 對現有質押位追加代幣，增加質押數量以提升每日獎勵。
  - **解除質押 (Unstake)**: 鎖定期到期後，取回質押的代幣。鎖定期內無法操作。

  ![我的質押詳情](/qday/staking/qday-stake-details-zh.png)

#### 儀表盤 (Dashboard)

在左側導覽列點擊 **「儀表盤(Dashboard)」** 分頁，您可以全方位檢視您的所有質押資產。

  ![儀表盤詳情](/qday/staking/dashboard-zh.png)

## 關於 WQDAY 質押獎勵

### 獎勵池
- QDAY 總供應量的 50%（約 112.59 億枚代幣）被分配用於質押獎勵。

### 每日發放
- 每天，剩餘獎勵池的 1/1000 將分配給質押者。
- 由於分配是根據剩餘獎勵池計算的，每日發放量會隨著時間逐漸減少。

### 獎勵份額計算
您的每日獎勵基於您的份額計算，公式如下：
**份額 = 質押數量 × 剩餘鎖定天數**

**範例：**
- 如果您質押 100 QDAY 並鎖定 1460 天，您的份額為：
  100 × 1460 = 146,000
- 如果另一位用戶質押 200 QDAY 並鎖定 730 天，他們的份額為：
  200 × 730 = 146,000

在這個簡化的範例中，兩者的質押份額相同，因此在其他條件皆相同的情況下，他們將獲得相同比例的每日獎勵分配。

:::warning[重要提示：]
- 此為簡化說明，僅供參考。
- 獎勵並非固定或保證的。
- 實際獎勵取決於以下因素：
  - 獎勵池中的剩餘數量
  - 所有參與質押者的總份額
  - 質押狀況隨時間的變化
:::

