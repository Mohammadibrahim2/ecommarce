import React from "react";
import { useCart } from "../../../../../Context/CartProvider/Cart";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SingleProduct=({item,setSelectedItems, orderedItems})=>{



  const navigate=useNavigate()

  const [cart,setCart]=useCart()

    
 
    return(
        
        <div class="card card-box  bg-white hover:shadow-2xl ">
        <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">Fresh</h2>
      

      
    <figure class="px-10 pt-10" 
    onClick={()=>navigate(`/product/${item._id}`)}>
       <img src={`http://localhost:8000/product/product-photo/${item?._id}`} alt="Shoes" className="w-full h-full" />
    </figure>
  
    <div class="py-7 px-2 items-center text-center text-black">
      <h2 class=" text-sm font-semibold ">{item?.name}</h2>
      <div className="flex flex-row justify-around py-3">
        <span>{item?.price}tk</span>
        <span className="ml-2">{parseInt(item?.quantity/1000)}kg</span>
      </div>
      {/* <h1>{item?.category?.name}</h1> */}
      <div class="font-semibold w-full" >
     
      <label className="px-3  py bg-orange-600 text-white border rounded-md     " 
      style={{fontSize:"12px",paddingTop:"4px",paddingBottom:"4px"}} 

onClick={()=>{
        setCart([...cart,item])
        localStorage.setItem('cart',JSON.stringify([...cart,item]))
        toast.success("your product is adding ")
       }}>Add to cart</label>
       
        <button   onClick={()=>navigate(`/product/${item._id}`)}
        className="px-2 border border-orange-700 text-orange-500 rounded-md" 
        style={{fontSize:"12px",paddingTop:"4px",paddingBottom:"4px"}}>View details</button>
      </div>
    </div>
  </div>
    )

}
export default SingleProduct