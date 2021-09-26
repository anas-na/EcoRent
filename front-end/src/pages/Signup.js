import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useUser from "../hooks/useUser";
import { apiURL } from "../util/apiURL";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import axios from "axios";
const API = apiURL();

const SignUp = () => {
  const user = useContext(UserContext);
  const { signUpFireBase } = useUser();
  const history = useHistory();

  const handleSignUp = async (event) => {
    event.preventDefault();

    let {
      firstName,
      lastName,
      displayName,
      phoneNumber,
      dateOfBirth,
      address,
      email,
      password,
    } = event.target.elements;

    const body = {
      firstName: firstName.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      dateOfBirth: dateOfBirth.value,
      address: address.value,
      email: email.value,
      password: password.value,
    };
    try {
      const res = await signUpFireBase(
        email.value,
        password.value,
        displayName.value
      );
      body.id = res.user.uid;
      await axios.post(`${API}/users`, body);
      history.push("/");
    } catch (error) {
      console.log("SignUp Function:", error);
    }
  };

  if(user) {
    return <Redirect to="/" />;
}
    
    return (
      <section>
      <h2>Create an account</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <input name="firstName" type="text" id="firstName" />
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
        </div>
        <div>
          <input name="lastName" type="text" id="lastName" />
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
        </div>
        <div>
          <input name="displayName" type="text" id="displayName" />
          <label className="form-label" htmlFor="displayName">
            Display Name
          </label>
        </div>

        <div>
          <input name="email " type="email" id="email" />
          <label className="form-label" htmlFor="email">
            Your Email
          </label>
        </div>

        <div>
          <input name="password" type="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input name="address" type="adress" id="address" />
          <label htmlFor="address">Adress</label>
        </div>
        <div>
          <input name="dateOfBirth" type="date" id="dateOfBirth" />
          <label htmlFor="dateOfBirth">Date Of Birth</label>
        </div>
        <div>
          <input name="phoneNumber" type="tel" id="phoneNumber" />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        <button type="submit">Register</button>
      </form>
      <p>
        Have already an account?{" "}
        <a href="/login" className="fw-bold text-body">
          <u>Login here</u>
        </a>
      </p>
    </section>
  );
};

export default SignUp;
