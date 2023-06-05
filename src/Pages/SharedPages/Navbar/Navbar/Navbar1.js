import React from "react";
import {BsGiftFill,BsBoxFill} from 'react-icons/bs';

import {RiShoppingCart2Fill} from 'react-icons/ri'

import {BiUser} from 'react-icons/bi'
import { Link } from "react-router-dom";

import "./Navbar.css"
const Navbar1=()=>{

    const items=[
        {
            id:1,
            link:"offers",
            title:"Offers",
            subtitle:"latests Offers",
            icon:<BsGiftFill/>
        },
        {
            id:2,
            title:"Cart",
            link:"cart",
            subtitle:"Add Items",
            icon:<RiShoppingCart2Fill/>
        },
        {
            id:3,
            link:"account",
            title:"Pre-order",
            subtitle:"Order-Today",
            icon:<BsBoxFill/>
        },
        {
            id:4,
            link:"account",
            title:"Account",
            subtitle:"Register or Login",
            icon:<BiUser/>
        },

    ]
    return(
        <div className="bg-black text-orange-600 px-10 py-4  top-0">
            <div className="flex flex-row justify-between">

          
         <div>
           <Link to="/"> <h1 className="text-xl">Logo</h1>   </Link>
         
         </div>
      
            <form className="parent ">
                <input type="text" className="bg-white text-black pr-60 pl-2 py-2 rounded-md " placeholder="search"></input>
                <button className="child z-10">Sarch</button>
            </form>
        
         <div className="navitems flex flex-row">
            {
                items.map(item=><div className="flex flex-row justify-center items-center mr-8">
                    <span className="mr-2" style={{fontSize:"25px"}}>
                        {item.icon}
                    </span>
                    <div>


                    <Link to={`${item.link}`}>
                        <h1 className="text-white " style={{fontSize:"13px"}}>{item.title}</h1>
                    <h2 className=" text-white " style={{fontSize:"10px"}}>{item.subtitle}</h2></Link>
                    </div>
                </div>)
            }


         </div>

         </div>

        </div>
    )
}
export default Navbar1