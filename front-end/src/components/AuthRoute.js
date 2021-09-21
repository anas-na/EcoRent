import React from "react";
import { Route, Redirect } from "react-router-dom";
import useUser from "../hooks/useUser"

const AuthRoute = ({ component: AuthorizeComponent, ...allProps }) => {
    const { user } = useUser()
    console.log(user)
    console.log(allProps)
    // <AuthRoute exact path="/" component={Home} />
  return (
    <Route
      {...allProps}
      render={(routeProps) => console.log(routeProps) ||  user 
        ? (<AuthorizeComponent { ...routeProps } />) 
        : (<Redirect to={"/login"} />)
    }
    />
  );
};

export default AuthRoute;
