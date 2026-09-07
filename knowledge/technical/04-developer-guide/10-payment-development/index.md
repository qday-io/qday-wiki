---
title: Payment Development
draft: false
---

# Payment Development

## Payment SDK

```typescript
import { QDAYPayments } from "@qday-io/sdk/payments";

const payments = new QDAYPayments({
  rpcUrl: "https://rpc.qday.io",
  signer: myWallet,
});
```

## Invoice

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

## Checkout

```typescript
// Pay an invoice (payer side)
const receipt = await payments.payInvoice(invoice.id);
await receipt.wait(); // wait for L2 soft confirmation
```

## Subscription

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

## Streaming Payment

```typescript
// Stream 1 PQUSD per hour to a content provider
const stream = await payments.createStream({
  recipient: PROVIDER_ADDRESS,
  flowRate: parseUnits("1", 6) / BigInt(3600), // per second
  deposit: parseUnits("24", 6), // 24h deposit
  currency: PQUSD_ADDRESS,
});
```

## Agent Payment

Agents pay for services autonomously using a Payment Agent (see [AI Agent Development](/Knowledge/technical/developer-guide/ai-agent-development)). The payment contract verifies the session key before releasing funds.

## Webhook

Register a webhook to receive real-time payment notifications:

```typescript
await payments.registerWebhook({
  url: "https://your-server.com/qday-webhook",
  events: ["invoice.paid", "subscription.renewed", "stream.stopped"],
  secret: process.env.WEBHOOK_SECRET,
});
```

Webhook payloads are signed with HMAC-SHA256 using your webhook secret. Verify the signature before processing:

```typescript
import { verifyWebhookSignature } from "@qday-io/sdk/payments";

app.post("/qday-webhook", (req, res) => {
  const isValid = verifyWebhookSignature(req.body, req.headers["x-qday-signature"], secret);
  if (!isValid) return res.status(401).end();
  // process event...
});
```
