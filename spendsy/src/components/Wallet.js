import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Wallet() {
  // States
  const [wallet, setWallet] = useState({})
  const [walletBills, setWalletBills] = useState([])
  const [total, setTotal] = useState(0)
  // const [user, setUser] = useState([])

  // Fetches
  useEffect(() => {
    fetch(`http://localhost:9292/wallet/bills/2`)
    .then(resp => resp.json())
    .then(data => setWalletBills(data))
  }
  , [])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/2`)
    .then(resp => resp.json())
    .then(data => setWallet(data))
  }
  , [])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/total/2`)
    .then(resp => resp.json())
    .then(data => setTotal(data))
  }
  , [])

  // useEffect( () => {
  //   fetch(`http://localhost:9292/user/5`)
  //   .then(resp => resp.json())
  //   .then(data => setUser(data))
  // }, [])

  

  // Table render functions



  // -------------shows it's deleted after refresh--------------------------------------------


  function handleWalletDelete(){

    if(window.confirm("Are you sure you want to delete this wallet?")){
  fetch(`http://localhost:9292/bill/2`,{
    method: "DELETE",
    
  })
      .then((r) => r.json())
      .then((deletedWallet) => console.log(deletedWallet))
  }
}



// ---------------------------------------------------------------------



  function renderTableHeader() {
    return (
      <tr>
        <th>Bill</th>
        <th>Cost</th>
        <th>Category</th>
      </tr>
    );
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
      <td><p>Remaining Funds:<span>{(wallet.amount * 100) - total}</span></p></td>
      <td></td>
      <td>
        <button class=" add-row-btn table-btn"><i class="fas fa-plus"></i></button>
        <button class=" edit-btn table-btn">Edit</button>

        {/* Delete button*/}
        <button onClick={handleWalletDelete} class = "delete-btn table-btn">Delete</button>

        </td>
      </tr>
    );
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
  );
}

export default Wallet;
