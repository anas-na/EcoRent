import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import logo  from '../styles/media/EcoRent.svg'

const NavBar = () => {
return(

    <nav>
        <div className='navContainer'>
        <div>
        <img src={logo} className='logo'/>
        </div>
        <div className='links'>
        {/* <h1 className='navTitle'>EcoRent</h1> */}
        <Link to ='/items'>Items</Link>
        <Link to='/myItems'>My Items</Link>
        <Link to='/account'>Account</Link>
        <Link to='/items/new'>List An Item</Link>
        </div>
       
        </div>

    </nav>
)
} 

export default NavBar;