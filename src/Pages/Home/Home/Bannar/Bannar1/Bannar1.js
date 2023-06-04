import React from "react";
import bannar1 from "../../../../../assetes/a-b-1.jpg"
import bannar2 from "../../../../../assetes/a-b-3.jpg"
import bannar3 from "../../../../../assetes/a-b-4.jpg"

const Bannar1=()=>{
    return(
        <div>
            <div className="grid grid-cols-3 gap-4 ">
                <img src={bannar1}  className="h-full"></img>
                <img src={bannar2}  className="h-full"></img>
                <img src={bannar3} className="h-full"></img>
                </div>

        </div>
    )
}

export default Bannar1