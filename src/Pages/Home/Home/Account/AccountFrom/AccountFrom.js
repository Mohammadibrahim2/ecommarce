import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AccountFrom = () => {
    const { user ,setUser} = useContext(AuthContext)
   
  
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setPhone] = useState('')
    const [password,setPassrowd] = useState('')
    const [email,setEmail] = useState('')
  
    
    // get user data
    useEffect(()=>{
        const {email,firstName,lastName,phone,_id}=user
        setFirstName(firstName)
        setEmail(email)
        setlastName(lastName)
        setPhone(phone)
    
    },[user])
 
//from function for update
const handleSubmit=async(e)=>{
    e.preventDefault();
    setEmail(user?.email)
    try{
        console.log({firstName,lastName,password,phone,email})
     
const {data}=await axios.put(`http://localhost:8000/user/update/${user?._id}`,
{
    firstName,
    lastName,
    password,
    phone,
    email
});
if(data?.error){
    toast.error(data?.error)
}
else{
    const {updatedUser}=data
    console.log(data?.updatedUser)
    setUser({...user,user:updatedUser})
   let ls= localStorage.getItem("logineduser");
   ls=JSON.parse(ls);
   
   
   localStorage.setItem("logineduser",JSON.stringify(updatedUser));
   toast.success(data?.message)
                          
             
}

    }
    catch(error){
        console.log(error)
    }
}




    return (
        <div className="mt-12  mb-5">
           
            <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>

<h1 className="text-indigo-950 font-semibold text-4xl pb-4">My Profile</h1>


<div className="form-control">

    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>First Name </span>
    </label>
    <input type="name" name="firstName"
       defaultValue={user?.firstName}
        className=" py-2 px-3 bg-white border "
        onChange={(e) => setFirstName(e.target.value)} />
</div>

<div className="form-control">

    <label className="label">
        <span className="label-text   text-black " style={{ fontSize: "14px" }}>Last Name </span>
    </label>
    <input type="text" name="lastName"
       defaultValue={user?.lastName}
        className=" py-2 px-3 bg-white border "
        onChange={(e) => setlastName(e.target.value)} />
</div>
<div className="form-control">

    <label className="label">
        <span className="label-text 
         text-black " style={{ fontSize: "14px" }}>Email </span>
    </label>
    <input type="email" name="email"
       defaultValue={user?.email}
       disabled
        className=" py-2 px-3  border "
        />
</div>

<div className="form-control  text-black ">
<div className="form-control  text-black ">
    <label className="label">
        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Password</span>
    </label>
    <input type="password" name="password"
    placeholder="XXXYYYZZZ"
        className=" py-2 px-3 bg-white border  "
       
        onChange={(e) => setPassrowd(e.target.value)} />

</div>
    <label className="label">
        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Phone</span>
    </label>
    <input type="text" name="phone"
        defaultValue={user?.phone}
        onChange={(e) => setPhone(e.target.value)}
        className=" py-2 px-3 bg-white border  " />

</div>




<div className="form-control mt-6">
    <button type="submit" className=" 
            text-white bg-indigo-950 w-full rounded-md py-2 
            font-semibold hover:bg-yellow-500 hover:text-indigo-950">
        Update Profile</button>
</div>


</form>

        </div>
    )
}

export default AccountFrom