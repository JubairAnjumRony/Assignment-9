import { createUserWithEmailAndPassword, 
     onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, 
     updateProfile} from 'firebase/auth';

import  { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


 export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();
 const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
  
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
                setLoading(false);
            })
        

            return ()=> {unsubscribe()};
        },[])

        const signOutUser = ()=>{
            setLoading(true);
            return signOut(auth);
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
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
      };

      function resetPass(email) {
        return sendPasswordResetEmail(auth, email);
      }
        
        const  authInfo = {
          
            loading,
            signInWithGoogle,
            createUser,signInUser,user,setUser,signOutUser,
            updateUserProfile,resetPass
        }
    
    return (
        <AuthContext.Provider value = {authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;