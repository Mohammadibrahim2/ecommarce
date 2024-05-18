import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const AllUsers=()=>{
const [users,setUsers]=useState([])


       
          const { refetch } = useQuery({
            queryKey: [''],
            queryFn: () => fetch(`http://localhost:5000/user`)
              .then(res => res.json())
              .then(data => {
                setUsers(data)
                console.log(data)
              })
        
        
        
          })
      
    const handleDelete=(id)=>{

      if (window.confirm(`Are you sure to delete user?`) == true) {
        fetch(`http://localhost:5000/user/${id}`,{
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
      <tr className="border border-1 text-xl text-black">
     
    
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Role</th>
        <th>Update</th>
        <th>Delete</th>
        
        
      </tr>
    </thead>
    <tbody className="text-black font-semibold">
      {/* row */}
   
        {
            users?.map(user=> <tr key={user._id}>
                 {/* <th>
                   <label>
                    <input type="checkbox" className="checkbox" />
                  </label> 
                </th> */}
                <td> 
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvcaiUvT1wKdTMZF8ytfU0_DRxzSXkpRp4A&usqp=CAU" 
                        alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                   
                  </div>
                </td>
                <td>
                 {user?
                 <h1> {user?.firstName } {user?.lastName}
                 </h1>:
                 <h1 >user</h1>
                 
                 }
               
                </td>
                <td>
                    {user?.email}
                </td>
                <td>{user?.phone}</td>
                <td>
                    {
                        user.isAdmin===true?
                        <span className="bg-lime-500 px-2 py-2 text-white ">Admin</span>:
                        <button className="bg-orange-500 px-2 py-2 ">user</button>
                    }
                
                </td>
                <td>
                 <Link to={`update/${user._id}`}> 
                 <button className="px-2 py-2 bg-red-500" >Update</button></Link>
                </td>
                <td  > 
                  <button className="px-2 py-2 bg-red-500"onClick={()=>handleDelete(user?._id)}  >Delete</button>
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
export default AllUsers