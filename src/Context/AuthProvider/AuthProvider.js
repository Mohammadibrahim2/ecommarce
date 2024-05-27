import React, {createContext, useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, 
//     onAuthStateChanged, signOut , updateProfile } from "firebase/auth";
// import app from "../../../firebase/firebase.config";



// const auth = getAuth(app);



export const AuthContext=createContext()

const AuthProvider=({children})=>{

    const [openModal,setOpenModal]=useState(true)
    const [user,setUser]=useState([])
    const[loading,setLoading]=useState(true)
    const [toggle,setToggle]=useState(true)
    const [sub,setSub]=useState([])
    console.log(sub?.subcategory)
   
    const [searchResult,setSearchResult]=useState([])
   
  



const authInfo={toggle,setToggle ,setUser,
    user,setSearchResult,searchResult,
    loading,setLoading,
    openModal,
    setOpenModal,sub,setSub
    
}

    useEffect(()=>{
    
        let User= window.localStorage.getItem("logineduser");
        console.log(JSON.parse(User))
        setUser(JSON.parse(User))
        setLoading(false)
        setOpenModal(false)
    },[])
    

    return(
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
           
        </div>
    )


}
export default  AuthProvider