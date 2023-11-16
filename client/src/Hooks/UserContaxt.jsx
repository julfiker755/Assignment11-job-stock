import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,signInWithPopup ,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from './useFirebase';
import useIncaptor from './useIncaptor';




export const Authconext=createContext(null)
const googleprovider = new GoogleAuthProvider();

const UserContaxt= ({children}) => {
    const [user,setuser]=useState({})
    const [loading,setloading]=useState(true)
    const  axiosincaptor=useIncaptor()
    // create user
   const createUser=(email,password)=>{
    setloading(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }
  //  sign in user
   const signinUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
// google user
const googlelogin=()=>{
    return signInWithPopup(auth,googleprovider)
}
// log out
const logOut=()=>{
    setloading(true)
    return signOut(auth)
}
    //  unsubscribe for  
    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            const useremail = currentUser?.email || user?.email
            const loginuser = { email: useremail }
            setuser(currentUser);
            setloading(false)
            if (currentUser) {
                axiosincaptor.post('/jwt', loginuser)
                    .then(result => {
                        console.log(result.data)
                    })
            } else {
                axiosincaptor.post("/logout", { loginuser })
                .then(result => {
                  console.log("token out", result.data)
                })
            }
        })
       
        return () => {
            unsubscribe();
        }

    }, [])
    // auth information
    const authinfo={user,createUser,signinUser,logOut,loading,googlelogin}
    return (
        <Authconext.Provider value={authinfo}>
           {children}
        </Authconext.Provider>
    );
};






export default UserContaxt;