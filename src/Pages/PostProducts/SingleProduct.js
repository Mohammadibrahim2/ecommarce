import React, { useContext, useEffect, useState } from "react";

import {RiLoginBoxFill} from "react-icons/ri"
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Option } from "antd/es/mentions";
import { Select } from "antd";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
 const PostSingleProduct=()=>{
    const {user,setUser}=useContext(AuthContext)
    const [data,setData]=useState( )
    // const {register,formState: { errors }, handleSubmit}=useForm()
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [brand, setBrand] = useState('')
    const [photo, setPhoto] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
   //onSubmit={handleSubmit(handleSinup)}

//  const handleProduct=(alldata)=>{
//     console.log(alldata)
//     const photo=alldata.photo[0]
//     console.log(alldata.photo[0])

//     const formData=new FormData()
//     formData.append("image",photo)
//     const url="https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
//     fetch(url,{
//         method:"POST",
//         body:formData
//     })
//     .then(res=>res.json())
//     .then(img=>{
//         if(img.success){
           
//            let  productImg=img.data.url
//            alldata.photo= productImg
//             console.log(alldata)
//             fetch('http://localhost:8000/product/create-product', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(alldata)
//             }).then(res=>res.json())
//             .then(data=>{
//                 console.log(data)
//             })
    
//             }});
        
//  }
   //getting categories:- 
 const getAllCategories = async () => {
    try {
        const { data } = await axios.get("http://localhost:8000/category/get-categories")
        if (data?.success) {
            setCategories(data?.categories)
        }
    }
    catch (error) {
        console.log(error)
    }

}

useEffect(() => {
    getAllCategories()
}, []);

//posting product to server:-
const handleSubmit = async (e) => {
    e.preventDefault();
    // const author = user?._id


       try{
    const productData = new FormData()
    productData.append("name", name)
    productData.append("price", price)
    productData.append("photo", photo)
    productData.append("category", category)
    productData.append("description", description)
    productData.append("brand", brand)

    // console.log({ name, photo,  description, category,price })
    // console.log({productData})
          const {data}=await axios.post('http://localhost:8000/product/create-product',productData)

            if(data?.success){
                // navigate("/dashboard")
                toast.success(data?.message)
                console.log(data?.message)

            }
            else{
                toast.error(data?.message)
            }

       }
       catch(error){
        console.log(error)

       }



}
    return(
        <div>
         <div>
         <h1 className="text-black font-semibold text-center py-3 text-lg"> Add Single Product</h1>
         <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>

<h1 className="text-indigo-950 font-semibold text-4xl pb-4">Create Product</h1>


<div className="form-control">

    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Product Name </span>
    </label>
    <input type="name" name="name"
        placeholder="Full Name"
        className=" py-2 px-3 bg-white border "
        onChange={(e) => setName(e.target.value)} />
</div>

<div className="form-control">

    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Price </span>
    </label>
    <input type="number" name="price"
        placeholder="Product Price"
        className=" py-2 px-3 bg-white border "
        onChange={(e) => setPrice(e.target.value)} />
</div>
<div className="form-control  text-black overflow-hidden ">
    <label className="label">
        <span className="btn btn-outline-primary w-full  text-black "
            style={{ fontSize: "14px" }}>{photo ? photo.name : "Upload Photo"}</span>
        <input type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])} className="w-full py-2 px-3  border hidden  " />
    </label>


</div>
<div className="form-control  text-black ">
<div className="form-control  text-black ">
    <label className="label">
        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Brand </span>
    </label>
    <input type="text" name="brand"
        required placeholder="brand"
        className=" py-2 px-3 bg-white border  "
        onChange={(e) => setBrand(e.target.value)} />

</div>
    <label className="label">
        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Description</span>
    </label>
    <input type="description" name="description"
        required placeholder="Write  description"
        onChange={(e) => setDescription(e.target.value)}
        className=" py-2 px-3 bg-white border  " />

</div>

<div className="form-control  text-black ">
    <label className="label">
        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Category</span>
    </label>
    <Select type="categories" name="categories"
        showSearch
        onChange={(value) => setCategory(value)}
        bordered={false}
        placeholder="Select a Category"
        className=" py-2 px-3 bg-white border  ">
        {
            categories?.map((c) => (
                <Option key={c?._id}
                 value={c?._id} >
                 {c?.name}
                </Option>
            ))
        }


    </Select>

</div>



<div className="form-control mt-6">
    <button type="submit" className=" 
            text-white bg-indigo-950 w-full rounded-md py-2 
            font-semibold hover:bg-yellow-500 hover:text-indigo-950">
        Create</button>
</div>


</form>
    </div>
          





           
        </div>
    )
 }
 export default PostSingleProduct