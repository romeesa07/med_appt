import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate login form
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Login function - connects React frontend to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const json = await response.json();

      if (json.authtoken) {
        // Store authentication information
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("email", formData.email);

        // Redirect to home page
        navigate("/");
        window.location.reload();
      } else {
        // Display backend error
        if (json.errors) {
          const backendErrors = {};

          for (const error of json.errors) {
            backendErrors.general = error.msg;
          }

          setErrors(backendErrors);
        } else {
          setErrors({
            general: json.error || "Invalid email or password.",
          });
        }
      }
    } catch (error) {
      console.error("Login error:", error);

      setErrors({
        general: "Unable to connect to the server. Please try again.",
      });
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
    });

    setErrors({});
  };

  // Show / hide password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="login-page">
      <div className="login-card">

        {/* Login Header */}
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your StayHealthy account</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>

          {/* General Backend Error */}
          {errors.general && (
            <small className="error-message">
              {errors.general}
            </small>
          )}

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />

            {errors.email && (
              <small className="error-message">
                {errors.email}
              </small>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <div className="password-field">

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="show-password"
                onClick={togglePassword}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {errors.password && (
              <small className="error-message">
                {errors.password}
              </small>
            )}
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#">
              Forgot Password?
            </a>
          </div>

          {/* Buttons */}
          <div className="button-group">

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>

        {/* Sign Up Link */}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>
    </main>
  );
};

export default Login;