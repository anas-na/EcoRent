import { Link } from 'react-router-dom'

const DefNavBar = () => {
    return(
        <nav>
            <Link to='/howItWorks'>How It Works</Link>
            <Link to='/about'>About</Link>
            <Link to='/signUpLogIn'>SignUp/LogIn</Link>
        </nav>
    )
}

export default DefNavBar;