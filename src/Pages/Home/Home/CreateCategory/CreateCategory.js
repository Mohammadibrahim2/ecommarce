import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const CreateCategory = () => {

    const { toggle, setToggle, user, setUser, loading, setLoading } = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [name,setName]=useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {

            console.log(name)
            const { data } = await axios.post('https://updateecommarce-server.vercel.app/category/create-category',{name})

            if (data?.success) {
               
                toast.success(data?.message)
                navigate("/")

            }
            else {
                toast.error(data?.message)
            }

        }
        catch (error) {
            console.log(error)

        }



    }
    return (
        <div>
            <div className="text-center my-2 pt-12">
                <h1 className="text-2xl font-semibold text-orange-500 mb-4">Create a category </h1>

            </div>

            <div className="from">
                <div className="hero ">


                    <div className="  lg:w-1/2 md:w-2/3 w-full">
                        <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>


                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text   text-black " style={{ fontSize: "14px" }}>Category Name </span>
                                </label>
                                <input type="name" name="name"
                                    
                                    placeholder="Category Name"
                                    required
                                    onChange={(e)=>setName(e.target.value)}
                                    className=" py-2 px-3 bg-white border "
                                />
                            </div>
                           
                            <div className="form-control mt-6">
                                <button type="submit" className=" 
                               text-white bg-orange-500 w-full rounded-md py-2 
                            font-semibold hover:bg-orange-600 hover:text-zinc-800">
                                    SUBMIT</button>
                            </div>


                        </form>


                    </div>

                </div>



            </div>
        </div>
    )

}
export default CreateCategory;