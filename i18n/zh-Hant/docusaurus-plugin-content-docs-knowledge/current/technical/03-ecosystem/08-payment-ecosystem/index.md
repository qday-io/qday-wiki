---
title: 支付生態系
draft: false
---

# 支付生態系

**PQUSD**——QDAY2 原生的美元掛鉤穩定幣。PQUSD 是 QDAY2 支付層的主要貨幣，用於發票、訂閱與代理微支付。

| 合約 | 地址 |
|----------|---------|
| PQUSD 代幣（proxy） | `0x6e0144b9351d261C57be5fe4E3d65a8EC105Db72` |

**支付閘道**——供開發者使用的 API 與 SDK，可用於建立發票、管理訂閱、串流付款與接收 webhook。整合範例請參閱[開發者指南](/Knowledge/technical/developer-guide/getting-started)。

**代理支付**——AI 代理可使用受 session key 限制的 PQUSD 付款，自主支付 API 呼叫、資料饋送、運算及其他服務的費用。這開啟了一種全新的自主機器對機器商務模式，無需人工對每筆交易簽核。
