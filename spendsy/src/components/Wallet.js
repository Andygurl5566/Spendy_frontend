import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Wallet() {
  // States
  const [wallet, setWallet] = useState({})
  const [walletBills, setWalletBills] = useState([])
  const [total, setTotal] = useState(0)
  const [edit, setEdit] = useState(false)
  // const [user, setUser] = useState([])

  // Fetches
  useEffect(() => {
    fetch(`http://localhost:9292/bill`)
    .then(resp => resp.json())
    .then(data => setWalletBills(data))
  }
  , [])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/1`)
    .then(resp => resp.json())
    .then(data => setWallet(data))
  }
  , [])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/total/1`)
    .then(resp => resp.json())
    .then(data => setTotal(data))
  }
  , [])

  // useEffect( () => {
  //   fetch(`http://localhost:9292/user/5`)
  //   .then(resp => resp.json())
  //   .then(data => setUser(data))
  // }, [])

  
// -------------delete solution one--------------------------------------------
//   function handleWalletDelete(){

//      if(window.confirm("Are you sure you want to delete this wallet?")){
//         fetch(`http://localhost:9292/bill/2`,{
//          method: "DELETE",  
//   })
//         .then((r) => r.json())
//         .then((deletedWallet) => console.log(deletedWallet))
//   }
// }
// -----------------------------------------------------------------------------------------------

// const handleDelete = (walletId) => {
//   if(window.confirm("Are you sure you want to delete this wallet?")){
//       const newBills = [...walletBills] //creating new array based on the current bills to not mutate state
//       const index = walletBills.findIndex((walletBill)=> walletBills.id === walletId)
//       newBills.splice(index, 1)
      

//       setWalletBills(newBills)
//   }}



  const handleDelete = (walletId) => {
    if(window.confirm("Are you sure you want to delete this wallet?")){
        const newBills = [...walletBills] //creating new array based on the current bills to not mutate state
        const index = walletBills.findIndex((walletBill)=> walletBills.id === walletId)
        newBills.splice(index, 1)
        
  
        setWalletBills(newBills)
    }}
// ---------------------------------------------------------------------
 const handleEdit = () => setEdit(!edit)

// Table render functions
  function renderTableHeader() {
    return (
      <tr>
        <th>Bill</th>
        <th>Cost</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    );
  }

  function renderTableData() {
    return walletBills.map(bill => {
      const { id, bill_name, bill_amount, category_name} = bill
      return (
        <tr key={id}>
          {edit ? <td><input type="text" name="bill_name"></input></td> : <td>{bill_name}</td>}
          {edit ? <td><input type="number" name="bill_cost"></input></td> : <td>{bill_amount}</td>}
          {edit ? <td><input type="text" name="category_name"></input></td> : <td>{category_name}</td>}
          <td>
            {edit ? 
            <>
              <button className="edit-btn table-btn" onClick={handleEdit}>Save</button>
              <button className="edit-btn table-btn">Delete</button> 
            </> 
            :<button className=" edit-btn table-btn" onClick={handleEdit}>Edit</button>}
            
          </td>
        </tr>
      )
    })
  }

function renderTableFooter(wallet) {
  return (
    <tr className="table-footer">
      <td><p>Total Costs:<span>{total}</span></p></td>
      <td></td>
      <td></td>
      <td>
        <p>Remaining Funds: {wallet.amount * 100 - {total}}</p>
        {/* Delete button - solution 1/}
        {/* <button onClick={handleDelete} class = "delete-btn table-btn">Delete</button> */}


      {/* solution 2 */}


        </td>
      </tr>
    );
  }

  return (
    <div className="wallet-container">
      <Link to="/wallet/new">
        <button className="new-wallet-btn btn-hover">Create a New Wallet</button>
      </Link>
      <table className="bills">
        <tbody>
          {renderTableHeader()}
          {renderTableData()}
          {renderTableFooter(wallet)}
        </tbody>
      </table>
    </div>
  );
}

export default Wallet;
