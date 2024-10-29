import { HttpJsonRpcConnector, LotusClient } from 'filecoin.js'

// const LOTUS_HTTP_RPC_ENDPOINT = 'https://api.calibration.node.glif.io/rpc/v0'

(async () => {
  const httpConnector = new HttpJsonRpcConnector('https://api.calibration.node.glif.io/rpc/v0');
  const lotusClient = new LotusClient(httpConnector);
  const version = await lotusClient.common.version();
  console.log(version);
})();
