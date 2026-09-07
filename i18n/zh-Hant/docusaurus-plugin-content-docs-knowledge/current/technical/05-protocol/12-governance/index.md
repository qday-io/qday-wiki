---
title: 治理
draft: false
---

# 治理

**QDAY DAO**——協定參數變更、合約升級與緊急行動都需要 DAO 核准。投票權與質押的 QDAY 數量成正比。

**時間鎖（Timelock）**——`RollupManager` 上所有特權操作都透過具有最小延遲的 `Timelock` 合約執行。這讓社群有時間審查並否決變更。

**量子威脅暫停**——若偵測到可信的量子威脅，DAO 可投票暫停 rollup 執行。暫停由 `RollupManager` 合約強制執行。由於暫停本身受抗量子的 Abelian L1 簽章把關，擁有量子電腦的攻擊者無法強制解除 rollup 暫停，也無法偽造暫停撤銷。
