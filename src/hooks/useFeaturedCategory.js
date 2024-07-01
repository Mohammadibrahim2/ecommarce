import  { useEffect, useState } from "react";
import axios from "axios";

export  default function useFeaturedCategory(){
     
    const [feturedCategories, setfeaturedCategories]=useState([]);

   
    //get fetured Categories
    const  getfeturedCategories= async()=>{
         try{

            const {data} =await axios.get(`https://updateecommarce-server.vercel.app/featured-catagory/get-fetured-categories`)
            setfeaturedCategories(data)
            console.log(data)
         }
         catch(error){
            console.log(error)

         }
    }


    useEffect(()=>{
        getfeturedCategories();
    },[])

    //return the catogories from the useCategory function to access other page.
    return feturedCategories;

}