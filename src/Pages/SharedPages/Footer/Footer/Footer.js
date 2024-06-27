import React from "react";
import {IoLocationSharp ,IoCall} from "react-icons/io5";
import facebook from "../../../../assetes/facebook.jpg"
import instagram from "../../../../assetes/instagram.png"
import youtube from "../../../../assetes/youtube.jpg"
import linkdin from "../../../../assetes/linkdin.png"
import "./Footer.css"
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

    const socialIcons=[
        {
            id:1,
            img:facebook,
            url:""
        },
        {
            id:2,
            img:instagram
        },
        {
            id:3,
            img:youtube
        },
        {
            id:4,
            img:linkdin
        },

    ]
    return(
        <div className="bg-zinc-900 text-white ">
            <div className="flex lg:flex-row flex-col justify-around items-center py-20">
                <div>
                    
                    <h1 className="text-orange-600 font-semibold  py-2 text-md mt-4 text-center">SUPPORT</h1>
                    <div className="">
                       
                        <div className=" flex flex-row justify-start items-center  px-4 py-2  my-3">
                        <span className="pr-4 text-xl"><IoCall/></span>|
                        <div className="pl-2">
                            <h1>01632846454</h1>

                        <h1 >01846579945</h1>

                        </div>
                       
                     
                        </div>
                        <div className=" flex flex-row justify-center items-center  px-4 py-2  my-3">
                        <span className="pr-4 text-xl"><IoLocationSharp/></span>|
                        <div className="pl-2">
                            <h2 style={{fontSize:"13px"}}>Location</h2>

                        <h1 >Powro Bazar,Maijdee,Noakhali</h1>

                        </div>
                       
                     
                        </div>
                    </div>
                    <div className="social-icons w-full flex flex-row justify-center ">
                        {
                            socialIcons.map(icon=>
                                <img src={icon.img} className="w-[30px] bg-white mx-3 rounded-sm social-icons"></img>)
                        }
                    </div>
                </div>
                <div className="my-2 lg:my-0">
                    <h1 className="text-orange-600 text-center lg:text-start ">About Us</h1>
                    <li className="list-none flex flex-col items-center lg:items-start">{list.map(li=>
                        <a>{li.name}</a>)}</li>
                </div>

                <div className="my-2 lg:my-0">
                <h1 className="text-orange-600 lg:text-start text-center">Help</h1>

                <li className="list-none flex flex-col  items-center lg:items-start">{list.map(li=>
                        <a>{li.name}</a>)}</li>

                </div>

                <div className="my-2 lg:my-0">
                <h1 className="text-orange-600 text-center lg:text-start">Stay Connected</h1>

                <li className="list-none flex flex-col items-center lg:items-start">{list.map(li=>
                        <a>{li.name}</a>)}</li>
                


                

                </div>



            </div>
            <div className="bg-black text-white text-center py-3 " style={{fontSize:"13px"}}>
                <h1>© 2024 Thanks From Ecommarce Ltd. | All rights reserved</h1>

            </div>

        </div>
    )
}

export default Footer