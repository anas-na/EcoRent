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
  const string = useContext(UserContext);
  const { logOut } = useUser();
  // const [image, setImage] = useState("");
  // const [imageAsUrl, setImageAsUrl] = useState("");

  // const handleImage = (event) => {
  //   const img = event.target.files[0];
  //   setImage((image) => img);
  // };

  // const handleUpload = (event) => {
  //   event.preventDefault();
  //   const storage = getStorage();
  //   const storageRef = ref(storage, "images/" + image.name);
  //   const uploadTask = uploadBytesResumable(storageRef, image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapShot) => {
  //       console.log(snapShot);
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     () => {
  //       // Upload completed successfully, now we can get the download URL
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //         setImageAsUrl(downloadURL)
  //       });
  //     }
  //   );
  // };

  const handleLogOut = () => {
    try {
      logOut();
      return;
    } catch (error) {
      alert(error);
    }
  };

// const imagePlaceHolder = (img) => {
//   if(imageAsUrl === ''){
//     return <div></div>
//   } else {
//     return(
//       <img src={imageAsUrl} alt="newItemImg" />
//     )
//   }
// }

console.log(string)
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
