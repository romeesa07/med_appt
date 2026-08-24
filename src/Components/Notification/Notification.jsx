import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const checkAppointment = () => {
      const storedDoctorData = JSON.parse(
        localStorage.getItem('doctorData')
      );

      if (storedDoctorData) {
        const storedAppointment = JSON.parse(
          localStorage.getItem(storedDoctorData.name)
        );

        if (storedAppointment) {
          setAppointmentData(storedAppointment);
          setShowNotification(true);
        } else {
          setAppointmentData(null);
          setShowNotification(false);
        }
      } else {
        setAppointmentData(null);
        setShowNotification(false);
      }
    };

    // Check when Notification first loads
    checkAppointment();

    // Check for changes after booking/cancellation
    const interval = setInterval(checkAppointment, 500);

    return () => clearInterval(interval);
  }, []);

  if (!showNotification || !appointmentData) {
    return null;
  }

  return (
    <div className="notification-container">
      <div className="notification-card">

        <h3>Appointment Details</h3>

        <p>
          <strong>Doctor:</strong>{' '}
          {appointmentData.doctorName || 'Doctor'}
        </p>

        <p>
          <strong>Patient:</strong>{' '}
          {appointmentData.name}
        </p>

        <p>
          <strong>Date:</strong>{' '}
          {appointmentData.date}
        </p>

        <p>
          <strong>Time:</strong>{' '}
          {appointmentData.time}
        </p>

      </div>
    </div>
  );
};

export default Notification;