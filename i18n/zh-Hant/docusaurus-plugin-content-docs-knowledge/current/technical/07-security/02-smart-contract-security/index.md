---
title: 智能合約安全
draft: false
---

# 智能合約安全

**Polygon CDK 淵源**——核心 Rollup 及跨鏈橋合約（`PolygonZkEVMBridge`、`PolygonRollupManager`、`GlobalExitRoot`）是 Polygon CDK 合約的分支，這些合約已由多家安全公司獨立審計。Rollup 合約運行於 Abelian Plus Node 的 EVM 環境中。QDAY 專屬的修改極少，且集中於 Abelian Plus Node 整合與 Committer。

**時間鎖（Timelock）**——`RollupManager` 上所有特權操作（合約升級、參數變更、緊急暫停）都透過 `Timelock` 合約執行，主網上最少延遲 24 小時。這讓社群有時間在變更生效前進行審查，並在必要時予以否決。

**ProxyAdmin**——可升級的代理合約使用由 DAO Timelock 擁有的 `ProxyAdmin`。沒有任何單一私鑰可以單方面升級核心合約。
