 import  { useEffect, useState } from "react";
import axios from "axios";

export  default function useCategory(){
     
    const [categories,setCategories]=useState([]);

    //get category
    const  getcategories= async()=>{
         try{

            const {data}= await axios.get('http://localhost:8000/category/get-categories')
            setCategories(data?.categories)
         }
         catch(error){
            console.log(error)

         }
    }


    useEffect(()=>{
        getcategories();
    },[])

    //return the catogories from the useCategory function to access other page.
    return categories;

}