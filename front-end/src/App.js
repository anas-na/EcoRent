import AuthRoute from "./components/AuthRoute.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import LogIn from "./pages/Login.js";
import UserProvider from "./providers/UserProvider.js";
import FourOFour from "./pages/FourOFour"
import MyItems from "./components/MyItems.js";
import HowItWorks from "./pages/HowItWorks.js";
import ItemNew from "./components/ItemNew.js";
import ItemsList from "./components/ItemsList"
import Index from "./pages/Index.js";

function App() {

  return (
    <div>
      <UserProvider>
      <Router>
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={LogIn}/>

        <AuthRoute path ='/howItWorks' component={HowItWorks}/>
        <AuthRoute path='/myItems' component={MyItems} />
        <AuthRoute path ='/items/new' component={ItemNew}/>
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
