import { NavLink, Link, use } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../styles/media/EcoRent.svg";
import useUser from "../hooks/useUser";
import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

const NavBar = () => {
  const user = useContext(UserContext);
  const { logOut } = useUser();
  const [open, setOpen] = useState(false);
  
  const handleLogOut = () => {
    try {
      logOut();
      return;
    } catch (error) {
      alert(error);
    }
  };

  const handleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  if (user) {
    return (
      <nav>
        <div className="navContainer">
          <div>
            <Link to="/"><img src={logo} className="logo" /></Link>
          </div>
          <div className="links">
            <NavLink to="/items" activeStyle={{color: '#98bd89'}}>Items</NavLink>
            <NavLink to="/myItems" activeStyle={{color: '#98bd89'}}>My Items</NavLink>
            <NavLink to="/newitem" activeStyle={{color: '#98bd89'}}>List An Item</NavLink>
            <NavLink to="/account" activeStyle={{color: '#98bd89'}}>Account</NavLink>
          </div>
          <img
            src={logo}
            alt="user"
            className="profile"
            onClick={handleDropdown}
          />
          <ul className={!open ? "dropdown" : null} id="user-menu">
            <li className="one">
              <i className="fas fa-user-circle"></i>
              <NavLink exact to="/myprofile">
                Profile
              </NavLink>
            </li>
            <li>
              <i className="fas fa-sign-out-alt"></i>

              <button onClick={handleLogOut}>Sign Out</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
          <div className='navContainer'>
        <div>
          <Link to="/"><img src={logo} className="logo" /></Link>
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
