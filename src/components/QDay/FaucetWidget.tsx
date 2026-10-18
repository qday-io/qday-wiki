import React, { useState } from 'react';
import Translate, {translate} from '@docusaurus/Translate';
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
  // CooldownActive
  '0xc1ab61a1': translate({id: 'faucet.err.cooldown', message: 'This address already claimed recently. Try again after the cooldown.'}),
  // FaucetEmpty
  '0xc1336f85': translate({id: 'faucet.err.empty', message: 'The faucet is temporarily out of tQDAY. Please try again later.'}),
  // Paused
  '0x9e87fac8': translate({id: 'faucet.err.paused', message: 'The faucet is paused right now. Please try again later.'}),
  // NotEOA
  '0xba092d16': translate({id: 'faucet.err.notEoa', message: 'Claims must come from a regular wallet, not a contract.'}),
};

function withAddress(selector: string, addr: string): string {
  return selector + '0'.repeat(24) + addr.toLowerCase().replace(/^0x/, '');
}

function fmtWait(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.ceil((sec % 3600) / 60);
  return h > 0
    ? translate({id: 'faucet.wait.hm', message: '{h} h {m} min', description: 'Faucet cooldown: hours and minutes'}, {h, m})
    : translate({id: 'faucet.wait.m', message: '{m} min', description: 'Faucet cooldown: minutes'}, {m});
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
    if (!account || !eth) { setState('err'); setMsg(translate({id: 'faucet.err.connectFirst', message: 'Connect a wallet first.'})); return; }
    try {
      setState('busy'); setMsg('');

      // 1. Cooldown: read it from the chain before asking the wallet to sign.
      const wait = Number(BigInt(await rpcCall('eth_call', [{ to: FAUCET, data: withAddress(TIME_UNTIL_NEXT, account) }, 'latest'])));
      if (wait > 0) {
        setState('err'); setMsg(translate({id: 'faucet.err.alreadyClaimed', message: 'This address already claimed. You can claim again in {wait}.'}, {wait: fmtWait(wait)}));
        return;
      }

      // 2. Gas: claim() is a transaction, so an empty wallet cannot send it.
      const balance = BigInt(await rpcCall('eth_getBalance', [account, 'latest']));
      if (balance === 0n) {
        setState('err');
        setMsg(
          <Translate
            id="faucet.err.noGas"
            values={{site: <a href={FAUCET_SITE} target="_blank" rel="noreferrer">faucet.qday.info</a>}}>
            {'This wallet has no tQDAY on QDay Aevum yet, so it cannot pay the gas for a claim. Get your first tQDAY at {site}, which covers the gas for you.'}
          </Translate>,
        );
        return;
      }

      // 3. Network: the claim must go to QDay Aevum, never to whatever chain the wallet is on.
      if (!(await ensureQday2())) {
        setState('err'); setMsg(translate({id: 'faucet.err.wrongChain', message: 'Switch your wallet to QDay Aevum (chain ID 44005), then try again.'}));
        return;
      }

      // 4. Dry run, so a revert shows its reason instead of a failed transaction.
      try {
        await rpcCall('eth_call', [{ from: account, to: FAUCET, data: withAddress(CLAIM, account) }, 'latest']);
      } catch (e: any) {
        setState('err'); setMsg(revertMessage(e) ?? translate({id: 'faucet.err.refused', message: 'The faucet refused the claim: {reason}.'}, {reason: e?.message ?? translate({id: 'faucet.err.unknownReason', message: 'unknown reason'})}));
        return;
      }

      const drip = BigInt(await rpcCall('eth_call', [{ to: FAUCET, data: DRIP_AMOUNT }, 'latest']));
      const tx: string = await eth.request({
        method: 'eth_sendTransaction',
        params: [{ from: account, to: FAUCET, data: withAddress(CLAIM, account), value: '0x0' }],
      });
      const txLink = <a href={`${EXPLORER}/tx/${tx}`} target="_blank" rel="noreferrer">{tx.slice(0, 10)}…</a>;
      setMsg(<Translate id="faucet.status.sent" values={{tx: txLink}}>{'Claim sent ({tx}). Waiting for confirmation…'}</Translate>);

      // 5. Only report success once the chain says so.
      const receipt = await waitForReceipt(tx);
      if (!receipt) {
        setState('err'); setMsg(<Translate id="faucet.status.unconfirmed" values={{tx: txLink}}>{'Claim sent ({tx}) but not confirmed yet. Check the explorer in a minute.'}</Translate>);
      } else if (receipt.status === '0x1') {
        setState('ok'); setMsg(<Translate id="faucet.status.received" values={{amount: fmtEther(drip), tx: txLink}}>{'Received {amount} testnet tQDAY ({tx}).'}</Translate>);
      } else {
        setState('err'); setMsg(<Translate id="faucet.status.failed" values={{tx: txLink}}>{'The claim transaction failed on-chain ({tx}).'}</Translate>);
      }
    } catch (e: any) {
      setState('err'); setMsg(revertMessage(e) ?? e?.shortMessage ?? e?.message ?? translate({id: 'faucet.err.claimFailed', message: 'Claim failed.'}));
    }
  }

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 12,
      padding: '18px 20px', margin: '1rem 0', background: 'var(--ifm-background-surface-color)',
    }}>
      <div style={{ fontWeight: 650, marginBottom: 4 }}>
        <Translate id="faucet.title">Get testnet tQDAY</Translate>
      </div>
      <div style={{ fontSize: 14, color: 'var(--ifm-color-emphasis-700)', marginBottom: 12 }}>
        {addr
          ? <Translate id="faucet.connected" values={{addr: <code>{addr.slice(0, 6)}…{addr.slice(-4)}</code>}}>{'Connected {addr}'}</Translate>
          : translate({id: 'faucet.intro', message: 'Connect your wallet to claim gas on QDay Aevum.'})}
      </div>
      {addr ? (
        <button onClick={claim} disabled={state === 'busy'} style={{
          background: 'var(--ifm-color-primary)', color: '#fff', border: 'none', borderRadius: 8,
          padding: '9px 16px', fontWeight: 600, fontSize: 14.5,
          cursor: state === 'busy' ? 'default' : 'pointer', opacity: state === 'busy' ? 0.6 : 1,
        }}>
          {state === 'busy'
            ? translate({id: 'faucet.button.busy', message: 'Working…'})
            : translate({id: 'faucet.button.claim', message: 'Claim testnet tQDAY'})}
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
