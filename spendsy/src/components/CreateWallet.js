import NavBar from "./Navbar"
import WalletForm from "./WalletForm"
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

function CreateWallet(){

    const [walletName, setWalletName] = useState('')
    const [walletFunds, setWalletFunds] = useState(0)

    function handleWalletName(input) {
      setWalletName(input)
    }
   
    function handleWalletFunds(input) {
      setWalletFunds(input)
    }


  return (
    <>
    <div>
      <NavBar />

      <form class="create-wallet-form">
        <label for="wallet-name">Wallet Name: </label>
        <input 
          type= "text" 
          value={walletName}
          id="wallet-name"
          onChange={(e) => handleWalletName(e.target.value)} />
        <label for="wallet-funds">Amount: </label>
        <input 
          type= "number" 
          value={walletFunds}
          id="wallet-funds"
          onChange={(e) => handleWalletFunds(e.target.value)} />
      </form>
  
      <Routes>
        <Route path="/form" element={<WalletForm />} />
      </Routes>
    </div>
  </>
    
  )
}

export default CreateWallet;
