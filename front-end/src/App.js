import './App.css'
import AuthRoute from "./components/AuthRoute.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import LogIn from "./pages/Login.js";
import UserProvider from "./providers/UserProvider.js";
import FourOFour from "./pages/FourOFour"
import MyItems from "./components/MyItems.js";
import HowItWorks from "./pages/HowItWorks.js";
// import ListAnItem from "./pages/New.js";
import NavBar from "./components/NavBar";
import Index from "./pages/Index.js";
import ItemDetails from './components/ItemDetails';
import ItemNew from './components/ItemNew';
import Profile from "./components/Profile.js";
import Notifications from './components/Notifications';

function App() {

  return (
    <div className='App'>
      <script 
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCboyUY2hGDoFXzjzQ2W78KYbnHv6vMKT4" 
      async
    ></script>
      <UserProvider>
      <Router>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={LogIn}/>
        <Route path='/howItWorks' component={HowItWorks}/>
        <AuthRoute path='/newitem' component={ItemNew}/>
        <AuthRoute exact path='/items/:id' component={ItemDetails} />
        <AuthRoute path='/myItems' component={MyItems} />
        <Route path='/items'  component={Index}/>
        <AuthRoute path='/myprofile' component={Profile}/>
        <Route path='/editItems' component={Edit}/>
        {/* <Route path='/account' component={Account}/> */}
        <AuthRoute path='notifications' component={Notifications}/>


        <Route  path="*" component={FourOFour}/>
      </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
