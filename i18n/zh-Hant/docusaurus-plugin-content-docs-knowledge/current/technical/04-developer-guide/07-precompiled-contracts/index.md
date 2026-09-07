---
title: 預編譯合約
draft: false
---

# 預編譯合約

QDAY2 在標準 EVM 預編譯合約之上，新增了後量子密碼學預編譯合約。

## 密碼學

標準 Ethereum 預編譯合約（`ecrecover`、SHA-256、modexp 等）的行為與 Ethereum 上相同。QDAY2 額外提供基於格的簽章驗證，讓合約無需以 Solidity 實作該演算法即可驗證 ML-DSA-65 與混合簽章。

## ML-DSA-65 驗證

驗證 ML-DSA-65（FIPS 204）簽章。使用此預編譯合約可在 Solidity 合約內驗證後量子簽章。

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

## 混合驗證

在第一階段 → 第二階段的過渡期間，驗證 ML-DSA-65 + ECDSA 混合簽章。兩個簽章都必須有效。

```solidity
address constant HYBRID_VERIFY = address(0x101);
```

## 未來擴充

預編譯合約地址將於第二階段上線時確定。隨著後量子帳戶模型落地，可能會新增更多驗證用的預編譯合約。目前的地址請查閱[參考資料](/Knowledge/technical/reference)頁面。
