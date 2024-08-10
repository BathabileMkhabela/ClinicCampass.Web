import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./AdminLandPage.css";

function AdminLandPage({ patients }) {
  const [rows, setRows] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Combine existing rows with new patients
    setRows((prevRows) => {
      // Remove duplicates if needed, or simply combine
      const updatedRows = [...prevRows, ...patients];
      return updatedRows;
    });
  }, [patients]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle the action button click for each row
  const handleRowAction = (index) => {
    // Navigate to the preCheckup page
    navigate("/precheckUp");
  };

  // Number of rows to display, adjust as needed
  const totalRows = 10;

  // Fill empty rows if necessary
  const displayRows = [...rows];
  while (displayRows.length < totalRows) {
    displayRows.push({ name: "", surname: "", cellNum: "", appointDate: "", appointTime: "" });
  }

  return (
    <div>
      <header>
        <div className="adminInfo">
          <div className="clinicInfo">
            <p>KwaMhlanga Clinic</p>
            <p><span className="admin-name">Admin:</span> Lebo Sethole</p>
          </div>
          <div className="dateTime">
            <p>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</p>
          </div>
        </div>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name || "N/A"}</td>
                <td>{row.surname || "N/A"}</td>
                <td>{row.cellNum || "N/A"}</td>
                <td>{row.appointDate || "N/A"}</td>
                <td>{row.appointTime || "N/A"}</td>
                <td>
                  {row.name && row.surname && row.cellNum && row.appointDate && row.appointTime ? (
                    <button onClick={() => handleRowAction(index)}>Action</button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="total-appointments">
          Total Appointments: {rows.length}
        </div>
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
                <button onClick={() => window.location.href = "/reporting"} className="button">
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
      </main>
    </div>
  );
}

export default AdminLandPage;
