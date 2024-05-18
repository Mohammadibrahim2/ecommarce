import React, { useContext } from "react";
import { AuthContext } from "../../../../../Context/AuthProvider/AuthProvider";

const AccountFrom = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="mt-12  mb-5">
            <form className="px-3 py-2  border w-full">



                <div className="form-control">

                    <label className="label">
                        <span className="label-text   text-black " style={{ fontSize: "14px" }}>First Name  <strong >*</strong> </span>
                    </label>
                    <input type="fname" name="fname" defaultValue={user?.firstName} placeholder="First Name" className=" py-2 px-3 bg-white border  " />
                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Last Name  <strong >*</strong> </span>
                    </label>
                    <input type="lname" name="lname" defaultValue={user?.lastName} placeholder="Last Name" className=" py-2 px-3 bg-white border  " />

                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Mobile Number </span>
                    </label>
                    <input type="phone" name="phone" defaultValue={user?.phone} placeholder="" className=" py-2 px-3 bg-white border  " />

                </div>
                <div className="form-control  text-black ">
                    <label className="label">
                        <span className="label-text  text-black " style={{ fontSize: "14px" }}>Email </span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="" className=" py-2 px-3 bg-white border  " />

                </div>


                <div className="form-control mt-6">
                    <button className="  text-white bg-orange-500 w-[70px] rounded-sm" style={{ padding: "2px 3px", fontSize: "14px" }} >Save</button>
                </div>

            </form>

        </div>
    )
}

export default AccountFrom