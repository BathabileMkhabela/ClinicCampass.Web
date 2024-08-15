import React, { useEffect } from "react";
import { useState } from "react";
import './Style101.css'
import Header from "./Header";
import DateNTime from "./DateNTime";

function App() {
  // const [rows, setRows] = useState([]);
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [cellNum, setCellNum] = useState("");
  // const [appointDate, setAppointDate] = useState("");
  // const [appointTime, setAppointTime] = useState("");

  // const addRow = () => {
  //   if (name && surname && cellNum && appointDate && appointTime) {
  //     setRows([...rows, { name, surname, cellNum, appointDate, appointTime }]);
  //     setName("");
  //     setSurname("");
  //     setCellNum("");
  //     setAppointDate("");
  //     setAppointTime("");
  //   }
  // };

  const [rows,SetRows] = useState([]);

  useEffect(() => {
    const savedRows = localStorage.getItem("patientData");
    if (savedRows) {
      SetRows(JSON.parse(savedRows));
    }
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="adminInfo">
          <DateNTime />
        </div>
        <h2>Incoming Appointments</h2>
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
            <tr>
              <td>00</td>
              <td>George</td>
              <td>Msitjio</td>
              <td>085 269 8748</td>
              <td>28/06/2024</td>
              <td>14:15 PM</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((savedRows, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{rows.name}</td>
                <td>{rows.surname}</td>
                <td>{rows.cellNum}</td>
                <td>{rows.appointDate}</td>
                <td>{rows.appointTime}</td>
              </tr>
            ))}
          </tbody>

          {/* <tbody>
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
              <button onClick={addRow} className="button">
                Add Patients
              </button>
            </div>
          </tbody> */}
        </table>
        <button onClick={(patientlist) => (window.location.href = "/addingPatient")} className="button">
          Add Patients
        </button>

        <div className="buttons-container">
          <button
            onClick={(patientlist) => (window.location.href = "/patientlist")}
            className="button"
          >
            Patients Waiting for Consultation
          </button>

          <button
            onClick={(precheckup) => (window.location.href = "/precheckUp")}
            className="button"
          >
            Patients waiting for hospital transfer
          </button>

          <button
            onClick={(doctornurseview) =>
              (window.location.href = "/doctornurseview")
            }
            className="button"
          >
            View Nurse/Doctor
          </button>

          <button
            onClick={(precheckup) => (window.location.href = "/precheckUp")}
            className="button"
          >
            Patients waiting for medical results
          </button>

          <button
            onClick={(precheckup) => (window.location.href = "/precheckUp")}
            className="button"
          >
            Consultation Room
          </button>

          <button
            onClick={(precheckup) => (window.location.href = "/precheckUp")}
            className="button"
          >
            Reporting
          </button>
        </div>

        <button
          onClick={() => (window.location.href = "/login")}
          className="sign-btn"
        >
          Logout
        </button>
      </main>
    </div>
  );
}

export default App;
