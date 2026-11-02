---
title: High Availability
draft: false
---

# High Availability

- **RPC Gateway**: Multiple `cdk-erigon` read replicas sit behind a load balancer. Any replica can serve read traffic; only the designated Sequencer writes new blocks.
- **Validators**: Batch verification is spread across multiple independent validators. With an M-of-N threshold, a batch can still be approved when some validators are unavailable, as long as at least M approve.
- **DA Node**: `reth` + `lighthouse` run as an Ethereum consensus/execution pair with standard Ethereum HA patterns (multiple beacon nodes, execution clients).
- **Database**: PostgreSQL replication for `cdk-erigon` and `cdk-node` state.
