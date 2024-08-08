import React, { useState, useEffect } from 'react';
import '../../../styles/admin_styles.css';
import H1titleComponent from "../../components/h1_title_component";
import BackButton from '../components/patients_waiting_visit_comp/back_button_comp';
import TopHomeHeader from "../../components/header";

function ViewDocOrNurse() {
  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Data.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        const keys = Object.keys(data.users[0]);
       
        if (!keys.includes('Action')) {
          keys.push('Action');
        }
        setColumn(keys);
        setRecords(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="patientsListPage"> 
      <TopHomeHeader/>
      <div className="title_container">
        <H1titleComponent title={"View Nurses/Doctors"}/>

        <div className="sub_title">Doctors/Nurse's information</div>
        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                {column.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <tr key={i}>
                  {column.map((col, j) => (
                    col !== 'Action' ? (
                      <td key={j}>{record[col]}</td>
                    ) : (
                      <td key={j}>
                        <button className="manage-button" onClick={() => alert('Manage button clicked!')}>
                          Manage
                        </button>
                      </td>
                    )
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="back_btn">{<BackButton/>}</div>
    </div>
  );
}

export default ViewDocOrNurse;
