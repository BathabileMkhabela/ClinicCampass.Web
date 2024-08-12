import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./features/main components/Navigationbar";
import LandHomepage2 from './features/patient/pages/LandHomepage2';
import PatientHomepage from "./features/patient/pages/PatientHomepage";
import Bookingform from "./features/patient/pages/Bookingform";
import Homepage1 from "./features/home_page/page/Homepage1";
import Register from "./features/patient/pages/Register";
import Login from "./features/patient/pages/PatientSignIn";
import AdminSignIn from "./features/admin/pages/AdminSignIn";
import AdminResetPassword from "./features/admin/pages/AdminResetPassword";
import AdminLandPage from "./features/admin/pages/AdminLandPage";
import AddPatient from "./features/admin/pages/AddPatient";
import DoctorNurseView from "./features/admin/pages/DoctorNurseView";
import ManageDocNurse from "./features/admin/pages/ManageDocNurse"
import AddDocNurse from "./features/admin/pages/AddDocNurse"
import ClinicReg from "./features/admin/pages/ClinicReg"
import ConfirmBooking from "./features/patient/pages/ConfirmBooking"
import RegDone from "./features/admin/pages/RegDone"
import PreCheckup from "./features/admin/pages/PreCheckUp";
import PatientsWaitingConsultPage from "./features/admin/pages/patients_waiting_consultation_page";
import ConsultationRoomPage from "./features/admin/pages/consultation_room_page";
import PreCheckupPage from "./features/admin/pages/pre-checkup_page";
import ViewStaffPage from "./features/admin/pages/view_staff_page";


const App = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [patients, setPatients] = useState([]);

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  return (
    <Router>
      <div className="App">
        <Navigationbar toggleButtons={toggleButtons} />
        <Routes>
          <Route path="/" element={<Homepage1 buttonsVisible={buttonsVisible} />} />
          <Route path="/landhomepage2" element={<LandHomepage2 />} />
          <Route path="/home" element={<LandHomepage2 />} />
          <Route path="/search" element={<PatientHomepage />} />
          <Route path="/booking" element={<Bookingform />} />
          <Route path="/patient-homepage" element={<PatientHomepage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/signout" element={<Homepage1 buttonsVisible={buttonsVisible} />} />
          <Route path="/patient-signin" element={<Login />} />
          <Route path="/confrm-booking" element={<ConfirmBooking />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/reset-password" element={<AdminResetPassword />} />
          <Route path="/adminlandpage" element={<AdminLandPage patients={patients} />} />
          <Route path="/addpatient" element={<AddPatient onAddPatient={handleAddPatient} />} />
          <Route path="/docnursinfo" element={<DoctorNurseView />} />
          <Route path="/addnursedoc" element={<AddDocNurse />} />
          <Route path="/createPassword" element={<ClinicReg />} />
          <Route path="/regDone" element={<RegDone />} />
          <Route path="/addDoc" element={<AddDocNurse />} />
          <Route path="/precheckUp" element={<PreCheckup />} />
          <Route path="/login" element={<AdminSignIn />} />
          <Route path="/logout" element={<Homepage1 buttonsVisible={buttonsVisible} />}  />
          <Route path="/dashboard" element={<AdminLandPage patients={patients} />}  />
          <Route path="/managenursedoc" element={<ManageDocNurse />} />
          <Route path="/mainWelcome" element={<AdminLandPage patients={patients} />} />
          <Route path="/DocNurseReg" element={<AddDocNurse />} />
          <Route path="/docnursview" element={<DoctorNurseView />} />
          <Route path="/backtoadd" element={<ManageDocNurse />} /> 
          <Route path="/patientlist" element={<PatientsWaitingConsultPage/>}/>
          <Route path="/consultation-room" element={<ConsultationRoomPage/>}/>
          <Route path="/precheckUp" element={<PreCheckupPage/>}/>
          <Route path="/view-staff" element={<ViewStaffPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
