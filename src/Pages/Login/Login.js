import React, { useContext } from "react";
import {FaUserAlt,FaArrowAltCircleRight} from "react-icons/fa"
import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login=()=>{
    const { register, formState: { errors }, handleSubmit } = useForm()
  const {setUser,signup , openModal,setOpenModal,setLoading}=useContext(AuthContext)
 
    const handleLogin = (data) => {
        
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
           
                toast.success('Successfully login ')
             
                localStorage.setItem("accesstoken",data.token)
                localStorage.setItem("logineduser",JSON.stringify(data.user))
               
                let User= window.localStorage.getItem("logineduser");
                console.log(JSON.parse(User))
                setUser(JSON.parse(User))
                setLoading(false)
                setOpenModal(false)
                

            }
          
  
    
})


    }

   
    return(
        <div>
            <div>
            <form className="p-5 w-full" onSubmit={handleSubmit(handleLogin)}>
                       
  
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