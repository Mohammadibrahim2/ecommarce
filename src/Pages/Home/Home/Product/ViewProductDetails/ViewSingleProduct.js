import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const  ViewSingleProduct=()=>{
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
        const {data}=await axios(`http://localhost:5000/product/get-product/${params.id}`)
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
         const {data}=await axios(`http://localhost:5000/product/related-products/${pid}/${cid}`)
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
        <h2 className="upper bg-orange-600 text-white px-2 text-xs rounded-md">{5} % off</h2>
      

      
    <figure class="px-10 pt-10" 
     onClick={()=>navigate(`/product/${p?._id}`)}
  >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoomJVQjRATG9zppvwYv2wtIxuo7H2gDYAlQ&usqp=CAU" alt="Shoes" class="rounded-xl" />
    </figure>
  
    <div class="py-7 px-2 items-center text-center text-black">
      <h2 class=" text-sm font-semibold ">{p?.name}</h2>
      <div className="flex flex-row justify-around py-3">
        <span>{p?.price}tk</span>
        <del className="ml-2">{parseInt(p?.price)+2000}tk</del>
      </div>
      <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
    
      <label className="px-3  border border-orange-700 text-orange-500 rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}} 

onClick={()=>{
        // setCart([...cart,item])
        // localStorage.setItem('cart',JSON.stringify([...cart,item]))
        // toast.success("your product is adding ")
       }}>Add to cart</label>
       
        <button   
        className="px-2 py bg-orange-600 text-white border rounded-md" 
        style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</button>
      </div>
    </div>
  </div></>)
                 }
              
        </div>

    </div>)
}
export default ViewSingleProduct