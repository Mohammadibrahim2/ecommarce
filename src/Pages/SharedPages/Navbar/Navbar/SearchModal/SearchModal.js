import React from "react";
import {BsSearch} from 'react-icons/bs'
const SearchModal=()=>{
    return(
        <div className=" bg-black relative lg:hidden block  ">

     
 <button className=" bg-transparent text-xl" onClick={()=>window.my_modal_3.showModal()}><BsSearch/></button>
<dialog id="my_modal_3" className="modal ">
  <form method="dialog" className="modal-box bg-white flex flex-row justify-between items-center">
    {/* <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
  
   
                <input type="text" className="bg-white text-black pr-30 pl-2 py-2 rounded-md w-[95%] mr-2" placeholder="Search"></input>
                <button className=" z-10 text-xl text-red-600"><BsSearch/></button>
            </form>
  
</dialog>
</div>
    )
}
export default SearchModal