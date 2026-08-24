import React, { useState } from 'react';
import './FindDoctorSearch.css';
import DoctorCard from '../DoctorCard/DoctorCard';

const specialities = [
  'Dentist',
  'Gynecologist/obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-nose-throat (ent) Specialist',
  'Homeopath',
  'Ayurveda'
];

const doctors = [
  {
    name: 'Dr. Ahmed Khan',
    speciality: 'Dentist',
    experience: 8,
    ratings: '4.8'
  },
  {
    name: 'Dr. Hina Malik',
    speciality: 'Dentist',
    experience: 6,
    ratings: '4.7'
  },
  {
    name: 'Dr. Bilal Shah',
    speciality: 'Dentist',
    experience: 12,
    ratings: '4.9'
  },
  {
    name: 'Dr. Sara Ahmed',
    speciality: 'Dermatologist',
    experience: 6,
    ratings: '4.7'
  },
  {
    name: 'Dr. Maria Hassan',
    speciality: 'Dermatologist',
    experience: 9,
    ratings: '4.8'
  },
  {
    name: 'Dr. Ayesha Noor',
    speciality: 'Dermatologist',
    experience: 11,
    ratings: '4.9'
  },
  {
    name: 'Dr. Ayesha Malik',
    speciality: 'Gynecologist/obstetrician',
    experience: 10,
    ratings: '4.9'
  },
  {
    name: 'Dr. Sana Raza',
    speciality: 'Gynecologist/obstetrician',
    experience: 7,
    ratings: '4.7'
  },
  {
    name: 'Dr. Hamza Ali',
    speciality: 'General Physician',
    experience: 7,
    ratings: '4.6'
  },
  {
    name: 'Dr. Usman Raza',
    speciality: 'General Physician',
    experience: 13,
    ratings: '4.8'
  },
  {
    name: 'Dr. Fatima Noor',
    speciality: 'Homeopath',
    experience: 9,
    ratings: '4.8'
  },
  {
    name: 'Dr. Zainab Shah',
    speciality: 'Ear-nose-throat (ent) Specialist',
    experience: 11,
    ratings: '4.9'
  },
  {
    name: 'Dr. Omar Farooq',
    speciality: 'Ayurveda',
    experience: 5,
    ratings: '4.5'
  },
  {
    name: 'Dr. Noor Fatima',
    speciality: 'Ayurveda',
    experience: 8,
    ratings: '4.7'
  }
];

const FindDoctorSearch = () => {
  const [showResults, setShowResults] = useState(false);
  const [searchDoctor, setSearchDoctor] = useState('');

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setShowResults(false);
  };

  const filteredDoctors = searchDoctor
    ? doctors.filter(
        (doctor) =>
          doctor.speciality.toLowerCase() ===
          searchDoctor.toLowerCase()
      )
    : doctors;

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
            onChange={(e) => setSearchDoctor(e.target.value)}
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

      <div className="doctor-results">

        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              speciality={doctor.speciality}
              experience={doctor.experience}
              ratings={doctor.ratings}
            />
          ))
        ) : (
          <p className="no-doctors">
            No doctors found for this specialty.
          </p>
        )}

      </div>

    </div>
  );
};

export default FindDoctorSearch;
