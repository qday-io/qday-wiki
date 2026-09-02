---
title: Cross-chain Messaging
draft: false
---

# Cross-chain Messaging

QDAY2 uses the Polygon CDK Global Exit Root as the messaging substrate between this rollup and other chains that share the same exit-root tree. Asset locks on the [Bridge Protocol](/Knowledge/technical/protocol/bridge-protocol) become claims on the destination once the corresponding exit root is committed.

**GlobalExitRoot** — The `GlobalExitRoot` contract maintains a Merkle tree that accumulates exit roots from all connected rollup chains. Any chain that tracks the GlobalExitRoot can verify a bridge claim by presenting a Merkle proof against the committed root.

**Claim Process** — To claim bridged assets on the destination chain, the recipient presents the bridge event data and a Merkle proof to the destination chain's `PolygonZkEVMBridge`. The contract verifies the proof against the known GlobalExitRoot and releases the assets.
