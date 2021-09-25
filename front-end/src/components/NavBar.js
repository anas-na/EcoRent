import { Link } from 'react-router-dom'

const NavBar = () => {
return(
    <nav>
        <Link to ='/items'>Items</Link>
        <Link to='/myItems'>My Items</Link>
        <Link to='/account'>Account</Link>
        <Link to='/items/new'>List An Item</Link>

    </nav>
)
} 

export default NavBar;