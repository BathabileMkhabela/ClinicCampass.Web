import React from "react";
import './Bookingform.css'; // Make sure the path is correct
import doctorImage from './doctorImage.jpeg'; // Ensure this path is correct and image exists

const Bookingform = () => {
    const availableDates = ["2024-07-26", "2024-07-27", "2024-07-28"];

    return (
        <div className="booking-form-container">
            <div className="booking-image">
                <img src={doctorImage} alt="Doctor" />
            </div>
            <div className="booking-form">
                <h2>BOOK YOUR APPOINTMENT</h2>
                <form action="">
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
                        <label htmlFor="date">Dates</label>
                        <select id="date" name="date" required>
                            {availableDates.map((date) => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Bookingform;

