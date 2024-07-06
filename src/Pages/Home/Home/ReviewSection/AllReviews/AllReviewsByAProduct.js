import React, { useContext, useState ,useEffect} from "react";

import { Link, useNavigate } from "react-router-dom";
import { RiMapPinUserFill } from "react-icons/ri"
import axios from "axios";


const AllReviews = ({product}) => {

    const [reviews,  setReviews] = useState('')

    useEffect(()=>{
        if(product?._id) getProduct()
    },[product?._id])

    const getProduct= async()=>{
       try{
        const {data}=await axios(`https://updateecommarce-server.vercel.app/review/get-reviews/${product._id}`)
        setReviews(data)
console.log(data)
       }
       catch(error){
        console.log(error)
       }
    }
 
    const navigate = useNavigate()
    
    return (
        <div>
            <div className="text-center my-2 pt-12">
                <h1 className="text-2xl font-semibold text-orange-500 mb-4">All reviews</h1>
               
            </div>

            <div className="">
                <div className=" ">
{/* all reviews */}
{reviews &&
                 reviews?.map(p=><>
                  <div class=" bg-white  lg:w-1/3 w-full mx-auto my-2 ">
      
      

    <div class="py-7 px-2 items-center text-center text-black py-5 px-4 border border-orange-500">
    <div className="avatar placeholder">
  <div className="bg-orange-500 text-white  text-neutral-content w-16 rounded-full">
    <span className="text-3xl"><RiMapPinUserFill /></span>
  </div>
</div>
    <h2 class=" text-sm font-semibold ">User: {p?.user?.firstName}</h2>
      <h2 class=" text-sm font-semibold my-4 ">Comment: {p?.description}</h2>
      
      
      
    </div>
  </div></>)
                 }

                    

                </div>



            </div>
        </div>
    )
}
export default AllReviews