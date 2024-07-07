
import React, { useContext } from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import OpenMobileModal from './MobileViewModel';



const SearchModal = ({setValues, values ,isModalOpen,setIsModalOpen,handelSearch}) => {
  

  
  return (
    <div className={`w-full h-full   
     absolute 
     left-[1px] ${isModalOpen? "top-[-500px]":"top-[84px]"} `}>
      <div className='model  w-full    '>
       
        <div className={`${isModalOpen? "hidden":"block"} `}>

          <form className="parent " onSubmit={handelSearch}>
            <input 
              value={values.keyword}
              onChange={(e) => setValues({ ...values, keyword: e.target.value })}
              className="border border-orange-600 text-orange-600 font-semibold
               px-4 py-4  w-full  "
              placeholder="Search"></input> 


            <button type="submit" className="child z-10 text-xl  ml-[90px] mr-4  "><BsSearch /></button>

          </form>
        </div>

      </div>


    </div>
  )


};
export default SearchModal;
