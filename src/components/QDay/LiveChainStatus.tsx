import React, { useEffect, useState } from 'react';

// Interactive doc component: live block height from the QDay2 RPC, refreshed on
// an interval. Shows what MDX enables — a doc page that reflects real chain state.

const RPC: Record<string, string> = {
  qday2: 'https://rpc-test.qday.io',
  qday: 'https://rpc.qday.info',
};

export default function LiveChainStatus({ network = 'qday2' }: { network?: 'qday' | 'qday2' }) {
  const [block, setBlock] = useState<number | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    let alive = true;
    async function poll() {
      // Abort a slow/unreachable RPC after 5s so it never hangs on "connecting…".
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 5000);
      try {
        const res = await fetch(RPC[network], {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_blockNumber', params: [] }),
          signal: ctrl.signal,
        });
        const j = await res.json();
        if (alive && j.result) { setBlock(parseInt(j.result, 16)); setErr(false); }
        else if (alive) setErr(true);
      } catch {
        if (alive) setErr(true);
      } finally {
        clearTimeout(t);
      }
    }
    poll();
    const id = setInterval(poll, 6000);
    return () => { alive = false; clearInterval(id); };
  }, [network]);

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 999,
      padding: '6px 14px', fontSize: 14, margin: '0.5rem 0',
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: err ? 'var(--ifm-color-danger)' : 'var(--ifm-color-success)',
        boxShadow: err ? 'none' : '0 0 6px var(--ifm-color-success)',
      }} />
      <span style={{ fontWeight: 600 }}>{network === 'qday2' ? 'QDay2' : 'QDay'}</span>
      <span style={{ color: 'var(--ifm-color-emphasis-600)', fontFamily: 'var(--ifm-font-family-monospace)' }}>
        {err ? 'RPC unreachable' : block === null ? 'connecting…' : `block #${block.toLocaleString()}`}
      </span>
    </div>
  );
}
