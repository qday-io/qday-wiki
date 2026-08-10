import React from 'react';
import {translate} from '@docusaurus/Translate';

// The six feature cards from the original community site — QDay's core value props.

type F = { icon: string; title: string; body: string };

const FEATURES: F[] = [
  {
    icon: '🛡️',
    title: translate({id: 'feat.secure.t', message: 'Quantum-Secure'}),
    body: translate({id: 'feat.secure.b', message: 'Uses post-quantum cryptography to keep your assets and transactions secure in the quantum computing era.'}),
  },
  {
    icon: '⚡',
    title: translate({id: 'feat.evm.t', message: 'EVM-Compatible'}),
    body: translate({id: 'feat.evm.b', message: 'Fully compatible with the Ethereum Virtual Machine, enabling seamless migration of existing smart contracts and dApps.'}),
  },
  {
    icon: '🚀',
    title: translate({id: 'feat.l2.t', message: 'High-Performance Layer 2'}),
    body: translate({id: 'feat.l2.b', message: 'High throughput and low transaction fees while inheriting the quantum-secure properties of the Abelian Layer 1 network.'}),
  },
  {
    icon: '🔗',
    title: translate({id: 'feat.interop.t', message: 'Interoperability'}),
    body: translate({id: 'feat.interop.b', message: 'Supports cross-chain asset transfers and communication, bridging traditional blockchain ecosystems with quantum-secure networks.'}),
  },
  {
    icon: '🌐',
    title: translate({id: 'feat.decentral.t', message: 'Decentralized'}),
    body: translate({id: 'feat.decentral.b', message: 'Designed with a decentralized architecture to ensure censorship resistance and reliability.'}),
  },
  {
    icon: '📊',
    title: translate({id: 'feat.dev.t', message: 'Developer-Friendly'}),
    body: translate({id: 'feat.dev.b', message: 'Comprehensive development tools, SDKs, and detailed documentation to lower the barrier to entry.'}),
  },
];

export default function Features() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 14, maxWidth: 1000, margin: '0 auto',
    }}>
      {FEATURES.map((f) => (
        <div key={f.title} style={{
          padding: '22px 22px 24px', borderRadius: 14,
          border: '1px solid var(--ifm-color-emphasis-200)',
          background: 'var(--ifm-background-surface-color)',
        }}>
          <span style={{ fontSize: 26 }}>{f.icon}</span>
          <h3 style={{ margin: '14px 0 8px', fontSize: 18 }}>{f.title}</h3>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ifm-color-emphasis-700)' }}>{f.body}</p>
        </div>
      ))}
    </div>
  );
}
