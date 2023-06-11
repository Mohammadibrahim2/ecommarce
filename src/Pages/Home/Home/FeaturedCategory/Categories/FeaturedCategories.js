import React from "react";
import PhonesTablets from "../../../../../assetes/featured-categories/Phones-tablets.png"
import PowerAdapter from "../../../../../assetes/featured-categories/power-adapter.png"
import Macbook from "../../../../../assetes/featured-categories/Macbook.png"
import SmartWatch from "../../../../../assetes/featured-categories/Smart-watch.png"
import Airpods from "../../../../../assetes/featured-categories/airpods.png"
import OverheadHeadphones from "../../../../../assetes/featured-categories/Overhead-headphone.png"
import Speakers from "../../../../../assetes/featured-categories/Speaker.png"
import wiredHeadphones from "../../../../../assetes/featured-categories/Wired-headphone.png"
import wirelessHeadphone  from "../../../../../assetes/featured-categories/Wireless-headphone.png"
import cableInterconnects from "../../../../../assetes/featured-categories/Cable-interconnects.png"
import PowerBank from "../../../../../assetes/featured-categories/power-bank.png"
import wirelessCharger from "../../../../../assetes/featured-categories/Wireless-charger.png"
import HubsDucks from "../../../../../assetes/featured-categories/Hubs-dock.png"
import Keyboard from "../../../../../assetes/featured-categories/keyboard.png"
import CoverGlass from "../../../../../assetes/featured-categories/Cover-glass.png"
import DroneCamera from "../../../../../assetes/featured-categories/Drone-camera.png"
import "./FeaturedCategories.css"
const FeatruedCategories=()=>{

    const categories=[
        {
            name:"Phones & Tablets",
            img:PhonesTablets
        },
        {
            name:"Power Adapter",
            img:PowerAdapter
        },
        {
            name:"Macbook",
            img:Macbook
        },
        {
            name:"Smart Watch",
            img:SmartWatch
        },
        {
            name:"Airpods",
            img:Airpods
        },
        {
            name:"Overhead Headphones ",
            img:OverheadHeadphones 
        },
        {
            name:"Speakers",
            img:Speakers
        },
        {
            name:"wired Headphones",
            img:wiredHeadphones
        },
        {
            name:"Wireless Headphone ",
            img:wirelessHeadphone 
        },
        {
            name:"Cable & Interconnects ",
            img:cableInterconnects 
        },
        {
            name:"Power Bank",
            img:PowerBank
        },
        {
            name:"Wireless Charger",
            img:wirelessCharger
        },
        {
            name:"Hubs & Ducks",
            img:HubsDucks
        },
        {
            name:"Keyboard",
            img:Keyboard
        },
        {
            name:"Cover & Glass",
            img: CoverGlass
        },
        {
            name:"Drone & Camera Accessories",
            img:DroneCamera
        },
    ]
    return(
        <div className="mt-6">
            <div className=" text-center text-black font-semibold">
                <h1 className="text-xl">FEATURED CATEGORIES</h1>
                <h3 className="text-xs">Get your desired product from featured category</h3>
                </div>
                <div className="grid lg:grid-cols-8 grid-cols-4 gap-3 my-6">
                    {
                        categories.map(category=><div className="lg:py-5 py-2 px-2 bg-zinc-100 rounded-lg">
                            <img src={category.img} className="lg:w-[60px] w-[40px] mx-auto icon-overlay"></img>
                            <h1  className="text-xs text-black font-semibold py-2 text-center">{category.name}</h1>
                        </div>)
                    }
           
            </div>


        </div>
    )
}
export default FeatruedCategories