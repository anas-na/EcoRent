import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import AuthRoute from "./components/AuthRoute.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as mdb from 'mdb-ui-kit'; 
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import LogIn from "./pages/Login.js";
const API = apiURL();

function App() {
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <Router>
        <AuthRoute exact path = "/" component={Home} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={LogIn}/>
      </Router>
    </div>
  );
}

export default App;
