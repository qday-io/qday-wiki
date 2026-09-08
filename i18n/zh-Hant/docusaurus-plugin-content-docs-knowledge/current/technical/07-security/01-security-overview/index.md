---
title: 安全性概覽
draft: false
---

# 安全性概覽

QDAY2 的安全性設計建立在三大支柱之上：

**抗量子基礎** — 所有帳本最終性皆錨定於 Abelian Layer 1，其採用可抵禦量子電腦的基於格的密碼學（LWE / Ring-LWE）。目前已知沒有任何量子演算法——包括 Shor 演算法——能夠破解這些假設。

**縱深防禦** — 多層相互獨立的安全機制保護使用者資金：L2 層的 ZK 證明完整性、特權合約操作的 Timelock 控制、由 DAO 治理的緊急應變停止機制，以及第二階段帳戶的 ML-DSA-65 後量子簽署。

**最小信任面** — QDAY2 繼承 Polygon CDK 經過廣泛稽核的合約程式碼庫。QDAY 專屬的擴充（Committer、Record Contracts、Abelian Plus Node）範圍受到嚴格限定，且不持有使用者資金。
