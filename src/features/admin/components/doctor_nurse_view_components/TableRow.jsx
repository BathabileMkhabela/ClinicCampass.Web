import React from 'react';
import { useNavigate } from 'react-router-dom';

function TableRow({ roomNo, name, surname, cellNumber, appointment, specialty, designation, status }) {
  const navigate = useNavigate();
  
  return (
    <tr>
      <td>{roomNo}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{cellNumber}</td>
      <td>{appointment}</td>
      <td>{specialty}</td>
      <td>{designation}</td>
      <td className={`status ${status.toLowerCase()}`}>{status}</td>
      <td>
        <button
          onClick={() => navigate("/managenursedoc")}
          className="buttonB"
        >
          Manage
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
