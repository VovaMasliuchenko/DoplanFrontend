import React from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"
import { getFormJSON } from "../helpers/formParser";
import Routes from "../routes";

function Register() {

  const handleSubmit = (form) => {
    //reqres registered sample user
    const loginPayload = getFormJSON(form);

    console.log(loginPayload);
    axios.post("https://localhost:7137/api/Authenticate/register", loginPayload)
      .then(response => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/login'

      })
      .catch(err => console.log(err));
  };

  return (
    <main className="form-container form-signin m-auto mt-5">
  <form 
  onSubmit={(event) => {
        event.preventDefault()
        const form = event.target;
        handleSubmit(form);
      }}>
    <h1 className="h3 mb-3 fw-normal">Register</h1>

    <div className="form-floating mb-2">
      <input type="text" id="username" name="username" placeholder="Name"/>
      <label htmlFor="username">Username</label>
      <input type="email" id="email" name="email" placeholder="Email"/>
      <label htmlFor="email">Email</label>
      <input type="password" id="password" name="password" placeholder="Password"/>
      <label htmlFor="password">Password</label>
    </div>

    <button type="submit" value="Submit" onClick={() => handleSubmit}>Confirm</button>
  </form>
</main>
  );
}
export default Register