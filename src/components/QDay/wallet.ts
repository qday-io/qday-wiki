// Tiny wallet helper shared by the interactive doc widgets. Uses the injected
// EIP-1193 provider (MetaMask) directly — no wagmi needed for a demo, though a
// production wiki would reuse the portal's wagmi/viem setup.

export const QDAY2 = {
  chainIdHex: '0xABE5', // 44005
  chainIdNum: 44005,
  rpc: 'https://rpc-test.qday.io',
};

export function getProvider(): any {
  return (globalThis as any).ethereum ?? null;
}

export async function connect(): Promise<string | null> {
  const eth = getProvider();
  if (!eth) return null;
  const accounts = await eth.request({ method: 'eth_requestAccounts' });
  return accounts?.[0] ?? null;
}

export async function ensureQday2(): Promise<void> {
  const eth = getProvider();
  if (!eth) return;
  const current = await eth.request({ method: 'eth_chainId' });
  if (current === QDAY2.chainIdHex) return;
  try {
    await eth.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: QDAY2.chainIdHex }] });
  } catch {
    await eth.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: QDAY2.chainIdHex, chainName: 'QDay2',
        rpcUrls: [QDAY2.rpc], blockExplorerUrls: ['https://explorer-test.qday.io'],
        nativeCurrency: { name: 'QDAY', symbol: 'QDAY', decimals: 18 },
      }],
    });
  }
}

// Minimal JSON-RPC read against the QDay2 RPC (no wallet needed).
export async function rpcCall(method: string, params: any[]): Promise<any> {
  const res = await fetch(QDAY2.rpc, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  const j = await res.json();
  if (j.error) throw new Error(j.error.message);
  return j.result;
}

export function fmtEther(wei: bigint, dp = 4): string {
  const s = (Number(wei) / 1e18).toFixed(dp);
  return s.replace(/\.?0+$/, '') || '0';
}
