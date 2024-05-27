import React, { useContext, useState } from "react";
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import {ImGift} from 'react-icons/im'

import {RiShoppingCart2Fill} from 'react-icons/ri'

import {BiUser} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import { RxCross2 } from "react-icons/rx";
import { HiOutlineX} from "react-icons/hi";
import {FaBars} from 'react-icons/fa'

import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assetes/logo-2.png"

import "./Navbar.css"
import axios from 'axios';
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

import { toast } from "react-hot-toast";
import {  Badge} from 'antd'
import { useCart } from "../../../../Context/CartProvider/Cart";
import { useSearch } from "../../../../Context/SearchProvider/Search";
import SearchModal from "./SearchModal/SearchModal";
import useCategory from "../../../../hooks/useCategory";
const Navbar1=()=>{

const [cart]=useCart()
const[values,setValues]=useSearch()
const categories=useCategory();

   
const navigate=useNavigate()
  const {toggle,setToggle,user,setUser,loading,setLoading}=useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // seerching:-

  const  handelSearch= async(e)=>{
 
    e.preventDefault()
   console.log(values?.keyword)
try{

    const {data} =await axios.get(`http://localhost:8000/product/search/${values?.keyword}`)
    setValues({...values,results:data})
    console.log(values)
    navigate('/search')
}
catch(error){
    console.log(error)
}
 
 
  }

const handleLogout=()=>{
    localStorage.removeItem("logineduser");
    localStorage.removeItem("accesstoken");
    setUser(null)
    toast.success("successfully logout")


}
    const menu=[
      
       <Link to="/offers">
        <li className="flex flex-row justify-center items-center mr-8">
            <span className="mr-2" style={{fontSize:"25px"}}><ImGift/></span>
            <div className="text-white flex flex-col items-start" style={{fontSize:"13px"}}>
        <h1>Offers</h1>
        <h1>Latests Offers</h1>
        </div>
           </li>
       </Link>,
       <Link to="/preorder">
        <li className="flex flex-row justify-center items-center mr-8">
        <span className="mr-2" style={{fontSize:"25px"}}><SiHomeassistantcommunitystore/></span>
        <div className="text-white flex flex-col items-start" style={{fontSize:"13px"}}>
        <h1>Pre-Order</h1>
        <h1>Order Today</h1>
        </div>
            </li>
       </Link>,
       <Link to="/cart">
        <li className="flex flex-row justify-center items-center mr-8">
        <Badge count={cart?.length} showZero size="small">
        <span className="mr-2 text-orange-500" style={{fontSize:"25px"}}><RiShoppingCart2Fill/></span>
      </Badge> 
        <div className="text-white flex flex-col items-start" style={{fontSize:"13px"}}>
        
    <h1 className="text-white">Cart</h1>
        <h1>Add Items</h1>
        </div>
            </li>
       </Link>,
         



    user?.email? <Link to="/dashboard">
    <li className="flex flex-row justify-center items-center mr-8">
    <span className="mr-2" style={{fontSize:"25px"}}><BiUser/></span>
    <div className="text-white flex flex-col items-start" style={{fontSize:"13px"}}>
    <h1>{user?.firstName} {user?.lastName}</h1>
    <h1 onClick={handleLogout}>Logout</h1>
    </div>
       </li>
   </Link> :
   
    <li className="flex flex-row justify-center items-center mr-8 cursor-pointer" htmlFor="registerModal">
    <label  htmlFor="registerModal" className="mr-2" style={{fontSize:"25px"}}><BiUser/></label>
    <div className="text-white flex flex-col items-start" style={{fontSize:"13px"}}>
    <label  htmlFor="registerModal">Account</label >
    <label  htmlFor="registerModal">Register or Login</label >
    </div>
       </li>,

   
      
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
      
            <form className="parent lg:block hidden " onSubmit={handelSearch}>
                <input type="search" 
                value={values.keyword}
                onChange={(e)=>setValues({...values,keyword:e.target.value})}
                 className="bg-white text-black  lg:pr-48  py-2 rounded-md   "
                  placeholder=" Search"></input>
              
              
              
               <button type="submit"  className="child z-10 text-xl ml-20 hidden lg:block"><BsSearch/></button>
         
           </form>
           

            <SearchModal 
             values={values}
              setValues={setValues} 
              handelSearch={handelSearch}>

            </SearchModal>

        
         <div className="navitems lg:flex flex-row hidden  ">



            {menu}
         
            
             {/* <li className="list-none"><a href="https://www.applegadgetsbd.com/ " target="_blank">Demo</a></li>   */}
     

            

         </div>

         </div>

        </div>
    )
}
export default Navbar1