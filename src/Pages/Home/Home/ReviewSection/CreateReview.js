import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri"

import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
const CreateReview = () => {
    const {toggle,setToggle,user,setUser,loading,setLoading}=useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const [data, setData] = useState()

    const [name, setName] = useState('')
    const [description,  setDescription] = useState('')
    const [photo, setPhoto] = useState('')

    
    const [userName, setUserName] = useState('')

    const testUser={_id:"875875858765675675"}
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const productData = new FormData()
            productData.append("name", name)

            productData.append("photo", photo)
            productData.append("userName", userName)
          

            console.log({ userName, photo,description})
            // console.log({productData})
            //   const {data}=await axios.post('http://localhost:8000/preOrder/create-preOrder',productData)

            //     if(data?.success){
            //         // navigate("/")
            //         toast.success(data?.message)
            //         console.log(data?.message)

            //     }
            //     else{
            //         toast.error(data?.message)
            //     }

        }
        catch (error) {
            console.log(error)

        }



    }
    return (
        <div>
            <div className="text-center my-2 pt-12">
                <h1 className="text-2xl font-semibold text-orange-500 mb-4">Write Your Review </h1>
               
            </div>

            <div className="from">
                <div className="hero ">


                    <div className="  lg:w-1/2 md:w-2/3 w-full">
                        {testUser?._id ?<><form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>


{/* 

<div className="form-control my-4">
    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>!!!!!! </span>
    </label>
    <input type="name" name="name"
        placeholder="Product Info"
        className=" py-2 px-3 bg-white border "
        onChange={(e) => setName(e.target.value)} />
</div> */}


<div className="form-control  text-black overflow-hidden  my-2">
    <label className="label">
        <span className="btn btn-outline-primary w-full  text-black "
            style={{ fontSize: "14px" }}>{photo ? photo.name : "Upload Photo"}</span>
        <input type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])} className="w-full py-2 px-3  border hidden  " />
    </label>


</div>


<div className="form-control my-2">
    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Your Name </span>
    </label>
    <input type="userName" name="userName"
        placeholder="Your Name"
        required
        className=" py-2 px-3 bg-white border "
        onChange={(e) => setUserName(e.target.value)} />
</div>
<div className="form-control my-2">
    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Give Your Review </span>
    </label>
    <textarea  type="description" name="description"
        placeholder="Your review...."
        required
        className=" py-2 px-3 bg-white border  w-full"
        row={40}
        onChange={(e) => setDescription(e.target.value)} />
</div>


<div className="form-control mt-6">
    <button type="submit" className=" 
text-white bg-orange-500 w-full rounded-md py-2 
font-semibold hover:bg-orange-600 hover:text-zinc-800">
        SUBMIT</button>
</div>


</form></>:<>
<div className="text-center font-semibold text-xl border py-4">
   You Are Not Log in
     <li className="flex flex-row justify-center items-center  cursor-pointer" htmlFor="registerModal">
    <label  htmlFor="registerModal" className="mr-2 py px-4 bg-orange-500 text-white my-2" style={{fontSize:"18px"}}>Log in</label>
   
       </li>
</div></>}


                    </div>

                </div>



            </div>
        </div>
    )
}
export default CreateReview