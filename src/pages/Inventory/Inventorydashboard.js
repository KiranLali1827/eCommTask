import '../home/home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import { useRef, useState } from 'react'
import SegmentedControl from '../users/SegmentedControl'
import InventoryList from './InventoryList'
import Inventoryhome from './Inventoryhome'



const Inventorydashboard = () => {

  const [selectedValue1, setSelectedValue1] = useState("Create Employee");
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="container">
            <SegmentedControl
              name="group-1"
              callback={(val) => setSelectedValue1(val)}
              controlRef={useRef()}
              segments={[
                {
                  label: "Dashoboard",
                  value: "Dashoboard",
                  ref: useRef(),
                },
                {
                  label: "View Products",
                  value: "View Products",
                  ref: useRef(),
                },
                {
                  label: "Manage Products",
                  value: "Manage Products",
                  ref: useRef(),
                }
              ]}
              
            />
            <p className="selected-item">
            {<div>  
            {selectedValue1 == "Dashoboard"? <Inventoryhome /> : ""}
            {selectedValue1 == "View Products"? <InventoryList />: ""} 
            {selectedValue1 == "Manage Products"? "Manage Product" : ""}
            </div>}
            </p>
          </div>

        </div>
    </div>
  )
}

export default Inventorydashboard