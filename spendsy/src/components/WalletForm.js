import NavBar from "./Navbar";
import {useState} from 'react'

function WalletForm() {

  const [billList, setBillList] = useState([])
  const [formData, setFormData] = useState({
    bill_name: "",
    bill_amount: 0,
    category_name: "",
  })

  const addToBills= (e) => {
    e.preventDefault()
    setFormData({...formData, [e.target.name]:e.target.value});
    console.log(formData)
    };

    console.log(formData)
  return (
    <div>
      <NavBar />
      <form className="bill-entry">
        <label>Bill:</label>
        <br />
        <input type="text" name="bill" placeholder="Bill Name" className="bill-input-field" value={formData.bill_name} onChange={addToBills}>
        </input>
        <br />
        <label>Cost:</label>
        <br />
        <input type="number" name="cost" placeholder="Cost" className="bill-input-field" value={formData.bill_amount} onChange={addToBills}></input>
        <br />
        <label>Category:</label>
        <br />
        <select className="bill-input-field" value={formData.category_name} onChange={addToBills}>
          <option value="housing">Housing</option>
          <option value="personals">Personals</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="savings">Savings</option>
          <option value="misc">Misc.</option>
        </select>
        <br />
        <br />
        <button type="button" className="btn" onSubmit={(e) => addToBills(e)}>Add Bill</button>
      </form>




    </div>
  );
}

export default WalletForm;
