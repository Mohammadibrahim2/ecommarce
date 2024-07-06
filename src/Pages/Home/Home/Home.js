import React from "react";
import Bannar1 from "./Bannar/Bannar1/Bannar1";
import Bannar2 from "./Bannar/Bannar2/Bannar2";
import Header from "./Header/Header";
import FeaturedProducts from "./Product/FeaturedProducts/Product";
import TopBrandProducts from "./Product/TopBrandProducts/TopProducts";
import ShopByBrands from "./ShopByBrands/ShopByBrands";
import FeatruedCategories from "./FeaturedCategory/Categories/FeaturedCategories";
import Blog from "../../../Blog/Blog";



import Service from "./Service/Service";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {
    return (
        <div className="text-oranger-500">

            <Header></Header>
           
            <MessengerCustomerChat
                pageId="314721621727244"
                appId="359335093589040"
             
            />,
      

            <FeatruedCategories />

            <FeaturedProducts ></FeaturedProducts>
            <Bannar2></Bannar2>
            <TopBrandProducts></TopBrandProducts>
            <Bannar1></Bannar1>
            <ShopByBrands></ShopByBrands>
            <Service />
            <Blog></Blog>
        </div>
    )
}

export default Home