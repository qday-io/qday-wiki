---
title: Payment Ecosystem
draft: false
---

# Payment Ecosystem

**USD8** — A USD-pegged stablecoin (6 decimals) and the primary currency for the QDay payment layer, used for invoices, subscriptions, and agent micropayments. On the QDay Aevum testnet it is available as **tUSD8**.

| Token | Network | Address |
|-------|---------|---------|
| tUSD8 | QDay Aevum testnet (`44005`) | `0x456569838f1d43009A91ebA4263147Afd7233483` |
| USD8 | QDay mainnet (`44002`) | Published at launch |

**Fees** — Through paymaster gas abstraction, users and AI agents can pay transaction fees in QDay's native stablecoin (USD8) instead of holding $QDAY; the stablecoin paymaster is live on the QDay Aevum testnet. Regular EOA wallets such as MetaMask still pay gas in the native token (tQDAY on testnet, from the [faucet](/guide/start/faucet)). Individual apps may charge fees in a different token: in the Agent Payment app, fees are paid in USD8.

**Payment Gateway** *(planned — with the mainnet Enhanced Payment Network in Q1 2027)* — A developer API and SDK for creating invoices, managing subscriptions, streaming payments, and receiving webhooks. See [Developer Guide](/Knowledge/technical/developer-guide/getting-started) for integration examples.

**Agent Payments** *(x402 facilitator and session keys live on the QDay Aevum testnet; mainnet in Q1 2027)* — AI agents can autonomously pay for API calls, data feeds, compute, and other services using session-key-bounded USD8 payments (including x402-style pay-per-request). This enables a new class of autonomous, machine-to-machine commerce without human sign-off on each transaction.
