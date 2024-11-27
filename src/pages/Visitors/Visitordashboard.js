import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import StepperForm from "./StepperForm";
import "../Visitors/visitors.scss";

function Visitordashboard() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Visitordashboard</h1>
        <StepperForm />
      </div>
    </div>
  );
}
export default Visitordashboard;

// import * as React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import "../Visitors/visitors.scss";
// import { Stepper } from "primereact/stepper";
// import { StepperPanel } from "primereact/stepperpanel";
// import { Button } from "primereact/button";
// import { useRef } from "react";
// import { TextField } from "@mui/material";
// import { useState } from "react";
// import VerifyOtp from "./VerifyOtp";

// export default function BasicDemo() {
//   const stepperRef = useRef(null);

//   const [error, setError] = useState(false);
//   const [firstName, setFirstName] = useState("");

//   return (
//     <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <br></br>
//         <br></br>
//         <div className="test">
//           <div className="card flex justify-content-center">
//             <Stepper ref={stepperRef} style={{ flexBasis: "30rem" }}>
//               <StepperPanel header="Header I">
//                 <div className="flex flex-column h-12rem">
//                   <div className="-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
//                   <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   onChange={(e) => console.log('')}
//                 />
//                 {error && firstName.length <= 0 ? (
//                 <label className="Errorlabel">Phone number can't be Empty</label>
//               ) : (
//                 ""
//               )}
              
//                   </div>
//                   <Button style={{top:'2rem', width:'20rem', marginLeft:'28rem', textAlign:'center'}}>Get OTP</Button>
//                 </div>
               
//               </StepperPanel>
//               <StepperPanel header="Header II">
//                 <div className="flex flex-column h-12rem">
//                   <div style={{marginTop:'-20VW'}}>
//                     <VerifyOtp />
//                   </div>
//                 </div>
    
//               </StepperPanel>
//               <StepperPanel header="Header III">
//                 <div className="flex flex-column h-12rem">
//                   <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
//                     Content III
//                   </div>
//                 </div>
              
//               </StepperPanel>
              
//             </Stepper>
          
//           </div>
//         </div>
//         <div className="button-container">
//         <Button className="left-button"
//           label="Back"
//           severity="secondary"
//           icon="pi pi-arrow-left"
//           onClick={() => stepperRef.current.prevCallback()}
//         /> 
//         <Button className="right-button"
//           label="Next"
//           icon="pi pi-arrow-right"
//           iconPos="right"
//           onClick={() => stepperRef.current.nextCallback()}
//         />
//         </div>
        
//       </div>
//     </div>
//   );
// }
