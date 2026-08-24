import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
    sessionStorage.removeItem("role");

    setMenuOpen(false);
    setProfileOpen(false);

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
            to="/find-doctor"
            onClick={() => setMenuOpen(false)}
          >
            Appointments
          </Link>
        </li>

        {/* Reviews */}
        <li className="link">
          <Link
            to="/reviews"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
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

        {/* Show profile dropdown when user IS logged in */}
        {authToken && (
          <li className="link profile-dropdown">
            <button
              className="profile-dropdown-btn"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              Welcome, {displayName}
              <span className="dropdown-arrow">
                ▼
              </span>
            </button>

            {profileOpen && (
  <div className="profile-dropdown-menu">

    <Link
      to="/profile"
      onClick={() => {
        setProfileOpen(false);
        setMenuOpen(false);
      }}
    >
      Profile
    </Link>

    <Link
      to="/reports"
      onClick={() => {
        setProfileOpen(false);
        setMenuOpen(false);
      }}
    >
      Your Reports
    </Link>

    <button
      className="dropdown-logout"
      onClick={handleLogout}
    >
      Logout
    </button>

  </div>
)}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;