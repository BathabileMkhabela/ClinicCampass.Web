import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PatientHomepage.css';
import backgroundImage from '../Background.jpg'; // Update path as needed

const doctors = [
    {
        specialization: 'Cardiologist',
        initials: 'J.D.',
        surname: 'Doe',
        availableTimes: [
            { date: '2024-07-26', time: '09:00 AM' },
            { date: '2024-07-27', time: '11:00 AM' }
        ]
    },
    {
        specialization: 'Dermatologist',
        initials: 'A.S.',
        surname: 'Smith',
        availableTimes: [
            { date: '2024-07-28', time: '02:00 PM' },
            { date: '2024-07-29', time: '10:00 AM' }
        ]
    },
    {
        specialization: 'Pediatrician',
        initials: 'M.T.',
        surname: 'Taylor',
        availableTimes: [
            { date: '2024-07-30', time: '08:00 AM' },
            { date: '2024-07-31', time: '01:00 PM' }
        ]
    }
];

const PatientHomepage = () => {
    const navigate = useNavigate();

    const handleBookingClick = () => {
        navigate('/booking');
    };

    const handleBackToHomeClick = () => {
        navigate('/landhomepage2'); // Navigate back to LandHomepage2
    };

    return (
        <div className="screen-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>Availability of Doctors</h1>
            <div className='availability-section'>
                {doctors.map((doctor, index) => (
                    <div key={index} className="doctor-card">
                        <h3>{doctor.specialization}</h3>
                        <p><strong>Initials:</strong> {doctor.initials}</p>
                        <p><strong>Surname:</strong> {doctor.surname}</p>
                        <div className="availability-times">
                            <strong>Available Times:</strong>
                            <ul>
                                {doctor.availableTimes.map((slot, i) => (
                                    <li key={i}>{slot.date} at {slot.time}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className='button-section'>
                <div className='booking-section'>
                    <FontAwesomeIcon icon={faCalendarCheck} className="booking-icon" />
                    <button onClick={handleBookingClick} className="booking-button">
                        Book an Appointment
                    </button>
                </div>
                <button onClick={handleBackToHomeClick} className="back-button">
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default PatientHomepage;




