import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RiEdit2Fill} from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const AllProducts=()=>{
const [allProducts,setProducts]=useState([])

const { refetch } = useQuery({
  queryKey: [''],
  queryFn: () => fetch(`http://localhost:5000/product`)
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      console.log(data)
    })



})

const handleDelete=(id)=>{

if (window.confirm(`Are you sure to delete this  product?`) == true) {
fetch(`http://localhost:5000/product/${id}`,{
method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
toast.success(data?.message)
refetch()
})


} else {
return
}




}
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
   
        {
           allProducts?.products?.map(p=> <tr key={p._id}>
                
                <td> 
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://static.doofinder.com/main-files/uploads/2021/02/amazon-shopify-prestashop-768x461.png" 
                        alt="Products Image" />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td>
                
                 <h1> {p?.name} </h1>
               
             
               
                </td>
                <td>
                    {p.category.name}
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
                  <button className=" text-xl font-semibold" onClick={()=>handleDelete(p?._id)}
                    style={{color:"red"}} ><MdDeleteSweep/></button>
                </td>
              </tr>)
        }
   
    
      {/* row 2 */}
      
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      
      </tr>
    </tfoot> */}
    
  </table>
</div>
    )
}
export default AllProducts