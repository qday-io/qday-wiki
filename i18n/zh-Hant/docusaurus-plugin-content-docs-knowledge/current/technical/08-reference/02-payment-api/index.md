---
title: 支付 API
draft: false
---

# 支付 API

:::note[將於 2027 年第一季推出]
QDay SDK（`@qday-io/sdk`）與 CLI（`@qday-io/cli`）將於 2027 年第一季推出，目前尚未在 npm 上發佈。本頁的程式碼展示的是計劃中的 API。
:::

用於發票、結帳、訂閱、串流支付、代理支付與 Webhook 的應用程式 API。由 `@qday-io/sdk/payments` 針對支付閘道（Payment Gateway）實作。整合方式：[支付開發](/Knowledge/technical/developer-guide/payment-development)。協議狀態：[支付協議](/Knowledge/technical/protocol/payment-protocol)。

在閘道發佈公開規格之前，此表即為介面契約。

| 方法 | 角色 | 說明 |
|--------|------|-------------|
| `createInvoice({ amount, currency, memo, expiresIn })` | 商戶 | 建立鏈上發票；返回 `id` 與 `paymentUrl` |
| `payInvoice(invoiceId)` | 付款方 | 支付發票；使用 `.wait()` 等待 L2 軟確認 |
| `createSubscription({ merchant, amount, period, currency })` | 付款方 | 定期授權（向商戶合約發出的會話密鑰） |
| `createStream({ recipient, flowRate, deposit, currency })` | 付款方 | 以押金為基礎的持續支付（每秒代幣數） |
| `registerWebhook({ url, events, secret })` | 商戶 | 訂閱 `invoice.paid`、`subscription.renewed`、`stream.stopped` |
| `verifyWebhookSignature(body, signature, secret)` | 商戶 | 處理 Webhook 前進行 HMAC-SHA256 驗證 |

**事件**

| 事件 | 觸發時機 |
|-------|------|
| `invoice.paid` | 發票資金已鎖定 / 已支付 |
| `subscription.renewed` | 週期性扣款成功 |
| `stream.stopped` | 串流結束（押金耗盡、已取消或已到期） |

除非你指定其他 ERC-20，支付層的貨幣為 **USD8**（小數位：6；在 QDay Aevum 測試網上為 **tUSD8**，地址 `0x456569838f1d43009A91ebA4263147Afd7233483`）。網絡 Gas 以 QDAY 支付（測試網上為 tQDAY）；個別應用程式可能以其他代幣收取手續費——Agent Payment 應用（2027 年第一季推出）將以 USD8 收取手續費。
