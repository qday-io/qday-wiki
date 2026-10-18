---
title: 預編譯合約
draft: false
---

# 預編譯合約

在**第 2 階段**，QDay 將在標準 EVM 預編譯合約之上新增後量子密碼學預編譯合約，目前 Aevum 測試網尚未提供。

## 密碼學 {/* #cryptography */}

標準以太坊預編譯合約（`ecrecover`、SHA-256、modexp 等）的行為與以太坊上相同。第 2 階段，QDay 將額外提供格密碼簽名驗證，讓合約無需以 Solidity 實作該方案，即可驗證 ML-DSA-65 與混合簽名。

## ML-DSA-65 驗證 {/* #ml-dsa-65-verify */}

驗證 ML-DSA-65（FIPS 204）簽名。使用此預編譯合約可在 Solidity 合約內驗證後量子簽名。

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

## 混合驗證 {/* #hybrid-verify */}

在第 1 階段 → 第 2 階段的過渡期間，驗證 ML-DSA-65 + ECDSA 混合簽名。兩個簽名都必須有效。

```solidity
address constant HYBRID_VERIFY = address(0x101);
```

## 未來擴充 {/* #future-extensions */}

預編譯合約地址將於第 2 階段上線時公佈。隨着後量子帳戶模型落地，可能會新增更多驗證用的預編譯合約。
