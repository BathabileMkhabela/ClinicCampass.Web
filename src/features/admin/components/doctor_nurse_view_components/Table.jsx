import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
  const rowsData = [
    { roomNo: '01', name: 'George', surname: 'Msitjio', cellNumber: '085 269 8748', appointment: '28/06/2024 14:15 PM', specialty: 'Ophthalmology', designation: 'Doctor', status: 'In-progress' },
    { roomNo: '02', name: 'Hope', surname: 'Motlatsi', cellNumber: '084 781 2492', appointment: '28/06/2024 14:45 PM', specialty: 'Public Health', designation: 'Nurse', status: 'Available' },
    { roomNo: '03', name: 'Lento', surname: 'Motsipke', cellNumber: '026 575 7920', appointment: '28/06/2024 15:15 PM', specialty: 'Pediatrics', designation: 'Nurse', status: 'In-progress' },
  ];

  return (
    <table>
      <TableHeader />
      <tbody>
        {rowsData.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
