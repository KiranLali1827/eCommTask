import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SegmentedControl from "../users/SegmentedControl";
import Viewproductlist from "./Viewproductlist";
import Dropdown from "../users/Dropdown";
import Addproduct from '../Products/Addproduct'



const Productdashborad = () => {
  const [selectedValue1, setSelectedValue1] = useState("Add Product");
  const navigate = useNavigate()

  return (


    <div>
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        


    <div>
     
          <div className="container">
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
                {
                  label: "Filter",
                  value: "Filter",
                  ref: useRef(),
                },
              ]}
              
            />
            <p className="selected-item">
            {<div>  
            {selectedValue1 == "Add Product"? <Addproduct /> : ""}
            {selectedValue1 == "View Product"? <Viewproductlist />: ""}
            {selectedValue1 == "Filter"? <Dropdown />: ""}
            </div>}
         
            </p>
            
            
          </div>
        
        </div>
      </div>
    </div>
      
      </div>
    



  );
};

export default Productdashborad;