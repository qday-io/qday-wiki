---
title: Payment Architecture
draft: false
---

# Payment Architecture

:::note[Live on Aevum testnet — mainnet Q1 2027]
The x402 facilitator and the stablecoin paymaster are live on the QDay Aevum testnet (Phase 1.5 upgrade, 2026 Q3). Mainnet deployment of the Enhanced Payment Network and the native stablecoin (USD8) is scheduled for Q1 2027. The Payment Gateway, merchant, invoice and Agent Payment components below describe the planned design.
:::

QDay includes a first-class payment layer designed for high-frequency, low-latency commerce and agent-driven micropayments.

**Payment Gateway** — A unified API layer that abstracts the underlying smart contract interactions. Merchants and dApps interact with the Payment Gateway to create payment requests without writing contract code.

**Settlement** — Payments settle at L2 finality speed (sub-second on QDay itself; the finalized state root is then committed to Abelian after multi-validator M-of-N verification). The settlement engine handles currency conversion, fee distribution, and merchant payouts.

**Merchant** — Merchant onboarding registers a merchant address and webhook endpoint with the Payment Gateway. Merchants receive settlement notifications via webhook when payments finalize.

**Invoice** — A structured payment request with an amount, currency (USD8 or the native gas token QDAY), expiry, and metadata. Invoices are created on-chain and can be paid by any account or AI agent.

**Subscription** — Recurring payment plans are implemented as Session Key authorizations. A subscriber grants the merchant's payment contract a Session Key limited to a specific amount per period.

**Agent Payment** — AI agents can autonomously initiate payments within the bounds of their Session Key authorization. This enables fully autonomous commerce — agents pay for API calls, data feeds, and services without human sign-off on each transaction.
