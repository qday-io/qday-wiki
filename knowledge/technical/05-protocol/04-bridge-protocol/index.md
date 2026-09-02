---
title: Bridge Protocol
draft: false
---

# Bridge Protocol

**PolygonZkEVMBridge** — The bridge contract is deployed on the DA layer. To bridge assets from QDAY2 to another chain, the bridge contract on QDAY2 locks the asset and emits a `BridgeEvent`. The event is included in the batch's Local Exit Root, which is committed to the Global Exit Root after ZK verification.

**PQZK Bridge (QDAY2 ↔ Abelian)** — The PQZK Bridge handles transfers between QDAY2 (EVM account model) and the Abelian Layer 1 (UTXO model). The Committer's status root submissions to Abelian Chain serve as the trust anchor. Wrapped ABEL (wABEL) on QDAY2 represents ABEL locked on the Abelian L1.

How exit roots are committed and claimed is covered in [Cross-chain Messaging](/Knowledge/technical/protocol/cross-chain-messaging).
