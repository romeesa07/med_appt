import React, { useState } from 'react';
import './BookingConsultation.css';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';

const doctors = [
  // Dentists
  {
    name: 'Dr. Ahmed Khan',
    speciality: 'Dentist',
    experience: 8,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Hina Malik',
    speciality: 'Dentist',
    experience: 6,
    ratings: '4.7/5',
  },
  {
    name: 'Dr. Bilal Shah',
    speciality: 'Dentist',
    experience: 12,
    ratings: '4.9/5',
  },
  {
    name: 'Dr. Saad Ahmed',
    speciality: 'Dentist',
    experience: 10,
    ratings: '4.8/5',
  },

  // Gynecologists
  {
    name: 'Dr. Ayesha Malik',
    speciality: 'Gynecologist/obstetrician',
    experience: 10,
    ratings: '4.9/5',
  },
  {
    name: 'Dr. Sana Raza',
    speciality: 'Gynecologist/obstetrician',
    experience: 7,
    ratings: '4.7/5',
  },
  {
    name: 'Dr. Maryam Ali',
    speciality: 'Gynecologist/obstetrician',
    experience: 9,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Iqra Hassan',
    speciality: 'Gynecologist/obstetrician',
    experience: 11,
    ratings: '4.9/5',
  },

  // General Physicians
  {
    name: 'Dr. Hamza Ali',
    speciality: 'General Physician',
    experience: 7,
    ratings: '4.6/5',
  },
  {
    name: 'Dr. Usman Raza',
    speciality: 'General Physician',
    experience: 13,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Farhan Khan',
    speciality: 'General Physician',
    experience: 9,
    ratings: '4.7/5',
  },
  {
    name: 'Dr. Zain Ahmed',
    speciality: 'General Physician',
    experience: 15,
    ratings: '4.9/5',
  },

  // Dermatologists
  {
    name: 'Dr. Sara Ahmed',
    speciality: 'Dermatologist',
    experience: 6,
    ratings: '4.7/5',
  },
  {
    name: 'Dr. Maria Hassan',
    speciality: 'Dermatologist',
    experience: 9,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Ayesha Noor',
    speciality: 'Dermatologist',
    experience: 11,
    ratings: '4.9/5',
  },
  {
    name: 'Dr. Rabia Khan',
    speciality: 'Dermatologist',
    experience: 8,
    ratings: '4.8/5',
  },

  // ENT Specialists
  {
    name: 'Dr. Zainab Shah',
    speciality: 'Ear-nose-throat (ent) Specialist',
    experience: 11,
    ratings: '4.9/5',
  },
  {
    name: 'Dr. Omar Hassan',
    speciality: 'Ear-nose-throat (ent) Specialist',
    experience: 8,
    ratings: '4.7/5',
  },
  {
    name: 'Dr. Kamran Ali',
    speciality: 'Ear-nose-throat (ent) Specialist',
    experience: 10,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Faisal Ahmed',
    speciality: 'Ear-nose-throat (ent) Specialist',
    experience: 14,
    ratings: '4.9/5',
  },

  // Homeopaths
  {
    name: 'Dr. Fatima Noor',
    speciality: 'Homeopath',
    experience: 9,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Zoya Ahmed',
    speciality: 'Homeopath',
    experience: 6,
    ratings: '4.6/5',
  },
  {
    name: 'Dr. Hassan Raza',
    speciality: 'Homeopath',
    experience: 12,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Nadia Malik',
    speciality: 'Homeopath',
    experience: 8,
    ratings: '4.7/5',
  },

  // Ayurveda
  {
    name: 'Dr. Omar Farooq',
    speciality: 'Ayurveda',
    experience: 5,
    ratings: '4.5/5',
  },
  {
    name: 'Dr. Noor Fatima',
    speciality: 'Ayurveda',
    experience: 8,
    ratings: '4.7/5',
  },
  {
    name: 'Dr. Arman Shah',
    speciality: 'Ayurveda',
    experience: 10,
    ratings: '4.8/5',
  },
  {
    name: 'Dr. Mehwish Ali',
    speciality: 'Ayurveda',
    experience: 7,
    ratings: '4.9/5',
  },
];

const BookingConsultation = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (searchText) => {
    if (searchText === '') {
      setFilteredDoctors(doctors);
      setIsSearched(false);
      return;
    }

    const filtered = doctors.filter((doctor) =>
      doctor.speciality
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );

    setFilteredDoctors(filtered);
    setIsSearched(true);
  };

  return (
    <div className="searchpage-container">

      <FindDoctorSearch onSearch={handleSearch} />

      <div className="search-results-container">

        {isSearched && (
          <>
            <h2>
              {filteredDoctors.length} doctors are available
            </h2>

            <h3>
              Book appointments with minimum wait-time & verified doctor details
            </h3>
          </>
        )}

        <div className="doctor-cards-container">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                {...doctor}
                key={doctor.name}
              />
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>

      </div>

    </div>
  );
};

export default BookingConsultation;