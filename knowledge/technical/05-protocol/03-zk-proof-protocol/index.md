---
title: zk Proof Protocol
draft: false
---

# zk Proof Protocol

The ZK proof protocol ensures that every state transition on QDAY2 can be verified cryptographically without re-executing all transactions.

## Batch

The Sequence Sender (`cdk-node`) collects L2 blocks from `cdk-erigon` and packs them into a Batch. Batches are submitted to `zkRollupManager` via `sequenceBatches()`. Each batch includes: list of encoded transactions, state root before execution, timestamp, and a forced batch flag.

## Witness

After a batch is accepted by `zkRollupManager`, the Aggregator reads the batch data: Batch Number, Batch Hash, pre-execution State Root, post-execution State Root, and Local Exit Root. These values constitute the witness for proof generation.

## Circuit

The zkEVM circuit encodes the semantics of correct EVM execution as a system of arithmetic constraints (R1CS / PLONK). The circuit checks that, given the pre-state, executing the specified transactions yields exactly the claimed post-state and exit root.

## Prover

The zk Prover service receives the batch witness, evaluates the circuit, and generates a succinct validity proof. The proof is computed off-chain in a resource-intensive but parallelizable process. Multiple prover instances can run concurrently for throughput scaling.

## Verifier

The `Verifier` contract (deployed on the DA layer, referenced by `zkRollupManager`) checks the proof on-chain using the verifying key embedded at deployment. Verification is efficient — it runs in constant time regardless of how many transactions are in the batch. A successful verification call to `zkRollupManager.verifyBatches()` updates the Rollup's Final State Root.
