---
title: Batch Verification Architecture
draft: false
---

# Batch Verification Architecture

QDay does not rely on ZK validity proofs as its primary verification mechanism. Instead, multiple independent validators verify each batch and reach agreement through an M-of-N threshold before the state root is committed to Abelian.

**Batch** — The Sequence Sender (`cdk-node`) collects L2 blocks into a batch and submits it to the Rollup contracts. Each batch has a unique Batch Number and encodes the transactions in execution order.

**Batch record** — The Rollup contracts record the batch information in the EVM environment of the Abelian Plus Node.

**Batch data consistency** — Each validator compares the batch information recorded by the Rollup contracts with the corresponding L2 transaction data, to catch inconsistencies between the record and the transactions QDay processed.

**State transition verification** — Each validator independently executes the batch's state transitions and compares the resulting state root with the expected state root.

**M-of-N agreement** — N is the number of participating validators; M is the minimum number of approvals required. A batch meets the approval requirement when at least M validators agree on its validity, subject to the protocol's acceptance and finalization rules.

**State commitment** — After finalization, the Committer submits the finalized state root to the Abelian Chain.

Security depends on validator independence, the threshold configuration, data availability, and the rules for state acceptance and finalization.
