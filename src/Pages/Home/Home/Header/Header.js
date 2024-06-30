import React from "react";
import CaroselBannarItem from "./CaroselBannars";
import bannar3 from "../../../../assetes/fishbannar.jpg"
import bannar4 from "../../../../assetes/fishbannar2.jpg"



const Header=()=>{
    return(
        <div className="pt-3 lg:mt-5 mt-1">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
                <div className="col-span-2 h-full">
              
                <CaroselBannarItem></CaroselBannarItem>
                {/* <CaroselH></CaroselH> */}
                </div>
            
            <div className="grid lg:grid-cols-1 grid-cols-2 lg:gap-2 gap-4">
            <img src={bannar3}  className=" w-full"></img>
                <img src={bannar4}  className=" w-full"></img>

            </div>
            </div>
          

        </div>
    )
}
export default Header