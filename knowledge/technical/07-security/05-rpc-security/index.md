---
title: RPC Security
draft: false
---

# RPC Security

- Rate-limit public RPC endpoints to prevent DoS and transaction spam.
- Expose `eth_sendRawTransaction` only; consider restricting `debug_*` and `admin_*` endpoints on public nodes.
- Use TLS for all RPC connections. Never expose the internal Sequencer API to the public internet.
- Monitor for unusual transaction patterns (mempool flooding, abnormally large batches) and alert accordingly.
