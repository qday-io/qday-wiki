---
title: Precompiled Contracts
draft: false
---

# Precompiled Contracts

In **Phase 2**, QDay will add post-quantum cryptography precompiles on top of the standard EVM precompiles. They are not available on Aevum testnet yet.

## Cryptography

Standard Ethereum precompiles (`ecrecover`, SHA-256, modexp, and the others) behave as on Ethereum. In Phase 2, QDay will additionally expose lattice-based signature verification so contracts can check ML-DSA-65 and hybrid signatures without a Solidity implementation of the scheme.

## ML-DSA-65 Verify

Verifies an ML-DSA-65 (FIPS 204) signature. Use this to verify post-quantum signatures inside a Solidity contract.

```solidity
// Placeholder: the real precompile address will be published at Phase 2 launch.
// Replace address(0) with the published address before deploying.
address constant ML_DSA_65_VERIFY_PRECOMPILE = address(0); // address published at Phase 2 launch

function verifyMLDSA65(
    bytes calldata publicKey,   // 1952 bytes
    bytes calldata message,
    bytes calldata signature    // 3309 bytes
) internal view returns (bool) {
    (bool success, bytes memory result) = ML_DSA_65_VERIFY_PRECOMPILE.staticcall(
        abi.encode(publicKey, message, signature)
    );
    require(success, "precompile call failed");
    return abi.decode(result, (bool));
}
```

## Hybrid Verify

Verifies a hybrid ML-DSA-65 + ECDSA signature during the Phase 1 → Phase 2 transition period. Both signatures must be valid.

```solidity
// Placeholder: the real precompile address will be published at Phase 2 launch.
address constant HYBRID_VERIFY_PRECOMPILE = address(0); // address published at Phase 2 launch
```

## Future Extensions

Precompile addresses will be published at Phase 2 launch. Additional verification precompiles may be added as the post-quantum account model lands.
