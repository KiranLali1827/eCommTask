import React from "react";
import "./Addproduct.scss";
import Createproductsection from "./Createproductsection";

function Addproduct() {
  const filtdata = [
    {
      id: 1,
      name: "iPhone",
      color: "Black",
      price: 5000,
      category: "Mobile",
      brand: "iPhone X",
      photo:
        "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/b727f3856579b833286cc2bb29b29df9.png",
    },
  ];
  return (
    <div className="ProductCard_Dashboard">
      <article className="Product_card_Create_Product_Section">
        {filtdata.map((item, index) => {
          return (
            <>
              <h3>Upload Product Image</h3>
              <img src={item.photo} alt={"photo"} />
              <br></br>
              <div>
                <a style={{ marginRight: "10px" }} className="btn">
                  {" "}
                  Remove{" "}
                </a>
                <a className="btn"> Upload </a>
              </div>
            </>
          );
        })}
      </article>

      <article className="Product_card_Create_Product_Section">
        <>
          <h3>Add Product Details</h3>
          <Createproductsection />
          <br></br>
          <a className="btn"> Add to Cart </a>
        </>
      </article>
    </div>

    /* <div>
<div className="Image_Textfields_Parameter_Section">
  <Paper className="ImageSection">
    <Imageupload />
  </Paper>
  <Paper className="Products_Paramter_Section">
    <Createproductsection />
  </Paper>
</div>

<div className="Products_Submit_Button_Section">
  <Button>Preview and Save</Button>
</div>
</div> */
  );
}

export default Addproduct;
