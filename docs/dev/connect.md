---
sidebar_position: 2
---
# Connect / RPC

## Endpoints

| Chain | Chain ID | RPC | WebSocket |
|---|---|---|---|
| QDay | 44003 | `https://rpc.qday.info` | `wss://rpc.qday.info` |
| QDay2 | 44005 | `https://rpc-test.qday.info` | `wss://rpc-test.qday.info` |

## Quick check

```bash title="Latest block via curl"
curl -s https://rpc.qday.info \
  -X POST -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```

## Add the network programmatically (EIP-3085)

```ts title="wallet_addEthereumChain"
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0xABE5',            // 44005
    chainName: 'QDay2',
    rpcUrls: ['https://rpc-test.qday.info'],
    blockExplorerUrls: ['https://explorer.qday.info'],
    nativeCurrency: { name: 'QDAY', symbol: 'QDAY', decimals: 18 },
  }],
});
```
