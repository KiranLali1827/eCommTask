import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponets = () => {
    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to={"/Signup"} />
}
export default PrivateComponets;