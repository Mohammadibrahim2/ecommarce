import React from "react";

import bannar4 from "../../../../../assetes/fishbannar.jpg"
import bannar5 from "../../../../../assetes/fishbannar2.jpg"


const Bannar1=()=>{
    return(
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full ">
            
                <img src={bannar4}  className="h-full lg:col-span-1 col-span-3 "></img>
             

               
                <img src={bannar5}  className="h-full w-full "></img>
                <img src={bannar4} className="h-full w-full "></img>

             
                
                </div>
            

        </div>
    )
}

export default Bannar1