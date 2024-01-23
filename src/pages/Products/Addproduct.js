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
        </div>
      
  );
}

export default Addproduct;
