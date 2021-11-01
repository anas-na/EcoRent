import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
// import useUser from "../hooks/useUser";
import LoadingScreen from "../components/LoadingScreen";

import { apiURL } from "../util/apiURL";

const API = apiURL();

const Profile = (props) => {

  
  // console.log(props.history.location.state.request)

  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const [currentUserItems, setCurrentUserItems] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const fbUser = useContext(UserContext);
  console.log(user)
 
    const getUser = async () => {
      try {
        if(fbUser){
          const { uid } = fbUser;
        let res = await axios.get(`${API}/users/${uid}`);
        setUser(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    

  const getItems = async () => {
    let allItems = await axios.get(`${API}/items`);
    // console.log('getItems func',allItems.data)
    setItems(allItems.data);
  };

  const getCurrentUserItems = () => {
    // console.log("fbUser", fbUser)
    // console.log("ITEMS", items)
    if (!fbUser) {
       LoadingScreen()
    }else if(items){
      let theItems;
      theItems = items.filter((item) => fbUser.uid === item.user_id);
      theItems.length > 0 ? setCurrentUserItems(theItems) : setCurrentUserItems(null)
    
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 750);
    getUser().then(user=>{
      getItems(user);
      getCurrentUserItems(user);
    })
  }, [fbUser]);

  // useEffect(() => {
  //   getUser();
  // }, [fbUser]);

  // useEffect(() => {
  //   getItems()
  // }, [])

  // useEffect(() => {
  //   if(items && user) {
  //     setCurrentUserItems(items.filter((item) => user.uid === item.user_id))
  //   }
  // }, [items, user])

  // console.log(currentUserItems)

  if (loading) {
    return LoadingScreen()
  }
  return (
    <div>
      <h3>In Profile</h3>
      <h3>
        {user
          ? "Welcome " + user.first_name + "!"
          : "You're not signed in! Please log in/sign up :)"}{" "}
      </h3>
      <img src={user.img} alt={user.name} />
      <h5>{user.email}</h5>
      <h5>{user.address}</h5>
      <label htmlFor="userItems">My Items </label>

      <div className="userItems">
        {currentUserItems
          ? currentUserItems.map((item) => {
              return (
                <div>
                  {/* display currentUser item names & reviews */}

                  <li>{item.name}</li>
                  <p>{item.review}</p>
                </div>
              );
            })
          : "No Items yet! Go ahead and list one to get started!"}
      </div>
      {/* <button onClick={handleEdit}>Edit</button> */}
    </div>
  );
};

export default Profile;
