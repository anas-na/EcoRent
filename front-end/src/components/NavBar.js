import { NavLink, Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../styles/media/EcoRent.svg";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const NavBar = () => {
  const user = useContext(UserContext);

  if (user) {
    return (
      <nav>
        <div className="navContainer">
          <div>
            <img src={logo} className="logo" />
          </div>
          <div className="links">
            <NavLink to="/items" activeStyle={{color: '#98bd89'}}>Items</NavLink>
            <NavLink to="/myItems" activeStyle={{color: '#98bd89'}}>My Items</NavLink>
            <NavLink to="/items/new" activeStyle={{color: '#98bd89'}}>List An Item</NavLink>
            <NavLink to="/account" activeStyle={{color: '#98bd89'}}>Account</NavLink>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="navContainer">
          <div>
            <img src={logo} className="logo" />
          </div>
          <div className="links">
            <NavLink to="/howItWorks">How It Works</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">SignUp/LogIn</NavLink>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
