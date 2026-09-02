---
title: zk Proof Architecture
draft: false
---

# zk Proof Architecture

The ZK proof pipeline converts a batch of EVM transactions into a cryptographic validity proof that any verifier can check without re-executing the transactions.

**Batch** — The Sequence Sender collects L2 blocks into a batch and commits the batch to `zkRollupManager`. Each batch has a unique Batch Number and encodes the transactions in execution order.

**Witness** — The Aggregator retrieves the batch data (Batch Number, Batch Hash, State Root, Local Exit Root) from `zkRollupManager`. This witness data is the input to proof generation.

**Circuit** — The prover evaluates the batch witness against the zkEVM arithmetic circuit — a constraint system that encodes correct EVM execution semantics. The circuit enforces that each state transition is valid.

**Prover** — The zk Prover service computes a validity proof from the circuit evaluation. It returns a `Proof` object to the Aggregator.

**Verifier** — The Aggregator calls `zkRollupManager.verifyBatches()` on-chain. The `Verifier` contract checks the proof against the committed state root. If valid, the batch is finalized and the transaction achieves irreversible L2 finality.
