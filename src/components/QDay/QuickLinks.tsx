import React from 'react';

// Ecosystem quick-links wall — the "everything in one place" grid mature chain
// docs use to route users to the explorer, faucet, bridge, swap, etc.

type Item = { icon: string; title: string; desc: string; href: string };

const LINKS: Item[] = [
  { icon: '🔍', title: 'Explorer', desc: 'Blocks, txs, addresses, tokens', href: 'https://explorer.qday.io' },
  { icon: '🚪', title: 'Portal', desc: 'The QDay app hub', href: 'https://portal.qday.io' },
  { icon: '💧', title: 'Faucet', desc: 'Get testnet QDAY', href: 'https://fi.qday.info/en/dapps/faucet' },
  { icon: '🌉', title: 'Bridge', desc: 'Move assets across chains', href: 'https://portal.qday.info/en/bridge' },
  { icon: '🔄', title: 'Swap', desc: 'Trade tokens on QDay', href: 'https://portal.qday.io/en/qday-swap' },
  { icon: '📈', title: 'Staking', desc: 'Earn on QDAY / ABEL', href: 'https://portal.qday.io/en/staking' },
];

export default function QuickLinks() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 14, maxWidth: 1000, margin: '0 auto',
    }}>
      {LINKS.map((l) => (
        <a key={l.title} href={l.href} target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none',
          padding: '16px 18px', borderRadius: 12, color: 'inherit',
          border: '1px solid var(--ifm-color-emphasis-200)',
          background: 'var(--ifm-background-surface-color)',
          transition: 'border-color .15s, transform .15s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)'; e.currentTarget.style.transform = 'none'; }}
        >
          <span style={{ fontSize: 26, lineHeight: 1 }}>{l.icon}</span>
          <span>
            <span style={{ display: 'block', fontWeight: 650, fontSize: 15.5 }}>{l.title} ↗</span>
            <span style={{ display: 'block', fontSize: 13, color: 'var(--ifm-color-emphasis-600)', marginTop: 2 }}>{l.desc}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
