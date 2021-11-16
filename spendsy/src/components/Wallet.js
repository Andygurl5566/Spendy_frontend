import {useEffect, useState} from 'react'

function Wallet({wallets:{bill_name, bill_amount, category_name}}) {

  const [walletBills, setWalletBills] = useState([])

  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/bills/9`)
    .then(resp => resp.json())
    .then(data => setWalletBills(data))
  }
  , [])

  
function renderTableHeader() {
  return (
    <tr>
      <th>Bill</th>
      <th>Cost</th>
      <th>Category</th>
    </tr>
  )
}
  
function renderTableData() {
  return walletBills.map(bill => {
    const { id, bill_name, bill_amount, category_name} = bill
    return (
      <tr key={id}>
        <td>{bill_name}</td>
        <td>{bill_amount}</td>
        <td>{category_name}</td>
      </tr>
    )
  })
}

  return (
    <div>
      <table className="bills">
        <tbody>
          {renderTableHeader()}
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default Wallet