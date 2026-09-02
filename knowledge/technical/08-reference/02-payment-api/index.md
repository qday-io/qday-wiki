---
title: Payment API
draft: false
---

# Payment API

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

Currency for the payment layer is **PQUSD** (6 decimals) unless you pass another ERC-20. Addresses: [Official contract addresses](/Knowledge/reference/contracts).
