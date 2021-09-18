import React from "react";
import { useHistory } from "react-router";
import useUser from "../hooks/useUser";

const SignUp = () => {
  const { signUp } = useUser();
  const history = useHistory();
    console.log(signUp)
  const handleSignUp = async (event) => {
    event.preventDefault();
    let {
        firstName,
        lastName,
        phoneNumber,
        dateOfBirth,
        address,
        email,
        password,
    } = event.target.elements;

    try {
      await signUp(
        firstName.value,
        lastName.value,
        phoneNumber.value,
        dateOfBirth.value,
        address.value,
        email.value,
        password.value
        );
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section>
      <h2>Create an account</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <input name='firstName' type='text' id='firstName' />
          <label class='form-label' for='firstName'>
            First Name
          </label>
        </div>
        <div>
          <input name='lastName' type='text' id='lastName' />
          <label class='form-label' for='lastName'>
            Last Name
          </label>
        </div>

        <div>
          <input name='email ' type='email' id='email' />
          <label class='form-label' for='email'>
            Your Email
          </label>
        </div>

        <div>
          <input name='password' type='password' id='password' />
          <label for='password'>Password</label>
        </div>
        <div>
          <input name='address' type='adress' id='address' />
          <label for='address'>Adress</label>
        </div>
        <div>
          <input name='dateOfBirth' type='date' id='dateOfBirth' />
          <label for='dateOfBirth'>Date Of Birth</label>
        </div>
        <div>
          <input name='phoneNumber' type='tel' id='phoneNumber' />
          <label for='phoneNumber'>Phone Number</label>
        </div>
        <button type='submit'>Register</button>
      </form>
      <p>
        Have already an account?{" "}
        <a href='/login' class='fw-bold text-body'>
          <u>Login here</u>
        </a>
      </p>
    </section>
  );
};

export default SignUp;
