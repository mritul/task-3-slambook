import React, { useState } from "react";
import HelperMessage from "../components/HelperMessage";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // useState hooks for handling input fields
  //Login form
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //useState hook to show helper message if the entered username or password are incorrect in the login process
  const [incorrectLoginCredentials, setIncorrectLoginCredentials] =
    useState(false);

  useEffect(() => {
    if (auth.user) {
      navigate("/dashboard");
    }
    if (auth.user === false) {
      // Making the conditionally rendered helper message appear and then disappear in 2 seconds
      setIncorrectLoginCredentials(true);
      setTimeout(() => {
        setIncorrectLoginCredentials(false);
      }, 2000);
    }
  }, [auth.user]);

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

    // Logging in using the login function defined in the AuthContext
    auth.login(loginUsername, loginPassword);
    // Now after logging in the user state in the AuthContext gets set to the user
    // Hence if user is found we navigate to dashboard or else show the helper message (which is done in the useEffect that triggers whe auth.user changes)
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
