---
title: Payment API
draft: false
---

# Payment API

:::note[Coming Q1 2027]
The QDay SDK (`@qday-io/sdk`) and CLI (`@qday-io/cli`) launch in Q1 2027 and are not yet published on npm. Code on this page shows the planned API.
:::

Application API for invoices, checkout, subscriptions, streams, agent payments, and webhooks. Implemented by `@qday-io/sdk/payments` against the Payment Gateway. How to wire it: [Payment Development](/Knowledge/technical/developer-guide/payment-development). Protocol states: [Payment Protocol](/Knowledge/technical/protocol/payment-protocol).

Until the gateway publishes a public spec, this table is the contract.

| Method | Side | Description |
|--------|------|-------------|
| `createInvoice({ amount, currency, memo, expiresIn })` | Merchant | Create an on-chain invoice; returns `id` and `paymentUrl` |
| `payInvoice(invoiceId)` | Payer | Pay the invoice; wait for L2 soft confirmation with `.wait()` |
| `createSubscription({ merchant, amount, period, currency })` | Payer | Recurring authorization (session key to the merchant contract) |
| `createStream({ recipient, flowRate, deposit, currency })` | Payer | Continuous payment (tokens per second) against a deposit |
| `registerWebhook({ url, events, secret })` | Merchant | Subscribe to `invoice.paid`, `subscription.renewed`, `stream.stopped` |
| `verifyWebhookSignature(body, signature, secret)` | Merchant | HMAC-SHA256 check before acting on a webhook |

**Events**

| Event | When |
|-------|------|
| `invoice.paid` | Invoice funds locked / paid |
| `subscription.renewed` | Period charge succeeded |
| `stream.stopped` | Stream ended (deposit empty, cancelled, or expired) |

Currency for the payment layer is **USD8** (6 decimals; **tUSD8** at `0x456569838f1d43009A91ebA4263147Afd7233483` on the QDay Aevum testnet) unless you pass another ERC-20. Network gas is paid in QDAY (tQDAY on testnet); individual apps may charge fees in a different token — the Agent Payment app (launching Q1 2027) will charge fees in USD8.
