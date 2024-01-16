import React, { useEffect, useState } from "react";
import "../Components/Produclist.scss";
import { Link } from "react-router-dom";

const Produclist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:4000/products");
    result = await result.json();
    setProducts(result);
  };
  //   console.warn("the get api", products);

  const deleteProduct = async (id) => {
    // console.warn("The Id is", id);
    let result = await fetch(`http://localhost:4000/product/${id}`, {
        method: "Delete"
  });
  result = await result.json()
  if (result) {
    alert("Record is deleted")
    getProducts();
  }
  
  
}

const SeacrhHandle = async (event) => {
  console.warn("The search textfield", event.target.value)
  let key = event.target.value
  if (key) {
    let result = await fetch(`http://localhost:4000/Search/${key}`);
    result = await result.json();
    if (result) {
      setProducts(result)
    }
  } else {
    getProducts();
  }
 
}

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <input className="SearchProductBox" type="text" placeholder="Search Product"
      onChange={SeacrhHandle}
      ></input>
      <ul>
        <li>S No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {
      products.length > 0 ? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>$ {item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <Link to={"/UpdateProduct/"+item._id}>Update</Link>
          </li>
        </ul>
      )
      ) :<h1>No Result found</h1>
    }
    </div>
  );
};
export default Produclist;
