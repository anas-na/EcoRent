import '../styles/Home.css'
import React from "react";
import useUser from "../hooks/useUser";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import SignUp from "./Signup";
import { storage } from "../services/Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

const Home = () => {
  const { logOut } = useUser();

  const handleLogOut = () => {
    try {
      logOut();
      return;
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='homeContainer'>
     <div className='textContainer'>
      <h9>Welcome To EcoRent</h9>
     <h10>Rent <h11>anything</h11>, from <h11>anyone</h11>, <h11>anywhere</h11> in the five boroughs.</h10>
     </div>
    </div>
  );
};

export default Home;
