import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { setAuthToken } from "../helpers/setAuthToken";
import { getFormJSON } from "../helpers/formParser";
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import image from "../components/assets/Illustration.png";

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [navigate, setNavigate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (form) => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    const loginPayload = getFormJSON(form);

    console.log(loginPayload);
    axios
      .post("https://localhost:7137/api/Authenticate/login", loginPayload)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setAuthToken(token);
        toast.success("Logged in successfully!");
        setNavigate(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const passRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;

    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 4) {
      errors.username = "Username must be more than 4 characters";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (!passRegex.test(values.password)) {
      errors.password =
        "Password should contains minimum 6 characters, first character is uppercase and contains at least one symbol";
    }
    return errors;
  };

  if(navigate) {
    return <Navigate to = "/todos"/>;
  }
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="flex justify-center items-center space-x-20">
        <div className="flex justify-center items-center">
          <img src={image} className="h-130"></img>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-128 pr-10 pl-10 pb-20 pt-20 border-none rounded-lg shadow-md">
            <div className="mb-5">
              <h1 className="text-3xl font-medium text-center">Log in</h1>
              <hr className="mb-4 mt-5" />
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.target;
                handleSubmit(form);
              } }
            >
              <div className="flex flex-col mb-3">
                <input
                  type="text"
                  className="w-full border rounded-md bg-input-grey p-3 focus:outline-0"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange} />
              </div>
              <p className="text-red-500 font-light m-2">
                {formErrors.username}
              </p>
              <div className="flex flex-col mb-3">
                <input
                  type="password"
                  className="w-full border rounded-md bg-input-grey p-3 focus:outline-0"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange} />
              </div>
              <p className="text-red-500 font-light m-2">
                {formErrors.password}
              </p>
              <div className="flex space-x-2 items-center mb-3">
                <input type="checkbox" className=""></input>
                <p>Remember me</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-button-orange rounded-md p-3 font-medium"
                  value="Submit"
                >
                  Confirm
                </button>
              </div>
              <div className="flex justify-center items-center mt-3">
                <p className="m-1">Don’t have an account?</p>
                <a
                  onClick={() => (window.location.href = "/register")}
                  className="text-link cursor-pointer"
                >
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
