import React from "react";
import { Route, Redirect } from "react-router-dom";
import useUser from "../hooks/useUser"

const AuthRoute = ({ component: AuthorizeComponent, ...allProps }) => {
    const { user } = useUser()
    if (!user) {
      console.log("ABOUT TO REDIRECT TO LOGIN")
    }
    // <AuthRoute exact path="/" component={Home} />
  return (
    <Route
      {...allProps}
      render={(routeProps) => user 
        ? (<AuthorizeComponent { ...routeProps } />) 
        : (<Redirect to={"/login"} />)
    }
    />
  );
};

export default AuthRoute;
