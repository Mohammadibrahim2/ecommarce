import React, { useContext, useState } from "react";
import "./Product.css"

import { useQuery } from "@tanstack/react-query";
import SingleProduct from "./SingleProduct";
import useFeaturedCategory from "../../../../../hooks/useFeaturedCategory";
import axios from "axios";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";

const FeaturedProducts=()=>{


    
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedItems,setSelectedItems] = useState([])
  const feturedCategories=useFeaturedCategory()
 const fCategory=feturedCategories?.fcategories
  const orderedItems=[ ]
 

  console.log(orderedItems)
  const { refatch } = useQuery({
    queryKey: [''],
    queryFn: () => fetch(`https://updateecommarce-server.vercel.app/product/get-product`)
      .then(res => res.json())
      .then(data => {
        setItems(data?.products)
        setLoading(false)
        console.log(data)
      })



  })
  //filtering:
  
     
const {sub,setSub}=useContext(AuthContext)

const handlefeatcat= async(slug)=>{
   try{
    setCategory(slug)
    setLoading(true)
    const {data}=await axios.get(`https://updateecommarce-server.vercel.app/product/get-featured-products/${slug}`)
    
    
    console.log(data)
    setItems(data?.products)
  
   setLoading(false)
  
   }
   catch(err){
    console.log(err)
   }
}


    const [catgy,setCategory]=useState("new-arrival")
  
    return(
        <div className="h-auto">
            <h1 className=" text-black text-center font-semibold  text-2xl py-6">Featured Products</h1>
           <div className="flex flex-row justify-center text-black text-sm mt mb-3">
            
            {fCategory&&
            fCategory.slice(0, 3).map(fct=>
           <li className={`${fct.slug===catgy? "text-orange-500":"text-black"} list-none mr-3 font-semibold`}
           
           onClick={()=>handlefeatcat(fct?.slug)}>{fct.name.toUpperCase()}</li>)}
            </div> 


            <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 py-4">
           
                {!loading?
                    items?.map(item=>
                    <SingleProduct 
                    item={item} key={item._id}
                    setSelectedItems={setSelectedItems}
                    orderedItems={orderedItems}
                    >

                    </SingleProduct>
                      ):<h1>loading...</h1>
                }
                
            </div>

        </div>
    )
}
export default FeaturedProducts