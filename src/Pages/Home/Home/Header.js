import React from "react";
import Bannar1 from "./Bannar/Bannar1/Bannar1";
import FeaturedProducts from "./Product/FeaturedProducts/Product";

const Header=()=>{
    return(
        <div className="text-oranger-500">
            this is Header
            <FeaturedProducts></FeaturedProducts>
            <Bannar1></Bannar1>
        </div>
    )
}

export default Header