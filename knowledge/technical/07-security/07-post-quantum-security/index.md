---
title: Post-Quantum Security
draft: false
---

# Post-Quantum Security

**ML-DSA-65 (FIPS 204)** — QDAY2 Phase 2 uses Module Lattice-based Digital Signature Algorithm at security level 3 (equivalent to 192-bit classical security). ML-DSA-65 is standardized by NIST as FIPS 204 (August 2024). Its security is based on the hardness of the Module Learning With Errors (MLWE) problem, which no known quantum algorithm can solve efficiently.

**Why ECDSA is insufficient** — ECDSA signatures rely on the elliptic-curve discrete logarithm problem. Shor's algorithm running on a sufficiently large quantum computer can solve this in polynomial time. A quantum computer with ~4,000 logical qubits could break a 256-bit ECDSA key. "Harvest now, decrypt later" attacks mean adversaries may be collecting signed transactions today with the intent to break them when quantum hardware matures.

**Hybrid signatures** — During the Phase 1 → Phase 2 transition, QDAY2 accepts hybrid signatures containing both an ML-DSA-65 signature and an ECDSA signature. Both must be valid. This ensures backward compatibility while adding quantum resistance immediately. As tooling matures, the ECDSA requirement can be dropped by governance vote.

**Key isolation** — The ML-DSA-65 account key and the ECDSA account key are derived independently from the same mnemonic. Compromise of the ECDSA key does not expose the ML-DSA-65 key.
