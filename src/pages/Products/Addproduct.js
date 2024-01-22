import React, { useRef, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Imageupload from "./Imageupload";
import { Box, Grid, Paper, TextField } from "@mui/material";
import "./Addproduct.scss";
import { Button } from "evergreen-ui";
import Createproductsection from "./Createproductsection";
import SegmentedControl from "../users/SegmentedControl";

function Addproduct() {
  const [selectedValue1, setSelectedValue1] = useState("Create Employee");

  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          
          <div>
            <SegmentedControl
              name="group-1"
              callback={(val) => setSelectedValue1(val)}
              controlRef={useRef()}
              segments={[
                {
                  label: "Add Product",
                  value: "Add Product",
                  ref: useRef(),
                },
                {
                  label: "View Product",
                  value: "View Product",
                  ref: useRef(),
                },
              ]}
            />
            <p className="selected-item">
              {
                <div>
                  {selectedValue1 == "Add Product" ? "Add Product" : ""}
                  {selectedValue1 == "View Product" ? "View Product" : ""}
                </div>
              }
            </p>
          </div>

          <div className="Image_Textfields_Parameter_Section">
            <Paper className="ImageSection">
              <Imageupload />
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
                <textarea
                  className="Border_Color"
                  placeholder="Description......."
                  style={{ marginTop: "15px" }}
                  name="postContent"
                  rows={5}
                  cols={159}
                />
              </label>
            </Paper>
          </div>
          <div>
            <Button>
              Preview and Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
