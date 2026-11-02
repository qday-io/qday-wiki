---
title: 安全概覽
draft: false
---

# 安全概覽

QDay Aevum 的安全設計建立在三大支柱之上：

**抗量子基礎**——Committer 將 QDay 的最終狀態根提交至 Abelian Layer 1（PoW），其採用可抵禦量子電腦的格密碼（LWE / Ring-LWE）。目前並無已知的量子算法（包括 Shor 算法）能夠破解這些假設。

**縱深防禦**——多層相互獨立的安全機制保護用戶資金：採用 M-of-N 門檻的多驗證者批次驗證、特權合約操作的 Timelock 控制、由 DAO 治理並具抗量子能力、用於緊急應變的暫停機制，以及第 2 階段帳戶的 ML-DSA-65 後量子簽署。

**最小信任面**——QDay Aevum 繼承 Polygon CDK 經過廣泛審計的合約程式碼庫。QDAY 專屬的擴充（Abelian Plus Node、Committer）範圍受到嚴格限定，且不持有用戶資金。端到端的安全亦取決於驗證者的獨立性、門檻設定、數據可用性及最終確定規則。
