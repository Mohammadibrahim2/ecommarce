import { useEffect, useState } from "react"

const useAdmin=email=>{
 
    const[isAdmin,setIsAdmin]=useState('')
    const[isAdminLoading,setisAdminLoading]=useState(true)
    console.log(isAdmin)

    useEffect(()=>{
        fetch(`https://updateecommarce-server.vercel.app/user/admin/${email}`)
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            setIsAdmin(data?.isAdmin)
            setisAdminLoading(false)
        })
      
    },[email])
  

   
   return [isAdmin,isAdminLoading]
   
}
export default useAdmin

