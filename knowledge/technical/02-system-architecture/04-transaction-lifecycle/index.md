---
title: Transaction Lifecycle
draft: false
---

# Transaction Lifecycle

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
