---
title: QDAY Roadmap
---

# QDAY Roadmap

The product and network plan for QDay: an EVM-compatible Layer 2 on Abelian, then a payment network, then native quantum-resistant accounts.

## Three stages

| Stage | What ships | Security |
|---|---|---|
| **Phase 1** | EVM L2, rollups to Abelian (multi-validator batch verification; state roots committed to Abelian), wallets, Q-Swap, staking, bridge | Ledger settlement is quantum-resistant via L1 |
| **Phase 1.5** | Payment network: USD8, x402, paymaster gas abstraction, agent wallets / session keys, merchants, agent payments | Same L2; payments are a first-class layer |
| **Phase 2** | Native PQC accounts, wallets, and contracts on QDay | Quantum resistance at the account, not only the rollup |

How the stages fit together: [Introduction](/guide/handbook/introduction). PQC detail: [QDay PQC Roadmap](/guide/handbook/roadmap/pqc-roadmap). Payments: [QDAY Payment Roadmap](/guide/handbook/roadmap/payment-roadmap).

## Networks today

| | QDay |
|---|---|
| Status | QDay Aevum testnet live; QDay mainnet in development |
| Mainnet Chain ID | `44002` (in development) |
| Testnet Chain ID | `44005` |

Add a network: [Add QDay to your wallet](/guide/start/add-network). Parameters: [Chain params](/Knowledge/reference/chains).

## Milestone table

| Milestone | Target |
|---|---|
| Phase 1 development begins | 2024 Q2 |
| Phase 1 Testnet v1 | 2024 Q4 |
| Phase 1 Testnet v2 | 2025 Q2 |
| Phase 1 Mainnet | 2025 Q4 |
| Phase 1.5 (payment network) development begins | 2026 Q1 |
| Phase 1.5 upgrade (Enhanced Payment) on Aevum testnet: modular Polygon CDK upgrade; x402 facilitator and stablecoin paymaster live; agent wallets / session keys live | 2026 Q3 |
| Phase 2 (native quantum-resistant accounts) development begins | 2026 Q4 |
| Hybrid PQ agent keys (ECDSA + ML-DSA-65) — planned | 2026 Q4 |
| Phase 1.5 Mainnet (Enhanced Payment Network and native stablecoin) | 2027 Q1 |
| Phase 2 Testnet (native PQ accounts, contracts and wallets on Aevum) | 2027 Q2 |
| Phase 2 Mainnet | 2027 Q4 |

## What Phase 1 already covers

- EVM execution (Solidity, MetaMask, Remix, Hardhat, Foundry)
- Rollups to Abelian (multi-validator M-of-N batch verification; the Committer submits finalized state roots to Abelian) and a quantum-resistant halt if the ledger is attacked
- Explorer, faucet (testnet), [Q-Swap](/guide/handbook/user-guide/swap), [staking](/guide/handbook/user-guide/qday-staking) (ended Oct 2026), [bridges](/guide/handbook/user-guide#qday-bridge)

Builders: [Build on QDay](/guide/handbook/build-on-qday) and the [Technical knowledge base](/Knowledge/technical/developer-guide/getting-started).
