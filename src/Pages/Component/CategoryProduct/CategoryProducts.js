import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

import axios from "axios";
import { useCart } from "../../../Context/CartProvider/Cart";
import { toast } from "react-hot-toast";

 const CategoryProducts=()=>{
    const params=useParams()
    const [products,setProducts]=useState([])
    const [catagories,setCategories]=useState([])
    const [cart,setCart]=useCart()
   
    useEffect(()=>{
if(params?.slug) getProductsByCat()

    },[params?.slug])

    const getProductsByCat= async()=>{
        try{
            const {data}=await axios.get(`https://updateecommarce-server.vercel.app/product/product-category/${params.slug}`)
            setProducts(data.products)
            setCategories(data.category)
        }
        catch(error){
            console.log(error)
        }
    }
   
    return(
        <div>
            <div className="my-8 text-center">
            <h1 className="text-2xl">Category -{catagories.name}</h1>
            <h3 className="text-orange-500 font-semibold text-md">{products.length} results found</h3>
                

            </div> 
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-2 py-4">
                {
                    products.map(item=><div class="card card-box  bg-white hover:shadow-2xl " key={products._id}>
                    <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{5} % off</h2>
                <figure class="px-10 pt-10">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="py-7 px-2 items-center text-center text-black">
                  <h2 class=" text-sm font-semibold ">{item?.name}</h2>
                  <div className="flex flex-row justify-around py-3">
                    <span>{item?.price}tk</span>
                    <del className="ml-2">{parseInt(item?.price)+2000}tk</del>
                  </div>
                  <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
            
                  <label className="px-3  border border-orange-700 text-orange-500 rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}} 
                   onClick={()=>{
                    setCart([...cart,item])
                    localStorage.setItem('cart',JSON.stringify([...cart,item]))
                    toast.success("your product is adding ")
                   }}>Add to cart</label>
                   
                    <button   
                    className="px-2 py bg-orange-600 text-white border rounded-md" 
                    style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</button>
                  </div>
                </div>
              </div>)
                }
            </div>

          

        </div>
    )
 }

 export default   CategoryProducts;