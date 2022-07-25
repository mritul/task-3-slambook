import React from "react";
import { Link } from "react-router-dom";
const Register = ({
  setFirstName,
  firstName,
  setLastName,
  lastName,
  setDepartment,
  department,
  setRegisterUsername,
  registerUsername,
  setRegisterPassword,
  registerPassword,
}) => {
  // Functions to handle input fields
  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };
  const handleRegisterUsernameInput = (e) => {
    setRegisterUsername(e.target.value);
  };
  const handleRegisterPasswordInput = (e) => {
    setRegisterPassword(e.target.value);
  };
  const handleDepartmentInput = (e) => {
    setDepartment(e.target.value);
  };

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setRegisterUsername("");
    setRegisterPassword("");
    setDepartment("");
  };
  return (
    <div className="Register">
      <div className="card-left">
        <h1>Register</h1>
        <div className="underline">-</div>
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First name:</label>
            <input
              required
              type="text"
              value={firstName}
              onChange={handleFirstNameInput}
            />
          </div>
          <div className="form-group">
            <label>Last name:</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={handleLastNameInput}
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              required
              type="text"
              value={registerUsername}
              onChange={handleRegisterUsernameInput}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              required
              type="password"
              value={registerPassword}
              onChange={handleRegisterPasswordInput}
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              required
              type="text"
              value={department}
              onChange={handleDepartmentInput}
            />
          </div>
          <button className="btn register-submit-btn" onSubmit={handleSubmit}>
            Register
          </button>
          <p className="helper-msg">
            Already have an account ?{" "}
            <Link to="/login" className="link-text">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="card-right">
        <img
          src="assets/register-svg.svg"
          alt="Register illustration"
          id="register-svg"
        />
      </div>
    </div>
  );
};

export default Register;
