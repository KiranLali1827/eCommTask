import "../App.css";
import * as React from 'react';
import { addtoCart, emptyFromCart, removeFromCart } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/ProductAction";
import { useEffect } from "react";



function Main() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.productData);
  console.warn("The result in main component", result);

  useEffect(() => {
    dispatch(productList());
  }, []);

  

  return (
    <div className="App">
      <h1>Redux + Saga</h1>


      <div>
        <button onClick={() => dispatch(emptyFromCart())}>Empty Cart</button>
      </div>

      <div className="product-container">
        {result.map((item) => (
          <div key={item.id} className="product-item">
            <img
              src={item.photo}
              alt="Image"
              style={{ width: "100px", height: "100px" }}
            ></img>
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Brand : {item.brand}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>
              <button onClick={() => dispatch(addtoCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;


