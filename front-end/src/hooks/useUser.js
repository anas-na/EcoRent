import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import app from "../services/Firebase.js";
// import  { useContext } from "react";
// import { UserContext } from "../providers/UserProvider";
// import { auth } from "../services/Firebase";

const useUser = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    // const user = useContext(UserContext);
    
    const signUpFireBase =  ( email, password, displayName ) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`User ${user} is signed up`)
            return user
        }) .catch ((error) => {
            const message = error.message;
            console.log(`FireBase Sign up Error: ${message}`);
        })
    }
    
    const logIn = (email, password) => {
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`User ${user} is logged in`);
            return user;
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

    useEffect(() => {
        onAuthStateChanged(
          auth,
          (user) => {
              console.log("user is changing");
              if (user) {
            //   const { displayName, email, phoneNumber, photoURL, uid } = user;
              setUser(user);
            } else {
              setUser(null);
            }
          }
        );
      }, [user]);
    
    return {
        user,
        signUpFireBase,
        logIn,
        logOut,
    }
}

export default useUser;