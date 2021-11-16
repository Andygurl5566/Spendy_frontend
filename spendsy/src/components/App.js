import Landing from "./Landing";
import Wallet from "./Wallet";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes ,Route,Link } from 'react-router-dom'

function App() {
  const [wallets, setWallets] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/wallet")
      .then((resp) => resp.json())
      .then((data) => setWallets(data));
  }, []);

  // console.log(wallets);

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route  path = "/" element ={ <Landing/> } />    
          <Route path = "/wallet" element ={ <Wallet wallets={wallets} /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// new router syntax <Route path='/welcome' element={<Home/>} />