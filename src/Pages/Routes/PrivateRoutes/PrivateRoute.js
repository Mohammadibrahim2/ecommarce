import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const PrivateRoute=({children})=>{
    const {user,loading}=useContext(AuthContext)
    console.log(user)
    const location=useLocation();
    if(loading){
        return <>
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="success" />
        </>
    
    
    }
    if(user){
        return children
    }
    else{
        return<Navigate to="/" state={{from:location}}replace></Navigate>    }

  
        //

}
export default PrivateRoute