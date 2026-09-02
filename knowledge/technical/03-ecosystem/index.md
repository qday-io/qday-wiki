---
title: Ecosystem
draft: false
---

# Ecosystem

The full QDAY2 ecosystem — wallets, infrastructure, tools, DeFi, AI agents, payments, and partners.

## Ecosystem Overview

QDAY2 is an EVM-compatible, quantum-resistant Layer 2. Its ecosystem is designed around four application pillars:

1. **ZK Rollup Infrastructure** — fast, low-cost transactions anchored to Abelian's quantum-resistant Layer 1
2. **Post-Quantum Accounts** — ML-DSA-65-based accounts and wallets for Phase 2
3. **Account Abstraction** — ERC-4337 Smart Accounts for gasless UX, session keys, and programmable authorization
4. **AI Agent Payments** — a payment stack designed for machine-to-machine commerce and autonomous agents

Every ecosystem component is designed to be backward-compatible with existing Ethereum tooling.

## Wallet Ecosystem

**EOA Wallet** — Standard Ethereum externally-owned accounts protected by ECDSA. Any Ethereum wallet (MetaMask, Rabby, hardware wallets) works on QDAY2 by adding the network. QDAY2 inherits ledger-level quantum resistance from Abelian L1 even for EOA accounts.

**Smart Account Wallet** — ERC-4337 Smart Accounts provide the best user experience: gasless transactions (Paymaster-sponsored), one-click transaction batching, session keys for recurring operations, and programmable multi-sig recovery. The QDAY2 Smart Account SDK makes deploying and interacting with Smart Accounts as simple as connecting a standard wallet.

**Post-Quantum Wallet (Phase 2)** — In Phase 2, users will be able to generate ML-DSA-65 accounts directly in their wallet. A single BIP-39 mnemonic will derive both a standard ECDSA account and a quantum-resistant ML-DSA-65 account, enabling a smooth migration of assets from classical to post-quantum security.

**AI Wallet** — An AI Wallet pairs a Smart Account with an AI agent that can monitor balances, execute intents, manage subscriptions, and initiate payments — all within user-defined session key boundaries. The agent operates autonomously within its authorized scope without requiring manual sign-off on each action.

## Infrastructure

**RPC** — Public JSON-RPC endpoints (`https://rpc.qday.io` for mainnet, `https://rpc-testnet.qday.io` for testnet) expose the full Ethereum JSON-RPC API. Developers can connect MetaMask, Foundry, Hardhat, and any other EVM tool directly.

**Explorer** — The QDAY2 block explorer (`https://explorer.qday.io`) provides transaction search, address views, contract verification, and token tracking. Built on Blockscout, it supports the same verification workflow as Ethereum mainnet explorers.

**Indexer** — A high-performance event indexer tracks token transfers, DEX trades, payment events, and agent actions. Applications can query indexed data via a GraphQL API instead of replaying chain history.

**Faucet** — The testnet faucet (`https://faucet.qday.io`) distributes test QDAY tokens and test PQUSD for development and testing.

## Developer Tools

**Foundry** — Full Foundry compatibility. Use `forge`, `cast`, and `anvil` with the `--rpc-url https://rpc.qday.io` flag.

**Hardhat** — Add QDAY2 as a network in `hardhat.config.js` (see [Developer Guide](/Knowledge/technical/developer-guide/getting-started)). All Hardhat plugins that work with Ethereum mainnet work on QDAY2.

**Remix** — Connect Remix IDE to QDAY2 via the "External HTTP Provider" option with the QDAY2 RPC URL.

**SDK** — The `@qday-io/sdk` npm package provides TypeScript-first clients for Smart Accounts, ERC-4337 bundler interaction, payment creation, and AI agent management.

**CLI** — The `qday` CLI provides command-line access to all SDK features. Install via `npm install -g @qday-io/cli`.

## DeFi Ecosystem

**QDay Swap** — A decentralized exchange for QDAY2 tokens, including QDAY, wABEL (wrapped ABEL), PQUSD, and bridged ERC-20s. Supports standard AMM swap routing.

**QDay Lending** — A lending protocol where users can deposit assets as collateral and borrow against them. Interest rates are determined algorithmically based on utilization.

**QDay Finance** — An aggregated DeFi portal for swapping, staking, lending, and liquidity provision in a single interface.

**QDay Staking** — ABEL staking on QDAY2 earns staking rewards while maintaining liquidity on the L2. Staked positions are tokenized and can be used as collateral in other DeFi protocols.

**Wrapped ABEL (wABEL)** — wABEL is the EVM-compatible representation of ABEL bridged from the Abelian Layer 1. It follows the standard ERC-20 interface.

## Oracle & Data

Real-time price feeds and on-chain data are available to smart contracts through the QDAY2 oracle integration. Compatible with Chainlink's Aggregator interface for plug-and-play adoption by protocols that already use Chainlink on Ethereum.

*Specific oracle partner integrations will be listed here as they launch.*

## AI Ecosystem

**Agent SDK** — `@qday-io/sdk/agent` provides primitives for creating, deploying, and managing on-chain AI agents. Agents operate through ERC-4337 Smart Accounts using session keys for authorization.

**MCP Servers** — QDAY2 AI agents connect to external AI inference through MCP (Model Context Protocol) servers. Any MCP-compatible AI provider can be plugged in as the agent's reasoning backend.

**Intent Registry** — An on-chain registry where users declare high-level intents (goals + constraints). The Intent Engine interprets intents and translates them into concrete transaction sequences.

**Agent Marketplace** — *(Coming in Phase 2)* A curated marketplace of pre-built agent strategies (yield optimization, automated rebalancing, subscription management, DeFi arbitrage) that users can deploy to their Smart Accounts.

## Payment Ecosystem

**PQUSD** — A USD-pegged stablecoin native to QDAY2. PQUSD is the primary currency for the QDAY2 payment layer and is used for invoices, subscriptions, and agent micropayments.

| Contract | Address |
|----------|---------|
| PQUSD Token (proxy) | `0x6e0144b9351d261C57be5fe4E3d65a8EC105Db72` |

**Payment Gateway** — A developer API and SDK for creating invoices, managing subscriptions, streaming payments, and receiving webhooks. See [Developer Guide](/Knowledge/technical/developer-guide/getting-started) for integration examples.

**Agent Payments** — AI agents can autonomously pay for API calls, data feeds, compute, and other services using session-key-bounded PQUSD payments. This enables a new class of autonomous, machine-to-machine commerce without human sign-off on each transaction.

## Partners

*Strategic partners and integrations will be listed here as partnerships are announced.*

## Developer Program

The QDAY2 Developer Program provides:

- Early access to testnet and developer APIs
- Technical support via Discord and GitHub Issues
- Grant funding for projects building on QDAY2's four pillars (ZK, ML-DSA-65, ERC-4337, AI Agent Payment)
- Co-marketing and ecosystem visibility for launched projects

Apply via the [QDAY2 developer portal](https://qday.io) or reach out in the `#developers` channel on Discord.
