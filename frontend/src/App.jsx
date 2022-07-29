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
  //useState hook for monitoring if user is logged in so that logout button can be swapped with login and register buttons
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useState hook to store the details of the user that is logged in currently (this is set in the login phase)
  const [userDetails, setUserDetails] = useState(null);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} userDetails={userDetails} />
        <main className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserDetails={setUserDetails}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserDetails={setUserDetails}
                />
              }
            />
            <Route exact path="/register" element={<Register />} />
            {isLoggedIn && (
              <Route exact path="/dashboard" element={<Dashboard />} />
            )}
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/slambook/:id" element={<SlamBook />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
