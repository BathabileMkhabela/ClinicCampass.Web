import React, { useState } from "react";
import './Style101.css'
import Footer from "./Footer";
import Header from "./Header";
import DateNTime from "./DateNTime";

const RegistrationForm = () => {
  const [clinic, setClinic] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [practiceNumber, setPracticeNumber] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [cellNumber2, setCellNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [consultationRoom, setConsultationRoom] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
    console.log("User Registered");
  };

  return (
    <div>
      <Header />
      <main>
        <div className="adminInfo">
          <DateNTime />
        </div>
        <div className="registration-form">
          <h2>Register new Nurse/Doctor</h2>
          <div className="form-group">
            <label>Choose your clinic</label>
            <select value={clinic} onChange={(e) => setClinic(e.target.value)}>
              <option value={""}>Choose Your Clinic</option>
              <option value="Clinic1">KwaMhlanga Clinic</option>
              <option value="Clinic2">Kwaggafontein Clinic</option>
            </select>
          </div>
          <div className="checking">
            <div className="form-group">
              <h2>Personal Information</h2>
              <label>Designation</label>
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value={""}>Select Designation</option>
                <option value="Doctor">Doctor</option>
                <option value="Nurse">Nurse</option>
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Practice Number</label>
              <input
                type="text"
                value={practiceNumber}
                onChange={(e) => setPracticeNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="checking">
            <div className="form-group">
              <h2>Contact Information</h2>
              <label>Cell Number</label>
              <input
                type="text"
                value={cellNumber}
                onChange={(e) => setCellNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cell Number (Optional)</label>
              <input
                type="text"
                value={cellNumber2}
                onChange={(e) => setCellNumber2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Assign consultation room</label>
              <select
                value={consultationRoom}
                onChange={(e) => setConsultationRoom(e.target.value)}
              >
                <option value={""}>Select Consultation Room</option>
                <option value="Room1">Room Number 01</option>
                <option value="Room2">Room Number 02</option>
                <option value="Room3">Room Number 03</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = "/doctornurseview")}
            className="back-btn"
          >
            Back
          </button>
          <button onClick={handleRegister}>Register</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
