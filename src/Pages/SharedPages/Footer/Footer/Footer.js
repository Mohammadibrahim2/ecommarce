import React from "react";
import { FiAperture } from "react-icons/fi";

const Footer=()=>{
    return(
        <div className="bg-zinc-900 text-white">
            <div className="flex flex-row justify-around">
                <div>
                    <h1 className="text-orange-600 font-semibold">SUPPORT</h1>
                    <div>
                        <div className=" flex flex-row items-center  px-3 py-2 border border-orange-600 rounded-full w-[200px]">
                        <span className="pr-2"><FiAperture/></span>|<h1 className="pl-2">01632846454</h1>
                        </div>
                        <div className=" flex flex-row items-center  px-3 py-2 border border-orange-600 rounded-full w-[200px]">
                        <span className="pr-2"><FiAperture/></span>|
                        <div className="pl-2">
                            <h2 style={{fontSize:"10px"}}>store locater</h2>

                        <h1 >Find our storages</h1>

                        </div>
                       
                     
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-orange-600">About Us</h1>
                </div>

                <div>
                <h1 className="text-orange-600">Help</h1>

                </div>

                <div>
                <h1 className="text-orange-600">Stay Connected</h1>
                </div>



            </div>
            <div className="bg-black text-white text-center py-3 " style={{fontSize:"13px"}}>
                <h1>© 2023 Thanks From AppleGadgets™ Ltd. | All rights reserved</h1>

            </div>

        </div>
    )
}

export default Footer