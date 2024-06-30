import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import toast from "react-hot-toast";
import { useCart } from "../../../../../Context/CartProvider/Cart";

const  ViewSingleProduct=()=>{

  const [cart, setCart] = useCart()
    const params=useParams()
    const navigate=useNavigate()
    console.log(params)
    const [product,setProduct]=useState({})
    const [products,setProducts]=useState([])
    console.log(products)
    
    useEffect(()=>{
        if(params?.id) getProduct()
    },[params.id])

    const getProduct= async()=>{
       try{
        const {data}=await axios(`http://localhost:8000/product/get-singleproduct/${params.id}`)
        setProduct(data?.product)
        getSimilarProduct(data?.product?._id, data?.product?.category?._id)
       }
       catch(error){
        console.log(error)
       }
    }
    //get similar product
    const getSimilarProduct= async(pid,cid)=>{
        try{
         const {data}=await axios(`http://localhost:8000/product/related-products/${pid}/${cid}`)
         setProducts(data?.products)
        }
        catch(error){
         console.log(error)
        }
     }
    return(<div>
       <div className="mt-8">

        <ProductDetails product={product}></ProductDetails>
        </div>
       
        {/* //similar products */}

        <h1 className="text-2xl font-semibold text-center my-8"> Related Products</h1>
        <div className="grid lg:grid-cols-4">
           
        
             {
                 products.map(p=><>
                  <div class="card card-box  bg-white hover:shadow-2xl ">
        <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">Best Deals</h2>
      

      
        <figure class="px-10 pt-10" 
    onClick={()=>navigate(`/product/${p?._id}`)}>
       <img src={`http://localhost:8000/product/product-photo/${p?._id}`} alt="Shoes" className="w-full h-full" />
    </figure>
  
    <div class="py-7 px-2 items-center text-center text-black">
      <h2 class=" text-sm font-semibold ">{p?.name}</h2>
      <div className="flex flex-col justify-center items-center py-3">
        <span> Price:{p?.price}tk</span>
        <span
        className="my-2">Weight:{p?.quantity}Kg</span>
      
      </div>
      <div class=" flex flex-row-reverse justify-center font-semibold w-full" >
    
      <label className="px-3  border border-orange-700 text-orange-500 rounded-md ml-3" 
      style={{fontSize:"13px",paddingTop:"4px",paddingBottom:"4px"}} 

onClick={()=>{
        setCart([...cart,p])
        localStorage.setItem('cart',JSON.stringify([...cart,p]))
        toast.success("your product is adding ")
       }}>Add to cart</label>
       
        <button   
       onClick={()=>navigate(`/product/${p?._id}`)}
        className="px-2 py bg-orange-600 text-white border rounded-md" 
        style={{fontSize:"14px",paddingTop:"4px",paddingBottom:"4px"}}>VeiwDetails</button>
      </div>
    </div>
  </div></>)
                 }
              
        </div>

    </div>)
}
export default ViewSingleProduct