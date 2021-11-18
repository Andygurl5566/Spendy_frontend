import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Wallet() {
  // States
  const [wallet, setWallet] = useState({})
  const [walletBills, setWalletBills] = useState([])
  const [total, setTotal] = useState(0)
  const [edit, setEdit] = useState(false)
  

  useEffect(() => {
    fetch(`http://localhost:9292/bill`)
    .then(resp => resp.json())
    .then(bills => setWalletBills(bills))
  }
  , [])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/1`)
    .then(resp => resp.json())
    .then(wallets => setWallet(wallets))
  }
  , [])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/total/1`)
    .then(resp => resp.json())
    .then(totalValue => setTotal(totalValue))
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


// 1.) sets bills
const [bills, setBills] = useState([])
  
//2.) fetch bills
  useEffect(() => {
    fetch(`http://localhost:9292/bill`)
    .then(resp => resp.json())
    .then(setBills)
  }
  , [])

  
  const addNewBill= incomingBill => {
		const newBills = [incomingBill, ...bills]
		setBills(newBills)
	}


  const handleDelete = id => {
    if(window.confirm("Are you sure you want to delete this wallet?")){
        const newBills = [...bills] //creating new array based on the current bills to not mutate state
        const index = newBills.findIndex((bill)=> bill.id === id)
        newBills.splice(index, 1)
        setBills(newBills)

        console.log("I ran")

        fetch(`http://localhost:9292/bill/${id}` , {
          method: "DELETE"
        })
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
  
  // 1 - add form data state variable (view code)
  // 2. add handlechange function then create onChange event listener on all inputs 
  // 3. names need to match backend attributes for the state variable
  // 4. create a handle submit function
  // 5. create a reset function that will set state variable and leave attributes as an empty string (add at end of handle submit function) 

  function renderTableData() {
    return walletBills.map(bill => {
      const { id, bill_name, bill_amount, category_name} = bill
      return (
        <tr key={id}>
          {edit ? <td><input type="text" name="bill_name"/> </td> : <td>{bill_name}</td>} 
          {edit ? <td><input type="number" name="bill_cost"/></td> : <td>{bill_amount}</td>}
          {edit ? <td><input type="text" name="category_name"/></td> : <td>{category_name}</td>}
          <td>
            {edit ? 
            <>
              <button className="edit-btn table-btn" onClick={handleEdit}>Save</button>
              <button className="edit-btn table-btn" onClick={handleDelete}>Delete</button> 
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
      <Link to="/form">
      {/* <Link to="/wallet/new"> */}
      {/* <button className="new-wallet-btn btn-hover">Create a New Wallet</button> */}
      {/* implement form instead of table */}

        <button className="new-wallet-btn btn-hover">Add New Bill</button>
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
