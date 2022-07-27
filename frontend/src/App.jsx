import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Search from "./components/Search.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //useState hooks for handling input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("eee");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [about, setAbout] = useState("");
  const [batch, setBatch] = useState("");
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
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
