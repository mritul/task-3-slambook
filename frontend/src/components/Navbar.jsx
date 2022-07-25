import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="Navbar">
      <h1>Slambook App</h1>
      <div className="btn-panel">
        {isLoggedIn ? (
          <Link to="/logout">
            <button className="btn btn-logout">Logout</button>
          </Link>
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
