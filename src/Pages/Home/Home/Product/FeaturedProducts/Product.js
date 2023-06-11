import React from "react";
import "./Product.css"
const FeaturedProducts=()=>{

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

    const categories=[
        {
            id:1,
            title:"NEW ARRIVAL"
        },
        {
            id:2,
            title:"BEST DEALS"
        },
        {
            id:3,
            title:"BEST SELLERS"
        },
    ]
    return(
        <div className="h-auto">
            <h1 className=" text-black text-center font-semibold  text-2xl py-6">Featured Products</h1>
           <div className="flex flex-row justify-center text-black text-sm mt mb-3">{categories.map(category=>
           <li className="list-none mr-3 font-semibold">{category.title}</li>)}
            </div> 
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-2 py-4">
                {
                    items.map(item=><div class="card card-box  bg-white hover:shadow-2xl ">
                        <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{item.discount} % off</h2>
                    <figure class="px-10 pt-10">
                      <img src={item.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="py-7 px-2 items-center text-center text-black">
                      <h2 class=" text-sm font-semibold ">{item.productName}</h2>
                      <div className="flex flex-row justify-around py-3">
                        <span>{item.newPrice}tk</span>
                        <del className="ml-2">{item.discount}tk</del>
                      </div>
                      <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
                        <button className="px-3  border border-orange-700 text-orange-500 rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Add to cart</button>
                        <button className="px-2 py bg-orange-600 text-white border rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>

        </div>
    )
}
export default FeaturedProducts