import React, { useEffect, useState } from "react";
import "../FeaturedProducts/Product.css"
import toast from "react-hot-toast";
import { useCart } from "../../../../../Context/CartProvider/Cart";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const TopBrandProducts = () => {
  const [cart, setCart] = useCart()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [fCat,  setFcat] = useState([])



  //geting featured category:
  const getFeaturedCategories = async () => {
    try {

      const { data } = await axios.get('http://localhost:8000/featured-catagory/get-fetured-categories')
       setFcat(data?.fcategories?.slice(3,4))

    }
    catch (error) {
      console.log(error)

    }
  }


  const navigate=useNavigate()
  console.log(fCat[0]?.slug)

  useEffect(() => {
    getFeaturedCategories();
  }, [])
  //geting product top brand:-
  useEffect(() => {
    
   if(fCat?.length)  getTopProducts()

  }, [fCat?.length])
  const getTopProducts = async () => {
   
    try{
      const { data } = await axios.get(`http://localhost:8000/product/get-featured-products/${fCat[0]?.slug}`)
    setItems(data?.products)
    setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="h-auto">

      <div className="flex flex-row justify-center text-black text-sm mt mb-3">

        {fCat&&
           fCat?.map(fct =>
            <h1 className="text-black text-center font-semibold  text-2xl pt-0 pb-5"
            >{fct.name.toUpperCase()}</h1>)}
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-2 py-4">
        {!loading ?
          items.map(item => <div class="card card-box  bg-white hover:shadow-2xl ">
            <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{item?.price} % OFF</h2>
            <figure class="px-10 pt-10"
             onClick={()=>navigate(`/product/${item._id}`)}>
              <img src={`http://localhost:8000/product/product-photo/${item?._id}`} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="py-7 px-2 items-center text-center text-black">
              <h2 class=" text-sm font-semibold ">{item?.name}</h2>
              <div className="flex flex-row justify-around py-3">
                <span>{item?.price}tk</span>
                <del className="ml-2">{item.price}tk</del>
              </div>
              <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
                <button className="px-3  border border-orange-700 text-orange-500 rounded-md"
                 style={{ fontSize: "14px", paddingTop: "4px", paddingBottom: "4px" }}
                  onClick={() => {
                    setCart([...cart, item])
                    localStorage.setItem('cart', JSON.stringify([...cart, item]))
                    toast.success("your product is adding ")
                  }}>Add to cart</button>
                <button className="px-2 bg-orange-600 text-white border rounded-md" 
                 onClick={()=>navigate(`/product/${item._id}`)}
                style={{ fontSize: "14px", paddingTop: "4px", paddingBottom: "4px" }}>VeiwDetails</button>
              </div>
            </div>
          </div>) : <h1> loading...</h1>
        }
      </div>

    </div>
  )
}
export default TopBrandProducts