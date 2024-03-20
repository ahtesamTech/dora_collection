import { useContext, useState } from "react";
import { AdminAuth } from "./AdminProvider";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


const AuthCheck = ({children}) => {


   return <Navigate to={'/admin/login'}></Navigate>
};

export default AuthCheck;