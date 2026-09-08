---
title: 後量子安全性
draft: false
---

# 後量子安全性

**ML-DSA-65（FIPS 204）**——QDAY2 第二階段使用安全等級 3 的 Module Lattice-based Digital Signature Algorithm（相當於 192 位元的古典安全強度）。ML-DSA-65 已由 NIST 標準化為 FIPS 204（2024 年 8 月）。其安全性建立在 Module Learning With Errors（MLWE）問題的困難度之上，目前沒有任何已知的量子演算法能有效率地解決該問題。

**為什麼 ECDSA 不足以應對**——ECDSA 簽章依賴橢圓曲線離散對數問題。在足夠大的量子電腦上執行的 Shor 演算法可以在多項式時間內解決此問題。擁有約 4,000 個邏輯量子位元的量子電腦即可破解 256 位元的 ECDSA 金鑰。「先蒐集、後解密」（Harvest now, decrypt later）攻擊意味著攻擊者可能正在蒐集今日已簽章的交易，打算在量子硬體成熟後再加以破解。

**混合簽章**——在第一階段 → 第二階段的過渡期間，QDAY2 接受同時包含 ML-DSA-65 簽章與 ECDSA 簽章的混合簽章。兩者都必須有效。這確保了向後相容性，同時立即加入抗量子能力。隨著工具鏈成熟，可透過治理投票移除 ECDSA 的要求。

**金鑰隔離**——ML-DSA-65 帳戶金鑰與 ECDSA 帳戶金鑰由同一組助記詞獨立衍生。ECDSA 金鑰遭到洩露不會暴露 ML-DSA-65 金鑰。
