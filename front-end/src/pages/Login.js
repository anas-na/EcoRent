import React from "react";
import useUser from "../hooks/useUser";
import { useHistory, Redirect } from "react-router";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const LogIn = () => {
  const string = useContext(UserContext);
  const { user, logIn } = useUser();
  const history = useHistory();
  const handleLogIn = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await logIn(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <section>
      <h2>Login</h2>
      <p>Please enter your login and password!</p>
      <form onSubmit={handleLogIn}>
        <div>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div>
          <input
            type="password"
            id="password"
            className="form-control form-control-lg"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-white-50 fw-bold">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LogIn;
