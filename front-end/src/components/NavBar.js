import { NavLink, Link, useHistory } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../styles/media/EcoRent.svg";
import useUser from "../hooks/useUser";
import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

const NavBar = () => {
  const user = useContext(UserContext);
  const { logOut } = useUser();
  const [open, setOpen] = useState(false);

  let history = useHistory()

  const navigateTo = () => history.push('/myprofile')

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
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
          </div>
          <div className="links">
            <NavLink
              to="/items"
              activeStyle={{
                color: "#98bd89",
                fontSize: "1.8em",
                fontWeight: " bold",
              }}
            >
              Items
            </NavLink>
            <NavLink
              to="/myItems"
              activeStyle={{
                color: "#98bd89",
                fontSize: "1.8em",
                fontWeight: " bold",
              }}
            >
              My Items
            </NavLink>
            <NavLink
              to="/newitem"
              activeStyle={{
                color: "#98bd89",
                fontSize: "1.8em",
                fontWeight: " bold",
              }}
            >
              List An Item
            </NavLink>
          
          </div>


          <section className="dropdownMenu">
            <img
              src={logo}
              alt="user"
              className="profile"
              onClick={handleDropdown}
            />
      
            <ul className={!open ? "dropdown" : null} id="user-menu">
              <div className='dropButtons'>

              <button className="button1" onClick={navigateTo}>Profile</button>

              <button onClick={handleLogOut} className="button1">Sign Out</button>

              </div>
            </ul>
           
          </section>


        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="navContainer">
          <div>
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
          </div>
          <div className="links">
            <NavLink
              to="/howItWorks"
              activeStyle={{
                color: "#98bd89",
                fontSize: "1.8em",
                fontWeight: " bold",
              }}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={{
                color: "#98bd89",
                fontSize: "1.8em",
                fontWeight: " bold",
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              activeStyle={{
                color: "#98bd89",
                fontSize: "1.8em",
                fontWeight: " bold",
              }}
            >
              SignUp/LogIn
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
