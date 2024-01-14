import logo from "./logo.svg";
import "./App.css";
import { addtoCart } from "./Redux/Action";
import { useDispatch } from "react-redux";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard.js";
import Testcomponent from "./Components/Testcomponent.js";
import { useState } from "react";
import { Button } from "@material-ui/core";


function App() {
  

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (

    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    
   
  
    <div className="App">
      <Header />
      <div className="StyleforDarkorLightMode">
      <Button onClick={toggleMode}>{isDarkMode ? 'Light-mode' : 'Dark-mode'}</Button>
      </div>
     
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Test" element={<Testcomponent />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
