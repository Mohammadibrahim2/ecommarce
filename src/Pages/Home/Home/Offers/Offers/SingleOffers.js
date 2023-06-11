import React from "react";
import { BsCalendarWeek } from 'react-icons/bs'
const SingleOffer=({offer})=>{
    const {img}=offer
    return(
     
             <div className="card card-compact  bg-zinc-200 ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-black text-center">
                    <h2 className="font-semibold text-sm flex flex-row items-center"><BsCalendarWeek className="mx-2"/> 20 March, 2023 - 15 June, 2023</h2>
                    <h2 className="font-semibold  text-sm">Get New iPhone at Discounted Prices!</h2>
                    <p className="text-xs">Upgrade to the latest iPhone today and experience the most advanced features yet!</p>
                    <div className="card-actions justify-center">
                        <button className="px-4 py-2 bg-orange-500 rounded-md text-white font-semibold">View Details</button>
                    </div>
                </div>
            </div>
            
      
    )
}
export default SingleOffer