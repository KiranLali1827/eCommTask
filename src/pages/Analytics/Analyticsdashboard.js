import React from "react";
import "../home/home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";
import { Button } from "@mui/material";
import Userlist from "../users/Userslist";
import { useRef, useState } from "react";
import SegmentedControl from "../users/SegmentedControl";
import { Paichart } from "./Paichart";
import { Barchart } from "./Barchart";
import { Linechart } from "./Linechart";

const Analyticsdashboard = () => {
  const [selectedValue1, setSelectedValue1] = useState("Daily");

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="container">
          <SegmentedControl
            name="group-1"
            callback={(val) => setSelectedValue1(val)}
            controlRef={useRef()}
            segments={[
              {
                label: "Daily",
                value: "Daily",
                ref: useRef(),
              },
              {
                label: "Weekly",
                value: "Weekly",
                ref: useRef(),
              },
              {
                label: "Monthly",
                value: "Monthly",
                ref: useRef(),
              },
              {
                label: "Yearly",
                value: "Yearly",
                ref: useRef(),
              },
            ]}
          />
          <p className="selected-item">
            {
              <div>
                {selectedValue1 == "Daily" ? "Daily" : ""}
                {selectedValue1 == "Weekly" ? "Weekly" : ""}
                {selectedValue1 == "Monthly" ? "Monthly" : ""}
                {selectedValue1 == "Yearly" ? "Yearly" : ""}
                
              </div>
            }
          </p>
        </div>

        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          {/* <Feature /> */}
          <Paichart />
        </div>
       
          {/* <Feature /> */}
        
        
        <br></br>
       
        <div className="charts">
        <Linechart />
        </div>
        <br></br>
        <br></br>
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div className="charts">
        <Barchart />
        </div>
     
     
      </div>
    </div>
  );
};

export default Analyticsdashboard;
