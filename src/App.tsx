import filomenaLogo from '/filomena128x128.store.png'
import './App.css'
import { createWallet } from './lib/main'
import { useEffect, useState } from 'react'

function App() {
  let wallet = createWallet();
  let [address, setAddress] = useState('')
  let [balance, setBalance] = useState(0)
  useEffect(() => {
    wallet.getDefaultAddress().then((address) => {
      console.log(`Wallet address ${address}`)
      setAddress(address)
    })
    wallet.getBalance(address).then((balance) => {
      console.log(`Wallet balance ${balance}`)
      setBalance(balance)
    })
  }, [address, wallet])
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
