import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/admin_styles.css'; // Import the CSS file for styling

function AdminLandPage({ patients = [] }) { // Provide a default empty array for patients
  const [rows, setRows] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    setRows((prevRows) => {
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

  const handleRowAction = (index) => {
    navigate("/Pre-checkup");
  };

  const totalRows = 10;

  const displayRows = [];
  if (rows.length > 0) {
    displayRows.push(rows[0]); // Add data from the first patient
  }

  // Ensure there is always at least one row with default information
  if (displayRows.length === 0) {
    displayRows.push({
      name: "Bathabile",
      surname: "Mkhabela",
      cellNum: "0637234846",
      appointDate: "25/08/204",
      appointTime: "12:00AM",
      default: true
    });
  }

  // Fill the table to the total rows count
  while (displayRows.length < totalRows) {
    displayRows.push({
      name: "",
      surname: "",
      cellNum: "",
      appointDate: "",
      appointTime: ""
    });
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
                <td>{row.name || ""}</td>
                <td>{row.surname || ""}</td>
                <td>{row.cellNum || ""}</td>
                <td>{row.appointDate || ""}</td>
                <td>{row.appointTime || ""}</td>
                <td>
                  {index === 0 && (row.name && row.surname && row.cellNum && row.appointDate && row.appointTime) ? (
                    <button onClick={() => handleRowAction(index)}>PreCheckUp</button>
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
          <button onClick={() => navigate("/precheckUp")} className="precheckup-btn">
            PreCheckUp
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminLandPage;