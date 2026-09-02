---
title: System Architecture
draft: false
---

# System Architecture

How the entire QDAY2 system works — components, data flow, and deployment topology.

## Overall Architecture

QDAY2 is a modular ZK rollup stack layered on top of the Abelian Layer 1. The system extends the Polygon CDK architecture with three QDAY-specific additions: the **Abelian Plus Node** (DA + record layer), the **Committer** (L1 sync service), and **Record Contracts** (on-chain batch metadata store on Abelian).

```
┌────────────────────────────────────────┐
│         Infrastructure                 │
│   Docker / K8s / PostgreSQL / Redis    │
└──────────────────┬─────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────┐
│         Abelian Plus Node              │
│         reth + lighthouse              │
│   (DA Node + Record Contracts)         │
└──────────────────┬─────────────────────┘
                   │
                   ▼
┌────────────────────────────────────────┐
│         zkEVM Contracts                │
│  RollupManager / Bridge / GlobalExitRoot│
└──────────┬───────────────┬─────────────┘
           │               │
     ┌─────▼──────┐  ┌─────▼──────┐
     │ cdk-erigon │  │ zk Prover  │
     │ (Sequencer)│  │            │
     └─────┬──────┘  └─────▲──────┘
           │               │
           ▼               │
     ┌─────────────┐       │
     │  cdk-node   │───────┘
     │ Seq. Sender │
     └─────┬───────┘
           │
           ▼
     ┌─────────────┐       ┌─────────────────┐
     │  Aggregator │──────►│ Record Contracts │
     └─────┬───────┘       └─────────────────┘
           │
           ▼
     ┌─────────────┐
     │  Committer  │
     └─────┬───────┘
           │
           ▼
     Abelian Chain (L1)
```

## Core Components

| Component | Implementation | Primary Role |
|-----------|---------------|--------------|
| User / Wallet | MetaMask, SDK, RPC client | Submit transactions |
| QDAY Node | `cdk-erigon` | Sequencer — execute transactions, produce L2 blocks, maintain state |
| Sequence Sender | `cdk-node` | Collect blocks, create batches, submit to `zkRollupManager` |
| zkRollupManager | Solidity contract (DA Layer) | Accept batches, verify ZK proofs, finalize state |
| Aggregator | `cdk-node` | Fetch batch info, coordinate ZK Prover, submit proofs |
| zk Prover | QDAY prover service | Generate validity proofs for batches |
| DA Node | `reth` + `lighthouse` | Data availability — host zkEVM contracts, store rollup data |
| Committer | `qday-anchor-relay` | Listen to rollup events, sync status root to Abelian Chain |
| Abelian Chain | Abelian L1 | Store batch status root, rollup summary, final records |
| Record Contracts | Solidity on DA Layer | Persist batch metadata, status roots, commit results |

**Source repositories:**

| Repository | Branch / Tag |
|------------|-------------|
| [qday-cdk](https://github.com/qday-io/qday-cdk) | `qday-v0.5.4/qday` |
| [qday-agglayer-contracts](https://github.com/qday-io/qday-agglayer-contracts) | `qday-v10.1.0-rc.5/qday` |
| [qday-cdk-erigon](https://github.com/qday-io/qday-cdk-erigon) | `qday-v2.61.19-validium/qday` |
| [qday-abelian-plus-node](https://github.com/qday-io/qday-abelian-plus-node) | main |
| [qday-anchor-relay](https://github.com/qday-io/qday-anchor-relay) | main |

## Network Topology

QDAY2 operates across four logical layers:

**Client Layer** — Wallets, dApps, and RPC clients connect to the QDAY Node (cdk-erigon) JSON-RPC endpoint. The RPC Gateway load-balances requests across multiple read replicas.

**L2 Execution Layer** — `cdk-erigon` acts as both the Sequencer and the full node. It maintains the EVM state, the transaction pool (TxPool), and produces L2 blocks.

**DA / Settlement Layer** — The Abelian Plus Node provides data availability using `reth` (execution) and `lighthouse` (consensus). All zkEVM contracts — `PolygonZkEVMBridge`, `PolygonRollupManager`, `GlobalExitRoot`, and `Verifier` — are deployed here.

**L1 Record Layer** — The Committer writes batch status roots and rollup summaries directly to the Abelian blockchain. This is the quantum-resistant anchor for all QDAY2 state.

## Transaction Lifecycle

A transaction goes through seven stages from submission to L1 finality:

**Step 1 — Submit Transaction**
The user sends a signed transaction through a wallet, SDK, or direct RPC call to the QDAY Node (`cdk-erigon` RPC endpoint). The node validates and adds it to the TxPool as a pending transaction.

**Step 2 — Sequencer Execution (Soft Confirmation)**
`cdk-erigon` (acting as Sequencer) picks transactions from the TxPool, executes the EVM, updates state, and creates an L2 block. This is the first confirmation — fast and local to the L2.

**Step 3 — Batch Creation**
`cdk-node` (Sequence Sender) continuously syncs new blocks from `cdk-erigon`, collects multiple blocks, packages them into a **Batch**, and submits the batch to `zkRollupManager` (or internally to `PolygonRollupBaseEtrog`). Output: Batch + Batch Number.

**Step 4 — Batch Consensus (Second Confirmation)**
The `zkRollupManager` contract receives the batch submission, verifies Sequencer authorization, records the batch, and updates the rollup state. This is the second consensus point: the batch is now formally part of the rollup record.

**Step 5 — ZK Proof Generation and Submission**
The **Aggregator** monitors `zkRollupManager` for new accepted batches. It retrieves the Batch Number, Batch Hash, State Root, and Local Exit Root, then sends this data to the **zk Prover**. The prover computes a validity proof and returns it to the Aggregator. The Aggregator then calls `zkRollupManager.verifyBatches()`, submitting the Batch, State Root, and Proof. The contract verifies the proof and updates the Final State — the batch is now **finalized** and the transaction has achieved L2 finality.

**Step 6 — Data Availability Recording**
The **Abelian Plus Node** (DA Node component) stores rollup data, hosts the zkEVM contracts, and ensures all batch data is available. The **Record Contracts** on the DA layer persist batch metadata and status roots.

**Step 7 — Commit to Abelian Chain**
The **Committer** watches `zkRollupManager` for events (`VerifyBatches`, `BatchVerified`, `StateUpdated`). On each event it fetches the relevant data, calls the Abelian RPC, writes the data to the Abelian Chain, and writes the result back to the DA Node's Record Contracts. Abelian Chain then stores the Batch Status Root, rollup state summary, and necessary chain records — providing quantum-resistant finality at Layer 1.

## zk Proof Architecture

The ZK proof pipeline converts a batch of EVM transactions into a cryptographic validity proof that any verifier can check without re-executing the transactions.

**Batch** — The Sequence Sender collects L2 blocks into a batch and commits the batch to `zkRollupManager`. Each batch has a unique Batch Number and encodes the transactions in execution order.

**Witness** — The Aggregator retrieves the batch data (Batch Number, Batch Hash, State Root, Local Exit Root) from `zkRollupManager`. This witness data is the input to proof generation.

**Circuit** — The prover evaluates the batch witness against the zkEVM arithmetic circuit — a constraint system that encodes correct EVM execution semantics. The circuit enforces that each state transition is valid.

**Prover** — The zk Prover service computes a validity proof from the circuit evaluation. It returns a `Proof` object to the Aggregator.

**Verifier** — The Aggregator calls `zkRollupManager.verifyBatches()` on-chain. The `Verifier` contract checks the proof against the committed state root. If valid, the batch is finalized and the transaction achieves irreversible L2 finality.

## Smart Account Architecture

QDAY2 implements **ERC-4337 Account Abstraction** using a TypeScript-based bundler infrastructure.

**EntryPoint** — The canonical ERC-4337 `EntryPoint` contract is deployed on QDAY2. All UserOperations flow through the EntryPoint, which validates and executes them as a single atomic bundle.

**Bundler** — QDAY2 uses the **Alto** bundler (TypeScript implementation). Bundlers collect UserOperations from users, simulate execution, bundle them, and call `EntryPoint.handleOps()`. The Alto bundler maintains a dedicated UserOperation mempool.

**Paymaster** — A Paymaster contract can sponsor gas fees for users. Developers can deploy custom Paymasters to offer gasless transactions or pay fees in ERC-20 tokens instead of the native gas token.

**Session Key** — Session keys are time-limited, scope-restricted signing keys derived from a user's Smart Account. They allow AI agents, dApps, and delegated signers to authorize specific operations (e.g., trades up to a spending limit) without exposing the master key.

## Post-Quantum Architecture

QDAY2's post-quantum layer is built on **ML-DSA-65** (Module Lattice-based Digital Signature Algorithm, standardized as FIPS 204 by NIST), replacing ECDSA for quantum-resistant key operations.

**ML-DSA-65** — The primary post-quantum signature scheme. ML-DSA-65 is based on Module Learning With Errors (MLWE) hardness assumptions. It produces ~3.3 KB public keys and ~2.5 KB signatures — larger than ECDSA but computationally infeasible to break with a quantum computer running Shor's algorithm.

**Hybrid Signature** — During the transition period, QDAY2 supports hybrid signatures that combine an ML-DSA-65 signature with a standard ECDSA signature. Both must be valid for a transaction to be accepted. This ensures backward compatibility with existing tooling while layering in quantum resistance.

**Key Rotation** — Keys can be rotated on-chain without requiring users to move funds. The rotation process links the old public key to the new one via a signed update, preserving account history.

**Migration** — Phase 2 will introduce quantum-resistant accounts where a single BIP-39 mnemonic phrase derives both a legacy EVM (ECDSA) account and a new ML-DSA-65 account. Users will be able to migrate funds from the ECDSA account to the quantum-resistant account without creating a new mnemonic.

## AI Agent Architecture

QDAY2 provides a native runtime environment for on-chain AI agents.

**Agent Runtime** — A sandboxed execution environment where agents operate. The runtime manages agent lifecycle, resource limits, and interaction with on-chain contracts.

**MCP (Model Context Protocol)** — Agents communicate with external AI models via MCP servers. This standardized protocol allows agents to call AI inference endpoints, retrieve on-chain data, and compose complex multi-step actions.

**Intent Engine** — Users declare high-level intents (e.g., "rebalance my portfolio to 60% QDAY / 40% ABEL whenever the price diverges by more than 5%"). The Intent Engine translates intents into concrete transaction sequences and submits them through the Smart Account stack.

**Tool Calling** — Agents interact with smart contracts via a typed tool-calling interface. Each contract function is exposed as a typed tool that the agent can invoke, inspect return values, and chain into subsequent decisions.

**Memory** — Persistent agent memory stores conversation context, historical transaction data, and learned preferences. Memory is stored off-chain with an on-chain commitment hash for integrity verification.

## Payment Architecture

QDAY2 includes a first-class payment layer designed for high-frequency, low-latency commerce and agent-driven micropayments.

**Payment Gateway** — A unified API layer that abstracts the underlying smart contract interactions. Merchants and dApps interact with the Payment Gateway to create payment requests without writing contract code.

**Settlement** — Payments settle at L2 finality speed (typically seconds for soft confirmation, minutes for ZK-verified finality). The settlement engine handles currency conversion, fee distribution, and merchant payouts.

**Merchant** — Merchant onboarding registers a merchant address and webhook endpoint with the Payment Gateway. Merchants receive settlement notifications via webhook when payments finalize.

**Invoice** — A structured payment request with an amount, currency (PQUSD or native gas token), expiry, and metadata. Invoices are created on-chain and can be paid by any account or AI agent.

**Subscription** — Recurring payment plans are implemented as Session Key authorizations. A subscriber grants the merchant's payment contract a Session Key limited to a specific amount per period.

**Agent Payment** — AI agents can autonomously initiate payments within the bounds of their Session Key authorization. This enables fully autonomous commerce — agents pay for API calls, data feeds, and services without human sign-off on each transaction.

## Bridge Architecture

Cross-chain asset transfers between QDAY2 and external chains use the **PolygonZkEVMBridge** architecture adapted for QDAY's UTXO-based L1.

**PolygonZkEVMBridge** — The bridge contract locks assets on the source chain and emits a deposit event. The corresponding branch is committed to the **GlobalExitRoot** Merkle tree.

**GlobalExitRoot** — A shared Merkle root that tracks all cross-chain exits. Any chain that trusts the GlobalExitRoot can verify claims against it without re-executing the bridging transaction.

**QDAY ↔ Abelian Bridge (PQZK Bridge)** — Assets moving between QDAY2 (EVM) and the Abelian Layer 1 (UTXO) go through the PQZK Bridge, which is anchored by the Committer's status root submissions to Abelian Chain.

## Deployment Architecture

Components are deployed in dependency order. See [Operator Guide](/Knowledge/technical/operator-guide) for detailed configuration per phase.

```
Infrastructure (Docker / K8s / PostgreSQL / Redis / Monitoring)
    │
    ▼
① Abelian Plus Node (reth + lighthouse) — DA Node
    │
    ▼
② zkEVM Contracts (RollupManager / Bridge / GlobalExitRoot / Verifier)
    │
    ├─── ③ QDAY Node (cdk-erigon / Sequencer)
    │         │
    │         ▼
    │    ④ cdk-node (Sequence Sender)
    │
    ├─── ⑤ zk Prover
    │         │
    │         ▼
    │    ⑥ Aggregator
    │
    ├─── ⑦ Committer
    │
    └─── ⑧ Record Contracts
              │
              ▼
         ⑨ External Services (RPC Gateway / Explorer / Indexer / Wallet)
```

## High Availability

- **RPC Gateway**: Multiple `cdk-erigon` read replicas sit behind a load balancer. Any replica can serve read traffic; only the designated Sequencer writes new blocks.
- **zk Prover**: Prover instances can be scaled horizontally; the Aggregator distributes batches across available provers.
- **DA Node**: `reth` + `lighthouse` run as an Ethereum consensus/execution pair with standard Ethereum HA patterns (multiple beacon nodes, execution clients).
- **Database**: PostgreSQL replication for `cdk-erigon` and `cdk-node` state.

## Security Architecture

- **Quantum-resistant ledger anchor**: All rollup state roots are committed to the Abelian Chain, which is secured by lattice-based cryptography (LWE / Ring-LWE). No quantum computer can forge these commitments.
- **Smart contract auditability**: All zkEVM contracts are forks of the Polygon CDK contracts, which have been audited by independent security firms.
- **Admin controls via Timelock**: Privileged operations on the `RollupManager` are gated behind a `Timelock` contract, giving the community time to review changes before they take effect.
- **Halt mechanism**: The QDAY DAO can vote to halt rollup execution if a quantum-capable attacker is detected. The halt is enforced through quantum-resistant signatures — an attacker cannot forge the halt revocation either.

## Architecture Evolution

QDAY2's architecture is designed to evolve in two phases:

**Phase 1 (current)** — L1-assisted ZK rollups with EVM compatibility. Ledger security is inherited from Abelian via the Committer's status root submissions. Account keys remain ECDSA.

**Phase 2 (in development)** — ML-DSA-65 native account support at the EVM level. The `cdk-erigon` EVM will be upgraded to natively process ML-DSA-65 signatures. Users will be able to create quantum-resistant accounts without changing their existing ECDSA account. Both account types will coexist for backward compatibility.
