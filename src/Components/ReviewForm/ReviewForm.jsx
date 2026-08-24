import React from 'react';
import './ReviewForm.css';

const ReviewForm = ({
  doctorName = 'Doctor',
  doctorSpeciality = 'Speciality',
}) => {
  const handleReviewClick = () => {
    alert(`You can now write a review for ${doctorName}.`);
  };

  return (
    <div className="review-form-container">

      <div className="review-doctor-info">
        <h2>Review Your Consultation</h2>

        <p>
          <strong>Doctor:</strong> {doctorName}
        </p>

        <p>
          <strong>Speciality:</strong> {doctorSpeciality}
        </p>
      </div>

      <button
        type="button"
        className="write-review-btn"
        onClick={handleReviewClick}
      >
        Write a Review
      </button>

    </div>
  );
};

export default ReviewForm;