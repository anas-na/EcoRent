import React from "react";
import useUser from "../hooks/useUser"

const Home = () => {
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
            <h1>Welcome To EcoRent</h1>
            <button onClick={() => handleLogOut()}>Log Out</button>
        </div>
    )
}

export default Home;