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

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
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
