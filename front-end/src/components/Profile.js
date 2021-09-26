//Demi
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { apiURL } from "../util/apiURL";

const API = apiURL();
const user = useContext(UserContext)
//Profile picture
//Name
//Email
//Location
//My Items
//Edit button
//User Rating

// const Profile = () => {
//   const getUser = async () => {
//     let users = await axios.get(`${API}/users`);
//     console.log(users);
//   };
console.log(user)
  return (
    <div>
      <h3>{user.first_name}</h3>
      <img src={user.img} alt={user.name} />
      <h5>{user.email}</h5>
      <h5>{user.location}</h5>
      <h5>{user.items}</h5>
      <h5>{user.rating}</h5>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};
