import React, { useState } from 'react';
import { getProvider } from './wallet';

// One-click "Add token to wallet" via EIP-747 (wallet_watchAsset). Drop it into
// any guide page next to a token: <AddTokenButton symbol="USD8" address="0x..." decimals={6} />

export default function AddTokenButton({
  symbol,
  address,
  decimals = 18,
  image,
}: {
  symbol: string;
  address: string;
  decimals?: number;
  image?: string;
}) {
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function add() {
    const eth = getProvider();
    if (!eth) { setState('err'); setMsg('No wallet found — install a wallet extension.'); return; }
    setState('busy'); setMsg('');
    try {
      const added = await eth.request({
        method: 'wallet_watchAsset',
        params: { type: 'ERC20', options: { address, symbol, decimals, image } },
      });
      if (added) { setState('ok'); setMsg(`${symbol} added to your wallet.`); }
      else { setState('idle'); }
    } catch (e: any) {
      setState('err'); setMsg(e?.message ?? 'Request rejected.');
    }
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, margin: '0.25rem 0' }}>
      <button onClick={add} disabled={state === 'busy'} style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'transparent', color: 'var(--ifm-color-primary)',
        border: '1px solid var(--ifm-color-primary)', borderRadius: 8,
        padding: '4px 12px', fontSize: 13.5, fontWeight: 600,
        cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
      }}>
        {state === 'ok' ? '✓ Added' : state === 'busy' ? 'Check wallet…' : `+ Add ${symbol}`}
      </button>
      {state === 'err' && <span style={{ fontSize: 12.5, color: 'var(--ifm-color-danger)' }}>{msg}</span>}
    </span>
  );
}
