import React from "react";
import Bannar1 from "./Bannar/Bannar1/Bannar1";
import Bannar2 from "./Bannar/Bannar2/Bannar2";
import Header from "./Header/Header";
import FeaturedProducts from "./Product/FeaturedProducts/Product";
import TopBrandProducts from "./Product/TopBrandProducts/TopProducts";
import ShopByBrands from "./ShopByBrands/ShopByBrands";

const Home=()=>{
    return(
        <div className="text-oranger-500">
            <Header></Header>
          
            <FeaturedProducts></FeaturedProducts>
            <Bannar2></Bannar2>
            <TopBrandProducts></TopBrandProducts>
            <Bannar1></Bannar1>
            <ShopByBrands></ShopByBrands>
        </div>
    )
}

export default Home