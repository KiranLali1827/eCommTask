import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Delivery/Deliverydashboard.scss'
import SegmentedControl from "../users/SegmentedControl";



const Deliverydashboard = () => {
  const [selectedValue1, setSelectedValue1] = useState("All Orders");
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
                  label: "New",
                  value: "All Orders",
                  ref: useRef(),
                },
                {
                  label: "Status",
                  value: "Status",
                  ref: useRef(),
                },
                {
                  label: "Out For Delivery",
                  value: "Out For Delivery",
                  ref: useRef(),
                },
                  
              ]}
              
            />
            <p className="selected-item">
            {<div>  
            {selectedValue1 == "All Orders"? "All Orders" : ""}
            {selectedValue1 == "Status"? "In Status based on the delivery body chnage the status accoridly to disply in customer app": ""} 
            {selectedValue1 == "Out For Delivery"? "Out For Delivery" : ""}
            </div>}
           
            </p>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Deliverydashboard;