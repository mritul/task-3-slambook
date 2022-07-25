import React from "react";
import { Link, useNavigate } from "react-router-dom";
const axios = require("axios").default;

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
  let navigate = useNavigate();
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
    // Since we use preventDefault, the form action won't be executed and hence we perform the post request through axios
    //Registration Form Submission by POST request through axios
    axios({
      method: "post",
      data: {
        firstName: firstName,
        lastName: lastName,
        username: registerUsername,
        password: registerPassword,
        department: department,
      },
      url: "http://localhost:5000/api/users/register",
    });
    setFirstName("");
    setLastName("");
    setRegisterUsername("");
    setRegisterPassword("");
    setDepartment("eee");
    //Redirect to login on submission
    navigate("/login");
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
              minLength={5}
              name="username"
              value={registerUsername}
              onChange={handleRegisterUsernameInput}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              required
              type="password"
              minLength={6}
              name="password"
              value={registerPassword}
              onChange={handleRegisterPasswordInput}
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <select
              value={department}
              name="department"
              onChange={handleDepartmentInput}
            >
              <option value="cse">CSE</option>
              <option value="ece">ECE</option>
              <option value="eee">EEE</option>
              <option value="mech">MECH</option>
              <option value="prod">PROD</option>
              <option value="ice">ICE</option>
              <option value="chem">CHEM</option>
              <option value="civil">CIVIL</option>
              <option value="meta">META</option>
            </select>
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
