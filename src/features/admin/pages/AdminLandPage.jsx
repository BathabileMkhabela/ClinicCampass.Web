// AdminLandPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/admin_styles.css';
import { Header } from "../../admin/components/admin_lang_page_components/Header";
/*import { AppointmentsTable } from '../../admin/components/admin_land_page_components/AppointmentsTable';*/
import { ButtonsContainer } from "../../admin/components/admin_lang_page_components/ButtonsContainer";

function AdminLandPage({ patients }) {
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
    navigate("/precheckUp");
  };

  const totalRows = 10;

  const displayRows = [];
  if (rows.length > 0) {
    displayRows.push(rows[0]);
  } else {
    displayRows.push({ name: "No Data", surname: "", cellNum: "", appointDate: "", appointTime: "", default: true });
  }

  while (displayRows.length < totalRows) {
    displayRows.push({ name: "", surname: "", cellNum: "", appointDate: "", appointTime: "" });
  }

  return (
    <div>
      <Header dateTime={dateTime} />
      <main>
        <h2>Incoming Appointments</h2>
        {/* <AppointmentsTable displayRows={displayRows} handleRowAction={handleRowAction} /> */}
        <div className="total-appointments">
          Total Appointments: {rows.length}
        </div>
        <ButtonsContainer />
      </main>
    </div>
  );
}

export default AdminLandPage;
