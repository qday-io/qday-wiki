import React, { useState } from 'react';
import { ensureQday2, fmtEther, getProvider, rpcCall } from './wallet';
import ConnectButtons from './ConnectButtons';

// Real testnet faucet embedded in the docs: connect wallet → claim QDAY on QDay Aevum.
// QDayFaucet on QDay Aevum (44005) — the same contract faucet.qday.info uses.
const FAUCET = '0xE5074CBbd046AFb491EB8692abD6cF7ECCC6dEE5';
const FAUCET_SITE = 'https://faucet.qday.info';
const EXPLORER = 'https://explorer-test.qday.info';

// Function selectors (keccak256 of the signature, first 4 bytes).
const CLAIM = '0x1e83409a'; //               claim(address)
const TIME_UNTIL_NEXT = '0x92d82dbe'; //     timeUntilNextClaim(address)
const DRIP_AMOUNT = '0x35a1529b'; //         dripAmount()

// Custom errors the contract can revert with.
const REVERTS: Record<string, string> = {
  '0xc1ab61a1': 'This address already claimed recently. Try again after the cooldown.', // CooldownActive
  '0xc1336f85': 'The faucet is temporarily out of QDAY. Please try again later.', //      FaucetEmpty
  '0x9e87fac8': 'The faucet is paused right now. Please try again later.', //             Paused
  '0xba092d16': 'Claims must come from a regular wallet, not a contract.', //             NotEOA
};

function withAddress(selector: string, addr: string): string {
  return selector + '0'.repeat(24) + addr.toLowerCase().replace(/^0x/, '');
}

function fmtWait(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.ceil((sec % 3600) / 60);
  return h > 0 ? `${h} h ${m} min` : `${m} min`;
}

// Pulls a revert selector out of whatever shape the wallet or RPC error has.
function revertMessage(e: any): string | null {
  const text = JSON.stringify(e?.data ?? e?.error?.data ?? e?.cause?.data ?? '') + ' ' + (e?.message ?? '');
  const hit = Object.keys(REVERTS).find((sel) => text.includes(sel.slice(2)));
  return hit ? REVERTS[hit] : null;
}

async function waitForReceipt(hash: string, timeoutMs = 90_000): Promise<any> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const r = await rpcCall('eth_getTransactionReceipt', [hash]).catch(() => null);
    if (r) return r;
    await new Promise((res) => setTimeout(res, 2000));
  }
  return null;
}

export default function FaucetWidget() {
  const [addr, setAddr] = useState<string | null>(null);
  const [state, setState] = useState<'idle' | 'busy' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState<React.ReactNode>('');

  async function claim() {
    const account = addr;
    const eth = getProvider();
    if (!account || !eth) { setState('err'); setMsg('Connect a wallet first.'); return; }
    try {
      setState('busy'); setMsg('');

      // 1. Cooldown: read it from the chain before asking the wallet to sign.
      const wait = Number(BigInt(await rpcCall('eth_call', [{ to: FAUCET, data: withAddress(TIME_UNTIL_NEXT, account) }, 'latest'])));
      if (wait > 0) {
        setState('err'); setMsg(`This address already claimed. You can claim again in ${fmtWait(wait)}.`);
        return;
      }

      // 2. Gas: claim() is a transaction, so an empty wallet cannot send it.
      const balance = BigInt(await rpcCall('eth_getBalance', [account, 'latest']));
      if (balance === 0n) {
        setState('err');
        setMsg(<>This wallet has no QDAY on QDay Aevum yet, so it cannot pay the gas for a claim. Get your first
          QDAY at <a href={FAUCET_SITE} target="_blank" rel="noreferrer">faucet.qday.info</a>, which covers
          the gas for you.</>);
        return;
      }

      // 3. Network: the claim must go to QDay Aevum, never to whatever chain the wallet is on.
      if (!(await ensureQday2())) {
        setState('err'); setMsg('Switch your wallet to QDay Aevum (chain ID 44005), then try again.');
        return;
      }

      // 4. Dry run, so a revert shows its reason instead of a failed transaction.
      try {
        await rpcCall('eth_call', [{ from: account, to: FAUCET, data: withAddress(CLAIM, account) }, 'latest']);
      } catch (e: any) {
        setState('err'); setMsg(revertMessage(e) ?? `The faucet refused the claim: ${e?.message ?? 'unknown reason'}.`);
        return;
      }

      const drip = BigInt(await rpcCall('eth_call', [{ to: FAUCET, data: DRIP_AMOUNT }, 'latest']));
      const tx: string = await eth.request({
        method: 'eth_sendTransaction',
        params: [{ from: account, to: FAUCET, data: withAddress(CLAIM, account), value: '0x0' }],
      });
      const txLink = <a href={`${EXPLORER}/tx/${tx}`} target="_blank" rel="noreferrer">{tx.slice(0, 10)}…</a>;
      setMsg(<>Claim sent ({txLink}). Waiting for confirmation…</>);

      // 5. Only report success once the chain says so.
      const receipt = await waitForReceipt(tx);
      if (!receipt) {
        setState('err'); setMsg(<>Claim sent ({txLink}) but not confirmed yet. Check the explorer in a minute.</>);
      } else if (receipt.status === '0x1') {
        setState('ok'); setMsg(<>Received {fmtEther(drip)} testnet QDAY ({txLink}).</>);
      } else {
        setState('err'); setMsg(<>The claim transaction failed on-chain ({txLink}).</>);
      }
    } catch (e: any) {
      setState('err'); setMsg(revertMessage(e) ?? e?.shortMessage ?? e?.message ?? 'Claim failed.');
    }
  }

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12,
      padding: '18px 20px', margin: '1rem 0', background: 'var(--ifm-background-surface-color)',
    }}>
      <div style={{ fontWeight: 650, marginBottom: 4 }}>Get testnet QDAY</div>
      <div style={{ fontSize: 14, color: 'var(--ifm-color-emphasis-700)', marginBottom: 12 }}>
        {addr ? <>Connected <code>{addr.slice(0, 6)}…{addr.slice(-4)}</code></> : 'Connect your wallet to claim gas on QDay Aevum.'}
      </div>
      {addr ? (
        <button onClick={claim} disabled={state === 'busy'} style={{
          background: 'var(--ifm-color-primary)', color: '#fff', border: 'none', borderRadius: 8,
          padding: '9px 16px', fontWeight: 600, fontSize: 14.5,
          cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
        }}>
          {state === 'busy' ? 'Working…' : 'Claim testnet QDAY'}
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
        color: state === 'err' ? 'var(--ifm-color-danger)' : state === 'ok' ? 'var(--ifm-color-success)' : 'var(--ifm-color-emphasis-700)' }}>
        {state === 'ok' ? '✓ ' : ''}{msg}</p>}
    </div>
  );
}
