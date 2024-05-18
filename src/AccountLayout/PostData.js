import React, { useContext, useState } from "react";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import { Link } from "react-router-dom";
import  pic  from "../assetes/logo-1.png"
import { FiX } from "react-icons/fi";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";


const PostData=()=>{

 const [toggle,setToggle]=useState(true)
 const{ openModal,setOpenModal}=useContext(AuthContext)
 
    return(
        <>

<input type="checkbox" id="registerModal" className="modal-toggle" />
<div className="modal p-0   ">
  <div className="modal-box  rounded-sm  " >

  <div className="modal-action p-0">

 <div className="w-full mx auto">
  <img src={pic} className="w-[300px] mx-auto"></img>
 </div>
 <div>
 <label htmlFor="registerModal" className="text-black text-2xl "><FiX/></label>
 </div>
    
   
    </div>
    <div className="my-4 flex flex-row-reverse justify-around w-full font-semibold">
    <button className={`py-2 px-8 ${!toggle? "bg-orange-500 text-white" :"text-black"} `}  onClick={()=>setToggle(false)}>LOGIN</button>
<button className={` ${!toggle? "text-black" :"bg-orange-500 text-white"} py-2 px-5 `} onClick={()=>setToggle(true)} >REGISTER</button>

</div>


  
  { toggle?  <Register></Register>:<Login></Login>

   
}


  </div>
</div>
    

        </>
    )
}
export default PostData