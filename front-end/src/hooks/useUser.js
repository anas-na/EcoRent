import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import app from "../services/Firebase.js";
import  { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const useUser = () => {
    const user = useContext(UserContext);
    const auth = getAuth();
    
    const signUpFireBase =  ( email, password, displayName ) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            console.log(`User ${user} is signed up`)
            return undefined;
        }) .catch ((error) => {
            const message = error.message;
            console.log(`FireBase Sign up Error: ${message}`);
        })
    }
    
    const logIn = (email, password) => {
       const res = signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`User ${user} is logged in`);

        })
        .catch ((error) => {
            const message = error.message;
            console.log(`FireBase LogIn error: ${message}`);
        })
       
        // return res
    }
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert("you have logged out");
            })
         .catch ((error) => {
            const message = error.message
            console.log(`Firebase Logout error: ${message}`)
        })
    }
    
    return {
        user,
        signUpFireBase,
        logIn,
        logOut,
    }
}

export default useUser;