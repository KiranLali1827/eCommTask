import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import SegmentedControl from "./SegmentedControl";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";


const User = () => {
  const [selectedValue1, setSelectedValue1] = useState("Create Users");
  const navigate = useNavigate()

  return (
    <div>
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
                  label: "Create Users",
                  value: "Create Users",
                  ref: useRef(),
                },
                {
                  label: "Employee",
                  value: "Employee",
                  ref: useRef(),
                },
                {
                  label: "User",
                  value: "User",
                  ref: useRef(),
                },
                {
                  label: "Admin",
                  value: "Admin",
                  ref: useRef(),
                },
              ]}
              
            />
            <p className="selected-item">
              {<div>  
              
            {selectedValue1 == "Create Users"? <Login /> : ""}
            {selectedValue1 == "Employee"? <h1>Employee Data</h1> : ""} 
            {selectedValue1 == "User"? <h1>Customer Data</h1> : ""}
            {selectedValue1 == "Admin" ? <h1>Admin Data</h1> : ""}
            </div>}
           
            </p>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default User;