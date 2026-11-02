---
title: Transaction Lifecycle
draft: false
---

# Transaction Lifecycle

A transaction goes through six stages from submission to commitment on Abelian:

**Step 1 — Submit Transaction**
The user sends a signed transaction through a wallet, SDK, or direct RPC call to the QDAY Node (`cdk-erigon` RPC endpoint). The node validates and adds it to the TxPool as a pending transaction.

**Step 2 — Sequencer Execution (Soft Confirmation)**
`cdk-erigon` (acting as Sequencer) picks transactions from the TxPool, executes the EVM, updates state, and creates an L2 block. This is the first confirmation — fast and local to the L2.

**Step 3 — Batch Creation**
`cdk-node` (Sequence Sender) continuously syncs new blocks from `cdk-erigon`, collects multiple blocks, packages them into a **Batch**, and submits the batch to the Rollup contracts. Output: Batch + Batch Number.

**Step 4 — Batch Recording**
The Rollup contracts, running in the EVM environment of the **Abelian Plus Node** (`reth` + `lighthouse`), record the batch information. The batch is now part of the rollup record and its data is available for verification.

**Step 5 — Multi-Validator Verification**
Multiple independent validators verify the batch:
- **Batch data consistency** — compare the batch information recorded by the Rollup contracts with the corresponding L2 transaction data.
- **State transition verification** — re-execute the state transitions and compare the resulting state root with the expected state root.

Validators reach agreement through an **M-of-N** threshold. Once the required number of validators approve and the protocol's finalization rules are met, the batch's state root is finalized.

**Step 6 — Commit to Abelian Chain**
The **Committer** submits the finalized state root to the Abelian Chain through the Abelian Node. This records a commitment to QDay's execution state on Abelian's quantum-resistant PoW chain.
