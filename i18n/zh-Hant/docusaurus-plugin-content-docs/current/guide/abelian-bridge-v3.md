---
sidebar_position: 6
---

# Abelian Bridge Ver 3.0 用戶指南

本指南說明如何使用 **Abelian 跨鏈橋 (Abelian Bridge)** 在 Abelian 與 QDay 網路之間轉移資產。

支援的跨鏈方向：

- **ABEL → WABEL**
- **WABEL → ABEL**

## 教學

請按照以下步驟完成跨鏈交易。

[**終端用戶入口網址**](https://portal.qday.io/zh-HK/abel-conversion)

### 步驟 1：連接您的錢包並授權跨鏈橋

在開始跨鏈交易之前，請先將您的錢包連接至 Abelian 跨鏈橋。

錢包連接完成後：

1. 點擊 **授權 (Authorize)**。
2. 在 MetaMask 中檢視簽署請求。
3. 點擊 **確認 (Confirm)** 以繼續。

此授權允許您的錢包與跨鏈橋進行互動。

:::tip[說明]
此步驟不會轉移代幣，亦不需要支付網路交易手續費。
:::

![MetaMask 錢包授權](/abel-bridge-v3/01-authorize-wallet.png)

*在 MetaMask 中確認跨鏈橋授權請求以繼續。*

### 步驟 2：輸入跨鏈詳細資訊

#### 小額交易

輸入跨鏈交易的詳細資訊。

若要繼續：

1. 選擇來源 **網路 (Network)** 與 **代幣 (Token)**。
2. 在 **金額 (Amount)** 欄位中輸入您要跨鏈的數量。
3. 在 **錢包地址 (Wallet Address)** 欄位中輸入目標錢包地址。
4. 核對目標網路、代幣及預計接收金額。
5. 如有需要，可在 **備註 (Note)** 欄位中輸入備註。
6. 點擊 **產生 QR Code (Generate QR Code)**。

:::tip[說明]
在繼續之前，請確保目標錢包地址正確無誤。**備註 (Note)** 欄位為選填。
:::

![輸入小額跨鏈詳細資訊](/abel-bridge-v3/02-low-amount-details.png)

*輸入跨鏈交易詳細資訊，如網路、代幣、金額及錢包地址。*

#### 切換跨鏈方向

點擊 **來源 (From)** 與 **目標 (To)** 區塊之間的 **切換圖示**，即可切換跨鏈方向：

- **ABEL → WABEL**
- **WABEL → ABEL**

來源與目標的網路、代幣及錢包資訊將會自動更新。

#### 使用最大餘額

點擊 **MAX** 即可在 **金額 (Amount)** 欄位中自動填入您所有可用的代幣餘額。

在繼續之前，請核對預計接收金額與目標錢包地址。

輸入所需資訊後，點擊 **建立新訂單 (Generate New Order)**。

:::warning[重要提示]
在建立訂單之前，請務必確認所選的跨鏈方向及目標錢包地址皆正確無誤。
:::

![切換跨鏈方向與使用最大餘額選項](/abel-bridge-v3/03-direction-and-max.png)

*切換跨鏈方向或點擊 MAX 以使用可用的代幣餘額。*

#### 大額交易

當輸入的金額符合以下條件時，該筆跨鏈交易將被視為大額交易：

- **10,000 ABEL 或以上**（**ABEL → WABEL** 交易）
- **10,000 WABEL 或以上**（**WABEL → ABEL** 交易）

當輸入的金額等於或大於設定的 **多重門檻 (Multi Threshold)** 時，系統將顯示 **大額轉換請求 (Large conversion request)** 警告。

大額交易需要人工審核與批准後才能進行處理，因此處理時間可能需要 **最多 24 小時**。

若要繼續：

1. 仔細閱讀警告訊息。
2. 在 **錢包地址 (Wallet Address)** 欄位中輸入目標地址。
3. 填寫其餘跨鏈詳細資訊。
4. 點擊 **建立新訂單 (Generate New Order)**。

:::warning[重要提示]
大額交易不會自動處理，在完成管理員審核之前將保持待處理狀態。
:::

![大額交易警告](/abel-bridge-v3/04-large-amount-warning.png)

*針對需要人工審核的大額轉換請求顯示警告訊息。*

#### 確認交易

點擊 **產生 QR Code (Generate QR Code)** 或 **建立新訂單 (Generate New Order)** 後，系統將顯示 **確認交易 (Confirm Transaction)** 彈出視窗。

請仔細核對以下資訊：

- 欲轉換的金額
- 交易手續費
- 預計傳送或接收的總金額
- 預估跨鏈 Gas 費
- 預估訂單完成時間

閱讀充值通知後，點擊 **確認並送出 (Confirm & Submit)** 以繼續。

:::warning[重要提示]
請務必使用與跨鏈詳細資訊中所輸入相同的錢包地址發送代幣。若使用不同或未識別的地址進行充值，系統可能無法自動偵測，並可能導致處理延遲。
:::

![ABEL 至 WABEL 確認彈出視窗](/abel-bridge-v3/05-confirm-abel-to-wabel.png)

*ABEL -> WABEL 跨鏈的確認彈出視窗。*

![WABEL 至 ABEL 確認彈出視窗](/abel-bridge-v3/06-confirm-wabel-to-abel.png)

*WABEL -> ABEL 跨鏈的確認彈出視窗。*

### 步驟 3：完成代幣轉帳

轉帳方式取決於所選擇的跨鏈方向：

- **ABEL → WABEL：** 使用 Abelian 行動錢包 App 掃描 QR Code 並完成 ABEL 轉帳。
- **WABEL → ABEL：** 點擊 **轉帳 WABEL (Transfer WABEL)** 並在已連接的錢包中確認交易。

#### 小額 ABEL → WABEL 交易

確認交易詳細資訊後，系統將顯示 **掃描 QR Code (Scan QR Code)** 彈出視窗。

若要完成轉帳：

1. 開啟 **Abelian 行動錢包 App**。
2. 選擇 **Abelian** 帳戶。
3. 點擊 **發送 (Send)**，然後選擇 **(W)ABEL Conversion**。
4. 掃描跨鏈橋頁面上顯示的 QR Code。
5. 在 App 中檢視轉帳詳細資訊並確認交易。

彈出視窗會顯示發送者地址、接收者地址、轉帳金額以及完成充值的剩餘時間。

:::warning[重要提示]
請在 QR Code 過期前完成轉帳。網路手續費會在轉帳期間於 Abelian 行動錢包 App 中計算。
:::

![掃描 ABEL 至 WABEL 充值 QR Code](/abel-bridge-v3/07-scan-qr-code.png)

*使用 Abelian 行動錢包 App 掃描 QR Code 以完成充值。*

#### 跨鏈成功（ABEL → WABEL）

對於小額交易，系統會自動偵測已完成的充值並處理跨鏈請求。

當交易成功完成時，**跨鏈成功 (Bridge Successful)** 畫面會顯示：

- 接收到的金額
- 交易雜湊 (Transaction hash)
- 發送者與接收者地址
- 發送金額
- 交易手續費
- 變更前餘額
- 變更後餘額

點擊 **開始新轉換 (Start New Conversion)** 即可建立另一筆跨鏈交易。

:::tip[說明]
在充值完成後，處理可能需要幾分鐘的時間。
:::

![ABEL 至 WABEL 跨鏈成功](/abel-bridge-v3/08-bridge-success-abel-to-wabel.png)

*跨鏈成功畫面，顯示交易詳細資訊與更新後的餘額。*

#### WABEL → ABEL 交易

進行 **WABEL → ABEL** 交易時，請從連接的錢包發送 WABEL 至跨鏈橋充值地址。

若要完成轉帳：

1. 檢視跨鏈橋充值地址與轉帳金額。
2. 點擊 **轉帳 WABEL (Transfer WABEL)**。
3. 在連接的錢包中檢視交易詳細資訊。
4. 確認交易。

系統會自動從您連接的錢包發送 WABEL 至顯示的跨鏈橋充值地址。

:::warning[重要提示]
請在充值請求過期前完成轉帳。在交易提交完成前，請勿關閉錢包確認視窗。
:::

![轉帳 WABEL 充值畫面](/abel-bridge-v3/09-transfer-wabel.png)

*檢視充值詳細資訊並點擊 Transfer WABEL 以發起交易。*

#### 跨鏈成功（WABEL → ABEL）

對於小額 **WABEL → ABEL** 交易，系統會自動偵測已完成的充值並處理跨鏈請求。

當交易成功完成時，**跨鏈成功 (Bridge Successful)** 畫面會顯示：

- 接收到的 ABEL 金額
- 交易雜湊 (Transaction hash)
- 發送者與接收者地址
- 發送的 WABEL 金額
- 交易手續費

點擊 **開始新轉換 (Start New Conversion)** 即可建立另一筆跨鏈交易。

:::tip[說明]
在錢包交易確認後，處理可能需要幾分鐘的時間。
:::

![WABEL 至 ABEL 跨鏈成功](/abel-bridge-v3/10-bridge-success-wabel-to-abel.png)

*跨鏈成功畫面，顯示接收到的 ABEL 與交易詳細資訊。*

#### 大額交易

大額跨鏈交易在完成代幣轉帳後需要人工審核。

審核結果如下：

- 若請求獲得批准，交易將被處理，狀態將變更為 **跨鏈成功 (Bridge Successful)**。
- 若請求被拒絕，狀態將變更為 **跨鏈失敗 (Bridge Failed)**，此時可申請退款。

##### 申請退款

當顯示 **跨鏈失敗 (Bridge Failed)** 畫面時：

1. 檢視拒絕原因。
2. 點擊 **退款 (Refund)**。
3. 按照螢幕上的指示提交退款申請。

點擊 **開始新轉換 (Start New Conversion)** 即可建立另一筆跨鏈交易。

:::tip[說明]
在大額交易達到所需的管理員批准或拒絕數量之前，可能會保持待處理狀態。
:::

![大額交易失敗畫面](/abel-bridge-v3/11-large-transaction-failed.png)

*跨鏈失敗畫面，顯示遭拒絕或失敗的交易，並提供申請退款選項。*

##### 申請退款流程

當轉換遭拒絕、失敗或過期時，**退款 (Refund)** 選項可能會變為可用狀態。

若要申請退款：

1. 在 **跨鏈詳細資訊 (Bridge Detail)** 畫面上記點擊 **退款 (Refund)**。
2. 在彈出視窗中核對退款金額。
3. 點擊 **確認 (Confirm)** 以提交退款申請。

退款包含原始金額及適用的交易手續費。

:::tip[說明]
退款處理時間取決於網路狀況。
:::

![申請退款確認彈出視窗](/abel-bridge-v3/12-request-refund.png)

*退款確認彈出視窗，顯示退款總金額。*

#### 退款完成

當退款成功處理完成時，狀態將變更為 **退款完成 (Refund Completed)**。

**退款完成 (Refund Completed)** 畫面會顯示：

- 退款金額
- 退款交易雜湊
- 目標錢包地址

點擊 **開始新轉換 (Start New Conversion)** 即可建立另一筆跨鏈交易。

:::tip[說明]
退還的代幣將返還至 **退款至 (Refunded to)** 欄位中顯示的錢包地址。
:::

![退款完成畫面](/abel-bridge-v3/13-refund-completed.png)

*退款完成畫面，顯示退款金額與交易雜湊。*

## 最近交易紀錄

**最近交易紀錄 (Recent Transactions)** 區塊會顯示您的跨鏈交易歷史紀錄。

每筆交易顯示：

- 跨鏈方向
- 目前狀態
- 最後更新時間
- 交易金額
- 預估完成時間（若可用）

將滑鼠懸停在交易上並點擊 **檢視 (View)** 即可開啟其詳細資訊。

使用 **上一頁 (Previous)** 與 **下一頁 (Next)** 在頁面之間進行切換。

![最近交易紀錄列表](/abel-bridge-v3/14-recent-transactions.png)

*最近交易歷史紀錄區塊，顯示過往的跨鏈活動。*
