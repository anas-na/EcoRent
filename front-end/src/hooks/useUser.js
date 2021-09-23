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
    
    const signUp =  (firstName, lastName, phoneNumber, dateOfBirth, address, email, password, displayName ) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            debugger;
            console.log("hello")
            return user;
        }) .catch ((error) => {
            const message = error.message
                alert(`${message}`)
        })
    }
    
    const logIn = (email, password) => {
       const res = signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;

        })
        .catch ((error) => {
            const message = error.message
            alert(`${message}`)
        })
        console.log(res)
        return res
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert("you have logged out");
            })
         .catch ((error) => {
            const message = error.message
            alert(`${message}`)
        })
    }
    
    return {
        user,
        signUp,
        logIn,
        logOut,
    }
}

export default useUser;