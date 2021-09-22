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
    
    const signUp = async (firstName, lastName, phoneNumber, dateOfBirth, address, email, password ) => {
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
    
    const logIn = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;

        })
        .catch ((error) => {
            const message = error.message
            alert(`${message}`)
        })
    }
    const logOut = async () => {
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