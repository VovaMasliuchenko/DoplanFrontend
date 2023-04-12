import React from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken"
import { getFormJSON } from "../helpers/formParser";
import Routes from "../routes";

function Login() {

  const handleSubmit = (form) => {
    //reqres registered sample user
    const loginPayload = getFormJSON(form);

    console.log(loginPayload);
    axios.post("https://localhost:7137/api/Authenticate/login", loginPayload)
      .then(response => {
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/todos'

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
    <h1>Welcome</h1>
    <div>
      <input type="text" id="username" name="username" placeholder="Username"/>
      <label htmlFor="username">Username</label>
      <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
      <label htmlFor="password">Password</label>
    </div>
    <button type="submit" value="Submit">Sign in</button>
    <button onClick={() => window.location.href = '/register'}>Register</button>
  </form>
</main>
  );
}
export default Login