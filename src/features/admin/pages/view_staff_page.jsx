// import TopHomeHeader from "../../components/header";
// import H1titleComponent from "../../components/h1_title_component";
// import SubTitle from "../../components/sub_title_comp";
// import ViewStaffTableComp from "../components/view_staff_components/view_staff_table_comp";
// import ViewStaffBackBtnComp from "../components/view_staff_components/view_staff_backBtn_comp";
// export default function ViewStaffPage(){
//     return(
//         <div className="viewStaff_container">
//             <TopHomeHeader/>
//             <H1titleComponent title={"View Nurses/Doctors"}/>
//             <SubTitle subtitle={"Doctors/Nurse’s Information"}/>
//             <ViewStaffTableComp/>
//             <ViewStaffBackBtnComp/>

//         </div>
//     );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/admin_styles.css';

function DoctorNurseView() {
  const navigate = useNavigate();

  const rowsData = [
    { roomNo: '01', name: 'George', surname: 'Msitjio', cellNumber: '085 269 8748', appointment: '28/06/2024 14:15 PM', specialty: 'Ophthalmology', designation: 'Doctor', status: 'In-progress' },
    { roomNo: '02', name: 'Hope', surname: 'Motlatsi', cellNumber: '084 781 2492', appointment: '28/06/2024 14:45 PM', specialty: 'Public Health', designation: 'Nurse', status: 'Available' },
    { roomNo: '03', name: 'Lento', surname: 'Motsipke', cellNumber: '026 575 7920', appointment: '28/06/2024 15:15 PM', specialty: 'Pediatrics', designation: 'Nurse', status: 'In-progress' },
  ];

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
              {rowsData.map((row, index) => (
                <tr key={index}>
                  <td>{row.roomNo}</td>
                  <td>{row.name}</td>
                  <td>{row.surname}</td>
                  <td>{row.cellNumber}</td>
                  <td>{row.appointment}</td>
                  <td>{row.specialty}</td>
                  <td>{row.designation}</td>
                  <td className={`status ${row.status.toLowerCase()}`}>{row.status}</td>
                  <td>
                    <button
                      onClick={() => navigate("/manage-staff")}
                      className="buttonB"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button
              onClick={() => navigate("/Admin-dashboard")}
              className="back-btnB"
            >
              Back
            </button>
            <button
              onClick={() => navigate("/register-staff")}
              className="buttonB"
            >
              Add Doctor/Nurse
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorNurseView;
