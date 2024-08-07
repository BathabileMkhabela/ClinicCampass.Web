import React from 'react';
import './Style.css';

const PatientList = () => {
  return (
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
            <td><span className="dot red"></span></td>
            <td>Mpho</td>
            <td>Motsubise</td>
            <td>085 269 8748</td>
            <td>28/06/2024</td>
            <td>14:15 PM</td>
            <td>
              <button className="consult-btn">Consult</button>
              <button className="remove-btn">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => window.location.href='/mainWelcome'} className="back-btn">Back</button>
    </div>
  );
}

export default PatientList;
