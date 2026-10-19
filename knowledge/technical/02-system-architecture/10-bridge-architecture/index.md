---
title: Bridge Architecture
draft: false
---

# Bridge Architecture

Cross-chain asset transfers between QDay Aevum and external chains use the **PolygonZkEVMBridge** architecture adapted for QDAY's UTXO-based L1.

**PolygonZkEVMBridge** — The bridge contract locks assets on the source chain and emits a deposit event. The corresponding branch is committed to the **GlobalExitRoot** Merkle tree.

**GlobalExitRoot** — A shared Merkle root that tracks all cross-chain exits. Any chain that trusts the GlobalExitRoot can verify claims against it without re-executing the bridging transaction.

**Abelian Bridge (ABEL ⇄ WABEL, live today)** — Today, ABEL on the Abelian Layer 1 (UTXO) is converted to and from WABEL on QDay through the [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3). The Abelian Bridge smart contracts mint WABEL when ABEL is bridged in and burn it when WABEL is converted back to ABEL. The Abelian Bridge runs on QDay Origin mainnet, QDay Origin testnet and the QDay Aevum testnet.

**PQZK Bridge (planned)** — The PQZK Bridge is planned future work and is not live. It is designed to move assets between QDay (EVM) and the Abelian Layer 1 (UTXO), anchored by the Committer's status root submissions to Abelian Chain.
