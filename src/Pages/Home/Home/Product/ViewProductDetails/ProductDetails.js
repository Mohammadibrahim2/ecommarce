import React from "react";
import { toast } from "react-hot-toast";
import { useCart } from "../../../../../Context/CartProvider/Cart";
import { useNavigate } from "react-router-dom";
import CreateReview from "../../ReviewSection/CreateReview";



const ProductDetails=({product})=>{
  const [cart,setCart]=useCart()
  const navigate=useNavigate()
    return(
        < div className=" w-full">
        <div class="bg-white flex lg:flex-row justify-center w-full ">
       

      
        <figure class="px-10 pt-10" 
    onClick={()=>navigate(`/product/${product?._id}`)}>
       <img src={`http://localhost:8000/product/product-photo/${product?._id}`} alt="Shoes" className="w-full h-full" />
    </figure>
  
    <div class="py-7 px-2 text-black lg:w-2/3">
      <h2 className=" text-2xl font-semibold py-2 text-uppercase ">{product?.name}</h2>
      <div className="flex flex-row  items-start  w-full">
      <h1 className="px-2 py-2 bg-zinc-100 font-semibold">Cash Discount Price:
       <del className="text-zinc-400 mx-3">50</del> <span className="font-bold">{product?.price} tk</span></h1>

      <h1 className="px-2 py-2 bg-zinc-100 mx-3">Status:<span className="font-bold">  IsStock</span></h1>
      <h1 className="px-2 py-2 bg-zinc-100">Product Code:<span className="font-bold"> pro-20</span></h1>
      <h1 className="px-2 py-2 bg-zinc-100 mx-3">Brand: <span className="font-bold">{product?.brand}</span></h1>

      </div>
      
     
      <div class="mt-5  font-semibold w-full" >
        <div className="flex flex-row ">

        <div className="in-dec">
          <button className="px-3 py-2 border border-orange-500 font-boold text-xl"> -</button>
          <button className="px-3 py-2 border border-orange-500 font-bold text-xl text-orange-500"> 1</button>
          <button className="px-3 py-2 border border-orange-500 font-bold text-xl"> +</button>
        </div>
    
        <button   
        className="px-3 py-2  border border border-orange-700 text-orange-500 rounded-md mx-4 " 
       >Buy Now</button>
        <label className="px-3 py-2 bg-orange-600 text-white border rounded-md "
      

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
          <CreateReview/>
         </div>
        </div>
    )
}
export default ProductDetails