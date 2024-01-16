import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavStyle from "../Header/NavStyle.scss";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Signup");
  };

  return (
    <div className="Nav-items">
      <img className="logo" src="https://yt3.googleusercontent.com/ytc/AIf8zZSqnIyhDK5VunVEGU72m8PM1zQyjziEvWD1w3sIyg=s900-c-k-c0x00ffffff-no-rj" alt="hello"></img>
      { auth ?
        <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/Productlist">Products</Link></li>
      <li><Link to="/Addproduct">Add Product</Link></li>
      <li><Link to="/UpdateProduct">Update Product</Link></li>
      <li><Link to="/Profile">Profile</Link></li>
      <li><Link onClick={logout} to="/Signup">Logout ({JSON.parse(auth).name})</Link></li>
      </ul> 
      : 
      <div className="NavSignupLogin">
      <ul>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="/Login">Login</Link></li>
      </ul>
      </div>
      }
    </div>
  );
};

export default Nav;
