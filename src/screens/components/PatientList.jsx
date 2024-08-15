import React, { useState } from "react";
import './Style101.css'
import Header from "./Header";
import Footer from "./Footer";
import DateNTime from "./DateNTime";

const PatientList = () => {
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
        <div className="patient-list-container">
          <div className="urgency-levels">
            <div className="urgency critical">Critical</div>
            <div className="urgency old">Old</div>
            <div className="urgency neutral">Neutral</div>
          </div>
          <h2>Patients List</h2>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>URG LVL</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Cell Number</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>
                  <span className="dot red"></span>
                </td>
                <td>Mpho</td>
                <td>Motsubise</td>
                <td>085 269 8748</td>
                <td>28/06/2024</td>
                <td>14:15 PM</td>
                <td>
                  <button className="button">Consult</button>
                  {isModalOpen && (
                    <CancelAppointmentModal
                      handleCloseModal={handleCloseModal}
                    />
                  )}
                  <button className="btn-cancel" onClick={handleCancelClick}>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => (window.location.href = "/mainWelcome")}
            className="back-btn"
          >
            Back
          </button>
        </div>
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

export default PatientList;
