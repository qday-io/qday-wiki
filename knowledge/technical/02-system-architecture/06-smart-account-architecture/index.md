---
title: Smart Account Architecture
draft: false
---

# Smart Account Architecture

QDAY2 implements **ERC-4337 Account Abstraction** using a TypeScript-based bundler infrastructure.

**EntryPoint** — The canonical ERC-4337 `EntryPoint` contract is deployed on QDAY2. All UserOperations flow through the EntryPoint, which validates and executes them as a single atomic bundle.

**Bundler** — QDAY2 uses the **Alto** bundler (TypeScript implementation). Bundlers collect UserOperations from users, simulate execution, bundle them, and call `EntryPoint.handleOps()`. The Alto bundler maintains a dedicated UserOperation mempool.

**Paymaster** — A Paymaster contract can sponsor gas fees for users. Developers can deploy custom Paymasters to offer gasless transactions or pay fees in ERC-20 tokens instead of the native gas token.

**Session Key** — Session keys are time-limited, scope-restricted signing keys derived from a user's Smart Account. They allow AI agents, dApps, and delegated signers to authorize specific operations (e.g., trades up to a spending limit) without exposing the master key.
