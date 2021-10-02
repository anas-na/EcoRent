//Demi

//Profile picture
//Name
//Email
//Location
//My Items
//Edit button
//User Rating
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
// import useUser from "../hooks/useUser";

import { apiURL } from "../util/apiURL";

const API = apiURL();

const Profile = () => {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUserItems, setCurrentUserItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const fbUser = useContext(UserContext);

  const getUser = async () => {
    let users = await axios.get(`${API}/users`);
    console.log(users.data);
    setUsers(users.data);
  };

  const getAllItems = async () => {
    let allItems = await axios.get(`${API}/items`);
    console.log(allItems.data);
    setItems(allItems.data);
  };

  const getCurrentUserItems = () =>{
    if (!fbUser) {
       console.log("loading")
    }else if(items){
      console.log(fbUser.uid);
      let theItems 
      theItems = items.filter((item) => fbUser.uid === item.user_id);
      console.log("THE ITEMS",theItems)
      setCurrentUserItems(theItems);
    
    }
  }

  const getCurrentUser = () => {
    if (!fbUser) {
      console.log("loading")
   }else{
      console.log(fbUser.uid);
      let theUser = users.filter((user) => fbUser.uid === user.id);
      setCurrentUser(theUser[0]);
    }
  };

  useEffect(() => {
    getUser();
    getAllItems();
    getCurrentUserItems();
    getCurrentUser();
  }, [fbUser]);
  return (
    <div>
      {/* <h3>In Profile</h3> */}
      <h3>{currentUser.first_name}</h3>
      {/* <img src={user.img} alt={user.name} /> */}
      <h5>{currentUser.email}</h5>
      <h5>{currentUser.address}</h5>
      <label htmlFor="userItems">My Items </label>

      <div className ='userItems'>
        {currentUserItems.map((item)=>{
          return <div>
            {/* display currentUser item names & reviews */}

            <li>{item.name}</li>
            <p>{item.review}</p>
            </div>
        })}
      </div>
      {/* <button onClick={handleEdit}>Edit</button> */}
    </div>
  );
};

export default Profile;
