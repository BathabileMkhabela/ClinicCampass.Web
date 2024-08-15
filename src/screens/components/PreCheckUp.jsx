import React, { useState } from "react";
import './Style101.css'
import Footer from "./Footer";
import Header from "./Header";
import DateNTime from "./DateNTime";

const PreCheckup = () => {
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
      <main>
      <div className="adminInfo">
          <DateNTime />
        </div>
        <h2>Pre-Checkup</h2>

        <div className="PreInfo">
          <div className="patientInfo">
            <h3>Patient's Information</h3>
            <div>
              <p>Queue No: 01</p>
              <p>Name: Mpho</p>
              <p>Surname: Mabusela</p>
              <p>ID: 8803245945087</p>
              <p>Appointment Date Time: 28/08/24 14:18 PM</p>
            </div>
          </div>

          <div className="checking">
            <div className="pre-checking">
              <h3>Pre-Checking</h3>
              <label>Reasons for visit</label>
              <input
                type="text"
                placeholder="Enter reasons for patient's visit"
              />
              <label>Temperature</label>
              <input type="text" placeholder="Patient's Temp" />
              <label>Blood Pressure</label>
              <input type="text" placeholder="mmHg" />

              <div className="urgency-level">
                <label>Patient urgency level</label>
                <div>
                  <input
                    type="radio"
                    id="critical"
                    name="urgency"
                    value="critical"
                  />
                  <label for="critical">Critical</label>
                  <input type="radio" id="old" name="urgency" value="old" />
                  <label for="old">Old</label>
                  <input
                    type="radio"
                    id="neutral"
                    name="urgency"
                    value="neutral"
                  />
                  <label for="neutral">Neutral</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn-cancel" onClick={handleCancelClick}>
          Cancel appointment
        </button>
        {isModalOpen && (
          <CancelAppointmentModal handleCloseModal={handleCloseModal} />
        )}
        <button className="save-btn">Save</button>
      </main>
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

export default PreCheckup;
