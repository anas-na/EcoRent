import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import AuthRoute from "./components/AuthRoute.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import LogIn from "./pages/Login.js";
import FourOFour from "./pages/FourOFour"
const API = apiURL();

function App() {
  // useEffect(() => {
    
  // }, []);
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={LogIn}/>
        <AuthRoute exact path="/" component={Home} />
        <Route  path="*" component={FourOFour}/>
        {/* <Route path = "*">
          <FourOFour />
        </Route> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
