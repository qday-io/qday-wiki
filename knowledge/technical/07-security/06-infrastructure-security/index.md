---
title: Infrastructure Security
draft: false
---

# Infrastructure Security

- Store all operator private keys in an HSM or cloud KMS. Rotate keys regularly.
- Run `cdk-erigon`, `cdk-node`, and the Prover in isolated containers with minimal Linux capabilities.
- Restrict network access: the Sequencer's block-production API should be reachable only from `cdk-node`; the Prover's gRPC endpoint only from the Aggregator.
- Enable PostgreSQL SSL and restrict database access to application containers only.
- Keep all software up to date; subscribe to security advisories for `reth`, `lighthouse`, and Go dependencies.
