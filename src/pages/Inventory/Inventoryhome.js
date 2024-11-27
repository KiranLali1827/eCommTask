import { useState } from "react";
import "./InventoryList.scss";

function InventoryHome() {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [catname, setCatName] = useState("");
  const [sum, setSum] = useState("");

  const categories = ["Macbook", "iPhone", "iWatch"]; // Dropdown options

  function Calculation() {
    if (!name || !catname || !price || !qty) {
      alert("Please fill in all fields before adding!");
      return;
    }
    const newItem = { name, catname, qty, price, sum };
    const newUsers = [...users, newItem];

    const totalSum = newUsers.reduce((total, user) => {
      total += Number(user.sum);
      return total;
    }, 0);

    setUsers(newUsers);
    setTotal(totalSum);

    // Clear the input fields
    setName("");
    setCatName("");
    setQty("");
    setPrice("");
    setSum("");
  }

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPrice(newPrice);
      calculateTotal(newPrice, qty);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      setQty(newQuantity);
      calculateTotal(price, newQuantity);
    }
  };

  const calculateTotal = (price, qty) => {
    const newTotal = price * qty;
    setSum(newTotal);
  };

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="inventory-container">
      <h1>Inventory Management System</h1>
      <div className="form-section">
        <table className="form-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Item Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </td>
              <td>
                <select
                  className="input-field"
                  value={catname}
                  onChange={(event) => setCatName(event.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter Price"
                  value={price}
                  onChange={handlePriceChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="input-field"
                  placeholder="Enter Qty"
                  value={qty}
                  onChange={handleQuantityChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter Total"
                  value={sum}
                  disabled
                />
              </td>
              <td>
                <button className="add-btn" onClick={Calculation}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Products</h3>
      <table className="products-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.catname}</td>
              <td>{row.price}</td>
              <td>{row.qty}</td>
              <td>{row.sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-section">
        <h3>Total Amount</h3>
        <input
          type="text"
          className="total-input"
          value={total}
          disabled
        />
        <button className="complete-btn" onClick={refreshPage}>
          Complete
        </button>
      </div>
    </div>
  );
}

export default InventoryHome;
