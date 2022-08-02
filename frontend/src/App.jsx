import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Search from "./pages/Search.jsx";
import Intro from "./pages/Intro.jsx";
import Profile from "./pages/Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SlamBook from "./pages/SlamBook";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  //useState hook for monitoring if user is logged in so that logout button can be swapped with login and register buttons
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navbar isLoggedIn={isLoggedIn} />
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Intro />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route exact path="/slambook/:id" element={<SlamBook />} />
            </Routes>
          </main>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
