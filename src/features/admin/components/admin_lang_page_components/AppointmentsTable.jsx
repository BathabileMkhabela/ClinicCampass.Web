// AppointmentsTable.js
import React from "react";

export const AppointmentsTable = ({ displayRows, handleRowAction }) => {
  return (
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
            <td>{index === 0 ? row.name : ""}</td>
            <td>{index === 0 ? row.surname : ""}</td>
            <td>{index === 0 ? row.cellNum : ""}</td>
            <td>{index === 0 ? row.appointDate : ""}</td>
            <td>{index === 0 ? row.appointTime : ""}</td>
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
  );
};

