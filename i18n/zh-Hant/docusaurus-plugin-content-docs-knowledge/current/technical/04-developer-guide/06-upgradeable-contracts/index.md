---
title: 可升級合約
draft: false
---

# 可升級合約

使用標準的 OpenZeppelin UUPS 或 Transparent Proxy 模式——它們無需修改即可在 QDAY2 上運作。

```bash
forge install OpenZeppelin/openzeppelin-contracts-upgradeable
```

涉及大量資產的代理合約管理操作，應使用 `TimelockController` 以確保安全，與 QDAY2 協定本身的治理模型保持一致。
