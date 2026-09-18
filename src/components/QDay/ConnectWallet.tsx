import React, { useState } from 'react';
import { connectAbelian, ensureQday2 } from './wallet';

// Homepage-hero button, parallel to <AddNetworkButton> ("Add QDay Aevum to Wallet").
// Connects Abelian (Mobile) over WalletConnect, then adds/switches to QDay Aevum —
// so both hero buttons read "Add QDay Aevum to <wallet>".

export default function ConnectWallet() {
  const [addr, setAddr] = useState<string | null>(null);
  const [state, setState] = useState<'idle' | 'busy' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function go() {
    try {
      setState('busy'); setMsg('');
      const account = await connectAbelian();
      if (!account) throw new Error('Abelian (Mobile) connection cancelled.');
      setAddr(account);
      const onQday = await ensureQday2();
      setMsg(onQday ? '' : 'Connected, but this wallet could not switch to QDay Aevum (44005).');
      setState('idle');
    } catch (e: any) {
      setState('err'); setMsg(e?.shortMessage ?? e?.message ?? 'Connection failed.');
    }
  }

  if (addr) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '10px 16px', borderRadius: 8, fontSize: 15, fontWeight: 600,
        background: 'rgba(31,157,77,.14)', color: '#1f9d4d',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: '#1f9d4d' }} />
        Abelian (Mobile) <code style={{ color: 'inherit' }}>{addr.slice(0, 6)}…{addr.slice(-4)}</code>
        <button onClick={() => { setAddr(null); setMsg(''); }} style={{
          marginLeft: 4, background: 'transparent', border: 'none', color: 'inherit',
          fontWeight: 700, cursor: 'pointer', fontSize: 16, lineHeight: 1,
        }} aria-label="Disconnect">×</button>
      </span>
    );
  }

  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <button onClick={go} disabled={state === 'busy'} style={{
      background: 'transparent', color: 'var(--ifm-color-primary)',
      border: '1px solid var(--ifm-color-primary)', borderRadius: 8,
      padding: '10px 18px', fontWeight: 600, fontSize: 15,
      cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
    }} title={msg || undefined}>
      {state === 'busy' ? 'Check your wallet…' : 'Add QDay Aevum to Abelian (Mobile)'}
    </button>
      {/* The wallet's home scanner only reads addresses and payment codes; the
          WalletConnect pairing lives on its own screen, so say where to scan. */}
      <small style={{ opacity: 0.7, fontSize: 12.5 }}>
        Scan from Abelian (Mobile) → Settings → DApp Connection
      </small>
      {msg ? <small style={{ color: '#f5a524', fontSize: 12.5 }}>{msg}</small> : null}
    </span>
  );
}
