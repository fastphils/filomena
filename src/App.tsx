import filomenaLogo from '/filomena128x128.store.png'
import './App.css'
import { useState, useEffect } from 'react'
import { HttpJsonRpcConnector, MnemonicWalletProvider } from 'filecoin.js'

const LOTUS_HTTP_RPC_ENDPOINT = 'https://api.calibration.node.glif.io/rpc/v0';

export function createWallet() {
  console.log('create wallet')
  const connector = new HttpJsonRpcConnector(LOTUS_HTTP_RPC_ENDPOINT);
  const hdWalletMnemonic = 'equip ... young';
  const hdWalletPassword = '...';
  const hdDerivationPath = `m/44'/461'/0/0/0`;
  const walletProvider = new MnemonicWalletProvider(
    connector,
    hdWalletMnemonic,
    hdWalletPassword,
    hdDerivationPath,
  );
  return walletProvider;
}

function App() {
  let wallet = createWallet();
  let [address, setAddress] = useState('')
  let [balance, setBalance] = useState(0)
  useEffect(() => {
    const f = async () => {
      let address = await wallet.getDefaultAccount();
      console.log(`Wallet address ${address}`)
      setAddress(address)

      let balance = await wallet.getBalance(address)
      console.log(`Wallet balance ${balance}`)
      setBalance(balance)
    }
    f()
  }, [])
  return (
    <div className="prose">
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={filomenaLogo} className="logo" alt="Filomena logo" />
        </a>
      </div>
      <h1>Filomena Wallet</h1>
      <p className="badge badge-ghost">{address}</p>
      <p className="badge badge-ghost">{balance} TFIL</p>
      <div className="flex justify-center">
        <button className="btn btn-sm w-24">
          Sign in
        </button>
      </div>
      <p className="read-the-docs">
        Open-source wallet for the Filecoin network.
      </p>
    </div>
  )
}

export default App
