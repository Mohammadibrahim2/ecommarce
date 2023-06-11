import React from "react";
import bannar1 from "../../../../../assetes/a-b-1.jpg"
import bannar2 from "../../../../../assetes/a-b-3.jpg"
import bannar3 from "../../../../../assetes/a-b-4.jpg"

const Bannar1=()=>{
    return(
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full ">
            
                <img src={bannar1}  className="h-full lg:col-span-1 col-span-3 "></img>
             

               
                <img src={bannar2}  className="h-full w-full "></img>
                <img src={bannar3} className="h-full w-full "></img>

             
                
                </div>
            

        </div>
    )
}

export default Bannar1