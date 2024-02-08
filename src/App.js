import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import User from "./pages/users/user";
import Signup from "./pages/Signup/Signup";
import Createuser from "./pages/users/Createuser";
import Userslist from "./pages/users/Userslist";
import Employeelist from "./pages/users/Employeelist";
import Imageupload from "./pages/Products/Imageupload";
import Addproduct from "./pages/Products/Addproduct";
import Viewproductlist from "./pages/Products/Viewproductlist";
import Createproductsection from "./pages/Products/Createproductsection";
import Productdashborad from "./pages/Products/Productdashborad";
import Order from "./pages/Orders/Order";
import Deliverydashboard from "./pages/Delivery/Deliverydashboard";
import Inventorydashboard from "./pages/Inventory/Inventorydashboard";
import Invoicedashboard from "./pages/Invoice/Invoicedashboard";
import Calendardash from "./pages/Calendar/Calendardash";
import Analyticsdashboard from "./pages/Analytics/Analyticsdashboard";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/' exact component={Dashboard} /> */}
        <Route>
          {/* <Route element = {<PrivateComponent />}> */}
          {/* <Route path="/" element={<Login />} exact /> */}
          <Route path="/" element={<Home />} exact />
          <Route path="/users" element={<User />} exact />
          <Route path="/Signup" element={<Signup />} exact />
          <Route path="/Createuser" element={<Createuser />} exact />
          <Route path="/Userslist" element={<Userslist />} exact />
          <Route path="/Employeelist" element={<Employeelist />} exact />
          <Route path="/Imageupload" element={<Imageupload />} exact />
          <Route path="/Addproduct" element={<Addproduct />} exact />
          <Route path="/Viewproductlist" element={<Viewproductlist />} exact />
          <Route path="/Createproductsection" element={<Createproductsection />} exact />
          <Route path="/Productdashborad" element={<Productdashborad />} exact />
          <Route path="/Order" element={<Order />} exact />
          <Route path="/Deliverydashboard" element={<Deliverydashboard />} exact />
          <Route path="/Inventorydashboard" element={<Inventorydashboard />} exact />
          <Route path="/Invoicedashboard" element={<Invoicedashboard />} exact />
          <Route path="/Calendardash" element={<Calendardash />} exact />
          <Route path="/Analyticsdashboard" element={<Analyticsdashboard />} exact />
          
          
          
        </Route>
        <Route path="/Login" element={<Login />} exact />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
