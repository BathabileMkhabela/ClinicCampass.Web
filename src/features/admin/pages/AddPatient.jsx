import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/admin_styles.css'; // Import the CSS file for styling

function AddPatient({ onAddPatient }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cellNum, setCellNum] = useState("");
  const [appointDate, setAppointDate] = useState("");
  const [appointTime, setAppointTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && surname && cellNum && appointDate && appointTime) {
      onAddPatient({ name, surname, cellNum, appointDate, appointTime });
    }
  };

  return (
    <div className="add-patient-container">
      <main className="add-patient-form">
        <h2>Adding Patients</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Cell Number"
          value={cellNum}
          onChange={(e) => setCellNum(e.target.value)}
          className="input-field"
        />
        <input
          type="date"
          placeholder="Appointment Date"
          value={appointDate}
          onChange={(e) => setAppointDate(e.target.value)}
          className="input-field"
        />
        <input
          type="time"
          placeholder="Appointment Time"
          value={appointTime}
          onChange={(e) => setAppointTime(e.target.value)}
          className="input-field"
        />
        <div className="button-group">
          <button onClick={() => navigate("/adminlandpage")} className="back-btn">
            Back
          </button>
          <button onClick={handleSubmit} className="submit-btn">
            Submit Patient
          </button>
        </div>
      </main>
    </div>
  );
}

export default AddPatient;
