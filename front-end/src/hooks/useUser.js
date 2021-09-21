import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth"
import app from "../services/Firebase.js";

const useUser = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    
    const signUp =  (firstName, lastName, phoneNumber, dateOfBirth, address, email, password, displayName ) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        }) .catch ((error) => {
            const message = error.message
                alert(`${message}`)
                // alert(`can't sign up`)
        })
    }
    
    const logIn = (email, password) => {
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
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log('AUTH', auth);
            console.log('USER', user);
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
        })
    })
    
    return {
        user,
        signUp,
        logIn,
        logOut,
    }
}

export default useUser;