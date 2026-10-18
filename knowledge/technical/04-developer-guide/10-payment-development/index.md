---
title: Payment Development
draft: false
---

# Payment Development

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. Code on this page shows the planned API.
:::

## Payment SDK

The samples below target the QDay Aevum testnet (chain ID `44005`) and use **tUSD8**, the testnet version of the USD8 stablecoin (18 decimals). On QDay mainnet, use USD8 — its address will be published at launch.

```typescript
import { QDAYPayments } from "@qday-io/sdk/payments";

// tUSD8 on QDay Aevum testnet (18 decimals)
const TUSD8_ADDRESS = "0x456569838f1d43009A91ebA4263147Afd7233483";

const payments = new QDAYPayments({
  rpcUrl: "https://rpc-test.qday.info",
  signer: myWallet,
});
```

:::info[Fee tokens]
Regular network gas is paid in QDAY (tQDAY on testnet). Individual apps may charge fees in a different token — for example, the Agent Payment app (launching with QDay mainnet in Q1 2027) will charge fees in USD8.
:::

## Invoice

```typescript
// Create an invoice (merchant side)
const invoice = await payments.createInvoice({
  amount: parseUnits("9.99", 18), // 9.99 tUSD8
  currency: TUSD8_ADDRESS,
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
  amount: parseUnits("9.99", 18),
  period: "monthly",
  currency: TUSD8_ADDRESS,
});
// Under the hood this issues a Session Key to the merchant's payment contract
```

## Streaming Payment

```typescript
// Stream 1 tUSD8 per hour to a content provider
const stream = await payments.createStream({
  recipient: PROVIDER_ADDRESS,
  flowRate: parseUnits("1", 18) / BigInt(3600), // per second
  deposit: parseUnits("24", 18), // 24h deposit
  currency: TUSD8_ADDRESS,
});
```

## Agent Payment

Agents pay for services autonomously using a Payment Agent (see [AI Agent Development](/Knowledge/technical/developer-guide/ai-agent-development)). The payment contract verifies the session key before releasing funds. In the Agent Payment app, fees are paid in USD8 (tUSD8 on testnet) rather than in QDAY.

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
