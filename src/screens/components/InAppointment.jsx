import React from 'react';
// import './Style.css';
import Header from './Header';
import Footer from './Footer';

const IncomingAppointments = () => {
  return (
    <div className="appointments-container">
      <header>
        <h1>KwaMhlanga clinic</h1>
        <p>Admin: Lebo Sethole</p>
        <p>01-August-2024 14:34</p>
      </header>


      <main>
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
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Mpho</td>
            <td>Mabusela</td>
            <td>085 209 8748</td>
            <td>28/08/2024</td>
            <td>14:18 PM</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons-container">
        <button onClick={(patientlist) => window.location.href='/patientlist'}>Patients Waiting for Consultation</button>
        <button onClick={(precheckup) => window.location.href='/precheckUp'} >Patients waiting for hospital transfer</button>
        <button onClick={(doctornurseview) => window.location.href='/doctornurseview'}>View Nurse/Doctor</button>
        <button onClick={(precheckup) => window.location.href='/precheckUp'}>Patients waiting for medical results</button>
        <button onClick={(precheckup) => window.location.href='/precheckUp'}>Consultation Room</button>
        <button onClick={(precheckup) => window.location.href='/precheckUp'}>Reporting</button>
      </div>
      <button onClick={() => window.location.href='/login'} className="logout-button">Logout</button>
      </main>
    </div>
  );
};

export default IncomingAppointments;
