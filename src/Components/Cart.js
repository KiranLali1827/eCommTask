import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import '../App.css'

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next)
  console.warn(amount)
  return (
    <div>
      <h3>Cart Details</h3>
   <br></br>
      <div className="cart-page-container">
        <table>
          <tr className="cart-table-header">
            <td>Name</td>
            <td>Brand</td>
            <td>Color</td>
            <td>Category</td>
            <td>Price</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
      </div>
<br></br>
<br></br>
      <div className="price-details">
             <div className="adjust-price"><span>Amount : </span><span>{amount}</span></div>
             <div className="adjust-price"><span>Discount : </span><span>{amount/5}</span></div>
             {/* <div className="adjust-price"><span>Tax</span><span>10000</span></div> */}
             <div className="adjust-price"><span>Total : </span><span>{amount - (amount/5)}</span></div>
        </div>
    </div>
  );
};

export default Cart;

