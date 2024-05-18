import React, { useState } from "react";

import {RiLoginBoxFill} from "react-icons/ri"
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
 const PostSingleProduct=()=>{
    const [data,setData]=useState( )
    const {register,formState: { errors }, handleSubmit}=useForm()
   //onSubmit={handleSubmit(handleSinup)}

 const handleProduct=(alldata)=>{
    console.log(alldata)
    const photo=alldata.photo[0]
    console.log(alldata.photo[0])

    const formData=new FormData()
    formData.append("image",photo)
    const url="https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
    fetch(url,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(img=>{
        if(img.success){
           
           let  productImg=img.data.url
           alldata.photo= productImg
            console.log(alldata)
            fetch('http://localhost:5000/product', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(alldata)
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
    
            }});
        
 }
    
 const items=[
    {
        id:1,
        link:"offers",
        title:"Combo",
      
    },
    {
        id:1,
        link:"offers",
        title:"Media And Streamers",
      
    },
    {
        id:2,
        title:"Smart Electronis",
        link:"Smart Electronis",
      
    },
    {
        id:3,
        link:"account",
        title:"Peripharals",
    },
    {
        id:4,
        link:"account",
        title:"Cover and glass",
       
    },
    {
        id:1,
        link:"offers",
        title:"Fitness And Wareable",
      
    },
    {
        id:2,
        title:"Sound Equipment",
        link:"Sound Equipment",
      
    },
    {
        id:3,
        link:"account",
        title:"Laptop  and Desktop",
    },
    {
        id:4,
        link:"account",
        title:"Phones and Tablets",
       
    },

]
    return(
        <div>
         <div>
         <h1 className="text-black font-semibold text-center py-3 text-lg"> Add Single Product</h1>
         <form onSubmit={handleSubmit(handleProduct)}  className="p-10 ">
                           
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold "style={{fontSize:"16px"}}>Product Name <span > *</span></span>
                                </label>
                                <input type="text" {...register("productName",{required:"text is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                            </div>

    

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-semibold">Product Photo <span > *</span></span>
                                </label>
                                <input type="file" {...register("photo",{required:"file is requred" })} className="block w-full text-sm text-slate-600
                                 file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                               file:text-sm file:font-semibold
                             file:bg-orange-500 file:text-white
                             hover:file:bg-black
                             hover:file:text-orange-500
                            border border-orange-500
                            rounded-full border-black py-2 px-3 bg-white text-black border"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold "style={{fontSize:"16px"}}>Product Price <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                                <input type="text" {...register("price",{required:"text is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-semibold" style={{fontSize:"16px"}}>Brand <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                                <input type="text" {...register("brand",{required:"text is requred" })} className="border-black py-2 px-3 bg-white text-black border"/>
                               
                            </div>
                            <label className="label">
                                    <span className="label-text  text-black font-semibold "style={{fontSize:"16px"}}>Category  <span style={{color:"#ed1d24"}}> *</span></span>
                                </label>
                            <select name="category"className="py-2 px-3  border-black w-full bg-white text-black border my-3">
                           
                           {
                            items.map(item=><option className="font-semibold" >{item.title}</option>)
                           }
                           
                          
                              
                            </select>
                          
                            <div className="form-control mt-6">
                                <button className="px-3 py-2 text-white font-semibold bg-orange-500" >Save </button>
                              
                            </div>
                            {/* <div className="text-black font-semibold">Already have an account ?
                             <Link className="font-semibold text-orange-500" >Please Login</Link></div> */}
                            
                        </form>
    </div>
          





           
        </div>
    )
 }
 export default PostSingleProduct