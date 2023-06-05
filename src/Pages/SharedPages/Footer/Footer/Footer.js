import React from "react";
import { FiAperture } from "react-icons/fi";

const Footer=()=>{

    const list=[
        {
            name:"About",
        },
        {
            name:"Home",
        },
        {
            name:"Contact",
        },
        {
            name:"trams & condition",
        },
        
        
        

        

        

    ]
    return(
        <div className="bg-zinc-900 text-white ">
            <div className="flex lg:flex-row flex-col justify-around items-center py-16">
                <div>
                    <h1 className="text-orange-600 font-semibold  py-2 text-xl">SUPPORT</h1>
                    <div className="pt-3">
                        <div className=" flex flex-row items-center py-4 px-3 border border-orange-600 rounded-full w-[250px] ">
                        <span className="pr-2"><FiAperture/></span>|<h1 className="pl-2">01632846454</h1>
                        </div>
                        <div className=" flex flex-row items-center  px-4 py-2 border border-orange-600 rounded-full w-[250px] my-3">
                        <span className="pr-2"><FiAperture/></span>|
                        <div className="pl-2">
                            <h2 style={{fontSize:"10px"}}>store locater</h2>

                        <h1 >Find our storages</h1>

                        </div>
                       
                     
                        </div>
                    </div>
                    <div className="social-icons w-full flex flex-row justify-around ">
                        <span>Face</span>
                        <span>yout</span>
                        <span>instag</span>
                        <span>Face</span>
                    </div>
                </div>
                <div>
                    <h1 className="text-orange-600 text-start">About Us</h1>
                    <li className="list-none flex flex-col text-start">{list.map(li=>
                        <a>{li.name}</a>)}</li>
                </div>

                <div>
                <h1 className="text-orange-600 text-start">Help</h1>

                <li className="list-none flex flex-col text-start">{list.map(li=>
                        <a>{li.name}</a>)}</li>

                </div>

                <div>
                <h1 className="text-orange-600 text-start">Stay Connected</h1>

                <li className="list-none flex flex-col text-start">{list.map(li=>
                        <a>{li.name}</a>)}</li>
                


                

                </div>



            </div>
            <div className="bg-black text-white text-center py-3 " style={{fontSize:"13px"}}>
                <h1>© 2023 Thanks From AppleGadgets™ Ltd. | All rights reserved</h1>

            </div>

        </div>
    )
}

export default Footer