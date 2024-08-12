import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AdminStyle.css"
const DoctorNurseView = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div>
      <main>
        <div className="doctor-nurse-containerB">
          <h1>View Nurses/Doctors</h1>
          <table>
            <thead>
              <tr>
                <th>Room NO</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Cell Number</th>
                <th>Appointment Date/Time</th>
                <th>Specialty</th>
                <th>Designation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>George</td>
                <td>Msitjio</td>
                <td>085 269 8748</td>
                <td>28/06/2024 14:15 PM</td>
                <td>Ophthalmology</td>
                <td>Doctor</td>
                <td className="status in-progress">In-progress</td>
                <td>
                  <button
                    onClick={() => navigate("/managenursedoc")}
                    className="buttonB"
                  >
                    Manage
                  </button>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>Hope</td>
                <td>Motlatsi</td>
                <td>084 781 2492</td>
                <td>28/06/2024 14:45 PM</td>
                <td>Public Health</td>
                <td>Nurse</td>
                <td className="status available">Available</td>
                <td>
                  <button
                    onClick={() => navigate("/managenursedoc")}
                    className="buttonB"
                  >
                    Manage
                  </button>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>Lento</td>
                <td>Motsipke</td>
                <td>026 575 7920</td>
                <td>28/06/2024 15:15 PM</td>
                <td>Pediatrics</td>
                <td>Nurse</td>
                <td className="status in-progress">In-progress</td>
                <td>
                  <button
                    onClick={() => navigate("/managenursedoc")}
                    className="buttonB"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => navigate("/mainWelcome")}
            className="back-btnB"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/DocNurseReg")}
            className="buttonB"
          >
            Add Doctor/Nurse
          </button>
        </div>
      </main>
    </div>
  );
};

export default DoctorNurseView;
