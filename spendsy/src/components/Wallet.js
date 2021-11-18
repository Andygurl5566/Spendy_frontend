import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Wallet() {
  // States
  const [wallet, setWallet] = useState({})
  const [walletBills, setWalletBills] = useState([])
  const [total, setTotal] = useState(0)
  const [bills, setBills] = useState([])
  // Edit data States
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowkey: null
  })

  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState(null)
  const [categoryName, setCategoryName] = useState('')

  const onEdit = ({id, currentBillName}) => {
    setInEditMode({
        status: !inEditMode.status,
        rowKey: id
    })
    console.log(currentBillName)
    // setBillName(currentBillName);
  }

  // Fetch on page load
  useEffect(() => {
    fetch(`http://localhost:9292/wallet/bills/1`)
    .then(resp => resp.json())
    .then(bills => setWalletBills(bills))
  }
  , [bills])
  
  useEffect( () =>{
    fetch(`http://localhost:9292/wallet/1`)
    .then(resp => resp.json())
    .then(wallets => setWallet(wallets))
  }
  , [])
  
  useEffect ( () => {
    fetch(`http://localhost:9292/wallet/total/1`)
    .then(resp => resp.json())
    .then(totalValue => setTotal(totalValue))
  }, [])

  const getTotal = () =>{
    fetch(`http://localhost:9292/wallet/total/1`)
    .then(resp => resp.json())
    .then(totalValue => setTotal(totalValue))
  }
  

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

  
//2.) fetch bills
 
const getBills = () => {
  fetch(`http://localhost:9292/wallet/bills/1`)
    .then(resp => resp.json())
    .then(bills => setWalletBills(bills))
}

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

    const handleBillName = (e) => {
      setBillName(e.target.value)
    }

    const handleBillAmount = (e) => {
      setBillAmount(e.target.value)
    }

    const handleCategoryName = (e) => {
      setCategoryName(e.target.value)
    }
// EDIT ROW PATCH FUNCTIONS

    const updateRow = ({id, bill_name, bill_amount, category_name}) => {
      console.log(bill_name)
      fetch(`http://localhost:9292/bill/${id}`, {
          method: "PATCH",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
              bill_name: bill_name,
              bill_amount: bill_amount,
              category_name: category_name
              // bill_amount: bill_amount
          })
      })
          .then(response => response.json())
          .then(json => {
              // reset inEditMode and unit price state values
              onCancel();

              // fetch the updated data
              getBills()
              getTotal()
          })
  }

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
        status: false,
        rowKey: null
    })
    // reset the unit price state value
    // setBillName(null);
}
// ---------------------------------------------------------------------
 

// Table render functions
  // function renderTableHeader() {
  //   return (
  //     <tr>
  //       <th>Bill</th>
  //       <th>Cost</th>
  //       <th>Category</th>
  //       <th>Actions</th>
  //     </tr>
  //   );
  
  // }
  
  // 1 - add form data state variable (view code)
  // 2. add handlechange function then create onChange event listener on all inputs 
  // 3. names need to match backend attributes for the state variable
  // 4. create a handle submit function
  // 5. create a reset function that will set state variable and leave attributes as an empty string (add at end of handle submit function) 

//   function renderTableData() {
//     return walletBills.map(bill => {
//       const { id, bill_name, bill_amount, category_name} = bill
//       return (
//         <tr key={id}>
//           {edit ? <td><input type="text" name="bill_name"/> </td> : <td>{bill_name}</td>} 
//           {edit ? <td><input type="number" name="bill_cost"/></td> : <td>{bill_amount}</td>}
//           {edit ? <td><input type="text" name="category_name"/></td> : <td>{category_name}</td>}
//           <td>
//             {edit ? 
//             <>
//               <button className="edit-btn table-btn" onClick={handleEdit}>Save</button>
//               <button className="edit-btn table-btn" onClick={handleDelete}>Delete</button> 
//             </> 
//             :<button className=" edit-btn table-btn" onClick={handleEdit}>Edit</button>}
            
//           </td>
//         </tr>
//       )
//     })
//   }

// function renderTableFooter(wallet) {
//   return (
//     <tr className="table-footer">
//       <td><p>Total Costs:<span>{total}</span></p></td>
//       <td></td>
//       <td></td>
//       <td>
//         <p>Remaining Funds: {wallet.amount * 100 - {total}}</p>
//         {/* Delete button - solution 1/}
//         {/* <button onClick={handleDelete} class = "delete-btn table-btn">Delete</button> */}


//       {/* solution 2 */}


//         </td>
//       </tr>
//     );
//   }

// {renderTableHeader()}
//           {renderTableData()}
//           {renderTableFooter(wallet)}

  return (

    
    <div className="wallet-container">
      <Link to="/form">
      {/* <Link to="/wallet/new"> */}
      {/* <button className="new-wallet-btn btn-hover">Create a New Wallet</button> */}
      {/* implement form instead of table */}

        <button className="new-wallet-btn btn-hover">Add New Bill</button>
      </Link>

      <div className="wallet-info">
        <h1 className="wallet-name">{wallet.wallet_name}</h1>
        <h1 className="wallet-amount">Funds: {wallet.amount}</h1>
      </div>
      <table className="bills">
        <thead>
          <tr>
            <th>Bill Name</th>
            <th>Cost</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {walletBills.map((bill) =>
            <tr key={bill.id}>
              <td>
                {inEditMode.status && inEditMode.rowKey === bill.id ? (
                    <input value={billName}
                            onChange={(e) => handleBillName(e)}
                    />
                ) : (
                    bill.bill_name
                    )}
                    </td>
                  
              <td>
                {inEditMode.status && inEditMode.rowKey === bill.id ? (
                    <input value={billAmount}
                            onChange={(e) => handleBillAmount(e)}
                    />
                ) : (
                    bill.bill_amount
                    )}
                    </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === bill.id ? (
                    <select onChange={(e) => handleCategoryName(e)}>
                      <option value="Select">category: </option>
                      <option value="Housing">Housing</option>
                      <option value="Personals">Personals</option>
                      <option value="Food">Food</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Utilities">Utilities</option>
                      <option value="Savings">Savings</option>
                      <option value="Misc">Misc.</option>
                    </select>
                            
                    
                ) : (
                    bill.category_name
                    )}
                    </td>
            <td>
              {inEditMode.status && inEditMode.rowKey === bill.id ? 
            <>
              <button className="edit-btn table-btn" onClick={() => updateRow({id: bill.id, bill_name: billName, bill_amount: billAmount, category_name: categoryName})}>
                Save</button>
              <button className="edit-btn table-btn" onClick={handleDelete}>Delete</button> 
            </> 
            :<button className=" edit-btn table-btn" onClick={() => onEdit({id: bill.id, currentBillName: billName, currentBillAmount: billAmount, currentCategoryName: categoryName})}>
                Edit
                </button>}
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
        <td><p>Total Costs:</p></td>
        <td>{total}</td>
        <td></td>
        <td>
          <p>Remaining Funds: {wallet.amount * 100 - total}</p>
         </td>
        </tfoot>
      </table>
    </div>
  );
}
//         {/* Delete button - solution 1/}
//         {/* <button onClick={handleDelete} class = "delete-btn table-btn">Delete</button> */}


//       {/* solution 2 */}
export default Wallet;
