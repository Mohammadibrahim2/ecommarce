import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RiEdit2Fill} from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Context/AuthProvider/AuthProvider";

const AllCategories=()=>{
  const { token} = useContext(AuthContext)
const [allCategories,setProducts]=useState([])
useEffect(()=>{
   getCategory()
},[])

const  getCategory= async()=>{
 try{
  const {data}=await axios.get(`http://localhost:8000/category/get-categories`)
  setProducts(data?.categories)
 
  
 }
 catch(error){
  console.log(error)
 }
}

const handleDelete=async(id)=>{

if (window.confirm(`Are you sure to delete this  Caetgory?`) == true) {
const {data}=await axios.delete(`http://localhost:8000/category/delete-category/${id}`,{
  headers:{
    authorization: 'Bearer ' + token
}
})

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
        <th>Category Name</th>
     
        <th>Update</th>
        <th>Delete</th>
        
        
      </tr>
    </thead>
    <tbody className="text-black font-semibold">
      {/* row */}
   
        { allCategories&&
          allCategories.map(c=> <tr key={c._id}>
                
                <td> 
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      {/* <div className="mask mask-squircle w-12 h-12">
                        <img src={`https://updateecommarce-server.vercel.app/product/product-photo/${p?._id}`}
                        alt="Products Image" />
                      </div> */}
                    </div>
                   
                  </div>
                </td>
                <td>
                {c?.name} 
                </td>
                <td>
                
      
                 <Link to={`/update`}> 
                 <button className=" text-xl font-semibold"
                   style={{color:"green"}} ><RiEdit2Fill/></button></Link>
                </td>
                <td  > 
                  <button className=" text-xl font-semibold"
                    style={{color:"red"}}
                    onClick={()=>handleDelete(c?._id)}
                     ><MdDeleteSweep/></button>
                </td>
              </tr>)
        }
   
     
      
    </tbody>
   
  </table>
</div>
    )
}
export default AllCategories