---
title: 跨鏈訊息傳遞
draft: false
---

# 跨鏈訊息傳遞

QDAY2 使用 Polygon CDK Global Exit Root 作為本 rollup 與其他共用同一 exit-root 樹的鏈之間的訊息傳遞基礎。[跨鏈橋協定](/Knowledge/technical/protocol/bridge-protocol)上的資產鎖定，會在對應的 exit root 提交後成為目標鏈上可領取的資產。

**GlobalExitRoot**——`GlobalExitRoot` 合約維護一棵 Merkle 樹，累積所有已連接 rollup 鏈的 exit root。任何追蹤 GlobalExitRoot 的鏈，都可以透過提出針對已提交根的 Merkle 證明來驗證跨鏈橋領取請求。

**領取流程**——若要在目標鏈上領取跨鏈資產，接收者需向目標鏈的 `PolygonZkEVMBridge` 提出跨鏈橋事件資料與 Merkle 證明。合約會根據已知的 GlobalExitRoot 驗證證明並釋放資產。
