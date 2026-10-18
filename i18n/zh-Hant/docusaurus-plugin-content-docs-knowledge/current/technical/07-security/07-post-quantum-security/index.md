---
title: 後量子安全
draft: false
---

# 後量子安全

**ML-DSA-65（FIPS 204）**——QDay Aevum 第 2 階段使用安全等級 3 的 Module Lattice-based Digital Signature Algorithm（相當於 192 位元的古典安全強度）。ML-DSA-65 已由 NIST 標準化為 FIPS 204（2024 年 8 月）。其安全建立在 Module Learning With Errors（MLWE）問題的困難度之上，目前沒有任何已知的量子算法能有效率地解決該問題。

**為甚麼 ECDSA 不足以應對**——ECDSA 簽名依賴橢圓曲線離散對數問題。在足夠大的量子電腦上執行的 Shor 算法可以在多項式時間內解決此問題。擁有約 4,000 個邏輯量子位元的量子電腦即可破解 256 位元的 ECDSA 密鑰。「先收集、後解密」（Harvest now, decrypt later）攻擊意味着攻擊者可能正在收集今日已簽名的交易，打算在量子硬件成熟後再加以破解。

**混合簽名**——在第 1 階段 → 第 2 階段的過渡期間，QDay 將接受同時包含 ML-DSA-65 簽名與 ECDSA 簽名的混合簽名。兩者都必須有效。這確保了向後兼容性，同時立即加入抗量子能力。隨着工具鏈成熟，可透過治理投票移除 ECDSA 的要求。

**密鑰隔離**——ML-DSA-65 帳戶密鑰與 ECDSA 帳戶密鑰由同一組助記詞獨立衍生。ECDSA 密鑰遭到洩露不會暴露 ML-DSA-65 密鑰。
