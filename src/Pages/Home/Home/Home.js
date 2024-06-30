import React from "react";
import Bannar1 from "./Bannar/Bannar1/Bannar1";
import Bannar2 from "./Bannar/Bannar2/Bannar2";
import Header from "./Header/Header";
import FeaturedProducts from "./Product/FeaturedProducts/Product";
import TopBrandProducts from "./Product/TopBrandProducts/TopProducts";
import ShopByBrands from "./ShopByBrands/ShopByBrands";
import FeatruedCategories from "./FeaturedCategory/Categories/FeaturedCategories";
import Blog from "../../../Blog/Blog";
import PostData from "../../../AccountLayout/PostData";
import CreateReview from "./ReviewSection/CreateReview";
import OpenMobileModal from "../../SharedPages/Navbar/Navbar/SearchModal/MobileViewModel";
import ScrollToTop from "react-scroll-to-top";
import Service from "./Service/Service";



const Home=()=>{
    return(
        <div className="text-oranger-500">

            <Header></Header>
            <ScrollToTop smooth top="90" color="#FFFFFF" 
             style={{backgroundColor:"#FF5A01" ,padding:"5px",fontWeight:"700"}}>
   
            </ScrollToTop>
         
            <PostData></PostData>
           
            <FeatruedCategories/>
          
            <FeaturedProducts ></FeaturedProducts>
            <Bannar2></Bannar2>
            <TopBrandProducts></TopBrandProducts>
            <Bannar1></Bannar1>
            <ShopByBrands></ShopByBrands>
           <Service/>
            <Blog></Blog>
        </div>
    )
}

export default Home