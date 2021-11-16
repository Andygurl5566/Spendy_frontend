import {useEffect, useState} from 'react'

function Wallet({wallets:{bill_name, bill_amount, category_name}}) {

  const [walletBills, setWalletBills] = useState([])

  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/bills/9`)
    .then(resp => resp.json())
    .then(data => setWalletBills(data))
  }
  , [])


  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th>Bill</th>
          <th>Cost</th>
          <th>Category</th>
        </tr>
        {walletBills.map(bill => {
          <tr>
            <td>{bill.bill_name}</td>
            <td>{bill.bill_amount}</td>
            <td>{bill.category_name}</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Wallet