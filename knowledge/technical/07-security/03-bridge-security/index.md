---
title: Bridge Security
draft: false
---

# Bridge Security

**Merkle proof verification** — Bridge claims on the destination chain require a Merkle proof against the committed `GlobalExitRoot`. A claim without a valid proof is rejected. An attacker cannot fabricate a valid proof without breaking the hash function (SHA-256), which is quantum-safe.

**Double-spend protection** — The bridge tracks a `nullifier` for each bridge event. Once claimed, the nullifier is marked as spent and the same event cannot be claimed again.

**PQZK Bridge** — The QDAY2 ↔ Abelian bridge is anchored by the Committer's status root submissions to the Abelian Chain. Forging a status root submission would require breaking Abelian's lattice-based cryptography.
