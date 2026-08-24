import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({
  name,
  speciality,
  experience,
  ratings,
}) => {
  return (
    <div className="doctor-card-container">
      
      <div className="doctor-card-details-container">

        {/* Doctor Profile Icon */}
        <div className="doctor-card-profile-image-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>

        {/* Doctor Details */}
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">
            {name}
          </div>

          <div className="doctor-card-detail-speciality">
            {speciality}
          </div>

          <div className="doctor-card-detail-experience">
            {experience} years experience
          </div>

          <div className="doctor-card-detail-consultationfees">
            Ratings: {ratings}
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="doctor-card-book-button-container">
          <button className="book-appointment-btn">
            <div>Book Appointment</div>
          </button>
          <div className="no-booking-fee">
            No Booking Fee
          </div>
        </div>

      </div>

    </div>
  );
};

export default DoctorCard;