import { Link } from "react-router-dom";
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
            <Link to="/"><img src={logo} className="logo" /></Link>
          </div>
          <div className="links">
            <Link to="/items">Items</Link>
            <Link to="/myItems">My Items</Link>
            <Link to="/account">Account</Link>
            <Link to="/items/new">List An Item</Link>
          </div>
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
          <Link to="/howItWorks">How It Works</Link>
          <Link to="/about">About</Link>
          <Link to="/signUpLogIn">SignUp/LogIn</Link>
        </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
