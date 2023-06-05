import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/SharedPages/Footer/Footer/Footer";
import Navbar1 from "../../Pages/SharedPages/Navbar/Navbar/Navbar1";
import SubNav from "../../Pages/SharedPages/Navbar/Subnav/SubNav";

const Main=()=>{

    return(
        <div>
            <Navbar1></Navbar1>
            <SubNav></SubNav>
            <div  className="px-6">

            <Outlet ></Outlet>
            </div>
       <Footer></Footer>

        </div>
    )
}
export default Main