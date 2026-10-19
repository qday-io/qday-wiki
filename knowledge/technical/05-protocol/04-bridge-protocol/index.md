---
title: Bridge Protocol
draft: false
---

# Bridge Protocol

**PolygonZkEVMBridge** — The bridge contract is deployed on the DA layer. To bridge assets from QDay Aevum to another chain, the bridge contract on QDay Aevum locks the asset and emits a `BridgeEvent`. The event is included in the batch's Local Exit Root, which is committed to the Global Exit Root after ZK verification.

**Abelian Bridge (ABEL ⇄ WABEL, live today)** — ABEL ⇄ WABEL conversion between the Abelian Layer 1 (UTXO model) and QDay (EVM account model) currently goes through the [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3). Its smart contracts mint WABEL on QDay when ABEL is bridged in and burn WABEL when it is converted back to ABEL. The Abelian Bridge runs on QDay Origin mainnet, QDay Origin testnet and the QDay Aevum testnet.

**PQZK Bridge (umbrella concept)** — PQZK Bridge (Post-Quantum Zero-Knowledge Bridge) is the umbrella term for zero-knowledge bridges built on post-quantum public chains such as Abelian. It is not a specific dApp. Today's Abelian Bridge (ABEL ⇄ WABEL) and QDay Bridge do not yet meet the PQZK Bridge standard; a PQZK Bridge between QDay and Abelian is future work (see [whitepaper §4.4](/guide/handbook/qday-whitepaper#sec-4-4)). In this design, the Committer's status root submissions to Abelian Chain serve as the trust anchor between QDay (EVM account model) and the Abelian Layer 1 (UTXO model).

How exit roots are committed and claimed is covered in [Cross-chain Messaging](/Knowledge/technical/protocol/cross-chain-messaging).
