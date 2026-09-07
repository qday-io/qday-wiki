---
title: Build on QDay
sidebar_position: 7
---

# Build on QDay

QDay is EVM-compatible: Solidity, MetaMask, Remix, Hardhat, Foundry, and wagmi/viem work as they do on Ethereum. Point them at QDay RPC and build. The pages below are the technical knowledge base — this handbook page is the map; the details live there and will keep growing.

## Technical knowledge base

Use the **Technical** docs to stand up your own service on QDay: connect to the chain, deploy contracts, and call them from a dApp.

- **[Developer Guide](/Knowledge/technical/developer-guide/getting-started)** — network, RPC, dApp walkthrough, wallets, Smart Accounts, agents, and payments
- **[System architecture](/Knowledge/technical/system-architecture)** — how the rollup, RPC, and application layer fit together
- **[Chain parameters](/Knowledge/reference/chains)** · **[Contracts](/Knowledge/reference/contracts)** — IDs, RPCs, and official addresses

Start with [Add QDay to your wallet](/guide/start/add-network) and [deploy a first contract in Remix](/guide/handbook/getting-started#deploy-your-first-smart-contract) if you have not used the network yet.

## Infrastructure

Do not scrape every block yourself. QDay’s shared infrastructure is meant for production apps: RPC, explorer, **indexer**, **price oracle**, faucet, and related APIs. How to connect and query them is documented with the ecosystem.

- **RPC & explorer** — JSON-RPC and Blockscout-style explorer ([Infrastructure](/Knowledge/technical/ecosystem/infrastructure))
- **Indexer** — token transfers, DEX trades, payment and agent events over GraphQL, so you do not replay chain history ([Indexer](/Knowledge/technical/ecosystem/infrastructure))
- **Price oracle** — on-chain feeds compatible with Chainlink’s Aggregator interface ([Oracle & Data](/Knowledge/technical/ecosystem/oracle-data))
- **Connect / RPC** — endpoints and `wallet_addEthereumChain` ([Network Configuration](/Knowledge/technical/developer-guide/network-configuration), [Wallet Integration](/Knowledge/technical/developer-guide/wallet-integration))

Operator-facing runbooks live in the [Operator Guide](/Knowledge/technical/operator-guide). Endpoint URLs and API shapes will be filled in on those pages as services go live.

## SDKs

Application-level SDKs wrap Smart Accounts, agents, and **payments** so you can ship without assembling raw RPC and ABIs.

| Package | Use |
|---|---|
| `@qday-io/sdk` | TypeScript client: Smart Accounts, bundler, payments, agents |
| `@qday-io/sdk/payments` | **Payment SDK** — invoices, checkout, subscriptions, streams, webhooks |
| `@qday-io/sdk/aa` | ERC-4337 Smart Accounts and session keys |
| `@qday-io/sdk/agent` | On-chain AI agents (MCP + intent registry) |
| `@qday-io/cli` | CLI for the same surface (`npm install -g @qday-io/cli`) |

Install and examples: [Developer Guide — Payment SDK](/Knowledge/technical/developer-guide/payment-development) and [SDK & code examples](/Knowledge/technical/developer-guide/sdk-code-examples). Ecosystem overview of the payment gateway: [Payment Ecosystem](/Knowledge/technical/ecosystem/payment-ecosystem). API tables (when published): [Technical Reference](/Knowledge/technical/reference).
