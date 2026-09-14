---
title: Upgradeable Contracts
draft: false
---

# Upgradeable Contracts

Use the standard OpenZeppelin UUPS or Transparent Proxy patterns — they work without modification on QDay Aevum.

```bash
forge install OpenZeppelin/openzeppelin-contracts-upgradeable
```

Admin operations on proxy contracts involving significant value should use a `TimelockController` for safety, consistent with the QDay Aevum protocol's own governance model.
