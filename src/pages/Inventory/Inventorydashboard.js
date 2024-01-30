import '../home/home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import Inventroyproducts from './Inventroyproducts'
import { Button } from '@mui/material'
import Userlist from '../users/Userslist'
import { useRef, useState } from 'react'
import SegmentedControl from '../users/SegmentedControl'



const Inventorydashboard = () => {

  const [selectedValue1, setSelectedValue1] = useState("Create Employee");

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
            {selectedValue1 == "Create Employee"? "Add Product" : ""}
            {selectedValue1 == "Users"? "view Product": ""} 
            {selectedValue1 == "Employee"? "Manage Product" : ""}
            </div>}
           
            </p>

          </div>



          <div className='widgets'>
            <Widget type='users' />
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div>
          <div className="charts">
            {/* <Feature /> */}
            <div className='chart'> 
            <Inventroyproducts/>
            </div>
           
           
          </div>
          <br></br>
          <div className='chart'> 
          <h3>Added Product List</h3>
            <Userlist />


            <Button
              style={{ backgroundColor: "gray", width:'500px', float:'center' }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Save Products
            </Button>

            </div>



        </div>
    </div>
  )
}

export default Inventorydashboard






// import { useState } from "react";

// function Inventorydashboard() {
//   const [price, setPrice] = useState(0);
//   const [qty, setQty] = useState(0);
//   const [total, setTotal] = useState(0);

//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState();
//   const [catname, setCatName] = useState();

//   const [sum, setSum] = useState();

//   function Calculation() {
//     users.push({ name,catname, qty, price, sum });

//     const total = users.reduce((total, user) => {
//       total += Number(user.sum);
//       return total;
//     }, 0);
//     // you want this
//     setTotal(total);
//     // Clear the input fields
//     setName("");
//     setQty("");
//     setPrice("");
//     setSum("");
//   }

//   const handlePriceChange = (e) => {
//     const newPrice = parseFloat(e.target.value);
//     if (!isNaN(newPrice)) {
//       setPrice(newPrice);
//       calculateTotal(newPrice, qty);
//     }
//   };

//   // Event handler for quantity selection
//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value);
//     if (!isNaN(newQuantity)) {
//       setQty(newQuantity);
//       calculateTotal(price, newQuantity);
//     }
//   };

//   // Calculate the total based on price and quantity
//   const calculateTotal = (price, qty) => {
//     const newTotal = price * qty;
//     setSum(newTotal);
//   };

//   function refreshPage() {
//     window.location.reload();
//   }

//   return (
//     <div class="container-fluid bg-2 text-center">
//       <h1>Inventory Management System React</h1>
//       <br />
//       <div class="row">
//         <div class="col-sm-8">
//           <table class="table table-bordered">
//             <h3 align="left"> Add Products </h3>
//             <tr>
//               <th>Product Name</th>
//               <th>Product category</th>
//               <th>Price</th>
//               <th>Qty</th>
//               <th>Amount</th>
//               <th>Option</th>
//             </tr>
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Item Name"
//                   value={name}
//                   onChange={(event) => {
//                     setName(event.target.value);
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Product Category"
//                   value={catname}
//                   onChange={(event) => {
//                     setCatName(event.target.value);
//                   }}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Enter Price"
//                   value={price}
//                   onChange={handlePriceChange}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   class="form-control"
//                   placeholder="Enter Qty"
//                   value={qty}
//                   onChange={handleQuantityChange}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   value={sum}
//                   class="form-control"
//                   placeholder="Enter Total"
//                   id="total_cost"
//                   name="total_cost"
//                   disabled
//                 />
//               </td>
//               <td>
//                 <button
//                   class="btn btn-success"
//                   type="submit"
//                   onClick={Calculation}
//                 >
//                   Add
//                 </button>
//               </td>
//             </tr>
//           </table>
//           <h3 align="left"> Products </h3>
//           <table class="table table-bordered">
//             <thead>
//               <tr>
//                 <th>Item Name</th>

//                 <th>Price</th>
//                 <th>Qty</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>

//             <tbody>
//               {users.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.name}</td>
//                   <td>{row.price}</td>

//                   <td>{row.qty}</td>
//                   <td>{row.sum}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div class="col-sm-4">
//           <div class="form-group" align="left">
//             <h3>Total</h3>

//             <input
//               type="text"
//               class="form-control"
//               placeholder="Enter Total"
//               required
//               disabled
//               value={total}
//             />
//             <br />
//             <button type="button" class="btn btn-success" onClick={refreshPage}>
//               {" "}
//               <span>Complete</span>{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Inventorydashboard;
