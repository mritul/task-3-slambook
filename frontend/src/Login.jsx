import React, { useState } from "react";
import HelperMessage from "./components/HelperMessage";
import { Link, useNavigate } from "react-router-dom";
const axios = require("axios");
const Login = () => {
  const navigate = useNavigate();

  // useState hooks for handling input fields
  //Login form
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //useState hook to show helper message if the entered username or password are incorrect in the login process
  const [incorrectLoginCredentials, setIncorrectLoginCredentials] =
    useState(false);

  // Handling Input fields
  const handleUsernameInput = (e) => {
    setLoginUsername(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setLoginPassword(e.target.value);
  };

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    })
      .then((res) => {
        // setUserDetails(res.data); // Since this state is global(passed through App.jsx), the user details can be accessed anywhere in this react app
        if (res.data.info.message === "Login successful") {
          // setIsLoggedIn(true);
          navigate("/dashboard");
        } else {
          // Making the conditionally rendered helper message appear and then disappear in 2 seconds
          setIncorrectLoginCredentials(true);
          setTimeout(() => {
            setIncorrectLoginCredentials(false);
          }, 2000);
        }
        setLoginUsername("");
        setLoginPassword("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Login">
      <form id="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="underline">-</div>
        <input
          type="text"
          required
          placeholder="Enter your username"
          value={loginUsername}
          onChange={handleUsernameInput}
        />
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={loginPassword}
          onChange={handlePasswordInput}
        />
        <button className="btn login-submit-btn">Login</button>
        {incorrectLoginCredentials && (
          <HelperMessage messageContent="Incorrect username or password" />
        )}
        <p className="helper-msg">
          Don't have an account ?{" "}
          <Link to="/register" className="link-text">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
