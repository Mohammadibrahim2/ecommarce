import React, { useContext, useState } from "react";
import { CiUser } from 'react-icons/ci';
import { BsKey, BsBookmarkCheck } from 'react-icons/bs';
import { BsCartCheck } from "react-icons/bs"

import { FaCartArrowDown, FaBoxOpen, FaUsers, FaAddressCard } from "react-icons/fa"
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import AccountFrom from "./AccountFrom/AccountFrom";
import { Link, Outlet } from "react-router-dom";
import Navbar1 from "../../../SharedPages/Navbar/Navbar/Navbar1";
import Footer from "../../../SharedPages/Footer/Footer/Footer";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../../../hooks/useAdmin";



const Account = () => {
    const [active, setActive] = useState("My Account")
    const { user, setUser } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)



    const links = [
        {
            id: 1,
            title: "My Account",
            icon: <CiUser />,
            link: ""
        },
        {
            id: 2,
            title: "My Orders",
            icon: <BsCartCheck />,
            link: "my-orders"
        },
        {
            id: 2,
            title: "My Pre-Orders",
            icon: <BsCartCheck />,
            link: "my-preorders"
        },


        {
            id: 4,
            title: "Address",
            icon: <FaAddressCard />,
            link: "address"
        },


    ]

    const AdminLinks = [
        {
            id: 1,
            title: "My Account",
            icon: <CiUser />,
            link: ""
        },
        {
            id: 2,
            title: "My Orders",
            icon: <BsCartCheck />,
            link: "my-orders"
        },
        {
            id: 2,
            title: "My Pre-Orders",
            icon: <BsCartCheck />,
            link: "my-preorders"
        },


        {
            id: 4,
            title: "Address",
            icon: <FaAddressCard />,
            link: "address"
        },
        {
            id: 5,
            title: "All Categories",
            icon: <FaCartArrowDown />,
            link: "allcategories"
        },
        {
            id: 5,
            title: "All Users",
            icon: <FaUsers />,
            link: "allusers"
        },
        {
            id: 5,
            title: "All Reviews",
            icon: <FaUsers />,
            link: "allreviews"
        },
        {
            id: 5,
            title: "All PreOrders",
            icon: <FaUsers />,
            link: "allpreorder"
        },
        {
            id: 9,
            title: "Create Featured Category",
            icon: <BsKey />,
            link: "create-featured-category"
        },
        {
            id: 5,
            title: "All Products",
            icon: <FaBoxOpen />,
            link: "allproducts"
        },
        {
            id: 5,
            title: "Add Products",
            icon: <HiArrowRightOnRectangle />,
            link: "createproduct"
        },
        {
            id: 5,
            title: "All Orders",
            icon: <FaCartArrowDown />,
            link: "allorders"
        },
        {
            id: 3,
            title: "Create Category",
            icon: <BsKey />,
            link: "create-category"
        },


    ]
    const handleLogout = () => {

        localStorage.removeItem("logineduser");
        localStorage.removeItem("accesstoken");
        setUser(null)
        toast.success("successfully logout")

    }
    const header = [
        {
            id: 1,
            tittle: "Products",
            count: 89
        }, {
            id: 1,
            tittle: "Orders",
            count: 876
        }, {
            id: 1,
            tittle: "Users",
            count: 565
        }, {
            id: 1,
            tittle: "Profit",
            count: 45
        }
    ]

    return (
        <div>

            <div className="grid lg:grid-cols-4 grid-cols-1  py-2 px-5">
                <>
                {
                    isAdmin ? <div className="mt-8  text-black ">
                        {
                            AdminLinks.map(link =>
                                <Link to={link.link}><li  className={` ${active === link.title ? "text-orange-500" : "text-black"} hover:text-orange-600 list-none flex flex-row items-center mb-3 text-black`}>
                                    <span className="mr-2">{link.icon}</span>
                                    <button onClick={() => setActive(link.title)}>{link.title}</button></li></Link>)
                        }
                        
                    </div> 
                    :
                     <div className="mt-8  text-black">
                        {
                            links.map(link =>
                                <Link to={link.link}><li className={` ${active === link.title ? "text-orange-500" : "text-black"} hover:text-orange-600 list-none flex flex-row items-center mb-3 text-black`}>
                                    <span className="mr-2">{link.icon}</span>
                                    <button onClick={() => setActive(link.title)}>{link.title}</button></li></Link>)
                        }
                        
                    </div>
                }
               
                            </>

                {/* adminlinks */}

                {/* adminlinks */}
                <div className="col-span-3
                    ">

                    <div className="grid grid-cols-4 gap-4 px-4 py-2">
                        {
                            header.map(h => <div key={h.id}>
                                <div className="card  text-orange-600 border border-orange-600 ">
                                    <div className="card-body">
                                        <h2 className="card-title">{h.tittle}</h2>
                                        <p>total: {h.count}</p>

                                    </div>
                                </div>
                            </div>)
                        }
                    </div>


                    {/* {user?._id && */}
                    <div >
                        <Outlet></Outlet>
                    </div>
                    {/* } */}

                </div>




            </div>


        </div>
    )
}
export default Account