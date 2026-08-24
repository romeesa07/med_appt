import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const name = sessionStorage.getItem("name") || "User";
  const email = sessionStorage.getItem("email") || "Not available";
  const phone = sessionStorage.getItem("phone") || "Not available";
  const role = sessionStorage.getItem("role") || "Not available";

  return (
    <div className="profile-card-container">
      <div className="profile-card">

        <div className="profile-icon">
          <i className="fa fa-user"></i>
        </div>

        <h2>My Profile</h2>

        <div className="profile-details">

          <p>
            <strong>Name:</strong> {name}
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Phone:</strong> {phone}
          </p>

          <p>
            <strong>Role:</strong>{" "}
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </p>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;