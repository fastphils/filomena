import filomenaLogo from '/filomena128x128.store.png'
import './App.css'
import {} from './lib/main'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={filomenaLogo} className="logo" alt="Filomena logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Filomena Wallet</h1>
      <div className="card">
       <button className="btn btn-primary btn-small">
          Sign in
        </button>
        {/* <p>
          Sign in or <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Open-source wallet for the Filecoin network.
      </p>
    </>
  )
}

export default App
