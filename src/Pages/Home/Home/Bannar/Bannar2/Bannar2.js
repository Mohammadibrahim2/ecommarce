import React from "react";
import bannar1 from "../../../../../assetes/a-b-1.jpg"
import bannar2 from "../../../../../assetes/a-b-3.jpg"


const Bannar2=()=>{
    return(
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
                <img src={bannar1}  className="h-2/3 w-full"></img>
                <img src={bannar2}  className="h-2/3 w-full"></img>
                
                </div>

        </div>
    )
}

export default Bannar2