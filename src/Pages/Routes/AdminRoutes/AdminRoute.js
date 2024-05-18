import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

const AdminRoute=({children})=>{
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=useAdmin(user?.email)

    const location=useLocation();
    if(loading || isAdminLoading){
        return <>
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="success" />
        </>
    
    
    }
    if(user && isAdmin){
        return children
    }
    else{
        return<Navigate to="/" state={{from:location}}replace></Navigate>    }

  
        //

}
export default AdminRoute