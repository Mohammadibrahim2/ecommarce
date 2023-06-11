import React, { useState } from "react";
import {CiUser } from 'react-icons/ci';
import {BsKey,BsBookmarkCheck } from 'react-icons/bs';
import {BsCartCheck} from "react-icons/bs"
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import AccountFrom from "./AccountFrom/AccountFrom";
import { Link, Outlet } from "react-router-dom";
import Navbar1 from "../../../SharedPages/Navbar/Navbar/Navbar1";
import Footer from "../../../SharedPages/Footer/Footer/Footer";



const Account=()=>{
    const [active,setActive]=useState("My Account")
    const links=[
        {
            id:1,
            title:"My Account",
            icon:<CiUser/>,
            link:""
        },
        {
            id:2,
            title:"My Orders",
            icon:<BsCartCheck/>,
            link:"my-orders"
        },
        {
            id:3,
            title:"Change Password",
            icon:<BsKey/>,
            link:"change-password"
        },
        {
            id:4,
            title:"Address",
            icon:<BsBookmarkCheck/>,
            link:"address"
        },
        {
            id:5,
            title:"Logout",
            icon:<HiArrowRightOnRectangle/>
        },
    ]

 
console.log(active)
 
    return(
        <div>
            
           
           
             <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mt-10 px-5">

                <div className="mt-20">
                    {
                        links.map(link=>
                       <Link to={link.link}><li className={` ${active===link.title? "text-orange-500":"text-black" } hover:text-orange-600 list-none flex flex-row items-center mb-3 text-black`}>
                            <span className="mr-2">{link.icon}</span>
                            <button onClick={()=>setActive(link.title)}>{link.title}</button></li></Link>)
                    }
                </div>
                <div className="">
                <Outlet></Outlet>
                </div>

            </div> 
               
           
        </div>
    )
}
export default Account