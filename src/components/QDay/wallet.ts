// Tiny wallet helper shared by the interactive doc widgets. Uses the injected
// EIP-1193 provider (MetaMask) directly — no wagmi needed for a demo, though a
// production wiki would reuse the portal's wagmi/viem setup.

export const QDAY2 = {
  chainIdHex: '0xABE5', // 44005
  chainIdNum: 44005,
  rpc: 'https://rpc-test.qday.io',
};

export const QDAY = {
  chainIdHex: '0xABE3', // 44003
  chainIdNum: 44003,
  rpc: 'https://rpc.qday.info',
};

// Shared WalletConnect v2 project (same one QDay Portal uses).
export const WALLETCONNECT_PROJECT_ID = '997747885b3c0af7c6faa74f4e2fc5d1';

// Active EIP-1193 provider for this session: an injected wallet (window.ethereum)
// OR a WalletConnect provider (Abelian Wallet Pro). Widgets read/send through
// getProvider() so both paths work transparently.
let active: any = null;

export function getProvider(): any {
  return active ?? (globalThis as any).ethereum ?? null;
}

// Generic "Wallet" button: any injected EIP-1193 wallet (MetaMask, OKX, Rabby…).
export async function connectInjected(): Promise<string | null> {
  const eth = (globalThis as any).ethereum ?? null;
  if (!eth) return null;
  active = eth;
  const accounts = await eth.request({ method: 'eth_requestAccounts' });
  return accounts?.[0] ?? null;
}

// Back-compat alias.
export const connect = connectInjected;

// "Abelian Wallet Pro" button: mobile wallet that connects over WalletConnect v2
// (QR on desktop, `abelian://` deep link on mobile) — same integration as QDay Portal.
export async function connectAbelian(): Promise<string | null> {
  const { EthereumProvider } = await import('@walletconnect/ethereum-provider');
  const provider = await EthereumProvider.init({
    projectId: WALLETCONNECT_PROJECT_ID,
    chains: [QDAY2.chainIdNum],
    optionalChains: [QDAY.chainIdNum],
    showQrModal: true,
    rpcMap: {
      [QDAY2.chainIdNum]: QDAY2.rpc,
      [QDAY.chainIdNum]: QDAY.rpc,
    },
    metadata: {
      name: 'QDay Community',
      description: 'QDay Community Wiki',
      url: 'https://community.qday.io',
      icons: ['https://community.qday.io/logo.svg'],
    },
  });
  await provider.connect();
  active = provider;
  return provider.accounts?.[0] ?? null;
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
