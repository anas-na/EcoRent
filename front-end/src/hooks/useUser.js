import { auth } from "../services/Firebase";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../services/Firebase.js";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const useUser = () => {
  const user = useContext(UserContext);

  const signUpFireBase = async (email, password, displayName) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  };

  const logIn = (email, password) => {
    const res = signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(`User ${user} is logged in`);
      })
      .catch((error) => {
        const message = error.message;
        console.log(`FireBase LogIn error: ${message}`);
      });
    console.log(res);
    return res;
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("you have logged out");
      })
      .catch((error) => {
        const message = error.message;
        console.log(`Firebase logout error: ${message}`);
      });
  };

  return {
    user,
    signUpFireBase,
    logIn,
    logOut,
  };
};

export default useUser;
