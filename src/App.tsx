import filomenaLogo from '/filomena128x128.store.png'
import './App.css'
import { useState, useEffect } from 'react'
import { HttpJsonRpcConnector, MnemonicWalletProvider } from 'filecoin.js'
import AddressInput from './components/AddressInput'
import BadgedButton from './components/BadgedButton'
import AddButton from './components/AddButton'
import FilInput from './components/AmountInput'
import BigNumber from 'bignumber.js'

const LOTUS_HTTP_RPC_ENDPOINT = 'https://api.calibration.node.glif.io/rpc/v0'

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

export default function App() {
  let wallet = createWallet();
  let initAddresses: Array<string> = []
  let [fromAddress, setFromAddress] = useState('')
  let [toAddress, setToAddress] = useState('')
  let [addresses, setAddresses] = useState(initAddresses)
  let [balance, setBalance] = useState(0)
  let [amount, setAmount] = useState(0)
  let [count, setCount] = useState(0)

  const handleAddressInput = (e: any) => {
    let newAddress = e.target.value
    setToAddress(newAddress)
    console.log(`new address ${newAddress}`)
  }

  const addAddress = async () => {
    try {
      setCount(count + 1)
      let _addresses: Array<string> = await wallet.getAccounts()
      console.log(`Getting new addresses: ${_addresses[count]}`)
      setAddresses([
        ...addresses,
        _addresses[count],
      ])
    } catch (error: any) {
      console.error(`Error adding address: ${error.message}`)
    }
  }

  const handleAmountInput = (e: any) => {
    setAmount(e.target.value)
    console.log(`new amount ${amount}`)
  };

  const sendFIL = async () => {
    console.log(`sending ${amount} to ${toAddress}`)
    try {
      const payment = new BigNumber(amount)
      const gasLimit = 100000000
      const gasCap = new BigNumber(1000000000)
      const nonce = await wallet.getNonce(fromAddress)
      const message = await wallet.createMessage({
        From: fromAddress,
        To: toAddress,
        Value: payment,
        GasFeeCap: gasCap,
        GasLimit: gasLimit,
        Method: 0,
        Nonce: nonce,
      })
      const signedMessage = await wallet.signMessage(message)
      const txhash = await wallet.sendSignedMessage(signedMessage)
      console.log(`Transaction sent with hash: ${txhash}`)
    } catch (error: any) {
      console.error(`Error sending FIL: ${error.message}`)
    }
  }

  useEffect(() => {
    const f = async () => {
      let fromAddress = await wallet.getDefaultAccount();
      console.log(`Wallet address ${fromAddress}`)
      setFromAddress(fromAddress)

      let balance = await wallet.getBalance(fromAddress)
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
      <div className="card card-bordered flex justify-center">
        <div className="card-body">
          <h3 className="card-title justify-center">Address</h3>
          <kbd className="kbd kbd-lg kbd-neutral">{fromAddress}</kbd>
          {
            addresses.map((address: string, index: number) => (
              <kbd key={index} className="kbd kbd-lg">{address}</kbd>
            ))
          }

          <AddButton onClick={() => addAddress()} />
          <h3 className="card-title justify-center">Balance</h3>
          <kbd className="kbd kbd-lg">{balance}</kbd>
          <AddressInput data={toAddress} onChange={handleAddressInput} />
          <FilInput data={amount} onChange={handleAmountInput} />
          <div className="card-actions justify-center">
            <BadgedButton
              data={amount}
              action="Send"
              onClick={() => sendFIL()}
            />
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Open-source wallet for the Filecoin network.
      </p>
    </div>
  )
}
