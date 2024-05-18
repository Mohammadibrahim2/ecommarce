import React from "react";
import { toast } from "react-hot-toast";
import { useCart } from "../../../../../Context/CartProvider/Cart";


const ProductDetails=({product})=>{
  const [cart,setCart]=useCart()
    return(
        < div className=" w-full">
        <div class="bg-white flex lg:flex-row justify-center w-full ">
       

      
    <figure class=" h-[300px]" >
    <h2 className="w-[70px] bg-orange-600 text-white px-2  text-md  rounded-md ">{5} % off</h2>
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU" alt="Shoes"
       className="h-full rounded-xl" />
    </figure>

  
    <div class="py-7 px-2 text-black lg:w-2/3">
      <h2 className=" text-2xl font-semibold py-2 text-uppercase ">{product?.name}</h2>
      <div className="flex flex-row  items-start  w-full">
      <h1 className="px-2 py-2 bg-zinc-100 font-semibold">Cash Discount Price:
       <del className="text-zinc-400 mx-3">50</del> <span className="font-bold">{product?.price} kr</span></h1>

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
         
        </div>
    )
}
export default ProductDetails