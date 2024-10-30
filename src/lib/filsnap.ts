import { getProvider, FilsnapAdapter } from 'filsnap-adapter';
(async () => {
  const provider = await getProvider();
  const connected = await provider.isConnected();
  console.log(`provider is connected: ${connected}`);

  let snap = await FilsnapAdapter.connect({
    provider,
    config: { network: 'testnet'},
  });

  let result = await snap.getAddress();
  console.log(`snap address: ${result.result}`);
})();
