import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("auth-token");

    if (!authToken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authToken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authToken || !email) {
        navigate("/login");
        return;
      }

      const response = await fetch(`${API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Email: email,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const user = await response.json();

      setUserDetails(user);
      setUpdatedDetails(user);

      sessionStorage.setItem("name", user.name || "");
      sessionStorage.setItem("phone", user.phone || "");
      sessionStorage.setItem("email", user.email || "");
      sessionStorage.setItem("role", user.role || "");
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleEdit = () => {
    setUpdatedDetails(userDetails);
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedDetails({
      ...updatedDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      if (!authToken || !email) {
        navigate("/login");
        return;
      }

      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify({
          name: updatedDetails.name,
          phone: updatedDetails.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const updatedUser = {
        ...userDetails,
        name: updatedDetails.name,
        phone: updatedDetails.phone,
      };

      setUserDetails(updatedUser);
      setUpdatedDetails(updatedUser);
      setEditMode(false);

      sessionStorage.setItem("name", updatedDetails.name || "");
      sessionStorage.setItem("phone", updatedDetails.phone || "");

      alert("Profile Updated Successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Unable to update profile. Please try again.");
    }
  };

  const formatRole = (role) => {
    if (!role) {
      return "Not available";
    }

    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">

        <div className="profile-icon">
          <i className="fa fa-user"></i>
        </div>

        <h2>My Profile</h2>

        <div className="profile-details">

          {/* Name */}
          <div className="profile-field">
            <strong>Name:</strong>

            {editMode ? (
              <input
                type="text"
                name="name"
                value={updatedDetails.name || ""}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>{userDetails.name || "Not available"}</span>
            )}
          </div>

          {/* Email - NOT EDITABLE */}
          <div className="profile-field">
            <strong>Email:</strong>

            <input
              type="email"
              value={userDetails.email || "Not available"}
              disabled
              className="profile-input disabled-input"
            />
          </div>

          {/* Phone */}
          <div className="profile-field">
            <strong>Phone:</strong>

            {editMode ? (
              <input
                type="text"
                name="phone"
                value={updatedDetails.phone || ""}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>{userDetails.phone || "Not available"}</span>
            )}
          </div>

          {/* Role - NOT EDITABLE */}
          <div className="profile-field">
            <strong>Role:</strong>

            <input
              type="text"
              value={formatRole(userDetails.role)}
              disabled
              className="profile-input disabled-input"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="profile-buttons">

          {!editMode ? (
            <button
              type="button"
              className="btn1"
              onClick={handleEdit}
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              className="btn1"
              onClick={handleSubmit}
            >
              Save
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProfileCard;