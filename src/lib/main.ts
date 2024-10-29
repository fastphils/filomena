import { HttpJsonRpcConnector, LotusClient } from 'filecoin.js'

const LOTUS_HTTP_RPC_ENDPOINT = 'https://api.calibration.node.glif.io/rpc/v0'

async function runFilecoinJs() {
  const httpConnector = new HttpJsonRpcConnector({
    url: LOTUS_HTTP_RPC_ENDPOINT,
    // token: __LOTUS_AUTH_TOKEN__
  });
  const lotusClient = new LotusClient(httpConnector);
  const version = await lotusClient.common.version();
  console.log(version);
}

export default runFilecoinJs;

