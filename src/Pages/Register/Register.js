import React from "react";
import { FaUserAlt, FaArrowAltCircleRight } from "react-icons/fa"
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const {setUser,signup , openModal,setOpenModal,setLoading}=useContext(AuthContext)

    const handleSinup = (data) => {
        
        fetch('http://localhost:5000/user/register', {
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
                setUser(data)
                toast.success('Successfully registered')
                setLoading(false)
                setOpenModal(false)
                // setCreatedUserEmail(email);
               

            }
          
  
    
})

    }
    return (
        <div>
            <div>
                <form className="p-10  w-full h-auto" onSubmit={handleSubmit(handleSinup)}>


                    <div className="form-control">

                        <label className="label">
                            <span className="label-text   text-black font-semibold" style={{ fontSize: "16px" }}>First Name  <strong >*</strong> </span>
                        </label>
                        <input type="text" {...register("fName", { required: "text is requred" })} className="border-black py-2 px-3 bg-white text-black border" />
                    </div>
                    <div className="form-control  text-black font-semibold">
                        <label className="label">
                            <span className="label-text  text-black font-semibold" style={{ fontSize: "16px" }}>Last Name <strong >*</strong> </span>
                        </label>
                        <input type="text" {...register("lName", { required: "text is requred" })} className="border-black py-2 px-3 bg-white text-black border" />

                    </div>

                    <div className="form-control  text-black font-semibold">
                        <label className="label">
                            <span className="label-text  text-black font-semibold" style={{ fontSize: "16px" }}>Phone Number <strong >*</strong> </span>
                        </label>
                        <input type="number" {...register("phone")} className="border-black py-2 px-3 bg-white text-black border" />

                    </div>
                    <div className="form-control  text-black font-semibold">
                        <label className="label">
                            <span className="label-text  text-black font-semibold" style={{ fontSize: "16px" }}>Email <strong >*</strong> </span>
                        </label>
                        <input type="email" {...register("email", { required: "text is requred" })} className="border-black py-2 px-3 bg-white text-black border" />

                    </div>
                    <div className="form-control  text-black font-semibold">
                        <label className="label">
                            <span className="label-text  text-black font-semibold" style={{ fontSize: "16px" }}>Password <strong >*</strong> </span>
                        </label>
                        <input type="password" {...register("password", { required: "text is requred" })} className="border-black py-2 px-3 bg-white text-black border" />

                    </div>

                    {/* <select {...register("isAdmin", { required: true })} className="border-black py-2 px-3 bg-white text-black border w-full mt-3">
                      
                        <option value="true" className="border-black py-2 px-3 bg-white text-black border">yes</option>
                        <option value="false"  className="border-black py-2 px-3 bg-white text-black border">no</option>
                    </select> */}



                    <div className="form-control mt-6">
                        <button  className=" py-2 px-3  text-white font-semibold bg-orange-500">CREATE ACCOUNT</button>
                    </div>

                    <label className="label">
                        <h1 className=" my-2 text-center w-full text-slate-400 font-semibold " style={{ fontSize: "12px" }}>By creating an account, you agree to the ajmalshop.com
                            <span className="text-black "> Privacy Policy</span >  and <span className="text-black ">Delivery Terms & Conditions</span></h1>

                    </label>
                </form>
            </div>

        </div>
    )
}
export default Register