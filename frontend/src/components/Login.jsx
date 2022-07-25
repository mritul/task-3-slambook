import React from "react";
import { Link } from "react-router-dom";
const Login = ({
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
}) => {
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
    setLoginUsername("");
    setLoginPassword("");
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
