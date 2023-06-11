import React from "react";
import SingleCart from "./SingleCart";

const Cart=()=>{

    const products=[
        {
            id:1,
            name:"Xiaomi 13 Ultra",
            brand:"Xiaomi",
            category:"Olive Green, 12/256GB",
            price:"12500",
            img:"https://adminapi.applegadgetsbd.com/storage/media/thumb/4920-16716.jpg"

        },
        {
            id:2,
            name:"Xiaomi 13 Ultra",
            brand:"Xiaomi",
            category:"Olive Green, 12/256GB",
            price:"12500",
            img:"https://adminapi.applegadgetsbd.com/storage/media/thumb/OnePlus-Pad-Green-a-5065.jpg"


        },
        {
            id:3,
            name:"Xiaomi 13 Ultra",
            brand:"Xiaomi",
            category:"Olive Green, 12/256GB",
            price:"12500",
            img:"https://adminapi.applegadgetsbd.com/storage/media/thumb/Pixel-7a-1-1762.jpg"

        },
        {
            id:4,
            name:"Xiaomi 13 Ultra",
            brand:"Xiaomi",
            category:"Olive Green, 12/256GB",
            price:"12500",
            img:"https://adminapi.applegadgetsbd.com/storage/media/thumb/xiaomi-13-ultra-Olive-Green-Up-3118.jpg"

        },
        {
            id:4,
            name:"Xiaomi 13 Ultra",
            brand:"Xiaomi",
            category:"Olive Green, 12/256GB",
            price:"12500",
            img:"https://adminapi.applegadgetsbd.com/storage/media/thumb/xiaomi-13-ultra-Olive-Green-Up-3118.jpg"

        },
    ]
    return(
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-3 mt-5 pt-16 ">
        
            <div className="items w-full col-span-2 border border-1 rounded-md">
                <div className="bg-zinc-100">
                <h1 className="text-black ml-2 py-2 font-semibold ">PRODUCTS</h1>


                </div>
               
                {
                    products.map(product=><SingleCart product={product}/>)
                }
            </div>
            <div className="border border-1 rounded-md  h-[260px] mb-4 ">
                <div className="text-center mt-3">
                <h1 className="text-black">Your Cart (5)</h1>
                <h6 style={{fontSize:"11px"}}>Start adding items to your cart</h6>

                </div>
                <div className="" >
                    <h1 className="text-sm text-black ml-2 py-3">PRICE DETAILS</h1>
                    <div className="flex flex-row justify-between border-t-2 border-t-zinc-800 px-2 py-2 text-black">
                        <h1>Price</h1><h1>BDT 458000</h1>
                    </div>
                    <div className="flex flex-row justify-between  border-b-2 px-2 pb-2 text-black font-semibold"style={{fontSize:"13px"}} >
                        <h1>Delivery Charges</h1><span>(will be added)</span></div>
                        <div className="flex flex-row justify-between px-2 text-black"> 
                            <h1>Total Amount</h1><span>BDT 458000</span>
                        </div>
                </div>
                <div className="text-center py-3"> 
                 <button className="py-2 px-14 bg-orange-500 rounded-md text-white font-semibold shadow-lg"style={{fontSize:"12px"}} >CHECK OUT</button>

                </div>
              
              

            </div>
        </div>
    )
}
export default Cart