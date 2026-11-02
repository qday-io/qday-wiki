---
title: Smart Account Architecture
draft: false
---

# Smart Account Architecture

:::note[Live on Aevum testnet — mainnet Q1 2027]
Agent wallets and session keys — an ERC-4337 smart-contract policy engine with spending caps and time locks — and the stablecoin paymaster are live on the QDay Aevum testnet (Phase 1.5 upgrade, 2026 Q3); mainnet deployment follows in Q1 2027. The Smart Account SDK (`@qday-io/sdk`) launches in Q1 2027 and is not yet published on npm. Contract addresses and endpoints will be published in the docs.
:::

QDay implements **ERC-4337 Account Abstraction** using a TypeScript-based bundler infrastructure.

**EntryPoint** — The canonical ERC-4337 `EntryPoint` contract; its address will be published in the docs. All UserOperations flow through the EntryPoint, which validates and executes them as a single atomic bundle.

**Bundler** — QDay uses the **Alto** bundler (TypeScript implementation). Bundlers collect UserOperations from users, simulate execution, bundle them, and call `EntryPoint.handleOps()`. The Alto bundler maintains a dedicated UserOperation mempool.

**Paymaster** — A Paymaster contract can sponsor gas fees for users. QDay's stablecoin paymaster provides gas abstraction: users and AI agents can pay transaction fees in QDay's native stablecoin (USD8) instead of holding $QDAY. Developers can also deploy custom Paymasters to offer gasless transactions or pay fees in other ERC-20 tokens.

**Session Key** — Session keys are time-limited, scope-restricted signing keys derived from a user's Smart Account. They allow AI agents, dApps, and delegated signers to authorize specific operations (e.g., trades up to a spending limit) without exposing the master key.
