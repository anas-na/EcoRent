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
import ListAnItem from "./pages/New.js";
import NavBar from "./components/NavBar";
import ItemsList from "./components/ItemsList"
import Index from "./pages/Index.js";

function App() {

  return (
    <div className='App'>
      <UserProvider>
      <Router>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={LogIn}/>
        <AuthRoute path ='/howItWorks' component={HowItWorks}/>
        
        <AuthRoute path='/myItems' component={MyItems} />
        <AuthRoute path ='/items/new' component={ListAnItem}/>
        <Route path='/items'  component={Index}/>
        {/* <Route path='/account' component={Account}/> */}


        <Route  path="*" component={FourOFour}/>
      </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
