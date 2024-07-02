import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/SharedPages/Footer/Footer/Footer";
import Navbar1 from "../../Pages/SharedPages/Navbar/Navbar/Navbar1";
import SubNav from "../../Pages/SharedPages/Navbar/Subnav/SubNav";
import ResponsiveNav from "../../Pages/SharedPages/Navbar/Navbar/ResponsiveNav/ResponsiveNav";
import PostData from "../../AccountLayout/Signin";

import { AuthContext } from "../../Context/AuthProvider/AuthProvider";




const Main = () => {
    
    return (
        <div className="bg-white">
            <Navbar1></Navbar1>
            <SubNav></SubNav>
           

         

              
                    

                        <div className="lg:px-8 px-3 ">
                            
                           
                         <PostData></PostData>
                            
                         

                            <Outlet ></Outlet>
                            


                        </div>
                   


              
         



            <Footer></Footer>

            <ResponsiveNav></ResponsiveNav>

        </div>
    )
}
export default Main