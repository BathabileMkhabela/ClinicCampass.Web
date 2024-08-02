import React, { useState, useEffect } from "react";
import './Bookingform.css';
import doctorImage from './doctorImage.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"];

const initialSlots = {
    "2024-07-26": {
        "Dr. Smith": ["09:00", "10:00", "11:00"],
        "Dr. Johnson": ["09:30", "10:30", "11:30"],
        "Dr. Williams": ["08:00", "09:00", "10:00"]
    },
    "2024-07-27": {
        "Dr. Smith": ["09:00", "10:00", "11:00"],
        "Dr. Johnson": ["09:30", "10:30", "11:30"],
        "Dr. Williams": ["08:00", "09:00", "10:00"]
    },
    "2024-07-28": {
        "Dr. Smith": ["09:00", "10:00", "11:00"],
        "Dr. Johnson": ["09:30", "10:30", "11:30"],
        "Dr. Williams": ["08:00", "09:00", "10:00"]
    }
};

const Bookingform = () => {
    const navigate = useNavigate();
    const [availableDates, setAvailableDates] = useState(Object.keys(initialSlots));
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [availableSlots, setAvailableSlots] = useState([]);
    const [slots, setSlots] = useState(initialSlots);

    useEffect(() => {
        if (selectedDate && selectedDoctor) {
            setAvailableSlots(slots[selectedDate][selectedDoctor]);
        } else {
            setAvailableSlots([]);
        }
    }, [selectedDate, selectedDoctor]);

    const handleSlotBooking = (e) => {
        e.preventDefault();
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to submit this appointment?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const form = e.target;
                        const formData = new FormData(form);
                        const name = formData.get('name');
                        const surname = formData.get('surname');
                        const phone = formData.get('phone');
                        const email = formData.get('email');
                        const date = formData.get('date');
                        const doctor = formData.get('doctor');
                        const timeSlot = formData.get('timeSlot');

                        // Remove the booked slot
                        const updatedSlots = { ...slots };
                        updatedSlots[date][doctor] = updatedSlots[date][doctor].filter(slot => slot !== timeSlot);
                        setSlots(updatedSlots);

                        // Send confirmation email
                        sendEmail(name, surname, email, date, doctor, timeSlot);

                        // Show success toast
                        toast.success("Your appointment has been submitted!");

                        // Reset form fields
                        form.reset();
                        setSelectedDate("");
                        setSelectedDoctor("");
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast.error("Your appointment has been canceled.");
                    }
                }
            ]
        });
    };

    const sendEmail = (name, surname, email, date, doctor, timeSlot) => {
        emailjs.send('your_service_id', 'your_template_id', {
            name,
            surname,
            email,
            date,
            doctor,
            timeSlot
        }, 'your_user_id')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleBack = () => {
        navigate('/patient-homepage'); // Make sure this route is correctly defined in your router setup
    };

    return (
        <div className="booking-form-container">
            <div className="booking-image">
                <img src={doctorImage} alt="Doctor" />
            </div>
            <div className="booking-form">
                <h2>BOOK YOUR APPOINTMENT</h2>
                <form onSubmit={handleSlotBooking}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" name="surname" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <select id="date" name="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} required>
                            <option value="">Select Date</option>
                            {availableDates.map((date) => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctor">Doctor</label>
                        <select id="doctor" name="doctor" value={selectedDoctor} onChange={e => setSelectedDoctor(e.target.value)} required>
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor} value={doctor}>{doctor}</option>
                            ))}
                        </select>
                    </div>
                    {selectedDate && selectedDoctor && (
                        <div className="form-group">
                            <label htmlFor="timeSlot">Time Slot</label>
                            <select id="timeSlot" name="timeSlot" required>
                                <option value="">Select Time Slot</option>
                                {availableSlots.map((slot) => (
                                    <option key={slot} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="form-buttons">
                        <button type="button" onClick={handleBack} className="back-button">Back</button>
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Bookingform;



