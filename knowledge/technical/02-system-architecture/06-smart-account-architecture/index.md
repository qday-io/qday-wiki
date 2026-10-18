---
title: Smart Account Architecture
draft: false
---

# Smart Account Architecture

:::note[Planned — Q1 2027]
ERC-4337 account abstraction (EntryPoint, bundler, paymaster, session keys, Smart Account SDK) launches with QDay mainnet in Q1 2027 and is not live today. This page describes the planned design.
:::

QDay will implement **ERC-4337 Account Abstraction** using a TypeScript-based bundler infrastructure.

**EntryPoint** — The canonical ERC-4337 `EntryPoint` contract is not yet deployed on QDay Aevum; its address will be published at launch. All UserOperations flow through the EntryPoint, which validates and executes them as a single atomic bundle.

**Bundler** — QDay will use the **Alto** bundler (TypeScript implementation). Bundlers collect UserOperations from users, simulate execution, bundle them, and call `EntryPoint.handleOps()`. The Alto bundler maintains a dedicated UserOperation mempool.

**Paymaster** — A Paymaster contract can sponsor gas fees for users. Developers can deploy custom Paymasters to offer gasless transactions or pay fees in ERC-20 tokens instead of the native gas token.

**Session Key** — Session keys are time-limited, scope-restricted signing keys derived from a user's Smart Account. They allow AI agents, dApps, and delegated signers to authorize specific operations (e.g., trades up to a spending limit) without exposing the master key.
