---
title: Payment Architecture
draft: false
---

# Payment Architecture

QDAY2 includes a first-class payment layer designed for high-frequency, low-latency commerce and agent-driven micropayments.

**Payment Gateway** — A unified API layer that abstracts the underlying smart contract interactions. Merchants and dApps interact with the Payment Gateway to create payment requests without writing contract code.

**Settlement** — Payments settle at L2 finality speed (typically seconds for soft confirmation, minutes for ZK-verified finality). The settlement engine handles currency conversion, fee distribution, and merchant payouts.

**Merchant** — Merchant onboarding registers a merchant address and webhook endpoint with the Payment Gateway. Merchants receive settlement notifications via webhook when payments finalize.

**Invoice** — A structured payment request with an amount, currency (PQUSD or native gas token), expiry, and metadata. Invoices are created on-chain and can be paid by any account or AI agent.

**Subscription** — Recurring payment plans are implemented as Session Key authorizations. A subscriber grants the merchant's payment contract a Session Key limited to a specific amount per period.

**Agent Payment** — AI agents can autonomously initiate payments within the bounds of their Session Key authorization. This enables fully autonomous commerce — agents pay for API calls, data feeds, and services without human sign-off on each transaction.
