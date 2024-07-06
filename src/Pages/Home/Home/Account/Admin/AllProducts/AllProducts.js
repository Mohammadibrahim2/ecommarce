import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RiEdit2Fill} from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Context/AuthProvider/AuthProvider";

const AllProducts=()=>{
const [allProducts,setProducts]=useState([])
const {user,setUser,token}=useContext(AuthContext)
useEffect(()=>{
   getProduct()
},[])

const getProduct= async()=>{
 try{
  const {data}=await axios.get(`https://updateecommarce-server.vercel.app/product/admin/get-product`,{
    headers:{
      authorization: 'Bearer ' + token
    }
  })
  setProducts(data?.products)
  console.log(data?.products)
  
 }
 catch(error){
  console.log(error)
 }
}

const handleDelete=async(id)=>{

  if (window.confirm(`Are you sure to delete this  product?`) == true) {
  const {data}=await axios.delete(`https://updateecommarce-server.vercel.app/product/delete-product/${id}`,{
    headers:{
      authorization: 'Bearer ' + token
  }
  })
  getProduct()
  toast.success(data?.message)
  
 
  }
  }
 




// }
    return(
        <div className="">
  <table className="table border">
    {/* head */}
    <thead className="border border-1">
      <tr className=" text-xl text-black">
     
    
        <th>Image</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
        
        
      </tr>
    </thead>
    <tbody className="text-black font-semibold">
      {/* row */}
   
        { allProducts&&
           allProducts.map(p=> <tr key={p._id}>
                
                <td> 
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={`https://updateecommarce-server.vercel.app/product/product-photo/${p?._id}`}
                        alt="Products Image" />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td>
                
                 <h1> {p?.name} </h1>
               
             
               
                </td>
                <td>
                    {p?.category?.name}
                </td>
                <td>{p?.brand}</td>
                <td>
                    {p?.price} kr
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
export default AllProducts