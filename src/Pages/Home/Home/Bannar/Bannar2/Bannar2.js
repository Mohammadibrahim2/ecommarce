import React from "react";
import bannar4 from "../../../../../assetes/bannar-400.jpg"
import bannar5 from "../../../../../assetes/bannar-300.jpg"


const Bannar2=()=>{
    return(
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">
                <img src={bannar4}  className="lg:h-2/3 h-full w-full"></img>
                <img src={bannar5}  className="lg:h-2/3 h-full w-full"></img>
                
                </div>

        </div>
    )
}

export default Bannar2