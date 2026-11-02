---
title: Economics
draft: false
---

# Economics

:::note[Protocol-level staking]
The staking collateral described here is protocol-level staking planned for the upgraded network. It is separate from the QDAY/ABEL user staking programs, which ended on 15 Oct 2026.
:::

**Gas** — QDay Aevum uses an Ethereum-compatible gas model. Gas prices are denominated in the native gas token and follow EIP-1559 (base fee + priority fee). Through paymaster gas abstraction, users and AI agents can pay transaction fees in QDay's native stablecoin (USD8) instead of holding $QDAY.

**QDAY Token** — The QDAY token (total supply: 22,517,998,100) is used for staking collateral, governance, and fee payment. QDAY mirrors the total supply of ABEL on the Abelian L1.

**Paymaster Fee Sink & Token Buybacks** — A fixed percentage of stablecoin transaction surcharges collected by protocol paymasters routes to an on-chain Fee Sink contract that executes scheduled open-market buybacks of $QDAY.

**Sequencer & Prover Staking Collateral** — Per the whitepaper (§3.2), sequencer nodes and prover operators must stake $QDAY collateral to participate in block production and proof aggregation, locking token supply in proportion to network demand. Batch verification itself is performed by independent validators (see [Batch Verification Protocol](/Knowledge/technical/protocol/zk-proof-protocol)).

**Fee Discount Tiers** — Holding and staking $QDAY gives tiered discounts on paymaster surcharges for high-volume enterprise API facilitators and merchant gateways.
