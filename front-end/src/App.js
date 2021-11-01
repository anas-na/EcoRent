import "./App.css";
import AuthRoute from "./components/AuthRoute.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import LogIn from "./pages/Login.js";
import UserProvider from "./providers/UserProvider.js";
import FourOFour from "./pages/FourOFour";
import HowItWorks from "./pages/HowItWorks.js";
import NavBar from "./components/NavBar";
import Index from "./pages/Index.js";
import ItemDetails from "./components/ItemDetails";
import ItemNew from "./components/ItemNew";
import Profile from "./components/Profile.js";
import Notifications from "./components/Notifications";
import Edit from "../src/pages/Edit";
import { About } from "./pages/About";
function App() {
  return (
    <div className="App">
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCboyUY2hGDoFXzjzQ2W78KYbnHv6vMKT4"
        async
      ></script>
      <UserProvider>
        <Router>
          <NavBar />
          {/* <Notifications /> */}
          <Switch>
            <AuthRoute exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route path="/howItWorks" component={HowItWorks} />
            <AuthRoute path="/newitem" component={ItemNew} />
            <AuthRoute exact path="/items/:id" component={ItemDetails} />
            <Route path="/items" component={Index} />
            <Route path="/myprofile" component={Profile} />
            <Route path="/editItems" component={Edit} />
            <AuthRoute path="notifications" component={Notifications} />
            <Route path="/about" component={About} />
            <Route path="*" component={FourOFour} />
            
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
