import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const DoctorCard = ({
  name,
  speciality,
  experience,
  ratings,
}) => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointment, setAppointment] = useState(null);

  const handleAppointmentSubmit = (appointmentData) => {
  console.log('Appointment booked:', appointmentData);

  // Store doctor information
  localStorage.setItem(
    'doctorData',
    JSON.stringify({
      name: name,
      speciality: speciality,
      experience: experience,
      ratings: ratings
    })
  );

  // Store appointment information using doctor's name
  localStorage.setItem(
    name,
    JSON.stringify(appointmentData)
  );

  alert(
    `Appointment booked successfully with ${name}!`
  );
  
  setAppointment(appointmentData);
  setShowAppointmentForm(false);
};

const handleCancelAppointment = () => {
    setAppointment(null);
  
    localStorage.removeItem(name);
  
    localStorage.removeItem('doctorData');
  
    alert(
      `Appointment with ${name} has been cancelled.`
    );
  };

  return (
    <>
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

            {/* Booking Button */}
            <div className="doctor-card-book-button-container">

              {appointment ? (
                <>
                  <button
                    type="button"
                    className="book-appointment-btn cancel-appointment-btn"
                    onClick={handleCancelAppointment}
                  >
                    Cancel Appointment
                  </button>

                  <div className="appointment-status">
                    Appointment Booked
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="book-appointment-btn"
                    onClick={() => setShowAppointmentForm(true)}
                  >
                    Book Appointment
                  </button>

                  <div className="no-booking-fee">
                    No Booking Fee
                  </div>
                </>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Appointment Modal */}
      {showAppointmentForm && (
        <div className="appointment-modal-overlay">

          <div className="appointment-modal">

            <button
              type="button"
              className="appointment-modal-close"
              onClick={() => setShowAppointmentForm(false)}
              aria-label="Close appointment form"
            >
              &times;
            </button>

            <AppointmentForm
              doctorName={name}
              doctorSpeciality={speciality}
              onSubmit={handleAppointmentSubmit}
              onCancel={() => setShowAppointmentForm(false)}
            />

          </div>

        </div>
      )}
    </>
  );
};

export default DoctorCard;
