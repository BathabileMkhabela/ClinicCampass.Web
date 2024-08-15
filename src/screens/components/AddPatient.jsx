import React from "react";
import { useState } from "react";
import './Style101.css'
import Header from "./Header";
import DateNTime from "./DateNTime";

function App() {

  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem("patientData");
    return savedRows ? JSON.parse(savedRows) : [];
  });


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cellNum, setCellNum] = useState("");
  const [appointDate, setAppointDate] = useState("");
  const [appointTime, setAppointTime] = useState("");

  const newRows = () => {
    if (name && surname && cellNum && appointDate && appointTime) {
      setRows([...rows, { name, surname, cellNum, appointDate, appointTime }]);
      setRows(newRows)
      localStorage.setItem("patientdata", JSON.stringify(newRows));
      setName("");
      setSurname("");
      setCellNum("");
      setAppointDate("");
      setAppointTime("");
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="adminInfo">
          <DateNTime />
        </div>
        <h2>Adding Patients</h2>
        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Cell Number</th>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.surname}</td>
                <td>{row.cellNum}</td>
                <td>{row.appointDate}</td>
                <td>{row.appointTime}</td>
              </tr>
            ))}
          </tbody>

          <tbody>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="number"
              placeholder="Cell Number"
              value={cellNum}
              onChange={(e) => setCellNum(e.target.value)}
            />
            <input
              type="Date"
              placeholder="Appointment Date"
              value={appointDate}
              onChange={(e) => setAppointDate(e.target.value)}
            />
            <input
              type="Time"
              placeholder="Appointment Time"
              value={appointTime}
              onChange={(e) => setAppointTime(e.target.value)}
            />
            <div>
              <button
                onClick={() => (window.location.href = "/mainWelcome")}
                className="back-btn"
              >
                Back
              </button>
              <button onClick={(newRows) => (window.location.href = "/mainWelcome")} className="button">
                Submit Patient
              </button>
            </div>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
