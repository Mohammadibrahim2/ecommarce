import React from "react";

import "./FeaturedCategories.css"
const FeatruedCategories=()=>{

    const categories=[
        {
            name:"Chicken",
            img:"https://images.gmanews.tv/webpics/2015/08/chicken_rooster_hen_2015_08_12_19_26_29.jpg"
        },
        {
            name:"Mastrurd Oil",
            img:"https://wimpoleclinic.com/wp-content/uploads/jars-of-mustard-oil-360x204.jpg"
        },
        {
            name:"Curd",
            img:"https://www.ruchiskitchen.com/wp-content/uploads/2014/06/How-to-set-curd-in-winters-13.jpg.webp"
        },
        {
            name:"Milk",
            img:"https://cdn.standardmedia.co.ke/images/wysiwyg/images/ImpKuoQMVrpKG5eHzmh8znNYEROIpHQ9zZNnscB4.jpg"
        },
        {
            name:"Mastrurd Oil",
            img:"https://wimpoleclinic.com/wp-content/uploads/jars-of-mustard-oil-360x204.jpg"
        },
        {
            name:"Goat Meat ",
            img:"https://i.pinimg.com/736x/44/dc/99/44dc99df7772f9badd3dc3f97e742bad.jpg"
        },
        {
            name:"Fish",
            img:"https://t3.ftcdn.net/jpg/05/35/16/38/360_F_535163877_2hQD29bhkzCvpNvuDKyY3TjGYOBy95yT.jpg"
        },
        {
            name:"Duck",
            img:"https://i0.wp.com/www.flatheadaudubon.org/wp-content/uploads/2020/10/ducks-mallard-water-bird-duck-bird-162316-1024x587.jpeg?resize=980%2C562&ssl=1"
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
                            <img src={category.img} className="lg:w-[100px] w-[100px] h-[100px] mx-auto icon-overlay object-fill"></img>
                            <h1  className="text-xs text-black font-semibold py-2 text-center">{category.name}</h1>
                        </div>)
                    }
           
            </div>


        </div>
    )
}
export default FeatruedCategories