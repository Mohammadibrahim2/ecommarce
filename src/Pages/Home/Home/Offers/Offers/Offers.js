import React from "react";
import SingleOffer from "./SingleOffers";

const Offers = () => {

    const offers=[
        {
            id:1,
            img:"https://adminapi.applegadgetsbd.com/storage/media/large/iPhone---iPhone-14-Pro-Max-3211.png"
        },
        {
            id:2,
            img:"https://adminapi.applegadgetsbd.com/storage/media/large/MacBook---MacBook-Air-M1-4526.png"
        },
        {
            id:3,
            img:"https://adminapi.applegadgetsbd.com/storage/media/large/iPad---iPad-9th-Gen-3139.png"
        },
        {
            id:4,
            img:"https://adminapi.applegadgetsbd.com/storage/media/large/iPhone---iPhone-14-Pro-Max-3211.png"
        },
        {
            id:5,
            img:"https://adminapi.applegadgetsbd.com/storage/media/large/MacBook---MacBook-Air-M1-4526.png"
        },
        {
            id:6,
            img:"https://adminapi.applegadgetsbd.com/storage/media/large/iPad---iPad-9th-Gen-3139.png"
        },

    ]
    const buttons=[
        {
            name:"Prev"
        },
        {
            name:"1",
            bg:"bg-orange-500",
            text:"text-white"
        },
        {
            name:"2"
        },
        {
            name:"Next"
        },
    ]
    
    return (
        <div className="pt-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-10 gap-4 px-5 mt-12">
                {
                    offers.map(offer=><SingleOffer offer={offer}/>)
                }
            </div>
            <div className="flex flex-row justify-between py-2 px-2 lg:px-3 bg-zinc-200 my-6 rounded-lg text-black">
                <div>
                    {
                        buttons.map(btn=><button className={`${btn.bg} px-2 lg:px-3  lg:ml-3 ${btn.text} text-sm lg:text-md font-semibold rounded-sm`}>{btn.name}</button>)
                    }
                </div>
                <div><h1 className="text-black text-xs">Showing 1 to 12 of 24 (2 Pages)</h1></div>
            </div>
           
        </div>
    )
}
export default Offers