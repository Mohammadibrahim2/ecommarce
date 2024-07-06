import React from "react";
import { BsCalendarWeek } from 'react-icons/bs'
const SingleOffer=({offer})=>{
    const {img}=offer
    return(
     
             <div className=" bg-white h-auto ">
                <figure className="h-[60%] "><img src={img} alt="Shoes" className="object-fit h-full w-full"/></figure>
                <div className=" text-black text-center h-[200px] border flex flex-col justify-center">
                    <h2 className="font-semibold text-sm ">
                        <BsCalendarWeek className="text-orange-600 font-bold"/> 20 August, 2024 - 15 september, 2024</h2>
                    <h2 className="font-semibold  text-sm">Get New River fishes at Discounted Prices!</h2>
                    <p className="text-xs">Buy to the latest products today and experience the most delecious fresh food!</p>
                    <div className=" my-2">
                        <button className="px-4 py-2 bg-orange-500 rounded-md text-white font-semibold">View Details</button>
                    </div>
                </div>
            </div>
            
      
    )
}
export default SingleOffer