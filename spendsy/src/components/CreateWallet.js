import NavBar from "./Navbar"
import WalletForm from "./WalletForm"
import {Routes, Route} from 'react-router-dom'

function CreateWallet(){
  return (
    <div>
      <NavBar />






      <Routes>
          <Route path = "/form" element = { <WalletForm />} />
      </Routes>
    </div>
  )
}

export default CreateWallet