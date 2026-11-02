---
title: 支付安全
draft: false
---

# 支付安全

:::note[部分已於 Aevum 測試網上線]
x402 facilitator、穩定幣 Paymaster 及會話密鑰（Session Key）支出限額已於 QDay Aevum 測試網上線；Enhanced Payment Network 及原生穩定幣的主網部署預定於 2027 年第一季進行。下文的 Payment Service、webhook 及訂閱控制措施描述的是計劃中的安全模型。
:::

**鏈上強制執行**——支付金額、收款方白名單與到期時間皆由鏈上的 Payment 合約強制執行。在付款方確認之後，Payment Service（鏈下 API）與商戶都無法更改支付條款。

**代理支付限額**——AI 支付代理的會話密鑰帶有嚴格的支出限額。無論收到甚麼外部指令，代理都無法發起超過其 `maxSinglePayment` 的支付，也無法超出其 `maxDailySpend`。

**Webhook 簽名驗證**——Payment Service 的 Webhook 以 HMAC-SHA256 簽署。商戶必須在依據 Webhook 數據採取行動之前驗證簽名，以防止重放與偽造攻擊。

**取消訂閱**——訂閱以可撤銷的會話密鑰實作。訂閱者可隨時呼叫 `SessionKeyManager.revokeSessionKey()` 撤銷商戶的支付授權。
