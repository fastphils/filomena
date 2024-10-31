import {
  HttpJsonRpcConnector,
  LotusClient,
  MnemonicWalletProvider,
  MetamaskWalletProvider,
} from 'filecoin.js';
import { BigNumber } from 'bignumber.js';

const LOTUS_HTTP_RPC_ENDPOINT = 'https://api.calibration.node.glif.io/rpc/v0';

(async () => {
  const httpConnector = new HttpJsonRpcConnector(LOTUS_HTTP_RPC_ENDPOINT);
  const lotusClient = new LotusClient(httpConnector);
  const hdWalletMnemonic = 'equip ... young';
  const hdDerivationPath = `m/44'/461'/0/0/0`;

  const walletProvider = new MnemonicWalletProvider(
    lotusClient,
    hdWalletMnemonic,
    hdDerivationPath
  );

  const version = await lotusClient.common.version();
  console.log(`Lotus version ${version.Version}`);
  const myAddress = await walletProvider.getDefaultAddress();
  console.log(`Wallet address ${myAddress}`);

  // const message = await walletProvider.createMessage({
  //   To: myAddress,
  //   From: myAddress,
  //   Value: new BigNumber(1000000000),
  // });

  // const cid = await walletProvider.sendMessage(message);
  // console.log(`message CID: ${cid}`);
})();
