import React, { useState } from "react";
import './Style101.css'
import Footer from "./Footer";
import Header from "./Header";

const ManageDoctorNurse = () => {
  const [doctor, setDoctor] = useState({
    name: "George",
    surname: "Mtipa",
    email: "georgexmtipa@gmail.com",
    phone: "083 369 8748",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({ ...prevDoctor, [name]: value }));
  };

  const handleSave = () => {
    // Save doctor information
    console.log("Doctor information saved:", doctor);
  };

  const handleRemove = () => {
    // Remove doctor
    console.log("Doctor removed");
  };

  const handleGeneratePassword = () => {
    // Generate new temporary password
    console.log("New temporary password generated");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="manage-doctor-nurse">
        <div className="header">
          <h1>Manage Doctor/Nurse</h1>
          <p>Practice Number: 1234567890</p>
        </div>

        <div className="content">
          <div className="doctor-info">
            <h2>Doctor's Information</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={doctor.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Surname:
              <input
                type="text"
                name="surname"
                value={doctor.surname}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={doctor.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={doctor.phone}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
            <button className="btn-cancel" onClick={handleRemove}>
              Remove Doctor
            </button>
          </div>

          <div className="login-details">
            <h2>Login Details</h2>
            <button onClick={handleGeneratePassword} className="button">
              Generate New Temporary Password
            </button>
            <p>New Password:</p>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "/doctornurseview")}
          className="back-btn"
        >
          Back
        </button>
        {/* <button className="button">Add new doctor/nurse</button> */}
      </div>
      <Footer />
    </div>
  );
};

const CancelAppointmentModal = ({ handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <dialog></dialog>
        <p>
          Are you sure you want to cancel this patient's appointment
          (8803245945087)?
        </p>
        <button onClick={handleCloseModal} className="btn-cancel">
          No
        </button>
        <button onClick={handleCloseModal} autoFocus className="button">
          Yes
        </button>
      </div>
    </div>
  );
};

export default ManageDoctorNurse;
