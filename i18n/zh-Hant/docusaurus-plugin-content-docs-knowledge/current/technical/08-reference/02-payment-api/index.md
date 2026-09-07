---
title: 支付 API
draft: false
---

# 支付 API

用於發票、結帳、訂閱、串流支付、代理支付與 webhook 的應用程式 API。由 `@qday-io/sdk/payments` 針對支付閘道（Payment Gateway）實作。整合方式：[支付開發](/Knowledge/technical/developer-guide/payment-development)。協定狀態：[支付協定](/Knowledge/technical/protocol/payment-protocol)。

在閘道發布公開規格之前，此表即為介面契約。

| 方法 | 角色 | 說明 |
|--------|------|-------------|
| `createInvoice({ amount, currency, memo, expiresIn })` | 商家 | 建立鏈上發票；回傳 `id` 與 `paymentUrl` |
| `payInvoice(invoiceId)` | 付款方 | 支付發票；使用 `.wait()` 等待 L2 軟確認 |
| `createSubscription({ merchant, amount, period, currency })` | 付款方 | 定期授權（對商家合約的 session key） |
| `createStream({ recipient, flowRate, deposit, currency })` | 付款方 | 以押金為基礎的持續支付（每秒代幣數） |
| `registerWebhook({ url, events, secret })` | 商家 | 訂閱 `invoice.paid`、`subscription.renewed`、`stream.stopped` |
| `verifyWebhookSignature(body, signature, secret)` | 商家 | 處理 webhook 前進行 HMAC-SHA256 驗證 |

**事件**

| 事件 | 觸發時機 |
|-------|------|
| `invoice.paid` | 發票資金已鎖定 / 已支付 |
| `subscription.renewed` | 週期性扣款成功 |
| `stream.stopped` | 串流結束（押金耗盡、已取消或已到期） |

除非你指定其他 ERC-20，支付層的貨幣為 **PQUSD**（6 位小數）。地址：[官方合約地址](/Knowledge/reference/contracts)。
