import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Imageupload from "./Imageupload";
import { Box, Paper, TextField } from "@mui/material";
import "./Addproduct.scss";
import { Button } from "evergreen-ui";
import Createproductsection from "./Createproductsection";

function Addproduct() {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <Paper
            style={{ backgroundColor: "gray", marginTop: "15px" }}
            className="Add_Product_Top"
          >
            <br></br>
            <p
              style={{
                fontSize: "25px",
                textAlign: "center",
                color: "white",
                fontFamily: "sans-serif",
                marginTop: "-6px",
              }}
            >
              Add Products and Details
            </p>
          </Paper>

          <div className="Image_Textfields_Parameter_Section">
            <Paper className="ImageSection">
             
            </Paper>
            <Paper className="Products_Paramter_Section">
              <div>
                <Createproductsection />
              </div>
            </Paper>
          </div>

          <div>
            <Paper className="Products_Description_Section">
              <h2>Product Description</h2>
              <label>
                <textarea className="Border_Color"
                  placeholder="Description......."
                  style={{ marginTop: "15px" }}
                  name="postContent"
                  rows={7}
                  cols={159}
                
                />
              </label>
            </Paper>
          </div>

          <Paper
            style={{ backgroundColor: "gray", marginTop: "8px" }}
            className="Add_Product_Top"
          >
            <br></br>
            <p
              style={{
                fontSize: "25px",
                textAlign: "center",
                color: "white",
                fontFamily: "sans-serif",
                marginTop: "-6px",
              }}
            >
              Preview Details
            </p>
          </Paper>

          <div></div>

          {/* <Imageupload /> */}
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
