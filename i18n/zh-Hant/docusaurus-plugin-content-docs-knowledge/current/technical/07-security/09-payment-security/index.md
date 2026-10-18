---
title: 支付安全
draft: false
---

# 支付安全

:::note[計劃中——2027 年第一季]
支付層（包括 Agent Payment 及基於會話密鑰（Session Key）的訂閱）將於 2027 年第一季隨 QDay 主網推出，目前尚未上線。以下控制措施描述的是計劃中的安全模型。
:::

**鏈上強制執行**——支付金額、收款方白名單與到期時間皆由鏈上的 Payment 合約強制執行。在付款方確認之後，Payment Service（鏈下 API）與商戶都無法更改支付條款。

**代理支付限額**——AI 支付代理的會話密鑰帶有嚴格的支出限額。無論收到甚麼外部指令，代理都無法發起超過其 `maxSinglePayment` 的支付，也無法超出其 `maxDailySpend`。

**Webhook 簽名驗證**——Payment Service 的 Webhook 以 HMAC-SHA256 簽署。商戶必須在依據 Webhook 數據採取行動之前驗證簽名，以防止重放與偽造攻擊。

**取消訂閱**——訂閱以可撤銷的會話密鑰實作。訂閱者可隨時呼叫 `SessionKeyManager.revokeSessionKey()` 撤銷商戶的支付授權。
