import React, { useEffect, useState } from "react";
import "../Components/Login.scss";
import { Navigate, useNavigate } from "react-router-dom";


function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Navigate = useNavigate();

  useEffect(()=> {
    const auth = localStorage.getItem('user');
    if (auth) {
      Navigate("/")
    }
  },[])

  const loginAPI = async ()=> {
    console.warn(email,password)
    let result = await fetch('http://localhost:4000/Login', {
      method:'POST',
      body:JSON.stringify({email,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log('the result', result)
    if (result.name) {
        localStorage.setItem("user", JSON.stringify(result));
        Navigate("/")
    } else {
      alert("User Not Found")
    }
  }


  return (
    <div>
      <h1>Login Page</h1>
      
      <input
        className="InputBox"
        type="text"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="InputBox"
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginAPI} className="SignupButton" type="button">
        Login
      </button>
    </div>
  );
}

export default Login;
