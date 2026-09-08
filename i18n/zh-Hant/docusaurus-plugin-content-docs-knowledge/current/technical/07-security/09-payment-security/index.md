---
title: 支付安全性
draft: false
---

# 支付安全性

**鏈上強制執行**——支付金額、收款方白名單與到期時間皆由鏈上的 Payment 合約強制執行。在付款方確認之後，Payment Service（鏈下 API）與商家都無法更改支付條款。

**Agent 支付限額**——AI 支付 Agent 的 Session Key 帶有嚴格的支出限額。無論收到什麼外部指令，Agent 都無法發起超過其 `maxSinglePayment` 的支付，也無法超出其 `maxDailySpend`。

**Webhook 簽章驗證**——Payment Service 的 webhook 以 HMAC-SHA256 簽署。商家必須在依據 webhook 資料採取行動之前驗證簽章，以防止重放與偽造攻擊。

**取消訂閱**——訂閱以可撤銷的 Session Key 實作。訂閱者可隨時呼叫 `SessionKeyManager.revokeSessionKey()` 撤銷商家的支付授權。
