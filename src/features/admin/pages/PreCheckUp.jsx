import React, { useState } from "react";
import '../../../styles/admin_styles.css'; // Create a separate CSS file for styling

const PreCheckup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="precheckup-container">
      <main>
        <h2>Pre-Checkup</h2>

        <div className="PreInfo">
          <div className="patientInfo">
            <h3>Patient's Information</h3>
            <div className="patient-info-content">
              <p>Queue No: 01</p><br />
              <p>Name: Mpho</p><br />
              <p>Surname: Mabusela</p><br />
              <p>ID: 8803245945087</p><br />
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
                <div className="urgency-options">
                  <input
                    type="radio"
                    id="critical"
                    name="urgency"
                    value="critical"
                  />
                  <label htmlFor="critical">Critical</label>
                  <input type="radio" id="old" name="urgency" value="old" />
                  <label htmlFor="old">Old</label>
                  <input
                    type="radio"
                    id="neutral"
                    name="urgency"
                    value="neutral"
                  />
                  <label htmlFor="neutral">Neutral</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="btn-cancel" onClick={handleCancelClick}>
            Cancel <br /> appointment
          </button>
          <button className="save-btn">Save</button>
        </div>

        {isModalOpen && (
          <CancelAppointmentModal handleCloseModal={handleCloseModal} />
        )}
      </main>
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