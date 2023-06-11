import React, { useContext, useState } from "react";
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import {ImGift} from 'react-icons/im'

import {RiShoppingCart2Fill} from 'react-icons/ri'

import {BiUser} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import { HiOutlineX} from "react-icons/hi";
import {FaBars} from 'react-icons/fa'

import { Link } from "react-router-dom";
import logo from "../../../../assetes/logo-2.png"

import "./Navbar.css"
import SearchModal from "./SearchModal/SearchModal";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
const Navbar1=()=>{

  const {toggle,setToggle}=useContext(AuthContext)

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
        <div className="bg-black text-orange-600 lg:px-10 px-5 py-4 top-0 w-full fixed  z-40 ">
            <div className="flex flex-row justify-between w-full ">
                <div className="lg:hidden block text-2xl text-white">
                    <span className="text-2xl">
                        {toggle?<button onClick={()=>setToggle(false)}><FaBars/>
                            </button> :<buttun onClick={()=>setToggle(true)} className="text-3xl"><HiOutlineX/> </buttun>
                         
                        }
                        </span>
                </div>

          
         <div>
           <Link to="/"><img src={logo } className="lg:w-[90px] w-[100px]"/></Link>
         
         </div>
      
            <form className="parent lg:block hidden ">
                <input type="text" className="bg-white text-black lg:pr-48 pl-2 py-2 rounded-md  " placeholder="Search"></input>
              
                <button className="child z-10 text-xl ml-20 hidden lg:block"><BsSearch/></button>
               
            </form>
            {/* <button className=" z-10 text-xl  lg:hidden block"><BsSearch/></button> */}

            <SearchModal btn={onclick}></SearchModal>

        
         <div className="navitems lg:flex flex-row hidden  ">
            {
                items.map(item=><div className="flex flex-row justify-center items-center mr-8">

    <span className="mr-2" style={{fontSize:"25px"}}><Link to={`${item.link}`}>
                        {item.icon}</Link>
                    </span>
                    <div>


                    <Link to={`${item.link}`}></Link><Link to={`${item.link}`}>
                        <h1 className="text-white " style={{fontSize:"13px"}}>{item.title}</h1>
                    <h2 className=" text-white " style={{fontSize:"10px"}}>{item.subtitle}</h2></Link>
                    </div>
                </div>)
            }
             {/* <li className="list-none"><a href="https://www.applegadgetsbd.com/ " target="_blank">Demo</a></li> */}


         </div>

         </div>

        </div>
    )
}
export default Navbar1