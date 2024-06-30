import React, { useContext, useRef } from "react";
import {BsFillTelephoneFill } from 'react-icons/bs';
import {ImLocation2} from 'react-icons/im';
import {RiSendPlaneFill} from 'react-icons/ri';

// import emailjs from '@emailjs/browser';
// import { toast } from "react-hot-toast";
import OurMapLocation from "./OurMapLocation";
import ContactHeader from "./ContactHeader";
import ScrollToTop from "react-scroll-to-top";
// import { toast } from "react-toastify";

const Contact = () => {
   
    const contactInfo=[
        {
            icon:<RiSendPlaneFill/>,
            title:"ADDRESS",
            subtitle:" Powro bazar,Maijdee Noakhali"
        },
        {
            icon:<ImLocation2/>,
            title:"PHONE",
            subtitle:"+88 01632846454 "
        },
        {
            icon:<BsFillTelephoneFill/>,
            title:"EMAIL",
            subtitle:"fishnfry784@gmail.com"
        },
        {
            icon:<BsFillTelephoneFill/>,
            title:"OPENING TIME",
            subtitle:"8:00Am - 10:00Pm"
        }
    ]

    const form = useRef();
    const handleEmail=(event)=>{
    }
 
    return (
         <div className={` h-auto w-full py-5 bg-zinc-200`}>
            <ContactHeader/>
            <ScrollToTop smooth top="100" color="#FFFFFF" 
             style={{backgroundColor:"#FF5A01" ,padding:"5px",fontWeight:"700"}}>
   
            </ScrollToTop>
            <h1 className={`text-start px-8 py-5  text-2xl font-semibold text-black `}>Get In Touch</h1>
            <div className="flex lg:flex-row flex-col justify-between items-start">

        
            <form  ref={form} onSubmit={handleEmail}  className={`lg:w-2/3 w-full flex flex-col  "} lg:px-5 px-2 `}>
                <div className="w-full  flex lg:flex-row flex-col justify-between my-5 ">

                <input type="name" name="name"  className={` py-2 px-3  border bg-white text-black lg:w-1/2 w-full `} placeholder="Name*" ></input>
                    <input type="email" name="email" className={` py-2 px-3  border  bg-white  text-black lg:w-1/2 lg:mx-3 w-full my-2 lg:my-0`} placeholder="Email*" ></input>
                    <input type="subject" name="subject"  className={` py-2 px-3  border bg-white  text-black lg:w-1/2 w-full  `} placeholder="Subject*" ></input>
                </div>
                <textarea name="message" className={` p-3 bg-white text-black`} placeholder="Your message*" rows="8" cols="10" ></textarea>
                <button className={` px-8 py-2 w-[150px] my-4 font-semibold bg-orange-600 text-white `} type="submit"  >Send </button>

            </form>
            <div className={`contactInfo grid lg:grid-cols-1 gap-3 px-5 lg:mx-auto    rounded-lg `} >
                {
                   contactInfo.map(conInfo=><div className="p-2 pl-0 flex flex-col items-start justify-around text-black border-b-2 border-b-zinc-500">
                        {/* <h2 className={` font-semibold  text-start text-black `} style={{color:`#ed1d24`}}>{conInfo.icon}</h2> */}
                        <h1 className=" my-2 font-bold">{conInfo.title}</h1>
                        <h2 className={`text-zinc-700 text-sm`}>{conInfo.subtitle}</h2>
                    </div>)
                }

            </div>
            </div>
            <div className="locationMap h-[75vh] w-full py-5 mb-16" >
                <OurMapLocation/>

            </div>
        </div>
    )

}
export default Contact