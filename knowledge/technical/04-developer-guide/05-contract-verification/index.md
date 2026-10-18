---
title: Contract Verification
draft: false
---

# Contract Verification

Verify contracts on the QDay Aevum testnet explorer (`https://explorer-test.qday.info`) using the standard Blockscout verification flow:

```bash
forge verify-contract \
  --chain-id 44005 \
  --verifier blockscout \
  --verifier-url https://explorer-test.qday.info/api \
  <CONTRACT_ADDRESS> \
  src/MyContract.sol:MyContract
```

Chain IDs: [Chain parameters](/Knowledge/reference/chains).
