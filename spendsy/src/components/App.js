// Imports
import Landing from "./Landing";
import Wallet from "./Wallet";
import WalletPage from "./WalletPage";
import LoginPage from "./LoginPage";
import CreateWallet from "./CreateWallet";
// Hooks
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WalletForm from "./WalletForm";

function App() {
  const [wallets, setWallets] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/wallet")
      .then((resp) => resp.json())
      .then((data) => setWallets(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wallet" element={<Wallet wallets={wallets} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet/page" element={<WalletPage />} />
          <Route path="/wallet/new" element={<CreateWallet />} />
          <Route path="/form" element={<WalletForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// new router syntax <Route path='/welcome' element={<Home/>} />
