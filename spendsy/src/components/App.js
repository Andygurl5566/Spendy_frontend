// Imports
import Landing from "./Landing";
import Wallet from "./Wallet";
import WalletPage from "./WalletPage";
import Home from "./Home";
import CreateWallet from "./CreateWallet";
import SignIn from "./SignIn";
// Hooks
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import WalletForm from "./BillForm";

function App() {

  const [wallet, setWallet] = useState({});

  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/1`)
    .then(resp => resp.json())
    .then(data => {
      setWallet(data)
    })
  }
  , [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet/page" element={<WalletPage />} />
          <Route path="/wallet/new" element={<CreateWallet />} />
          <Route path="/form" element={<WalletForm wallet={wallet}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// new router syntax <Route path='/welcome' element={<Home/>} />
