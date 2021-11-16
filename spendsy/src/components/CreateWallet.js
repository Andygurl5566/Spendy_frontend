import WalletForm from "./WalletForm"

export function CreateWallet(){
  return (
    <div>
      <Routes>
          <Route path = "/form" element = { <WalletForm />} />
      </Routes>
    </div>
  )
}

