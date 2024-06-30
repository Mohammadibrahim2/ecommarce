import React from "react";
import { ImTruck} from 'react-icons/im';
import {FaMoneyCheck} from 'react-icons/fa';
import {TfiHeadphoneAlt} from 'react-icons/tfi';
import {RiSecurePaymentFill} from 'react-icons/ri';
import ScrollToTop from "react-scroll-to-top";
const Service = () => {

    const items = [
        {
            id: 1,
            icon: <ImTruck/>,
            text: "FREE DELIVERY",
            subtext: "When ordering from $500."
        },
        {
            id: 2,
            icon: <FaMoneyCheck/>,
            text: "90 DAYS RETURN",
            subtext: "If goods have problems"
        },
      

        {
            id: 4,
            icon: <RiSecurePaymentFill/>,
            text: "SECURE PAYMENT",
            subtext: "100% secure payment"
        },
        {
            id: 3,
            icon: <TfiHeadphoneAlt />,
            text: "24/7 SUPPORT",
            subtext: "Dedicated support"
        },
    ]
    return (

        <div className="bg-white text-black lg:h-[20vh] h-auto w-[95%] mx-auto rounded-lg flex lg:flex-row  flex-col justify-between px-5 lg:my-8 ">
{
    items.map(item=>
   
        <div className="flex flex-row items-center w-full h-full lg:justify-center justify-center lg:py-0 py-4 ">
        <span className=" text-4xl text-orange-600" >{item.icon}</span>
        <div className="flex flex-col items-start ml-3" style={{fontSize:"13px"}}>
            <h2 className="font-semibold">{item.text}</h2>
            <h2>{item.subtext}</h2>
            </div>
       
       
</div>)
}

        </div>
    )
}
export default Service