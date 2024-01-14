import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { addtoCart, emptyFromCart, removeFromCart } from "../Redux/Action";
import { useDispatch } from "react-redux";

const Viewdetails = (PassProducts) => {
  //Gettig all the products for this current component
  const product = [PassProducts.Obj];
  const { id, name, price, category, brand, photo, filterBoolValue } = PassProducts;
  
  const dispatch = useDispatch();


  //try to prepare here filter bussiness logic
  //workig filter here take that value and hold arary and render
  let filtdata = Array.prototype.filter.call(product, (x) => x.price > "6000");
  // let filetrcal =  filtdata.map((i) => (
  //     console.log("i.price",i.price)
  // ))
  // console.log("filtdata.price",filtdata);

  // console.log("filtdata.price", ...filtdata);

  // console.log('filtered',filtered)

  const Filter_boolval = filterBoolValue;

  return (
    <div className="section-title">
      <div>
        {Filter_boolval ? (
          filtdata.map((item, index) => {
            console.log("item", item.price);
            //return console.log("item.price",item.price);
            return (
              <article className="card">
                {/* Filtered array data coming here */}
                {filtdata.map((item, index) => {
                  //console.log("item",item.price)
                  //return console.log("item.price",item.price);
                  return (
                    <>
                      <img src={item.photo} alt={photo} />

                      <div>
                        <text>{`Name : ${item.name}`}</text> <br />
                        <text>{`Price : ${item.price}`}</text>
                      </div>

                      <br></br>

                      <a className="btn" onClick={() => dispatch(addtoCart(PassProducts))} > Add to Cart  </a>

                      <br></br> <br></br>

                      <a className="btn" onClick={() => dispatch(removeFromCart(PassProducts.id)) } > Remove Cart </a>
                    </>
                  );
                })}
              </article>
            );
          })
        ) : (
          <article className="card">
            <img src={photo} alt={photo} />
            <div>
              <text>{`Name : ${name}`}</text> <br />
              <text>{`Price : ${price}`}</text>
            </div> <br></br>

            <div>
              <a className="btn" onClick={() => dispatch(addtoCart(PassProducts))} > Add to Cart </a>
            </div>

            <br></br>

            <a className="btn" onClick={() => dispatch(removeFromCart(PassProducts.id))} > Remove Cart{" "} </a> </article>
        )}
      </div>
    </div>
  );
};

export default Viewdetails;
