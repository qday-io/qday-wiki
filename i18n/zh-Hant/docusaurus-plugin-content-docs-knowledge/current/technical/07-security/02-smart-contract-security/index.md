---
title: 智慧合約安全性
draft: false
---

# 智慧合約安全性

**Polygon CDK 血統**——核心 zkEVM 合約（`PolygonZkEVMBridge`、`PolygonRollupManager`、`GlobalExitRoot`、`Verifier`）是 Polygon CDK 合約的分支，這些合約已由多家安全公司獨立審計。QDAY 專屬的修改極少，且集中於 Committer 與 Record Contracts。

**時間鎖（Timelock）**——`RollupManager` 上所有特權操作（合約升級、參數變更、緊急暫停）都透過 `Timelock` 合約執行，主網上最少延遲 24 小時。這讓社群有時間在變更生效前進行審查，並在必要時予以否決。

**ProxyAdmin**——可升級的代理合約使用由 DAO Timelock 擁有的 `ProxyAdmin`。沒有任何單一私鑰可以單方面升級核心合約。

**不可變的驗證者**——負責檢查 ZK 證明的 `Verifier` 合約不可升級。替換驗證者需要部署新的 `RollupManager` 並遷移狀態——此流程需要 DAO 的完整核准。
