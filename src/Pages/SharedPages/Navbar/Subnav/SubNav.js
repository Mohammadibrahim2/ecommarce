import React, { useContext, useEffect, useState } from "react";
import { BsGiftFill, BsBoxFill } from 'react-icons/bs';

import { RiShoppingCart2Fill } from 'react-icons/ri'
import { BsPlusLg } from "react-icons/bs";

import { BiUser } from 'react-icons/bi'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

import "./Subnav.css"

import useSubCategory from "../../../../hooks/useSubCategory";
import useCategory from "../../../../hooks/useCategory";
import SingleCategory from "./SingleCategory";


const SubNav = () => {

    const subcategories = useSubCategory()
    const categories = useCategory()
    
    const[selectedsubcat,setselectedsubcat]=useState([])
const handlesubcat=(id)=>{
    const arraysub=[...selectedsubcat]
    console.log(id)
    if(id===subcategories?.categoy?._id) setselectedsubcat(id)
    console.log(arraysub)

}
   

    console.log(subcategories)

    const { toggle, setToggle } = useContext(AuthContext)
    const onChange = (value) => {
        console.log(value);
      };
    return (
        <div className="bg-white text-black  lg:px-5 py-3   w-full pt-20 lg:shadow-md">
            <div className="relative  lg:block hidden bg-white ">




                <div className="bg-white navitems lg:relative z-30 flex lg:flex-row-reverse flex-col-reverse lg:justify-center  lg:items-center items-start lg:w-full w-2/3 ">
                    {
                        categories.map(item => <div className="flex flex-row justify-between items-center lg:mr-4 mt-3">


                            <Link to="/filter">
                            <SingleCategory item={item} handlesubcat={handlesubcat}></SingleCategory>
                              
                            </Link>

                        </div>)
                    }


                </div>

            </div>


            {/* for responsiveness */}


            <div className="relative bg-white h-full lg:hidden block">




                <div className={`bg-white navitems h-full fixed  top-[68px] ${toggle ? "left-[-400px]" : "left-[3px]"} subnav z-30 flex  flex-col-reverse justify-end items-start  w-1/2 `}>
                    {
                        categories.map(item => <div className="flex flex-row justify-between items-start py-2 pr-2 border w-full">


                            <Link to="/">
                                <SingleCategory item={item} handlesubcat={handlesubcat}></SingleCategory>
                               
                            </Link>
                            <span><BsPlusLg /></span>

                        </div>)
                    }

                    <div className=""></div>

                </div>

            </div>

        </div>
    )
}
export default SubNav