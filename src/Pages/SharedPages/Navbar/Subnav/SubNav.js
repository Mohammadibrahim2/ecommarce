import React, { useContext } from "react";
import {BsGiftFill,BsBoxFill} from 'react-icons/bs';

import {RiShoppingCart2Fill} from 'react-icons/ri'
import { BsPlusLg } from "react-icons/bs";

import {BiUser} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

import "./Subnav.css"
const SubNav=()=>{

    const {toggle,setToggle}=useContext(AuthContext)
    const items=[
        {
            id:1,
            link:"offers",
            title:"Combo",
          
        },
        {
            id:1,
            link:"offers",
            title:"Media And Streamers",
          
        },
        {
            id:2,
            title:"Smart Electronis",
            link:"Smart Electronis",
          
        },
        {
            id:3,
            link:"account",
            title:"Peripharals",
        },
        {
            id:4,
            link:"account",
            title:"Cover and glass",
           
        },
        {
            id:1,
            link:"offers",
            title:"Fitness And Wareable",
          
        },
        {
            id:2,
            title:"Sound Equipment",
            link:"Sound Equipment",
          
        },
        {
            id:3,
            link:"account",
            title:"Laptop  and Desktop",
        },
        {
            id:4,
            link:"account",
            title:"Phones and Tablets",
           
        },

    ]
    return(
        <div className="bg-white text-black  lg:px-5 py-3   w-full pt-20 lg:shadow-md">
            <div className="relative  lg:block hidden bg-white ">

          
     
         
         <div className="bg-white navitems lg:relative z-30 flex lg:flex-row-reverse flex-col-reverse lg:justify-center  lg:items-center items-start lg:w-full w-1/2 ">
            {
                items.map(item=><div className="flex flex-row justify-around items-center lg:mr-4 mt-3">
                  
            
                    <Link to={`${item.link}`}>
                        <h1 className="text-black text-xs font-bold hover:text-orange-600" >{item.title}</h1>
                   </Link>
                 
                </div>)
            }


         </div>

         </div>


{/* for responsiveness */}


         <div className="relative bg-white h-full lg:hidden block">

          
     
         
         <div className={`bg-white navitems h-full fixed  top-[68px] ${toggle?"left-[-200px]": "left-[3px]"} subnav z-30 flex  flex-col-reverse justify-end items-start  w-1/2 `}>
            {
                items.map(item=><div className="flex flex-row justify-between items-start py-2 pr-2 border w-full">
                  
            
                    <Link to={`${item.link}`} >
                        <h1 className="text-black text-xs font-bold hover:text-orange-600" >{item.title}</h1>
                        
                   </Link>
                   <span><BsPlusLg/></span>
                 
                </div>)
            }

      <div className=""></div>

         </div>

         </div>

        </div>
    )
}
export default SubNav