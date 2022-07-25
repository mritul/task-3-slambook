import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar />
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
                />
              }
            />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
