import React, { useEffect, useState } from "react";
import "../Components/Updateproduct.scss";
import { useNavigate, useParams } from "react-router-dom";


function Updateproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params = useParams();
  const naviagate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:4000/product/${params.id}`);
    result = await result.json();
    // console.warn(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const UpdateroductApi = async () => {
    // console.warn(name,price,category,company)
    let result = await fetch(`http://localhost:4000/product/${params.id}`, {
        method:'PUT',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'content-type':"application/json"
        }
    });
    result = await result.json()
    // console.warn("The update API result", result)
if (result) {
    naviagate('/Productlist')
}
  };

  return (
    <div>
      <h1>Update Product</h1>

      <input
        className="InputBox"
        type="text"
        value={name}
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="InputBox"
        type="text"
        value={price}
        placeholder="Enter Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="InputBox"
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="InputBox"
        type="text"
        value={company}
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={UpdateroductApi} className="SignupButton" type="button">
        Update Product
      </button>
    </div>
  );
}

export default Updateproduct;
