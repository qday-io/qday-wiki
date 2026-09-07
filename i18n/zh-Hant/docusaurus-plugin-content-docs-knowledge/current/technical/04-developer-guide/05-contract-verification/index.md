---
title: 合約驗證
draft: false
---

# 合約驗證

使用標準的 Blockscout 驗證流程在 QDAY2 區塊瀏覽器上驗證合約：

```bash
forge verify-contract \
  --chain-id <QDAY2_CHAIN_ID> \
  --verifier blockscout \
  --verifier-url https://explorer.qday.io/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

鏈 ID：[鏈參數](/Knowledge/reference/chains)。
