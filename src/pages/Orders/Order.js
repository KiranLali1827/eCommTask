import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SegmentedControl from "../users/SegmentedControl";
import '../Orders/Order.scss'



const Order = () => {
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
                  label: "All Orders",
                  value: "All Orders",
                  ref: useRef(),
                },
                {
                  label: "New Orders",
                  value: "New Orders",
                  ref: useRef(),
                },
                {
                  label: "In Progress",
                  value: "In Progress",
                  ref: useRef(),
                },
                {
                  label: "In Transist",
                  value: "In Transist",
                  ref: useRef(),
                },
                {
                    label: "Delivered",
                    value: "Delivered",
                    ref: useRef(),
                }
              ]}
              
            />
            <p className="selected-item">
            {<div>  
            {selectedValue1 == "All Orders"? "All Orders" : ""}
            {selectedValue1 == "In Progress"? "In Progress": ""} 
            {selectedValue1 == "In Transist"? "In Transist" : ""}
            {selectedValue1 == "Delivered"? "Delivered" : ""}
            {selectedValue1 == "New Orders"? "New Orders" : ""}
            
            </div>}
           
            </p>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Order;