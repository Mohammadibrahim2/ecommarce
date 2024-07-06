import React, { useContext } from "react";
import {FaUserAlt,FaArrowAltCircleRight} from "react-icons/fa"
import { Link, Navigate, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login=()=>{
    const { register, formState: { errors }, handleSubmit } = useForm()
  const {setUser,signup , openModal,setOpenModal,setLoading,token,setToken}=useContext(AuthContext)
 const navigate=useNavigate()
    const handleLogin = (data) => {
        console.log(data)
        fetch('https://updateecommarce-server.vercel.app/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
           console.log(data)
               if(data?.success){
                toast.success(data?.message)
               }
               else{
                toast.error(data?.message)
               }
               
             if(data?.success){
                localStorage.setItem("accesstoken",JSON.stringify(data?.token))
                localStorage.setItem("logineduser",JSON.stringify(data?.user))
               
                let User= window.localStorage.getItem("logineduser");
                let Token= window.localStorage.getItem("accesstoken");
                navigate("/")
                if(User){
                    // console.log(JSON.parse(User))
                    setUser(JSON.parse(User))
                    setLoading(false)
                    
                 
                }
                if(Token){
                    
                    setToken(JSON.parse(Token))
                    setLoading(false)
                    
                 
                }
                
                    
            
               
             }
                
                

            }
          
  
    
})


    }

   
    return(
        <div className="w-full">
            <div className="w-full ">
            <form className="p-5 w-full lg:w-1/2 mx-auto border border-orange-500 rounded-md" onSubmit={handleSubmit(handleLogin)}>
                       
                                <h1 className="text-orange-500 text-2xl mb-3 text-center font-semibold">LOG IN</h1>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text   text-black font-semibold" style={{fontSize:"16px"}}>User Email  <strong style={{color:"#ED1D24"}}>*</strong> </span>
                                </label>
                                <input type="email" {...register("email", { required: "text is requred" })} className="border-black py-2 px-3 bg-white text-black border" />
                            </div>
                            <div className="form-control  text-black font-semibold">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold" style={{fontSize:"16px"}}>User Password  <strong style={{color:"#ED1D24"}}>*</strong> </span>
                                </label>
                                <input type="password" {...register("password", { required: "text is requred" })} className="border-black py-2 px-3 bg-white text-black border" />
                              
                            </div>
                           
                            <div className="text-black font-semibold my-2 flex flex-row items-center ">Create a new account ?
                                 <Link to="/register" className="text-orange-500 font-semibold ml-2"> Sign in</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button  className=" py-2 px-3  text-white font-semibold bg-orange-500">LOGIN</button>
                            </div>
                            
                            <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm  text-black font-semibold">Lost Your password?</a>
                                </label>
                        </form>
            </div>

        </div>
    )
}
export default Login