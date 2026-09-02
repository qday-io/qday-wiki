---
title: High Availability
draft: false
---

# High Availability

- **RPC Gateway**: Multiple `cdk-erigon` read replicas sit behind a load balancer. Any replica can serve read traffic; only the designated Sequencer writes new blocks.
- **zk Prover**: Prover instances can be scaled horizontally; the Aggregator distributes batches across available provers.
- **DA Node**: `reth` + `lighthouse` run as an Ethereum consensus/execution pair with standard Ethereum HA patterns (multiple beacon nodes, execution clients).
- **Database**: PostgreSQL replication for `cdk-erigon` and `cdk-node` state.
