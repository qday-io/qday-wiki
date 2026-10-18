---
title: 合約驗證
draft: false
---

# 合約驗證

使用標準的 Blockscout 驗證流程在 QDay Aevum 測試網區塊瀏覽器（`https://explorer-test.qday.info`）上驗證合約：

```bash
forge verify-contract \
  --chain-id 44005 \
  --verifier blockscout \
  --verifier-url https://explorer-test.qday.info/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

鏈 ID：[鏈參數](/Knowledge/reference/chains)。
