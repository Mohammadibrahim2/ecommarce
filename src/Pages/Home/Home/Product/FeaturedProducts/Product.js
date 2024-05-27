import React, { useState } from "react";
import "./Product.css"

import { useQuery } from "@tanstack/react-query";
import SingleProduct from "./SingleProduct";

const FeaturedProducts=()=>{


    
  const [items, setMobileitems] = useState([])
  const [selectedItems,setSelectedItems] = useState([])
  const orderedItems=[ ]
 

  console.log(orderedItems)
  const { refatch } = useQuery({
    queryKey: [''],
    queryFn: () => fetch(`http://localhost:8000/product/get-product`)
      .then(res => res.json())
      .then(data => {
        setMobileitems(data?.products)
        console.log(data)
      })



  })
  
 


    const [catgy,setCategory]=useState("NEW ARRIVAL")
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
           <li className={`${category.title===catgy? "text-orange-500":"text-black"} list-none mr-3 font-semibold`}
            onClick={()=>setCategory(category.title)}>{category.title}</li>)}
            </div> 
            <div className="grid lg:grid-cols-6 grid-cols-2 gap-2 py-4">
           
                {
                    items?.map(item=>
                    <SingleProduct item={item} key={item._id}
                    setSelectedItems={setSelectedItems}
                    orderedItems={orderedItems}>

                    </SingleProduct>
                      )
                }
                
            </div>

        </div>
    )
}
export default FeaturedProducts