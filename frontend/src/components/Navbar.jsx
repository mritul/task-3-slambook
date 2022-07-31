import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const publicRoutes = ["/login", "/register", "/"];

  // This state is maintained to toggle the button panels on navbar between register-login panel and logout-profile-search-panel
  const [isLoggedIn, setIsLoggedIn] = useState(auth.user ? true : false);

  // Everytime auth.user changes (between user details and null), we run a useEffect to change the isLoggedIn state so that the button panels appear accordingly
  useEffect(() => {
    setIsLoggedIn(auth.user ? true : false);
    if (!auth.user && !publicRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [auth.user]);

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <nav className="Navbar">
      <h1
        onClick={() => {
          navigate("/search");
        }}
      >
        Slambook App
      </h1>
      <div className="btn-panel">
        {isLoggedIn ? (
          <>
            <Link to="/search">
              <button className="btn btn-search-nav">Search</button>
            </Link>
            <Link to="/dashboard">
              <button className="btn btn-profile-nav">
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>
            <button className="btn btn-logout" onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="btn btn-register">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-login">Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
