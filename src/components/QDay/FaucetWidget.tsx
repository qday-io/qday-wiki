import React, { useState } from 'react';
import { ensureQday2, getProvider } from './wallet';
import ConnectButtons from './ConnectButtons';

// Real testnet faucet embedded in the docs: connect wallet → claim QDAY on QDay2.
// Calls the deployed QDayFaucet.claim(address) — selector 0x1e83409a.
const FAUCET = '0x73bd8b412744386DFf7f5651e9765BCcee546C81';

// claim(address) calldata: selector + 32-byte left-padded address
function claimData(to: string): string {
  return '0x1e83409a' + '0'.repeat(24) + to.toLowerCase().replace(/^0x/, '');
}

export default function FaucetWidget() {
  const [addr, setAddr] = useState<string | null>(null);
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function claim() {
    const account = addr;
    const eth = getProvider();
    if (!account || !eth) { setState('err'); setMsg('Connect a wallet first.'); return; }
    try {
      setState('busy'); setMsg('');
      await ensureQday2();
      const tx = await eth.request({
        method: 'eth_sendTransaction',
        params: [{ from: account, to: FAUCET, data: claimData(account), value: '0x0' }],
      });
      setState('ok'); setMsg(`Claim sent: ${tx.slice(0, 10)}… — testnet QDAY on the way.`);
    } catch (e: any) {
      setState('err'); setMsg(e?.shortMessage ?? e?.message ?? 'Claim failed.');
    }
  }

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12,
      padding: '18px 20px', margin: '1rem 0', background: 'var(--ifm-background-surface-color)',
    }}>
      <div style={{ fontWeight: 650, marginBottom: 4 }}>Get testnet QDAY</div>
      <div style={{ fontSize: 14, color: 'var(--ifm-color-emphasis-700)', marginBottom: 12 }}>
        {addr ? <>Connected <code>{addr.slice(0, 6)}…{addr.slice(-4)}</code></> : 'Connect your wallet to claim gas on QDay2.'}
      </div>
      {addr ? (
        <button onClick={claim} disabled={state === 'busy'} style={{
          background: 'var(--ifm-color-primary)', color: '#fff', border: 'none', borderRadius: 8,
          padding: '9px 16px', fontWeight: 600, fontSize: 14.5,
          cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
        }}>
          {state === 'busy' ? 'Check your wallet…' : 'Claim testnet QDAY'}
        </button>
      ) : (
        <ConnectButtons
          onAccount={(a) => { setAddr(a); setState('idle'); setMsg(''); }}
          onError={(m) => { setState('err'); setMsg(m); }}
          busy={state === 'busy'}
          setBusy={(b) => setState(b ? 'busy' : 'idle')}
        />
      )}
      {msg && <p style={{ marginTop: 10, marginBottom: 0, fontSize: 13.5,
        color: state === 'err' ? 'var(--ifm-color-danger)' : 'var(--ifm-color-success)' }}>
        {state === 'ok' ? '✓ ' : ''}{msg}</p>}
    </div>
  );
}
