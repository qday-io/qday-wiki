import React, { useState } from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import { fmtEther, QDAY, QDAY2 } from './wallet';
import ConnectButtons from './ConnectButtons';

// Real asset balances embedded in the docs: connect wallet → read native QDAY
// plus the QDay ERC-20s straight from the chain via balanceOf(address).
//
// Which chain is read is per page, because the two testnets hold different
// assets: Origin testnet (44003) and Aevum testnet (44005) use different
// ERC-20 addresses (see /Knowledge/reference/tokens).
// Reading the wrong chain silently shows zero, so the panel names the chain it
// read and never falls back to the other one.
type Network = 'qday' | 'qday2';

const CHAINS: Record<Network, { label: string; chainId: number; rpc: string; tokens: Token[] }> = {
  qday: {
    label: translate({id: 'balance.chain.origin', message: 'QDay Origin testnet'}),
    chainId: QDAY.chainIdNum,
    rpc: QDAY.rpc,
    tokens: [
      { sym: 'USD8', addr: '0xc55C1e46B7468c2050cBd6ae372EFE276203fe6F', decimals: 6 },
      { sym: 'WABEL', addr: '0x699f540c974430781c618fb8033a1e3ff75c43d2', decimals: 18 },
      { sym: 'WQDAY', addr: '0x31ff878190Cf74E37d963F77599abB674d27A787', decimals: 18 },
    ],
  },
  qday2: {
    label: translate({id: 'balance.chain.aevum', message: 'QDay Aevum testnet'}),
    chainId: QDAY2.chainIdNum,
    rpc: QDAY2.rpc,
    tokens: [
      { sym: 'WABEL', addr: '0x4668107253E28C2b569E76Edb14B1E88c3b93de1', decimals: 18 },
      { sym: 'WQDAY', addr: '0x915E807e7EC1665889172902781FB851202A54dF', decimals: 18 },
      { sym: 'tUSD8', addr: '0x456569838f1d43009A91ebA4263147Afd7233483', decimals: 18 },
    ],
  },
};

interface Token {
  sym: string;
  addr: string;
  decimals: number;
}

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

export default function BalancePanel({ network = 'qday2' }: { network?: Network }) {
  const chain = CHAINS[network];
  const [addr, setAddr] = useState<string | null>(null);
  const [rows, setRows] = useState<{ sym: string; bal: string }[]>([]);
  const [state, setState] = useState<'idle' | 'busy' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function load(account: string) {
    try {
      setState('busy'); setMsg('');
      const native = await rpc(chain.rpc, 'eth_getBalance', [account, 'latest']);
      const out = [{ sym: translate({id: 'balance.native', message: '{sym} (native)', description: 'Native coin row in the balance panel'}, {sym: network === 'qday2' ? 'tQDAY' : 'QDAY'}), bal: fmtEther(BigInt(native ?? '0x0')) }];
      for (const t of chain.tokens) {
        const raw = await rpc(chain.rpc, 'eth_call', [{ to: t.addr, data: balanceOfData(account) }, 'latest']);
        out.push({ sym: t.sym, bal: scale(raw, t.decimals) });
      }
      setRows(out); setState('idle');
    } catch (e: any) {
      setState('err'); setMsg(e?.message ?? translate({id: 'balance.err.read', message: 'Failed to read balances.'}));
    }
  }

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12,
      padding: '18px 20px', margin: '1rem 0', background: 'var(--ifm-background-surface-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontWeight: 650 }}><Translate id="balance.title">Your QDay assets</Translate></div>
          <div style={{ fontSize: 12.5, color: 'var(--ifm-color-emphasis-600)', marginTop: 2 }}>
            <Translate id="balance.readFrom" values={{chain: chain.label, chainId: chain.chainId}}>
              {'Read from {chain} (chain ID {chainId})'}
            </Translate>
          </div>
        </div>
        {addr ? (
          <button onClick={() => load(addr)} disabled={state === 'busy'} style={{
            background: 'var(--ifm-color-primary)', color: '#fff', border: 'none', borderRadius: 8,
            padding: '8px 14px', fontWeight: 600, fontSize: 14,
            cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
          }}>
            {state === 'busy'
              ? translate({id: 'balance.button.reading', message: 'Reading…'})
              : translate({id: 'balance.button.refresh', message: 'Refresh'})}
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
        <Translate id="balance.addressOn" values={{addr: <code>{addr.slice(0, 6)}…{addr.slice(-4)}</code>, chain: chain.label}}>
          {'{addr} on {chain}'}
        </Translate></div>}
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
