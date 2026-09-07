---
title: RPC 安全性
draft: false
---

# RPC 安全性

- 對公開 RPC 端點實施速率限制，以防止 DoS 攻擊與交易垃圾訊息。
- 僅開放 `eth_sendRawTransaction`；在公開節點上應考慮限制 `debug_*` 與 `admin_*` 端點。
- 所有 RPC 連線皆使用 TLS。切勿將內部的排序器 API 暴露於公開網際網路。
- 監控異常的交易模式（記憶體池洪水攻擊、異常大量的批次），並據此發出警示。
