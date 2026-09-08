---
title: 後量子架構
draft: false
---

# 後量子架構

QDAY2 的後量子層建構於 **ML-DSA-65**（Module Lattice-based Digital Signature Algorithm，由 NIST 標準化為 FIPS 204）之上，以其取代 ECDSA 進行抗量子的金鑰操作。

**ML-DSA-65** —— 主要的後量子簽章方案。ML-DSA-65 基於 Module Learning With Errors（MLWE）困難性假設。它產生約 3.3 KB 的公鑰與約 2.5 KB 的簽章——比 ECDSA 大，但即使是執行 Shor 演算法的量子電腦，在計算上也無法破解。

**混合簽章** —— 在過渡期間，QDAY2 支援混合簽章，將 ML-DSA-65 簽章與標準 ECDSA 簽章結合。兩者皆須有效，交易才會被接受。這在疊加抗量子能力的同時，確保與既有工具的向後相容。

**金鑰輪替** —— 金鑰可在鏈上輪替，無需使用者移動資金。輪替流程透過一筆已簽署的更新，將舊公鑰連結至新公鑰，並保留帳戶歷史。

**遷移** —— 第二階段將引入抗量子帳戶，由單一 BIP-39 助記詞同時衍生出傳統 EVM（ECDSA）帳戶與新的 ML-DSA-65 帳戶。使用者將能在不建立新助記詞的情況下，將資金從 ECDSA 帳戶遷移至抗量子帳戶。
