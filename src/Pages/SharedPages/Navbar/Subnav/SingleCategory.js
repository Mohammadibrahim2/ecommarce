import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";




const SingleCategory = ({item}) => {
   
const {sub,setSub}=useContext(AuthContext)

    const handlesubcat= async(id)=>{
     
      const {data}=await axios.get(`https://updateecommarce-server.vercel.app/subcategory/${id}`)
      
      console.log(data)
      setSub(data?.subcategory)

     console.log(sub)

    }
    return (
        <div>
            <h1
                onClick={() => handlesubcat(item?._id)}
                className="text-black  hover:text-orange-600 capitalize text-md font-semibold" >{item?.name}</h1>


        </div>
    )
}
export default SingleCategory