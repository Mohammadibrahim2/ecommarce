import React from "react";
import {BsGiftFill,BsBoxFill} from 'react-icons/bs';

import {RiShoppingCart2Fill} from 'react-icons/ri'

import {BiUser} from 'react-icons/bi'
import { Link } from "react-router-dom";
const SubNav=()=>{

    const items=[
        {
            id:1,
            link:"offers",
            title:"Combo",
          
        },
        {
            id:2,
            title:"Cart",
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
            title:"Cart",
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
        <div className="bg-white text-black shadow-md px-10 py-3  top-0 w-full">
            <div className="flex flex-row w-full ">

          
     
         
         <div className="navitems flex flex-row-reverse justify-center items-center w-full">
            {
                items.map(item=><div className="flex flex-row justify-around items-center mr-8 ">
                  
               


                    <Link to={`${item.link}`}>
                        <h1 className="text-black text-md font-bold hover:text-orange-600" >{item.title}</h1>
                   </Link>
                 
                </div>)
            }


         </div>

         </div>

        </div>
    )
}
export default SubNav