---
title: Contract Verification
draft: false
---

# Contract Verification

Verify contracts on the QDAY2 Explorer using the standard Blockscout verification flow:

```bash
forge verify-contract \
  --chain-id <QDAY2_CHAIN_ID> \
  --verifier blockscout \
  --verifier-url https://explorer.qday.io/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

Chain IDs: [Chain parameters](/Knowledge/reference/chains).
