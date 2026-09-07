---
title: 支付開發
draft: false
---

# 支付開發

## 支付 SDK

```typescript
import { QDAYPayments } from "@qday-io/sdk/payments";

const payments = new QDAYPayments({
  rpcUrl: "https://rpc.qday.io",
  signer: myWallet,
});
```

## 發票（Invoice）

```typescript
// Create an invoice (merchant side)
const invoice = await payments.createInvoice({
  amount: parseUnits("9.99", 6), // 9.99 PQUSD
  currency: PQUSD_ADDRESS,
  memo: "Pro subscription - August 2026",
  expiresIn: 3600, // 1 hour
});

console.log("Pay at:", invoice.paymentUrl);
console.log("Invoice ID:", invoice.id);
```

## 結帳（Checkout）

```typescript
// Pay an invoice (payer side)
const receipt = await payments.payInvoice(invoice.id);
await receipt.wait(); // wait for L2 soft confirmation
```

## 訂閱（Subscription）

```typescript
// Create a recurring payment authorization
const subscription = await payments.createSubscription({
  merchant: MERCHANT_ADDRESS,
  amount: parseUnits("9.99", 6),
  period: "monthly",
  currency: PQUSD_ADDRESS,
});
// Under the hood this issues a Session Key to the merchant's payment contract
```

## 串流支付（Streaming Payment）

```typescript
// Stream 1 PQUSD per hour to a content provider
const stream = await payments.createStream({
  recipient: PROVIDER_ADDRESS,
  flowRate: parseUnits("1", 6) / BigInt(3600), // per second
  deposit: parseUnits("24", 6), // 24h deposit
  currency: PQUSD_ADDRESS,
});
```

## 代理支付（Agent Payment）

代理可透過支付代理（Payment Agent）自主為服務付款（請參閱 [AI 代理開發](/Knowledge/technical/developer-guide/ai-agent-development)）。支付合約會在釋放資金前驗證 Session Key。

## Webhook

註冊 Webhook 以即時接收支付通知：

```typescript
await payments.registerWebhook({
  url: "https://your-server.com/qday-webhook",
  events: ["invoice.paid", "subscription.renewed", "stream.stopped"],
  secret: process.env.WEBHOOK_SECRET,
});
```

Webhook 的酬載會使用你的 Webhook 密鑰以 HMAC-SHA256 簽章。處理之前請先驗證簽章：

```typescript
import { verifyWebhookSignature } from "@qday-io/sdk/payments";

app.post("/qday-webhook", (req, res) => {
  const isValid = verifyWebhookSignature(req.body, req.headers["x-qday-signature"], secret);
  if (!isValid) return res.status(401).end();
  // process event...
});
```
