import React from "react";
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import {ImGift} from 'react-icons/im'

import {RiShoppingCart2Fill} from 'react-icons/ri'

import {BiUser} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'

import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";
// import logo from "../../../../assetes/tech-universe.jpg"

// import "./Navbar.css"
// import SearchModal from "./SearchModal/SearchModal";
const ResponsiveNav=()=>{
    const items=[
        {
            id:1,
            link:"offers",
            title:"Offers",
            subtitle:"latests Offers",
            icon:<ImGift/>
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
            link:"preorder",
            title:"Pre-order",
            subtitle:"Order-Today",
            icon:<SiHomeassistantcommunitystore/>
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
        <div className="bg-black text-orange-600 px-2 py-4 bottom-0 w-full fixed  z-40  lg:hidden  ">
           
             

         <div className="navitems flex flex-row  justify-evenly ">
            {
                items.map(item=><div className="flex flex-col justify-center items-center  ">
                    <span className="mb" style={{fontSize:"18px"}}>

                    <Link to={`${item.link}`}>{item.icon}   </Link>
                    </span>
                    <div>


                    <Link to={`${item.link}`}>
                        <h1 className="text-white " style={{fontSize:"11px"}}>{item.title}</h1>
                    {/* <h2 className=" text-white " style={{fontSize:"9px"}}>{item.subtitle}</h2> */}
                    </Link>
                    </div>
                </div>)
            }
          

    

         </div>

        </div>
    )
}
export default ResponsiveNav