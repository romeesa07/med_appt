import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
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
        <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* Navigation links */}
      <ul className={`nav__links ${menuOpen ? "active" : ""}`}>
        <li className="link">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li className="link">
          <Link to="#" onClick={() => setMenuOpen(false)}>
            Appointments
          </Link>
        </li>

        <li className="link">
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <button className="btn1">Sign Up</button>
          </Link>
        </li>

        <li className="link">
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;