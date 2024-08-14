import React, { useState, useEffect } from "react";
import doctorImage from '../../../assets/patient_assets/images/doctorImage.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaStethoscope, FaClock } from 'react-icons/fa';
import '../../../styles/patient_style.css'

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

                        const updatedSlots = { ...slots };
                        updatedSlots[date][doctor] = updatedSlots[date][doctor].filter(slot => slot !== timeSlot);
                        setSlots(updatedSlots);

                        sendEmail(name, surname, email, date, doctor, timeSlot);

                        toast.success("Your appointment has been submitted!");
                        navigate('/confrm-booking');

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
        navigate('/clinic-landing-page');
    };
    const handleConfirm = () => {
        navigate('/confirm-booking');
    };

    return (
        <div className="booking-form-container1">
            <div className="booking-image1">
                <img src={doctorImage} alt="Doctor" />
            </div>
            <div className="booking-form1">
                <h2>BOOK YOUR APPOINTMENT</h2>
                <form onSubmit={handleSlotBooking}>
                    <div className="form-group1">
                        <label htmlFor="name"><FaUser /> Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="surname"><FaUser /> Surname</label>
                        <input type="text" id="surname" name="surname" required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="phone"><FaPhone /> Phone Number</label>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="email"><FaEnvelope /> Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group1">
                        <label htmlFor="date"><FaCalendarAlt /> Date</label>
                        <select id="date" name="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} required>
                            <option value="">Select Date</option>
                            {availableDates.map((date) => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group1">
                        <label htmlFor="doctor"><FaStethoscope /> Doctor</label>
                        <select id="doctor" name="doctor" value={selectedDoctor} onChange={e => setSelectedDoctor(e.target.value)} required>
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor} value={doctor}>{doctor}</option>
                            ))}
                        </select>
                    </div>
                    {selectedDate && selectedDoctor && (
                        <div className="form-group1">
                            <label htmlFor="timeSlot"><FaClock /> Time Slot</label>
                            <select id="timeSlot" name="timeSlot" required>
                                <option value="">Select Time Slot</option>
                                {availableSlots.map((slot) => (
                                    <option key={slot} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="form-buttons1">
                        <button type="button" onClick={handleBack} className="back-button1">Back</button>
                        <button type="submit"  className="submit-button1">Submit</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Bookingform;



