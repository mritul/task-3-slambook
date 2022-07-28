import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";
import Search from "./Search.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SlamBook from "./SlamBook";

function App() {
  //useState hooks for handling input fields
  // Registration form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("eee");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [about, setAbout] = useState("");

  //Login form
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //Slambook form
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  //useState hook for monitoring if user is logged in so that logout button can be swapped with login and register buttons
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //useState hook to show helper message if username is already taken in the registration process
  const [usernameTaken, setUsernameTaken] = useState(false);
  //useState hook to show helper message if user is not found on searching for profile
  const [userNotFound, setUserNotFound] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  loginUsername={loginUsername}
                  loginPassword={loginPassword}
                  setLoginPassword={setLoginPassword}
                  setLoginUsername={setLoginUsername}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  loginUsername={loginUsername}
                  loginPassword={loginPassword}
                  setLoginPassword={setLoginPassword}
                  setLoginUsername={setLoginUsername}
                />
              }
            />
            <Route
              exact
              path="/register"
              element={
                <Register
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setRegisterUsername={setRegisterUsername}
                  setRegisterPassword={setRegisterPassword}
                  setDepartment={setDepartment}
                  firstName={firstName}
                  lastName={lastName}
                  registerUsername={registerUsername}
                  registerPassword={registerPassword}
                  department={department}
                  usernameTaken={usernameTaken}
                  setUsernameTaken={setUsernameTaken}
                  about={about}
                  setAbout={setAbout}
                  batch={batch}
                  setBatch={setBatch}
                />
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <Dashboard
                  userNotFound={userNotFound}
                  setUserNotFound={setUserNotFound}
                />
              }
            />
            <Route
              exact
              path="/search"
              element={
                <Search
                  userNotFound={userNotFound}
                  setUserNotFound={setUserNotFound}
                />
              }
            />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route
              exact
              path="/slambook/:id"
              element={
                <SlamBook
                  answer1={answer1}
                  answer2={answer2}
                  answer3={answer3}
                  setAnswer1={setAnswer1}
                  setAnswer2={setAnswer2}
                  setAnswer3={setAnswer3}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
