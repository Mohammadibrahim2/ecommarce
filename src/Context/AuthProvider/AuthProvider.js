import React, {createContext, useEffect, useState } from "react";
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, 
//     onAuthStateChanged, signOut , updateProfile } from "firebase/auth";
// import app from "../../../firebase/firebase.config";



// const auth = getAuth(app);



export const AuthContext=createContext()

const AuthProvider=({children})=>{
    // const[itemsCount,setcountItems]=useState(0)
    // console.log(itemsCount)
    // const [user,setUser]=useState({})
    // const[loading,setLoading]=useState(true)
    const [toggle,setToggle]=useState(true)
  

//    const signin=(email,password)=>{
//     setLoading(true)
//     return createUserWithEmailAndPassword(auth,email,password)
//    }

//     const login=(email,password)=>{
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     const GooglessigninProvider=(Googleprovider)=>{
//         setLoading(true)
           
//         return signInWithPopup(auth,Googleprovider)
//     }
//     const logout=()=>{
//         setLoading(true)
//         return signOut(auth)
//     }
//     const updateUser = (userInfo) =>{
//         return updateProfile(auth.currentUser, userInfo);
//     }
//     useEffect(()=>{
//         const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
//             setUser(currentuser)
//             setLoading(false)
           
//         })
//         return()=>{
//             unsubscribe()
//         }
//         },[]);

const authInfo={toggle,setToggle}
    // const authInfo={user,signin,login,logout,GooglessigninProvider,updateUser,loading,setcountItems,itemsCount ,}

    return(
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
           
        </div>
    )


}
export default  AuthProvider