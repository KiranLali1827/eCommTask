import React, { useState } from "react";
import "../Components/Createproduct.scss";

function Createproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const AddProductApi = async () => {
    //console.warn(email,password)
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    } else {
      const userID = JSON.parse(localStorage.getItem('user'))._id;
      let result = await fetch('http://localhost:4000/add-product', {
        method:'POST',
        body:JSON.stringify({name,price,category,company,userID}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result = await result.json();
    //  console.log('the result', result)
      if (result.name) {
        alert("Product is Added Successfully")
        setError(false);
        setName("");
        setPrice("");
        setCategory("");
        setCompany("");
    } else {
      alert("Error Found")
    }
    }
  };

  return (
    <div>
      <h1>Add Product Page</h1>

      <input
        className="InputBox"
        type="text"
        value={name}
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      {error && !name && (
        <span className="Invalid-errorMsg">Enter Valid Name</span>
      )}

      <input
        className="InputBox"
        type="text"
        value={price}
        placeholder="Enter Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      {error && !price && (
        <span className="Invalid-errorMsg">Enter Valid Price</span>
      )}

      <input
        className="InputBox"
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      {error && !category && (
        <span className="Invalid-errorMsg">Enter Valid Category</span>
      )}

      <input
        className="InputBox"
        type="text"
        value={company}
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      />

      {error && !company && (
        <span className="Invalid-errorMsg">Enter Valid Company</span>
      )}

      <button onClick={AddProductApi} className="SignupButton" type="button">
        Save
      </button>
    </div>
  );
}

export default Createproduct;
