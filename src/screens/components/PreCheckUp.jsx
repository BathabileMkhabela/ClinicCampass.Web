import React, { useState } from 'react';
// import './Style.css';
import Footer from './Footer';
import Header from './Header';

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
      <Header />
      <header>
        <h1>KwaMhlanga clinic</h1>
        <p>Admin: Lebo Sethole</p>
        <p>01-August-2024 14:34</p>
      </header>
      
      <main>
      <h2>Pre-Checkup</h2>
      <div className="patient-info">
        <div>
          <p>Queue No: 01</p>
          <p>Name: Mpho</p>
          <p>Surname: Mabusela</p>
          <p>ID: 8803245945087</p>
          <p>Appointment Date Time: 28/08/24 14:18 PM</p>
        </div>
        <div className="pre-checking">
          <label>Reasons for visit</label>
          <input type="text" placeholder="Enter reasons for patient's visit" />
          <label>Temperature</label>
          <input type="text" placeholder="Patient's Temp" />
          <label>Blood Pressure</label>
          <input type="text" placeholder="mmHg" />
          <div className="urgency-level">
            <label>Patient urgency level</label>
            <div>
              <input type="radio" id="critical" name="urgency" value="critical" />
              <label for="critical">Critical</label>
              <input type="radio" id="old" name="urgency" value="old" />
              <label for="old">Old</label>
              <input type="radio" id="neutral" name="urgency" value="neutral" />
              <label for="neutral">Neutral</label>
            </div>
          </div>
          <button className="save-button">Save</button>
        </div>
      </div>
      <button className="cancel-button" onClick={handleCancelClick}>Cancel appointment</button>
      {isModalOpen && <CancelAppointmentModal handleCloseModal={handleCloseModal} />}
      </main>
      <Footer />
    </div>

  );
};

const CancelAppointmentModal = ({ handleCloseModal }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <dialog 
        ></dialog>
        <p>Are you sure you want to cancel this patient's appointment (8803245945087)?</p>
        <button onClick={handleCloseModal}>No</button>
        <button onClick={handleCloseModal} autoFocus>Yes</button>
      </div>
    </div>
  );
};

export default PreCheckup;
