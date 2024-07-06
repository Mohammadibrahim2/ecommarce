import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RiEdit2Fill} from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Context/AuthProvider/AuthProvider";
import moment from "moment";

const AllPreOrders=()=>{
const [allPreOrders,setPreOrders]=useState([])
const {user,setUser,token}=useContext(AuthContext)
useEffect(()=>{
   getPreOrder()
},[])

const getPreOrder= async()=>{
 try{
  const {data}=await axios.get(`https://updateecommarce-server.vercel.app/preorder/admin/get-preorder`,{
    headers:{
      authorization: 'Bearer ' + token
    }
  })
  setPreOrders(data?.preorders)
 
  
 }
 catch(error){
  console.log(error)
 }
}

const handleDelete=async(id)=>{

  if (window.confirm(`Are you sure to delete this  product?`) == true) {
  const {data}=await axios.delete(`https://updateecommarce-server.vercel.app/pre/delete-preorder/${id}`,{
    headers:{
      authorization: 'Bearer ' + token
  }
  })
  getPreOrder()
  toast.success(data?.message)
  
 
  }
  }
 




// }
    return(
        <div className="">
            <h1>All PreOrders</h1>
  <table className="table border">
    {/* head */}
    <thead className="border border-1">
      <tr className=" text-xl text-black">
     
    
        <th>Image</th>
        <th>Product Name</th>
        <th>UserName</th>
        <th>Adress</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Order time</th>
        <th>Update</th>
        <th>Delete</th>
        
        
      </tr>
    </thead>
    <tbody className="text-black font-semibold">
      {/* row */}
   
        { allPreOrders&&
           allPreOrders.map(p=> <tr key={p._id}>
                
                <td> 
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={`https://updateecommarce-server.vercel.app/preorder/preorder-photo/${p?._id}`}
                        alt="Preorder Image" />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td>
                
                 <h1> {p?.name} </h1>
               
             
               
                </td>
                <td>
                    {p?.userName}
                </td>
                <td>{p?.adress}</td>
                <td>
                    {p?.phone} 
                </td>
                <td>
                    {p?.email} 
                </td>
                <td>
                {moment(p?.createdAt).fromNow()}
                </td>
                <td>
                 <Link to={`update/`}> 
                 <button className=" text-xl font-semibold"
                   style={{color:"green"}} ><RiEdit2Fill/></button></Link>
                </td>
                <td  > 
                  <button className=" text-xl font-semibold"
                    style={{color:"red"}}
                    onClick={()=>handleDelete(p?._id)}
                     ><MdDeleteSweep/></button>
                </td>
              </tr>)
        }
   
     
      
    </tbody>
   
  </table>
</div>
    )
}
export default AllPreOrders