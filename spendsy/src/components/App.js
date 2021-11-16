import Landing from './Landing'
import Wallet from './Wallet'
import {useState, useEffect} from 'react'

function App() {

  const [wallets, setWallets] = useState({})

  useEffect(
    fetch('http://localhost:9292/wallet')
    .then(resp => resp.json())
    .then(data => setWallets(data))
  , [])

  console.log(wallets)

  return (
    <div className="App">
      <Landing />
      <Wallet wallets={wallets}/>
    </div>
  );
}

export default App;
