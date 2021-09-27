import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router";
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
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input name="displayName" type="text" id="displayName" />
        <div>
          <label htmlFor="email">Your Email</label>
          <input name="email " type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input name="address" type="address" id="address" />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date Of Birth</label>
          <input name="dateOfBirth" type="date" id="dateOfBirth" />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input name="phoneNumber" type="tel" id="phoneNumber" />
        </div>
        <button type="submit">Register</button>
        </div>
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
