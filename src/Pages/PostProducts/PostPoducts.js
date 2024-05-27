import React, { useState } from "react";
import * as  XLSX  from "xlsx";
import PostSingleProduct from "./SingleProduct";


 const PostProduct=()=>{


 const handlefile=async(event)=>{
  event.preventDefault();
   const reader=new FileReader()
   reader.readAsBinaryString(event.target.files[0]);
   reader.onload=(event)=>{
      const data=event.target.result;
      const workbook=XLSX.read(data,{type:"binary"});
      const sheetName=workbook.SheetNames[0]
      const sheet=workbook.Sheets[sheetName];
      const parsedData=XLSX.utils.sheet_to_json(sheet);
    
      console.log(parsedData)
  
      fetch('http://localhost:5000/product/many',{
        method:'POST',
        headers: {
          'content-type': 'application/json'
      }, body: JSON.stringify(parsedData)


      })


   }
   
 }

    return(
        <div className="py-5">
         <div>
        


         <PostSingleProduct></PostSingleProduct>
         //if need the emplement
         {/* <h1 className="text-black font-semibold text-center py-3 text-lg"> Add Multiple Product</h1>
         <form className=" border border-orange-500 py-10 px-3 rounded-lg ">
        
         <input type="file" accept=".xlsx , .xls" className="block w-full text-sm text-slate-600
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-orange-500 file:text-white
      hover:file:bg-black
      hover:file:text-orange-500
       border border-orange-500
       rounded-full" onChange={(event)=>handlefile(event)}/>
      
      <button className="py-2 px-20 bg-orange-500 text-white my-5 rounded-full">Save</button>
    
    </form> */}
    </div>
          





           
        </div>
    )
 }
 export default PostProduct