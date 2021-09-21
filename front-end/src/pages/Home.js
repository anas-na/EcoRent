import React from "react";
import useUser from "../hooks/useUser"
import SignUp from "./Signup";

import storage from "../services/Firebase"
import {useState} from "react"


const Home = () => {
    const { logOut } = useUser();
    const { firstName } = SignUp();
    const [image , setImage] = useState('');

  const upload = ()=>{
    if(image == null)
      return;
    storage.ref(`/images/${image.name}`).put(image)
    .on("state_changed" , alert("success") , alert);
  }

    const handleLogOut = () => {
        try {
            logOut()
            return;
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <h1>Welcome To EcoRent ${}</h1>
            
            <button onClick={() => handleLogOut()}>Log Out</button>
            {/* <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button> */}
        </div>
    )
}

export default Home;