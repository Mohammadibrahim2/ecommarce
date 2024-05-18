import  { useEffect, useState } from "react";
import axios from "axios";

export  default function useSubCategory(){
     
    const [subcategories, setsubCategories]=useState([]);

   
    // //get category
    // const  getsubcategories= async()=>{
    //      try{

    //         const {data} =await axios.get(`http://localhost:5000/subcategory/${id}`)
    //         setsubCategories(data)
    //      }
    //      catch(error){
    //         console.log(error)

    //      }
    // }


    // useEffect(()=>{
    //     getsubcategories();
    // },[])

    //return the catogories from the useCategory function to access other page.
    return subcategories;

}