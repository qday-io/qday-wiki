---
title: Bridge Security
draft: false
---

# Bridge Security

**Merkle proof verification** — Bridge claims on the destination chain require a Merkle proof against the committed `GlobalExitRoot`. A claim without a valid proof is rejected. An attacker cannot fabricate a valid proof without breaking the hash function (SHA-256), which is quantum-safe.

**Double-spend protection** — The bridge tracks a `nullifier` for each bridge event. Once claimed, the nullifier is marked as spent and the same event cannot be claimed again.

**Abelian Bridge (live today)** — ABEL ⇄ WABEL conversion currently goes through the [Abelian Bridge](/guide/handbook/user-guide/abelian-bridge-v3), whose smart contracts mint WABEL when ABEL is bridged in and burn it when WABEL is converted back. The Abelian Bridge runs on QDay Origin mainnet, QDay Origin testnet and the QDay Aevum testnet.

**PQZK Bridge (umbrella concept)** — PQZK Bridge (Post-Quantum Zero-Knowledge Bridge) is the umbrella term for zero-knowledge bridges built on post-quantum public chains such as Abelian. It is not a specific dApp. Today's Abelian Bridge (ABEL ⇄ WABEL) and QDay Bridge do not yet meet the PQZK Bridge standard; a PQZK Bridge between QDay and Abelian is future work (see [whitepaper §4.4](/guide/handbook/qday-whitepaper#sec-4-4)). In this design, QDay's state is anchored by the Committer's status root submissions to the Abelian Chain; forging a status root submission would require breaking Abelian's lattice-based cryptography.
