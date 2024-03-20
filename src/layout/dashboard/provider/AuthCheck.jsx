import { useContext, useState } from "react";
import { AdminAuth } from "./AdminProvider";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


const AuthCheck = ({ children, ...rest }) => {

 // Check if the user is authenticated (you may implement your own logic here)
 const isAuthenticated = localStorage.getItem('token');

 return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default AuthCheck;