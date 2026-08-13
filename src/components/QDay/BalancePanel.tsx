import React, { useState } from 'react';
import { fmtEther } from './wallet';
import ConnectButtons from './ConnectButtons';

// Real asset balances embedded in the docs: connect wallet → read native QDAY
// plus the QDay ERC-20s straight from the QDay chain via balanceOf(address).
// (Addresses are the verified QDay testnet tokens.)
const TOKENS = [
  { sym: 'USD8', addr: '0xc55C1e46B7468c2050cBd6ae372EFE276203fe6F', decimals: 6 },
  { sym: 'WABEL', addr: '0x699f540c974430781c618fb8033a1e3ff75c43d2', decimals: 18 },
  { sym: 'WQDAY', addr: '0x31ff878190Cf74E37d963F77599abB674d27A787', decimals: 18 },
];
const QDAY_RPC = 'https://rpc.qday.info';

function balanceOfData(holder: string): string {
  return '0x70a08231' + '0'.repeat(24) + holder.toLowerCase().replace(/^0x/, '');
}
async function rpc(url: string, method: string, params: any[]) {
  const res = await fetch(url, {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  return (await res.json()).result;
}
function scale(hex: string, decimals: number): string {
  if (!hex || hex === '0x') return '0';
  const v = BigInt(hex);
  const s = (Number(v) / 10 ** decimals).toFixed(4);
  return s.replace(/\.?0+$/, '') || '0';
}

export default function BalancePanel() {
  const [addr, setAddr] = useState<string | null>(null);
  const [rows, setRows] = useState<{ sym: string; bal: string }[]>([]);
  const [state, setState] = useState<'idle' | 'busy' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function load(account: string) {
    try {
      setState('busy'); setMsg('');
      const native = await rpc(QDAY_RPC, 'eth_getBalance', [account, 'latest']);
      const out = [{ sym: 'QDAY (native)', bal: fmtEther(BigInt(native ?? '0x0')) }];
      for (const t of TOKENS) {
        const raw = await rpc(QDAY_RPC, 'eth_call', [{ to: t.addr, data: balanceOfData(account) }, 'latest']);
        out.push({ sym: t.sym, bal: scale(raw, t.decimals) });
      }
      setRows(out); setState('idle');
    } catch (e: any) {
      setState('err'); setMsg(e?.message ?? 'Failed to read balances.');
    }
  }

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12,
      padding: '18px 20px', margin: '1rem 0', background: 'var(--ifm-background-surface-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ fontWeight: 650 }}>Your QDay assets</div>
        {addr ? (
          <button onClick={() => load(addr)} disabled={state === 'busy'} style={{
            background: 'var(--ifm-color-primary)', color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 14px', fontWeight: 600, fontSize: 14,
            cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
          }}>
            {state === 'busy' ? 'Reading…' : 'Refresh'}
          </button>
        ) : (
          <ConnectButtons
            onAccount={(a) => { setAddr(a); load(a); }}
            onError={(m) => { setState('err'); setMsg(m); }}
            busy={state === 'busy'}
            setBusy={(b) => setState(b ? 'busy' : 'idle')}
          />
        )}
      </div>
      {addr && <div style={{ fontSize: 13, color: 'var(--ifm-color-emphasis-600)', marginTop: 4 }}>
        <code>{addr.slice(0, 6)}…{addr.slice(-4)}</code> on QDay</div>}
      {rows.length > 0 && (
        <table style={{ width: '100%', marginTop: 14, marginBottom: 0 }}>
          <tbody>
            {rows.map((r) => (
              <tr key={r.sym}>
                <td style={{ fontWeight: 550 }}>{r.sym}</td>
                <td style={{ textAlign: 'right', fontFamily: 'var(--ifm-font-family-monospace)' }}>{r.bal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {msg && <p style={{ marginTop: 10, marginBottom: 0, fontSize: 13.5, color: 'var(--ifm-color-danger)' }}>{msg}</p>}
    </div>
  );
}
