import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({
  doctorName,
  doctorSpeciality,
  onSubmit,
  onCancel
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      phoneNumber,
      date,
      time,
      doctorName,
      doctorSpeciality
    });

    setName('');
    setPhoneNumber('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">

      <h2>Book Appointment</h2>

      <p className="appointment-doctor">
        {doctorName} - {doctorSpeciality}
      </p>

      <div className="form-group">
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="[A-Za-z][A-Za-z ]{1,49}"
          title="Name must contain at least 2 letters."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>

        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="\+?[0-9]{10,15}"
          title="Phone number must contain 10 to 15 digits."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Appointment Date:</label>

        <input
          type="date"
          id="date"
          value={date}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Appointment Time:</label>

        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="05:00 PM">05:00 PM</option>
        </select>
      </div>

      <div className="appointment-form-buttons">

        <button type="submit" className="confirm-appointment-btn">
          Book Appointment
        </button>

        <button
          type="button"
          className="cancel-appointment-btn"
          onClick={onCancel}
        >
          Cancel
        </button>

      </div>

    </form>
  );
};

export default AppointmentForm;
