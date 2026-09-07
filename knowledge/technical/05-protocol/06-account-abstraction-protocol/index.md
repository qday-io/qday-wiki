---
title: Account Abstraction Protocol
draft: false
---

# Account Abstraction Protocol

QDAY2 implements **ERC-4337** account abstraction without requiring changes to the core EVM protocol.

**UserOperation** — Instead of a standard Ethereum transaction, users construct a `UserOperation` struct containing: `sender` (Smart Account address), `nonce`, `initCode` (for account deployment), `callData`, `callGasLimit`, `verificationGasLimit`, `preVerificationGas`, `maxFeePerGas`, `maxPriorityFeePerGas`, `paymasterAndData`, and `signature`.

**Bundler Mempool** — The Alto bundler maintains an off-chain UserOperation mempool. Bundlers collect UserOperations, simulate execution to check validity and gas limits, and pack multiple UserOperations into a single `handleOps()` transaction.

**EntryPoint Execution** — The `EntryPoint` contract performs two phases per UserOperation: (1) **Verification** — calls `validateUserOp()` on the Smart Account and (optionally) `validatePaymasterUserOp()` on the Paymaster; (2) **Execution** — calls the Smart Account's target function. Gas from the Paymaster deposit or the sender's deposited balance covers costs.

**Session Key Authorization** — Session keys are issued by the Smart Account owner and stored in a `SessionKeyManager` module. Each session key is scoped by: allowed contract addresses, allowed function selectors, value limit per call, cumulative spend limit, and expiry timestamp. AI agents use session keys to transact autonomously within these bounds.
