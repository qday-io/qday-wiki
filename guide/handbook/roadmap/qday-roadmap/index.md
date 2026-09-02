---
title: QDAY Roadmap
---

# QDAY Roadmap

The product and network plan for QDay: an EVM-compatible Layer 2 on Abelian, then a payment network, then native quantum-resistant accounts.

## Three stages

| Stage | What ships | Security |
|---|---|---|
| **Phase 1** | EVM L2, ZK rollups to Abelian, wallets, Swap, staking, bridge | Ledger settlement is quantum-resistant via L1 |
| **Phase 1.5** | Payment network: USD8, invoices, merchants, agent payments | Same L2; payments are a first-class layer |
| **Phase 2** | Native PQC accounts, wallets, and contracts on QDay | Quantum resistance at the account, not only the rollup |

How the stages fit together: [Introduction](/guide/handbook/introduction). PQC detail: [QDAY PQC Roadmap](/guide/handbook/roadmap/pqc-roadmap). Payments: [QDAY Payment Roadmap](/guide/handbook/roadmap/payment-roadmap).

## Networks today

| | QDAY V1 (Origin) | QDAY V2 (Aevum) |
|---|---|---|
| Status | Live | Testnet live; mainnet coming |
| Mainnet Chain ID | `44001` | `44002` (coming soon) |
| Testnet Chain ID | `44003` | `44005` |

Add a network: [Get Started](/guide/start/add-network). Parameters: [Chain params](/Knowledge/reference/chains).

## Milestone table

| Milestone | Target |
|---|---|
| Phase 1 development begins | 2024 Q2 |
| Phase 1 Testnet v1 | 2024 Q4 |
| Phase 1 Testnet v2 | 2025 Q2 |
| Phase 1 Mainnet | 2025 Q4 |
| Phase 1.5 (payment network) development begins | 2026 Q1 |
| Phase 1.5 Testnet | 2026 Q3 |
| Phase 2 (native quantum-resistant accounts) development begins | 2026 Q4 |
| Phase 1.5 Mainnet | 2027 Q1 |
| Phase 2 Testnet | 2027 Q2 |
| Phase 2 Mainnet | 2027 Q4 |

## What Phase 1 already covers

- EVM execution (Solidity, MetaMask, Remix, Hardhat, Foundry)
- ZK rollups to Abelian and a quantum-resistant halt if the ledger is attacked
- Explorer, faucet (testnet), [Swap](/guide/handbook/user-guide/swap), [staking](/guide/handbook/user-guide/qday-staking), [bridges](/guide/handbook/user-guide#qday-bridge)

Builders: [Build on QDay](/guide/handbook/build-on-qday) and the [Technical knowledge base](/Knowledge/technical/developer-guide/getting-started).
