import NavBar from "./Navbar";
import { useState } from "react";

function WalletForm() {
  const [billList, setBillList] = useState([]);
  const [formData, setFormData] = useState({
    bill_name: "",
    bill_amount: "",
    category_name: "",
    wallet_id: "",
  });
  const handleData = (dataValue) => {
    const { bill_name, bill_amount, category_name } = dataValue;
    fetch("http://localhost:9292/bill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bill_name: bill_name,
        bill_amount: bill_amount,
        category_name: category_name,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBillList(data);
      });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleData(formData);
  };

  const addToBills = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavBar />
      <form className="bill-entry" onSubmit={(e) => handleSubmitForm(e)}>
        <label>Bill:</label>
        <br />
        <input
          type="text"
          name="bill_name"
          placeholder="Bill Name"
          className="bill-input-field"
          value={formData.bill_name}
          onChange={addToBills}
        ></input>
        <br />
        <label>Cost:</label>
        <br />
        <input
          type="number"
          name="bill_amount"
          placeholder="Cost"
          className="bill-input-field"
          value={formData.bill_amount}
          onChange={addToBills}
        ></input>
        <br />
        <label>Category:</label>
        <br />
        <select
          className="bill-input-field"
          value={formData.category_name}
          onChange={addToBills}
          name="category_name"
        >
          <option value="select">category: </option>
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
        <button type="submit" className="btn">
          Add Bill
        </button>
      </form>
    </div>
  );
}

export default WalletForm;
