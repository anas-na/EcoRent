import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { useContext, useState, useEffect } from "react";

const AuthRoute = ({ component: AuthorizeComponent, ...allProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

    const user = useContext(UserContext);
    if (!user) {
      console.log("ABOUT TO REDIRECT TO LOGIN")
    }
    // <AuthRoute exact path="/" component={Home} />
    if(loading) {
      return <div>loading ...</div>
    }
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
