---
title: Upgradeable Contracts
draft: false
---

# Upgradeable Contracts

Use the standard OpenZeppelin UUPS or Transparent Proxy patterns — they work without modification on QDAY2.

```bash
forge install OpenZeppelin/openzeppelin-contracts-upgradeable
```

Admin operations on proxy contracts involving significant value should use a `TimelockController` for safety, consistent with the QDAY2 protocol's own governance model.
