import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
function Wallet() {

  // States
  const [walletBills, setWalletBills] = useState([])
  const [user, setUser] = useState([])

  // Fetches
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/bills/9`)
    .then(resp => resp.json())
    .then(data => setWalletBills(data))
  }
  , [])

  useEffect( () => {
    fetch(`http://localhost:9292/user/5`)
    .then(resp => resp.json())
    .then(data => setUser(data))
  })

  // Table render functions
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

function renderTableFooter() {
  return (
    <tr className="table-footer">
      <td><p>Remaining Funds:<span>$300</span></p></td>
      <td></td>
      <td>
        <button class=" add-row-btn table-btn"><i class="fas fa-plus"></i></button>
        <button class=" edit-btn table-btn">Edit</button>
        </td>
    </tr>
  )
}
  return (
    <div className="wallet-container">
      <Link to="/wallet/new">
        <button className="new-wallet-btn">Create a New Wallet</button>
      </Link>
      <table className="bills">
        <tbody>
          {renderTableHeader()}
          {renderTableData()}
          {renderTableFooter()}
        </tbody>
      </table>
    </div>
  )
}

export default Wallet