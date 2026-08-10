import React, { useEffect, useState } from 'react';

// Live network stat strip — the kind of at-a-glance metrics mature chain docs
// open with. Reads straight from the QDay RPC: latest block, gas price, block
// time (derived from the last two blocks), and chain id.

const RPC = 'https://rpc.qday.info';

async function rpc(method: string, params: any[] = []): Promise<any> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 5000);
  try {
    const res = await fetch(RPC, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
      signal: ctrl.signal,
    });
    return (await res.json()).result;
  } finally {
    clearTimeout(t);
  }
}

type Stat = { label: string; value: string };

function Skeleton() {
  return <span style={{ opacity: 0.4 }}>···</span>;
}

export default function NetworkStats() {
  const [stats, setStats] = useState<Stat[] | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const hexBlock = await rpc('eth_blockNumber');
        const n = parseInt(hexBlock, 16);
        const [cur, prev, gas, chainId] = await Promise.all([
          rpc('eth_getBlockByNumber', [hexBlock, false]),
          rpc('eth_getBlockByNumber', ['0x' + (n - 1).toString(16), false]),
          rpc('eth_gasPrice'),
          rpc('eth_chainId'),
        ]);
        const dt =
          cur && prev ? parseInt(cur.timestamp, 16) - parseInt(prev.timestamp, 16) : null;
        const gwei = gas ? (parseInt(gas, 16) / 1e9).toFixed(2) : '—';
        const next: Stat[] = [
          { label: 'Latest block', value: '#' + n.toLocaleString() },
          { label: 'Block time', value: dt != null ? `${dt}s` : '—' },
          { label: 'Gas price', value: `${gwei} Gwei` },
          { label: 'Chain ID', value: chainId ? String(parseInt(chainId, 16)) : '—' },
        ];
        if (alive) { setStats(next); setErr(false); }
      } catch {
        if (alive) setErr(true);
      }
    }
    load();
    const id = setInterval(load, 8000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  const cells = stats ?? [
    { label: 'Latest block', value: '' },
    { label: 'Block time', value: '' },
    { label: 'Gas price', value: '' },
    { label: 'Chain ID', value: '' },
  ];

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 1, borderRadius: 14, overflow: 'hidden',
      border: '1px solid var(--ifm-color-emphasis-200)',
      background: 'var(--ifm-color-emphasis-200)',
      maxWidth: 760, margin: '0 auto',
    }}>
      {cells.map((s) => (
        <div key={s.label} style={{
          background: 'var(--ifm-background-color)', padding: '16px 18px', textAlign: 'center',
        }}>
          <div style={{
            fontSize: 20, fontWeight: 700, fontFamily: 'var(--ifm-font-family-monospace)',
            letterSpacing: '-0.01em',
          }}>
            {err ? '—' : (s.value || <Skeleton />)}
          </div>
          <div style={{
            fontSize: 12, color: 'var(--ifm-color-emphasis-600)', marginTop: 4,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
