import React from "react";
import {BsGiftFill,BsBoxFill} from 'react-icons/bs';

import {RiShoppingCart2Fill} from 'react-icons/ri'

import {BiUser} from 'react-icons/bi'
const Navbar1=()=>{

    const items=[
        {
            id:1,
            title:"Offers",
            subtitle:"latests Offers",
            icon:<BsGiftFill/>
        },
        {
            id:2,
            title:"Cart",
            subtitle:"Add Items",
            icon:<RiShoppingCart2Fill/>
        },
        {
            id:3,
            title:"Pre-order",
            subtitle:"Order-Today",
            icon:<BsBoxFill/>
        },
        {
            id:4,
            title:"Account",
            subtitle:"Register or Login",
            icon:<BiUser/>
        },

    ]
    return(
        <div className="bg-black text-orange-500 px-10 py-4">
            <div className="flex flex-row justify-between">

          
         <div>
            <h1 className="text-xl">Logo</h1>
         </div>
         <div>
            <form>
                <input type="text" className="bg-white text-black pr-24 pl-2 py-1 " placeholder="search"></input>
            </form>
         </div>
         <div className="navitems flex flex-row">
            {
                items.map(item=><div className="flex flex-row justify-center items-center mr-8">
                    <span className="mr-2" style={{fontSize:"25px"}}>
                        {item.icon}
                    </span>
                    <div>


                    <h1 className="text-white " style={{fontSize:"13px"}}>{item.title}</h1>
                    <h2 className=" text-white " style={{fontSize:"10px"}}>{item.subtitle}</h2>
                    </div>
                </div>)
            }


         </div>

         </div>

        </div>
    )
}
export default Navbar1