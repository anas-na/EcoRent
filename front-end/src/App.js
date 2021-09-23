import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import AuthRoute from "./components/AuthRoute.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import LogIn from "./pages/Login.js";
import UserProvider from "./providers/UserProvider.js";
import FourOFour from "./pages/FourOFour"
import MyItems from "./components/MyItems.js";
import HowItWorks from "./pages/HowItWorks.js";


const API = apiURL();

function App() {
  // useEffect(() => {
    
  // }, []);
  return (
    <div>
      <UserProvider>
      <Router>
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={LogIn}/>

        <Route path ='/howItWorks'> <HowItWorks /> </Route>
        <Route path='/myItems' component={MyItems} />
        <Route path='/items'  component={ItemList}/>
        <Route path='/account' component={Account}/>
        <Route path ='/listItem' component={ItemNew}/>


        <Route  path="*" component={FourOFour}/>
        
      </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
