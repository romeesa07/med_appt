import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({
  doctorName = 'Doctor',
  doctorSpeciality = 'Speciality',
}) => {
  const [showForm, setShowForm] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRating = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.review.trim() ||
      formData.rating === 0
    ) {
      setShowWarning(true);
      return;
    }

    setShowWarning(false);
    setSubmittedReview({ ...formData });
    setShowForm(false);

    setFormData({
      name: '',
      review: '',
      rating: 0,
    });
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

      {!submittedReview && !showForm && (
        <button
          type="button"
          className="write-review-btn"
          onClick={handleButtonClick}
        >
          Click Here
        </button>
      )}

      {showForm && !submittedReview && (
        <form onSubmit={handleSubmit} className="feedback-form">

          <h3>Give Your Feedback</h3>

          {showWarning && (
            <p className="review-warning">
              Please fill out your name, review and rating.
            </p>
          )}

          <div className="review-form-group">
            <label htmlFor="name">Name:</label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="review-form-group">
            <label htmlFor="review">Review:</label>

            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="rating-section">

            <label>Rating:</label>

            <div className="rating-buttons">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={
                    formData.rating === rating
                      ? 'rating-btn selected'
                      : 'rating-btn'
                  }
                  onClick={() => handleRating(rating)}
                >
                  {rating}
                </button>
              ))}
            </div>

            <p className="rating-text">
              {formData.rating > 0
                ? `You selected ${formData.rating} out of 5`
                : 'Select a rating from 1 to 5'}
            </p>

          </div>

          <button
            type="submit"
            className="submit-review-btn"
          >
            Submit
          </button>

        </form>
      )}

      {submittedReview && (
        <div className="submitted-review">

          <h3>Thank You for Your Feedback!</h3>

          <p>
            <strong>Name:</strong> {submittedReview.name}
          </p>

          <p>
            <strong>Review:</strong> {submittedReview.review}
          </p>

          <p>
            <strong>Rating:</strong> {submittedReview.rating}/5
          </p>

          <button
            type="button"
            className="review-submitted-btn"
            disabled
          >
            Feedback Submitted
          </button>

        </div>
      )}

    </div>
  );
};

export default ReviewForm;