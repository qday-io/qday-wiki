---
title: Precompiled Contracts
draft: false
---

# Precompiled Contracts

QDAY2 adds post-quantum cryptography precompiles on top of the standard EVM precompiles.

## Cryptography

Standard Ethereum precompiles (`ecrecover`, SHA-256, modexp, and the others) behave as on Ethereum. QDAY2 additionally exposes lattice-based signature verification so contracts can check ML-DSA-65 and hybrid signatures without a Solidity implementation of the scheme.

## ML-DSA-65 Verify

Verifies an ML-DSA-65 (FIPS 204) signature. Use this to verify post-quantum signatures inside a Solidity contract.

```solidity
// Precompile address (Phase 2)
address constant ML_DSA_65_VERIFY = address(0x100);

function verifyMLDSA65(
    bytes calldata publicKey,   // 1952 bytes
    bytes calldata message,
    bytes calldata signature    // 3309 bytes
) internal view returns (bool) {
    (bool success, bytes memory result) = ML_DSA_65_VERIFY.staticcall(
        abi.encode(publicKey, message, signature)
    );
    require(success, "precompile call failed");
    return abi.decode(result, (bool));
}
```

## Hybrid Verify

Verifies a hybrid ML-DSA-65 + ECDSA signature during the Phase 1 → Phase 2 transition period. Both signatures must be valid.

```solidity
address constant HYBRID_VERIFY = address(0x101);
```

## Future Extensions

Precompile addresses are confirmed at Phase 2 launch. Additional verification precompiles may be added as the post-quantum account model lands. Check the [Reference](/Knowledge/technical/reference) page for current addresses.
