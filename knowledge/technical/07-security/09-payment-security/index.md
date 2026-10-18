---
title: Payment Security
draft: false
---

# Payment Security

:::note[Planned — Q1 2027]
The payment layer, including Agent Payment and session-key subscriptions, launches with QDay mainnet in Q1 2027 and is not live today. The controls below describe the planned security model.
:::

**On-chain enforcement** — Payment amounts, recipient whitelists, and expiry are enforced by the Payment contract on-chain. Neither the Payment Service (off-chain API) nor the merchant can alter payment terms after the payer has committed.

**Agent payment limits** — Session Keys for AI payment agents carry strict spend limits. An agent cannot initiate a payment larger than its `maxSinglePayment` or exceed its `maxDailySpend`, regardless of what external instructions it receives.

**Webhook signature verification** — Payment Service webhooks are signed with HMAC-SHA256. Merchants must verify the signature before acting on webhook data to prevent replay and spoofing attacks.

**Subscription cancellation** — Subscriptions are implemented as revocable Session Keys. The subscriber can revoke the merchant's payment authorization at any time by calling `SessionKeyManager.revokeSessionKey()`.
