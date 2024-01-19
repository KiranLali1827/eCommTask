import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import User from "./pages/users/user";
import Signup from "./pages/Signup/Signup";


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>

//           {/* <Route path="/"> */}
//             <Route path='/' element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/user" element={<User />} />
//               {/* <Route index element={<List />} />
//               <Route path=":userId" element={<Single />} />
//               <Route path="new" element={<New />} />
//             </Route> */}
//             {/* <Route path="products">
//               <Route index element={<List />} />
//               <Route path=":productId" element={<Single />} />
//               <Route path="new" element={<New />} />
//             </Route> */}

//       </BrowserRouter>
//     </div>
//   );
// }

function App() {
  return (
    // <Router>
    // <Navbar />
    // <Routes>
    // 	{/* <Route path='/' exact component={Dashboard} /> */}
    //   <Route path="/" element={<Dashboard/>} exact />
    // 	<Route path="/events" element={<Events/>} exact />
    // 	<Route path="/About" element={<About/>} exact />
    // 	<Route path="/Annual" element={<Annual/>} exact />
    // 	<Route path="/Team" element={<Team/>} exact />
    // 	<Route path="/Blogs" element={<Blogs/>} exact />
    // 	<Route path="/Signup" element={<Signup/>} exact />
    // 	<Route path="/Signin" element={<Signin/>} exact />

    // </Routes>
    // <Footer />
    // </Router>

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
        </Route>
        <Route path="/Login" element={<Login />} exact />
        
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
