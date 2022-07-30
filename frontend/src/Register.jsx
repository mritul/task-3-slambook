import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HelperMessage from "./components/HelperMessage";
const axios = require("axios").default;

const Register = () => {
  let navigate = useNavigate();

  //useState hooks for handling input fields
  // Registration form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("eee");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [about, setAbout] = useState("");

  //useState hook to show helper message if username is already taken in the registration process
  const [usernameTaken, setUsernameTaken] = useState(false);

  // Functions to handle input fields
  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };
  const handleRegisterUsernameInput = (e) => {
    //Not letting the user enter a username with space in it
    // To achieve this we see if the last character of the e.target.value is a space
    if (e.target.value[e.target.value.length - 1] !== " ") {
      setRegisterUsername(e.target.value);
    }
  };
  const handleRegisterPasswordInput = (e) => {
    setRegisterPassword(e.target.value);
  };
  const handleDepartmentInput = (e) => {
    setDepartment(e.target.value);
  };
  const handleAboutInput = (e) => {
    setAbout(e.target.value);
  };
  const handleBatchInput = (e) => {
    setBatch(e.target.value);
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
        about: about,
        batch: batch,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    })
      .then((response) => {
        if (response.data.msg === "Username available") {
          //Making all resets and redirecting to login on succesful submission to database(if the username is not taken already)
          setUsernameTaken(false);
          setFirstName("");
          setLastName("");
          setRegisterUsername("");
          setRegisterPassword("");
          setBatch("");
          setDepartment("eee");
          setAbout("");
          navigate("/login");
        } else {
          setUsernameTaken(true);
          //We keep a setTimeout so that the helper message that is conditionally rendered in the HTML disappears after 2s. We setTimout the hook to 2s than modifying the conditionally rendered HTML.
          setTimeout(() => {
            setUsernameTaken(false);
          }, 2000);
          // Resetting just the username field in case the username is already taken and giving the user an opportunity to fill the username field again
          setRegisterUsername("");
        }
      })
      .catch((err) => console.log(err));
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
              pattern="[a-zA-Z0-9]+"
              title="Username should be alphanumeric"
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
          <div className="form-group">
            <label>Batch:</label>
            <input
              type="number"
              placeholder="Year of graduation (2025,2026,etc...)"
              value={batch}
              onChange={handleBatchInput}
            />
          </div>
          <div className="form-group">
            <label>About</label>
            <textarea
              type="text"
              required
              placeholder="Write about yourself...(max limit 500 characters)"
              maxLength={600}
              className="about-field"
              value={about}
              onChange={handleAboutInput}
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
          {usernameTaken && (
            <HelperMessage messageContent="That username is already taken" />
          )}
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