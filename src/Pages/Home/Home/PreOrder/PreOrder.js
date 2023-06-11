import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri"
const PreOrder = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleSinup = () => {

    }
    return (
        <div>
            <div className="text-center mt-8 pt-24">
                <h1 className="text-xl font-semibold text-orange-500">Looking For Something Different ??</h1>
                <h2 className="text-black">Put Your Information in The Box...</h2>
            </div>

            <div className="from">
                <div className="hero ">


                    <div className="  lg:w-1/2 md:w-2/3 w-full">
                        <form onSubmit={handleSubmit(handleSinup)} className="lg:p-10 p-2">
                            {/* <h1 className="flex flex-row items-center text-2xl text-black font-semibold my-3">
                     Product Information </h1> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold " style={{ fontSize: "16px" }}> Product Information</span>
                                </label>
                                <input type="text" placeholder="Enter Product Name /URL" {...register("userName", { required: "text is requred" })} className=" py-2 px-3 w-full  bg-violet-50 text-black border " />
                            </div>



                            <div className="form-control">
                            <label class="block">
                               
                                    <label class="block">
                                    <span className="label-text  text-black font-semibold mt-4" style={{ fontSize: "16px" }}>Add Image</span>
                                       
                                        <input type="file" class="block w-full text-sm text-slate-500
                                          file:mr-4 file:py-2 file:px-4
                                           file:rounded-md file:border-0
                                            file:text-sm file:font-semibold
                                          file:bg-violet-50 file:text-black
                                          hover:file:bg-violet-100
                                            my-2
                                          "/>
                                    </label>
                                    </label>
                                  
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-black font-semibold " style={{ fontSize: "16px" }}>Name</span>
                                </label>
                                <input type="name" placeholder="Enter Name" {...register("name", { required: "text is requred" })} className=" py-2 px-3 bg-violet-50 text-black border w-full " />
                            </div>
                            <div className="flex lg:flex-row flex-col lg:justify-evenly">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-black font-semibold " style={{ fontSize: "16px" }}>Phone</span>
                                    </label>
                                    <input type="phone" placeholder="Ente Phone NO." {...register("phone", { required: "text is requred" })} className=" py-2 px-3 bg-violet-50 text-black border w-full " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-black font-semibold " style={{ fontSize: "16px" }}>Email  </span>
                                    </label>
                                    <input type="email" placeholder="Enter Email Adress" {...register("email", { required: "text is requred" })} className=" py-2 px-3 bg-violet-50 text-black border w-full " />
                                </div>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-semibold" style={{ fontSize: "16px" }}>Adress </span>
                                </label>
                                <textarea type="password"  rows="4"  placeholder="Enter Adress" {...register("password", { required: "text is requred" })} className=" py-2 px-3 bg-violet-50 text-black border lg:w-full w-full" />

                            </div>
                            {/* <select name="userRole"className="py-2 px-3  border-black w-full bg-white text-black border my-3">
                       <option className="font-semibold" style={{color:"#ed1d24"}}>Admin</option>
                           <option  className="font-semibold "style={{color:"#ed1d24"}}>Buyer</option>
                           <option  className="font-semibold" style={{color:"#ed1d24"}}>Seller</option>
                       </select> */}

                            <div className="form-control mt-6">
                                <button className="px-3 py-2 text-white font-semibold bg-orange-500 w-[150px] rounded-sm" >Submit</button>

                            </div>
                            <div className="form-control mt-6">
                                {/* <button onClick={handleGooglelogin}className="px-3 py-2 text-white font-semibold" style={{backgroundColor:"#ed1d24"}}>Google sign in</button> */}

                            </div>
                        </form>
                    </div>

                </div>



            </div>
        </div>
    )
}
export default PreOrder