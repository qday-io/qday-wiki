---
title: Post-Quantum Architecture
draft: false
---

# Post-Quantum Architecture

QDAY2's post-quantum layer is built on **ML-DSA-65** (Module Lattice-based Digital Signature Algorithm, standardized as FIPS 204 by NIST), replacing ECDSA for quantum-resistant key operations.

**ML-DSA-65** — The primary post-quantum signature scheme. ML-DSA-65 is based on Module Learning With Errors (MLWE) hardness assumptions. It produces ~3.3 KB public keys and ~2.5 KB signatures — larger than ECDSA but computationally infeasible to break with a quantum computer running Shor's algorithm.

**Hybrid Signature** — During the transition period, QDAY2 supports hybrid signatures that combine an ML-DSA-65 signature with a standard ECDSA signature. Both must be valid for a transaction to be accepted. This ensures backward compatibility with existing tooling while layering in quantum resistance.

**Key Rotation** — Keys can be rotated on-chain without requiring users to move funds. The rotation process links the old public key to the new one via a signed update, preserving account history.

**Migration** — Phase 2 will introduce quantum-resistant accounts where a single BIP-39 mnemonic phrase derives both a legacy EVM (ECDSA) account and a new ML-DSA-65 account. Users will be able to migrate funds from the ECDSA account to the quantum-resistant account without creating a new mnemonic.
