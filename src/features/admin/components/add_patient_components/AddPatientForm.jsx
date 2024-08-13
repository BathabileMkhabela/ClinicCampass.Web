import React, { useState } from "react";
import { InputField } from "./InputField";
import { ButtonGroup } from "./ButtonGroup";
import '../../../../styles/admin_styles.css'; // Import the CSS file for styling

export const AddPatientForm = ({ onAddPatient }) => {
    
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cellNum, setCellNum] = useState("");
  const [appointDate, setAppointDate] = useState("");
  const [appointTime, setAppointTime] = useState("");

  const handleSubmit = () => {
    if (name && surname && cellNum && appointDate && appointTime) {
      onAddPatient({ name, surname, cellNum, appointDate, appointTime });
    }
  };

  return (
    <div className="add-patient-container">
      <main className="add-patient-form">
        <h2>Adding Patients</h2>
        <InputField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <InputField
          type="number"
          placeholder="Cell Number"
          value={cellNum}
          onChange={(e) => setCellNum(e.target.value)}
        />
        <InputField
          type="date"
          placeholder="Appointment Date"
          value={appointDate}
          onChange={(e) => setAppointDate(e.target.value)}
        />
        <InputField
          type="time"
          placeholder="Appointment Time"
          value={appointTime}
          onChange={(e) => setAppointTime(e.target.value)}
        />
        <ButtonGroup onSubmit={handleSubmit} />
      </main>
    </div>
  );
}


