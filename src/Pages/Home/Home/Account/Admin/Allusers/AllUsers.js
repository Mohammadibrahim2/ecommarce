import { useQuery } from "@tanstack/react-query";
import { Avatar, Space } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { AuthContext } from "../../../../../../Context/AuthProvider/AuthProvider";

const AllUsers = () => {
  const [users, setUsers] = useState([])
  const { token} = useContext(AuthContext)

useEffect(()=>{
   getUsers()
},[])

const  getUsers= async()=>{
 try{
  const {data}=await axios(`http://localhost:8000/user`,{
    headers:{
      authorization: 'Bearer ' + token
  }
  })
  setUsers(data)
  
 }
 catch(error){
  console.log(error)
 }
}

const handleDelete=async(id)=>{

  if (window.confirm(`Are you sure to delete this  user?`) == true) {
  const {data}=await axios.delete(`http://localhost:8000/user/${id}`,{
    headers:{
      authorization: 'Bearer ' + token
  }
  })
  getUsers()
  toast.success(data?.message)
  
 
  }
  }
  //make admin
  const  handleMakeAdmin=async(id,name)=>{

  try{
    if (window.confirm(`Are you sure to delete this  ${name}?`) == true) {
      const {data}=await axios.put(`http://localhost:8000/user/makeAdmin/${id}`,{
        headers:{
          authorization: 'Bearer ' + token
      }
      })
      getUsers()
      toast.success(data?.message)
      
     }
  }
  catch(err){
    console.log(err)
  }
  }
  return (
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
         
            <th>Make Admin</th>
            <th>Remove User</th>


          </tr>
        </thead>
        <tbody className="text-black font-semibold">
          {/* row */}

          {
            users?.map(user => <tr key={user._id}>
             
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <Space direction="vertical" size={16}>
                      <Space wrap size={16}>

                        <Avatar size="large" icon={<UserOutlined />} />

                      </Space>
                    </Space>
                  </div>

                </div>
              </td>
              <td>
                {user ?
                  <h1> {user?.firstName} {user?.lastName}
                  </h1> :
                  <h1 >user</h1>

                }

              </td>
              <td>
                {user?.email}
              </td>
              <td>{user?.phone}</td>
              <td>
                {
                  user.isAdmin === true ?
                    <span className="text-lime-600 px-2 py-2 text-white font-bold ">Admin</span> :
                    <button className="text-orange-500 px-2 py-2 font-bold">user</button>
                }

              </td>
              <td  >
                <button className="px-2 py-2 text-lime-600 text-white"
                 onClick={() => handleMakeAdmin(user?._id,user?.firstName)}  >Make Admin </button>
              </td>
              <td  >
                <button className="px-2 py-2 bg-red-600 text-white"
                 onClick={() => handleDelete(user?._id)}  >Remove </button>
              </td>
              
            </tr>)
          }


          {/* row 2 */}

        </tbody>
       
   

      </table>
    </div>
  )
}
export default AllUsers