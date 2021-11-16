function WalletForm() {
  return (
    <div>
      <form>
        <label>Bill:</label>
        <br />
        <input type="text" name="bill" placeholder="Bill Name"></input>
        <br />
        <label>Cost:</label>
        <br />
        <input type="text" name="cost" placeholder="Cost"></input>
        <br />
        <label>Category:</label>
        <br />
        <input type="text" name="category" placeholder="Category"></input>
        <br />
        <button type="button">Add Bill</button>
      </form>
    </div>
  );
}

export default WalletForm;
