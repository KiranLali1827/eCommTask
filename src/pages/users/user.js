import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useRef, useState } from "react";
import SegmentedControl from "./SegmentedControl";
import { useNavigate } from "react-router-dom";
import Createuser from "./Createuser";
import Userslist from "./Userslist";
import EmployeeList from './Employeelist'



const User = () => {
  const [selectedValue1, setSelectedValue1] = useState("Create Employee");
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
                  label: "Create Employee",
                  value: "Create Employee",
                  ref: useRef(),
                },
                {
                  label: "Users",
                  value: "Users",
                  ref: useRef(),
                },
                {
                  label: "Employee",
                  value: "Employee",
                  ref: useRef(),
                }
              ]}
              
            />
            <p className="selected-item">
            {<div>  
            {selectedValue1 == "Create Employee"? <Createuser /> : ""}
            {selectedValue1 == "Users"? <Userslist />: ""} 
            {selectedValue1 == "Employee"? <EmployeeList /> : ""}
            </div>}
           
            </p>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default User;