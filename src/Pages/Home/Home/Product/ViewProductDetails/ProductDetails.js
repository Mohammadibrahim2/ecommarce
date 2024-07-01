import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useCart } from "../../../../../Context/CartProvider/Cart";
import { useNavigate } from "react-router-dom";
import CreateReview from "../../ReviewSection/CreateReview";
import AllReviews from "../../ReviewSection/AllReviews/AllReviewsByAProduct";




const ProductDetails=({product})=>{
  const [cart,setCart]=useCart()
  const[upQuantity,setUpQuantity]=useState(1000)
  const navigate=useNavigate()
  
  const handleDecrement = async (quantity) => {
   
      setUpQuantity(quantity - (quantity > 1000 ? 1000 : 0))     
               
}
    
const handleIncrement = async (quantity) => {
    
      setUpQuantity(quantity + (quantity < 15000 ? 1000 : 0))
            

}
    return(
        < div className=" w-full  ">
        <div class="bg-white flex lg:flex-row  flex-col justify-center w-full ">
       

      
        <figure class="px-10 pt-10" 
    onClick={()=>navigate(`/product/${product?._id}`)}>
       <img src={`https://updateecommarce-server.vercel.app/product/product-photo/${product?._id}`} alt="Shoes" className="
       lg:w-[350px] w-full  h-full" />
    </figure>
  
    <div class="py-7 px-2 text-black lg:w-2/3">
      <h2 className=" text-2xl font-semibold py-2 text-uppercase ">{product?.name}</h2>
      <div className="flex flex-row  items-start  w-full">
      <h1 className="px-2 py-2 bg-zinc-100 font-semibold"> Price:
     <span className="font-bold">{product?.price} tk</span></h1>

      <h1 className="px-2 py-2 bg-zinc-100 mx-3">Status:<span className="font-bold">  InStock</span></h1>
      
      <h1 className="px-2 py-2 bg-zinc-100 mx-3">Quantity:<span className="font-bold"> {product?.quantity/1000}Kg</span></h1>
      
      <h1 className="px-2 py-2 bg-zinc-100 mx-3">Brand: <span className="font-bold">{product?.brand}</span></h1>

      </div>
      
     
      <div class="mt-5  font-semibold w-full" >
        <div className="flex flex-row ">

        <div className="in-dec">
          <button className="px-3 py-2 border border-orange-500 font-boold text-xl"
          onClick={()=>handleDecrement(product?.quantity)}> -</button>
          <button className="px-3 py-2 border border-orange-500 font-bold text-xl text-orange-500"> {upQuantity/1000}</button>
          <button className="px-3 py-2 border border-orange-500 font-bold text-xl"
           onClick={()=>handleIncrement(product?.quantity)}> +</button>
        </div>
    
        <label className="px-3 py-2 bg-orange-500 text-white border rounded-md ml-2 "
      

      onClick={()=>{
              setCart([...cart,product])
              localStorage.setItem('cart',JSON.stringify([...cart,product]))
              toast.success("your product is adding ")
             }}>Add to cart</label>
      
      </div>
                
      </div>
    </div>



  </div>
         <div>
          <CreateReview product={product}/>
         </div>
         <div className="w-full">
          <AllReviews product={product}/>
         </div>
        </div>
    )
}
export default ProductDetails