import React, { useContext } from "react";
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { ImGift } from 'react-icons/im'

import { RiShoppingCart2Fill } from 'react-icons/ri'

import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { Badge } from 'antd'
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";
import { useCart } from "../../../../../Context/CartProvider/Cart";
import toast from "react-hot-toast";
// import logo from "../../../../assetes/tech-universe.jpg"

// import "./Navbar.css"
// import SearchModal from "./SearchModal/SearchModal";

const ResponsiveNav = () => {
    const [cart] = useCart()
    const { toggle, setToggle, user, setUser, loading, setLoading } = useContext(AuthContext)


    const handleLogout = () => {
        localStorage.removeItem("logineduser");
        localStorage.removeItem("accesstoken");
        setUser(null)
        toast.success("successfully logout")


    }
    const menu = [

        <Link to="/offers">
            <li className="flex flex-col justify-center items-center mr-8">
                <span className="mr-2" style={{ fontSize: "20px" }}><ImGift /></span>
                <div className="text-white flex flex-col items-start" style={{ fontSize: "13px" }}>
                    <h1>Offers</h1>

                </div>
            </li>
        </Link>,
        <Link to="/preorder">
            <li className="flex flex-col justify-center items-center mr-8">
                <span className="mr-2" style={{ fontSize: "20px" }}><SiHomeassistantcommunitystore /></span>
                <div className="text-white flex flex-col items-start" style={{ fontSize: "13px" }}>
                    <h1>Pre-Order</h1>

                </div>
            </li>
        </Link>,
        <Link to="/cart">
            <li className="list-none ">
                <Badge count={cart?.length} showZero size="small">
                    <span className=" text-orange-500" style={{ fontSize: "20px" }}>
                        <RiShoppingCart2Fill /></span>
                </Badge>
                    <h1 className="text-white">Cart</h1>

             
            </li>
        </Link>,




        user?.email ? <Link to="/dashboard">
            <li className="list none">
                <span className="mr-2" style={{ fontSize: "20px" }}><BiUser /></span>
                <div className="text-white flex flex-col items-center" style={{ fontSize: "13px" }}>
                    <h1>{user?.firstName} {user?.lastName}</h1>
                    <h1 onClick={handleLogout}>Logout</h1>
                </div>
            </li>
        </Link> :
            <>
                {/* <li className="flex flex-row justify-center items-center mr-8 cursor-pointer" htmlFor="registerModal">
                <label htmlFor="registerModal" className="mr-2" style={{ fontSize: "25px" }}><BiUser /></label>
                 <div className="text-white flex flex-col items-start" style={{ fontSize: "13px" }}>
                    <label htmlFor="registerModal">Account</label >
                     <label htmlFor="registerModal">Register or Login</label >
                 </div>
             </li> */}

                <li className="text-white list-none   " >
                    <Link to="/register">
                     <span className=" text-orange-500"
                        style={{ fontSize: "20px" }}><BiUser /></span>
                    </Link>
                    
                   <Link to="register"> <span className="">Sign in</span></Link>
                   
                </li>


            </>

    ]
    return (
        <div className="bg-black text-orange-600 px-2 py-2 bottom-0 w-full fixed  z-40  lg:hidden  ">



            <div className="navitems flex flex-row  justify-evenly ">
                {menu}




            </div>

        </div>
    )
}
export default ResponsiveNav