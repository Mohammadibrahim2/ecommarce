import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RiEdit2Fill} from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../../../Context/AuthProvider/AuthProvider";

const  AllReviews=()=>{
  const { token} = useContext(AuthContext)
const [reviews,setReviews]=useState([])
useEffect(()=>{
  getReviews()
},[])

const getReviews= async()=>{
 try{
  const {data}=await axios.get(`http://localhost:8000/review/get-reviews`,{
    headers:{
        authorization: 'Bearer ' + token
    }
  })
  setReviews(data?.review)
  console.log(data?.review)
 
  
 }
 catch(error){
  console.log(error)
 }
}

const handleDelete=async(id)=>{

if (window.confirm(`Are you sure to delete this  review?`) == true) {
const {data}=await axios.delete(`http://localhost:8000/review/delete-review/${id}`,{
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
            <h1 className="text-xl text-orange-500 ">All Reviews</h1>
  <table className="table border">
    {/* head */}
    <thead className="border border-1">
      <tr className=" text-xl text-black">
     
    
        <th>Product</th>
        <th>Iamge</th>
        <th>User</th>
        <th>Description</th>
     
        <th>Reviews</th>
        <th>Delete</th>
        
        
      </tr>
    </thead>
    <tbody className="text-black font-semibold">
      {/* row */}
   
        {reviews&&
          reviews.map(r=> <tr key={r._id}>
                
                <td> 
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={`http://localhost:8000/product/product-photo/${r?.products?._id}`}
                        alt="Products Image" />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td>
                
                <h1> {r?.products?.name} </h1>
               
             
               
                 </td>
                <td>
                    {r?.user?.firstName}
                </td>
                <td>{r?.description}</td>
              
                <td>
                 <Link to={`/update`}> 
                 <button className=" text-xl font-semibold"
                   style={{color:"green"}} ><RiEdit2Fill/></button></Link>
                </td>
                <td  > 
                  <button className=" text-xl font-semibold"
                    style={{color:"red"}}
                    onClick={()=>handleDelete(r?._id)}
                     ><MdDeleteSweep/></button>
                </td>
              </tr>)
        }
   
     
      
    </tbody>
   
  </table>
</div>
    )
}
export default AllReviews