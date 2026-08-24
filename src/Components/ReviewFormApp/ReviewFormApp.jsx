import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';

const ReviewFormApp = () => {
  const storedDoctorData = JSON.parse(
    localStorage.getItem('doctorData')
  );

  const doctorName = storedDoctorData?.name || 'Doctor';
  const doctorSpeciality = storedDoctorData?.speciality || 'Speciality';

  return (
    <div>
      <ReviewForm
        doctorName={doctorName}
        doctorSpeciality={doctorSpeciality}
      />
    </div>
  );
};

export default ReviewFormApp;