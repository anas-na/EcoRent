import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth"

import app from "../services/firebase";

const useUser = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth()

    const signUp = async (auth, firstName, lastName, phoneNumber, address, email, password) => {
        createUserWithEmailAndPassword(auth, firstName, lastName, phoneNumber, dateOfBirth, address, email, password)
        try {
            (userCredential) => {
                const user = userCredential.user;
                return user;
            }
        } catch (error) {
            const message = error.message
                alert(`${message}`)
        }
    }
}

const logIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    try
}