import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ isLoggedIn, userDetails }) => {
  const navigate = useNavigate();
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
            <Link to="/logout">
              <button
                className="btn btn-logout"
                onClick={() => console.log(userDetails)}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </Link>
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
