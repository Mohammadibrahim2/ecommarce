import React, { useState } from "react";
import { CiUser } from 'react-icons/ci';
import { BsKey, BsBookmarkCheck } from 'react-icons/bs';
import { BsCartCheck } from "react-icons/bs"
import { HiArrowRightOnRectangle } from 'react-icons/hi2';


import Account from "../Pages/Home/Home/Account/Account";
import Navbar1 from "../Pages/SharedPages/Navbar/Navbar/Navbar1";
import Footer from "../Pages/SharedPages/Footer/Footer/Footer";
import SubNav from "../Pages/SharedPages/Navbar/Subnav/SubNav";
import ResponsiveNav from "../Pages/SharedPages/Navbar/Navbar/ResponsiveNav/ResponsiveNav";




const DashboardLayout = () => {


    const [active, setActive] = useState("My Account")
    const links = [
        {
            id: 1,
            title: "My Account",
            icon: <CiUser />,
            link: "my-account"
        },
        {
            id: 2,
            title: "My Orders",
            icon: <BsCartCheck />,
            link: "my-orders"
        },
        {
            id: 3,
            title: "Change Password",
            icon: <BsKey />,
            link: "change-password"
        },
        {
            id: 4,
            title: "Address",
            icon: <BsBookmarkCheck />,
            link: "address"
        },
        {
            id: 5,
            title: "Logout",
            icon: <HiArrowRightOnRectangle />
        },
    ]


    console.log(active)

    return (
        <div>

            <Navbar1 />
            <SubNav></SubNav>

            <Account></Account>

            <Footer></Footer>
            <ResponsiveNav></ResponsiveNav>
        </div>
    )
}
export default DashboardLayout