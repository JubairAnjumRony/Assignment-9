import { createUserWithEmailAndPassword, 
     onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, 
     updateProfile} from 'firebase/auth';

import  { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';

 export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();
 const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    // const authInfo = {
    //     name: 'sakib khan is number one ....',
    // const name ="context api";
        const createUser = (email,password) =>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password);
        }

        const signInUser = (email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
        }

        const signInWithGoogle = () =>{
            return signInWithPopup(auth,googleProvider);
        }

        // onAuthStateChanged(auth,currentUser =>{
        //     if(currentUser){
        //         console.log('current user logged in ',currentUser);
        //     }
        //     else{
        //         console.log("no user found");
        //     }
        // })

        useEffect(()=>{
            const unsubscribe =onAuthStateChanged(auth,(currentUser) =>{
                console.log("user",currentUser)
                setUser(currentUser);
                setLoading(true);
            })
        

            return ()=> {unsubscribe()};
        },[])

        const signOutUser = ()=>{
            return signOut(auth);
            setLoading(true);
        }

    //     const updateUserProfile = (name, photo) => {
    //     //     return updateProfile(auth.currentUser, updatedData);
    //     //   };
    //     if (!auth.currentUser) {
    //         return Promise.reject(new Error("No authenticated user found."));
    //     }
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photo,})
    //         .then(() => {

    //         setUser({
    //             ...auth.currentUser,
    //             displayName: name,
    //             photoURL: photo,
    //         });
    //     });
    // };


    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
      };
        
        
        const  authInfo = {
          
            loading,
            signInWithGoogle,
            createUser,signInUser,user,setUser,signOutUser,
            updateUserProfile
        }
    
    return (
        <AuthContext.Provider value = {authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;