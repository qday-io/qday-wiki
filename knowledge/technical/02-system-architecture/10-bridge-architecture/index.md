---
title: Bridge Architecture
draft: false
---

# Bridge Architecture

Cross-chain asset transfers between QDay Aevum and external chains use the Polygon CDK bridge architecture (`PolygonZkEVMBridge`), adapted for QDAY's UTXO-based L1.

**PolygonZkEVMBridge** — The bridge contract locks assets on the source chain and emits a deposit event. The corresponding branch is committed to the **GlobalExitRoot** Merkle tree.

**GlobalExitRoot** — A shared Merkle root that tracks all cross-chain exits. Any chain that trusts the GlobalExitRoot can verify claims against it without re-executing the bridging transaction.

**QDay Bridge** — QDay Bridge bridges ERC20, TRC20 and QRC20 tokens between QDay and other EVM-compatible chains.

**Abelian Bridge (ABEL ⇄ WABEL, live today)** — WABEL is a QRC20 token on QDay, pegged 1:1 to ABEL on the Abelian Layer 1 (UTXO). Minting (lock ABEL on Abelian → receive WABEL) and burning (burn WABEL → receive ABEL) are handled by an online service operated by a union of institutions with Trust Service Provider (TSP) certification. Users access it through the [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3). The Abelian Bridge runs on QDay Origin mainnet, QDay Origin testnet and the QDay Aevum testnet.

**PQZK Bridge (umbrella concept)** — PQZK Bridge (Post-Quantum Zero-Knowledge Bridge) is the umbrella term for zero-knowledge bridges built on post-quantum public chains such as Abelian. It is not a specific dApp. Today's Abelian Bridge (ABEL ⇄ WABEL) and QDay Bridge do not yet meet the PQZK Bridge standard; a PQZK Bridge between QDay and Abelian is future work (see [whitepaper §4.4](/guide/handbook/qday-whitepaper#sec-4-4)). In this design, QDay (EVM) and the Abelian Layer 1 (UTXO) are connected through the Committer's status root submissions to Abelian Chain.
