import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Get logged-in user information from sessionStorage
  const authToken = sessionStorage.getItem("auth-token");
  const storedName = sessionStorage.getItem("name");
  const storedEmail = sessionStorage.getItem("email");

  // Extract name from email if name is not available
  const displayName =
    storedName ||
    (storedEmail ? storedEmail.split("@")[0] : "");

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("email");

    setMenuOpen(false);

    // Redirect to home page
    navigate("/");
    window.location.reload();
  };

  return (
    <nav>
      {/* Logo */}
      <div className="nav__logo">
        <Link to="/">
          StayHealthy
          <span>.</span>
        </Link>
      </div>

      {/* Mobile menu icon */}
      <div className="nav__icon" onClick={handleClick}>
        <i
          className={`fa ${
            menuOpen ? "fa-times" : "fa-bars"
          }`}
        ></i>
      </div>

      {/* Navigation links */}
      <ul
        className={`nav__links ${
          menuOpen ? "active" : ""
        }`}
      >
        {/* Home */}
        <li className="link">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        {/* Appointments */}
        <li className="link">
          <Link
            to="#"
            onClick={() => setMenuOpen(false)}
          >
            Appointments
          </Link>
        </li>

        {/* Show Sign Up and Login when user is NOT logged in */}
        {!authToken && (
          <>
            <li className="link">
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
              >
                <button className="btn1">
                  Sign Up
                </button>
              </Link>
            </li>

            <li className="link">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                <button className="btn1">
                  Login
                </button>
              </Link>
            </li>
          </>
        )}

        {/* Show username and Logout when user IS logged in */}
        {authToken && (
          <>
            <li className="link user-name">
              Welcome, {displayName}
            </li>

            <li className="link">
              <button
                className="btn1 logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;