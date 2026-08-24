
import React, { useState } from 'react';
import './FindDoctorSearch.css';

const specialities = [
  'Dentist',
  'Gynecologist/obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-nose-throat (ent) Specialist',
  'Homeopath',
  'Ayurveda'
];

const FindDoctorSearch = ({ onSearch }) => {
  const [showResults, setShowResults] = useState(false);
  const [searchDoctor, setSearchDoctor] = useState('');

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setShowResults(false);

    if (onSearch) {
      onSearch(speciality);
    }
  };

  return (
    <div className="find-doctor">

      <h1>Find a doctor</h1>

      <p className="search-subtitle">
        Search by specialty
      </p>

      <div className="doctor-search-box">

        <div className="search-input-wrapper">

          <input
            type="text"
            className="search-doctor-input-box"
            placeholder="Search doctors, clinics, hospitals, etc."
            value={searchDoctor}
            onFocus={() => setShowResults(true)}
            onChange={(e) => {
              setSearchDoctor(e.target.value);

              if (onSearch) {
                onSearch(e.target.value);
              }
            }}
          />

          <img
            className="find-icon"
            src="/images/search.svg"
            alt="Search"
          />

        </div>

        {showResults && (
          <div className="search-doctor-input-results">

            {specialities.map((speciality) => (
              <div
                className="search-doctor-result-item"
                key={speciality}
                onMouseDown={() => handleDoctorSelect(speciality)}
              >
                <img
                  src="/images/search.svg"
                  alt=""
                />

                <span>{speciality}</span>

                <span className="speciality-label">
                  SPECIALITY
                </span>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default FindDoctorSearch;
