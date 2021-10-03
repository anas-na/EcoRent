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
            <Link to="/"><img src={logo} className="logo" /></Link>
          </div>
          <div className="links">
            <NavLink to="/items" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}}>Items</NavLink>
            <NavLink to="/myItems" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}}>My Items</NavLink>
            <NavLink to="/newitem" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}}>List An Item</NavLink>
            <NavLink to="/account" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}}>Account</NavLink>
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
            <NavLink to="/howItWorks" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}} >How It Works</NavLink>
            <NavLink to="/about" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}} >About</NavLink>
            <NavLink to="/login" activeStyle={{color: '#98bd89', fontSize: '1.8em', fontWeight:' bold'}} >SignUp/LogIn</NavLink>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
