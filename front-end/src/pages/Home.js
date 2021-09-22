import React from "react";
import useUser from "../hooks/useUser"
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const Home = () => {
    const string = useContext(UserContext);
    const { logOut } = useUser();

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
            {string ? string.email : "Hi"}
            <h1>Welcome To EcoRent</h1>
            <button onClick={() => handleLogOut()}>Log Out</button>
        </div>
    )
}

export default Home;