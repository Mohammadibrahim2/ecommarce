import React from "react";
import bannar4 from "../../../../../assetes/fishbannar.jpg"
import bannar5 from "../../../../../assetes/fishbannar2.jpg"


const Bannar2=()=>{
    return(
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 lg:gap-4 gap-2">
                <img src={bannar4}  className="h-2/3 w-full"></img>
                <img src={bannar5}  className="h-2/3 w-full"></img>
                
                </div>

        </div>
    )
}

export default Bannar2