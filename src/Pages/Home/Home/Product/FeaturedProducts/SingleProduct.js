import React from "react";
import { useCart } from "../../../../../Context/CartProvider/Cart";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SingleProduct=({item,setSelectedItems, orderedItems})=>{

  console.log(item)

  const navigate=useNavigate()

  const [cart,setCart]=useCart()

    
 
    return(
        
        <div class="card card-box  bg-white hover:shadow-2xl ">
        <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{5} % off</h2>
      

      
    <figure class="px-10 pt-10" 
    onClick={()=>navigate(`/product/${item._id}`)}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU" alt="Shoes" class="rounded-xl" />
    </figure>
  
    <div class="py-7 px-2 items-center text-center text-black">
      <h2 class=" text-sm font-semibold ">{item?.name}</h2>
      <div className="flex flex-row justify-around py-3">
        <span>{item?.price}tk</span>
        <del className="ml-2">{parseInt(item?.price)+2000}tk</del>
      </div>
      <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
      {/* <h1>{item.category.name}</h1> */}
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
  </div>
    )

}
export default SingleProduct