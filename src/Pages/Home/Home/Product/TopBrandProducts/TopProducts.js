import React from "react";
import "../FeaturedProducts/Product.css"
const TopBrandProducts=()=>{

    const items=[
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:"mobile phone",
            newPrice:2000,
            discount:20,

        },

        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:"mobile",
            newPrice:2000,
            discount:20,

        },
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:"mobile phone",
            newPrice:2000,
            discount:20,
          

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:"mobile phone",
            newPrice:2000,
            discount:20,
          

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU",
            productName:" phone",
            newPrice:2000,
            discount:20,
    

        },
 


    ]
    return(
        <div className="h-auto">
            <h1 className=" text-black text-center font-semibold  text-2xl pt-0 pb-5">Top Brand Products</h1>
            <div className="grid grid-cols-6 gap-2 py-4">
                {
                    items.map(item=><div class="card card-box  bg-white hover:shadow-2xl ">
                        <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{item.discount} % off</h2>
                    <figure class="px-10 pt-10">
                      <img src={item.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center text-black">
                      <h2 class="card-title text-sm ">{item.productName}</h2>
                      <div className="flex flex-row justify-between">
                        <span>{item.newPrice}tk</span>
                        <del className="ml-2">{item.discount}tk</del>
                      </div>
                      <div class=" flex flex-row-reverse justify-around font-semibold w-full" style={{fontSize:"12px"}}>
                        <button className="px-2 py-2  border border-orange-700 text-orange-500 rounded-md">Add to cart</button>
                        <button className="px-2 py-2 bg-orange-600 text-white border rounded-md ">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>

        </div>
    )
}
export default TopBrandProducts