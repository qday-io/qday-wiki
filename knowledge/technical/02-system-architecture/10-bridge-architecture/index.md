---
title: Bridge Architecture
draft: false
---

# Bridge Architecture

Cross-chain asset transfers between QDAY2 and external chains use the **PolygonZkEVMBridge** architecture adapted for QDAY's UTXO-based L1.

**PolygonZkEVMBridge** — The bridge contract locks assets on the source chain and emits a deposit event. The corresponding branch is committed to the **GlobalExitRoot** Merkle tree.

**GlobalExitRoot** — A shared Merkle root that tracks all cross-chain exits. Any chain that trusts the GlobalExitRoot can verify claims against it without re-executing the bridging transaction.

**QDAY ↔ Abelian Bridge (PQZK Bridge)** — Assets moving between QDAY2 (EVM) and the Abelian Layer 1 (UTXO) go through the PQZK Bridge, which is anchored by the Committer's status root submissions to Abelian Chain.
