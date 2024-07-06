import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri"
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
const PreOrder = () => {

    const { user, setUser,token } = useContext(AuthContext)
    const [data, setData] = useState()

    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [photo, setPhoto] = useState('')

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [userName, setUserName] = useState('')

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const productData = new FormData()
            productData.append("name", name)

            productData.append("photo", photo)
            productData.append("userName", userName ||user?.firstName)
            productData.append("adress", adress || user?.adress)
            productData.append("phone", phone || user?.phone)
            productData.append("email", email || user?.email )


            console.log({ name, photo, adress, phone, email, userName })
            console.log({productData})
              const {data}=await axios.post('https://updateecommarce-server.vercel.app/preorder/create-preorder',productData,{
                headers:{
                    authorization: 'Bearer ' + token
                }
              })

                if(data?.success){
                    navigate("/")
                    toast.success(data?.message)
                    console.log(data?.message)

                }
                else{
                    toast.error(data?.message)
                }

        }
        catch (error) {
            console.log(error)

        }



    }
    return (
        <div>
            <div className="text-center mt-2 pt-12">
                <h1 className="text-xl font-semibold text-orange-500">Looking For Something Different ??</h1>
                <h2 className="text-black my-4">Put Your Information in The Box...</h2>
            </div>

            <div className="from">
                <div className="hero ">


                    <div className="  lg:w-1/2 md:w-2/3 w-full">
                        {
                            user?._id ? <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>




                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Product Name & Product Information </span>
                                    </label>
                                    <input type="name" name="name"
                                        placeholder="Product Info"
                                        className=" py-2 px-3 bg-white border "
                                        onChange={(e) => setName(e.target.value)} />
                                </div>


                                <div className="form-control  text-black overflow-hidden  my-3">
                                    <label className="label">
                                        <span className="btn btn-outline-primary w-full  text-black "
                                            style={{ fontSize: "14px" }}>{photo ? photo.name : "Upload Photo"}</span>
                                        <input type="file"
                                            name="photo"
                                            accept="image/*"
                                            onChange={(e) => setPhoto(e.target.files[0])} className="w-full py-2 px-3  border hidden  " />
                                    </label>


                                </div>


                                <div className="form-control my-3">
                                    <label className="label">
                                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Your Name </span>
                                    </label>
                                    <input type="userName" name="userName"
                                        placeholder="Your Name"
                                        required
                                        defaultValue={user?.firstName}
                                        className=" py-2 px-3 bg-white border "
                                        onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="form-control my-3">
                                    <label className="label">
                                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Your Adress </span>
                                    </label>
                                    <input type="adress" name="adress"
                                        placeholder="Your Adress"
                                        required
                                        defaultValue={user?.adress}
                                        className=" py-2 px-3 bg-white border "
                                        onChange={(e) => setAdress(e.target.value)} />
                                </div>
                                <div className="form-control my-3">
                                    <label className="label">
                                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Your Email </span>
                                    </label>
                                    <input type="email" name="email"
                                        placeholder="Your Email"
                                        defaultValue={user?.email}

                                        required
                                        className=" py-2 px-3 bg-white border"
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="form-control my-3">
                                    <label className="label">
                                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Your Phone Number </span>
                                    </label>
                                    <input type="phone" name="phone"
                                        placeholder="Your Phone Number"
                                        defaultValue={user?.phone}
                                        required
                                        className=" py-2 px-3 bg-white border"
                                        onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="form-control mt-6">
                                    <button type="submit" className=" 
                                      text-white bg-orange-500 w-full rounded-md py-2 
                                    font-semibold hover:bg-orange-600 hover:text-zinc-800">
                                        SEND YOUR ORDER</button>
                                </div>


                            </form> : <>
                                <div className="text-center font-semibold text-xl border py-4">
                                    You Are Not Log in
                                    <li className="flex flex-row justify-center items-center  cursor-pointer" htmlFor="registerModal">
                                        <Link to="/login" className="mr-2 py px-4 bg-orange-500 text-white my-2" style={{ fontSize: "18px" }}>Log in</Link>

                                    </li>
                                </div></>
                        }


                    </div>

                </div>



            </div>
        </div>
    )
}
export default PreOrder