import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Sign_Up.css";

const Sign_Up = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showerr, setShowerr] = useState("");

  const navigate = useNavigate();

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

    setShowerr("");
  };

  const validateForm = () => {
    const newErrors = {};

    // Role validation
    if (!formData.role) {
      newErrors.role = "Please select your role.";
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Phone validation - exactly 10 digits
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits.";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const register = async (e) => {
    e.preventDefault();

    // First perform frontend validation
    if (!validateForm()) {
      return;
    }

    setShowerr("");

    try {
      const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: formData.role,
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
          }),
        }
      );

      const json = await response.json();

      if (json.authtoken) {
        // Store authentication and user information
        sessionStorage.setItem(
          "auth-token",
          json.authtoken
        );

        sessionStorage.setItem(
          "name",
          formData.name
        );

        sessionStorage.setItem(
          "phone",
          formData.phone
        );

        sessionStorage.setItem(
          "email",
          formData.email
        );

        // Store user's role for the ProfileCard
        sessionStorage.setItem(
          "role",
          formData.role
        );

        // Redirect to Home page
        navigate("/");
        window.location.reload();
      } else {
  // Display backend validation errors
  if (json.error && Array.isArray(json.error)) {
    setShowerr(json.error[0].msg);
  } else {
    setShowerr(
      json.error ||
        "Registration failed. Please try again."
    );
  }
}
    } catch (error) {
      console.error(
        "Registration error:",
        error
      );

      setShowerr(
        "Unable to connect to the server. Please try again."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      role: "",
      name: "",
      phone: "",
      email: "",
      password: "",
    });

    setErrors({});
    setShowerr("");
  };

  return (
    <main className="signup-page">
      <div className="signup-card">

        {/* Heading */}
        <div className="signup-header">
          <h1>Sign Up</h1>

          <p>
            Create your StayHealthy account
          </p>
        </div>

        {/* Backend error */}
        {showerr && (
          <div
            className="err"
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {showerr}
          </div>
        )}

        {/* Sign Up Form */}
        <form
          className="signup-form"
          onSubmit={register}
        >

          {/* Role */}
          <div className="form-group">
            <label htmlFor="role">
              Role
            </label>

            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option
                value=""
                disabled
              >
                Select your role
              </option>

              <option value="patient">
                Patient
              </option>

              <option value="doctor">
                Doctor
              </option>

              <option value="admin">
                Admin
              </option>
            </select>

            {errors.role && (
              <small className="error-message">
                {errors.role}
              </small>
            )}
          </div>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            {errors.name && (
              <small className="error-message">
                {errors.name}
              </small>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
            />

            {errors.phone && (
              <small className="error-message">
                {errors.phone}
              </small>
            )}
          </div>

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

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />

            <small>
              Password must be at least 8 characters.
            </small>

            {errors.password && (
              <small className="error-message">
                {errors.password}
              </small>
            )}
          </div>

          {/* Buttons */}
          <div className="button-group">

            <button
              type="submit"
              className="submit-btn"
            >
              Sign Up
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

        {/* Login Link */}
        <p className="login-text">
          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
};

export default Sign_Up;