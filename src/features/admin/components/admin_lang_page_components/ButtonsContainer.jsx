// ButtonsContainer.js
import React from "react";

export const ButtonsContainer = () => {
  return (
    <div className="buttons-container">
      <button onClick={() => window.location.href = "/logout"} className="logout-btn">
        <span className="icon">🔒</span> Logout
      </button>
      <div className="button-row">
        <button onClick={() => window.location.href = "/patientlist"} className="button">
          Patients Waiting for Consultation
        </button>
        <button onClick={() => window.location.href = "/precheckUp"} className="button">
          Patient Waiting for Medication   
        </button>
        <button onClick={() => window.location.href = "/docnursinfo"} className="button">
          View Nurse/Doctor
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => window.location.href = "/consultationRoom"} className="button">
          Patients Waiting for Hospital Transfer
        </button>
        <button onClick={() => window.location.href = "/consultation-room"} className="button">
          Consultation Room
        </button>
        <button onClick={() => window.location.href = "/reporting"} className="button">
          Reporting
        </button>
      </div>
      <button onClick={() => window.location.href = "/addpatient"} className="add-patient-btn">
         Add Patients
      </button>
    </div>
  );
};


