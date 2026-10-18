---
title: Payment Ecosystem
draft: false
---

# Payment Ecosystem

**USD8** — A USD-pegged stablecoin (18 decimals) and the primary currency for the QDay payment layer, used for invoices, subscriptions, and agent micropayments. On the QDay Aevum testnet it is available as **tUSD8**.

| Token | Network | Address |
|-------|---------|---------|
| tUSD8 | QDay Aevum testnet (`44005`) | `0x456569838f1d43009A91ebA4263147Afd7233483` |
| USD8 | QDay mainnet (`44002`) | Published at launch |

**Fees** — Regular network gas is paid in QDAY (tQDAY on testnet). Individual apps may charge fees in a different token: in the Agent Payment app (launching with QDay mainnet in Q1 2027), fees will be paid in USD8.

**Payment Gateway** *(planned — launches with QDay mainnet in Q1 2027)* — A developer API and SDK for creating invoices, managing subscriptions, streaming payments, and receiving webhooks. See [Developer Guide](/Knowledge/technical/developer-guide/getting-started) for integration examples.

**Agent Payments** *(planned — launches with QDay mainnet in Q1 2027)* — AI agents will be able to autonomously pay for API calls, data feeds, compute, and other services using session-key-bounded USD8 payments (including x402-style pay-per-request). This will enable a new class of autonomous, machine-to-machine commerce without human sign-off on each transaction.
