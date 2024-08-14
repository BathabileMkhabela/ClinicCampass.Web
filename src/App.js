import React, { useState } from 'react';
import AdminDashboardPage from "./features/admin/pages/admin_dashboard_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./features/admin/pages/adminLogin_page";
import HomePage from "./features/home_page/page/home_page";
import PreCheckupPage from "./features/admin/pages/pre-checkup_page";
import PatientsWaitingConsultPage from "./features/admin/pages/patients_waiting_consultation_page";
import ConsultationRoomPage from "./features/admin/pages/consultation_room_page";
import ViewStaffPage from "./features/admin/pages/view_staff_page";
import ManageStaffPage from "./features/admin/pages/manage_staff_page";
import RegisterNewStaffPage from "./features/admin/pages/register_new_stafff_page";
import StaffRegisterVerificationPage from "./features/admin/pages/staffRegister_verification_page";
import Navigationbar from "./features/components/Navigationbar";
import AdminResertPassword from "./features/admin/pages/admin_reset_password"
import PatientSignIn from "./features/patients/pages/patient_sign_in"
import PatientLandingPage from "./features/patients/pages/patient_landing_page"
import ClinicLandingPage from "./features/patients/pages/clinic_landing_page"
import AppointmentBookingForm from "./features/patients/pages/appointment_booking_form"
import ConfirmBooking from "./features/patients/pages/confirm_booking"
import PatientSignUp from "./features/patients/pages/patient_sign_up"
import AddPatients from "./features/admin/pages/add_patient"
import NurseSignIn from './features/nurse/pages/nurse_sign_in';
import PatientList from "./features/nurse/pages/patient_list"

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
          <Route path="/" element={<HomePage buttonsVisible={buttonsVisible} />} />
          <Route path="/admin-signin" element={<AdminLoginPage/>}/>
          <Route path="/Admin-dashboard" element={<AdminDashboardPage/>}/>
          <Route path="/Pre-checkup" element={<PreCheckupPage/>}/>
          <Route path="/patients-list" element={<PatientsWaitingConsultPage/>}/>
          <Route path="/consultation-room" element={<ConsultationRoomPage/>}/>
          <Route path="/view-staff" element={<ViewStaffPage/>}/>
          <Route path="/manage-staff" element={<ManageStaffPage/>}/>
          <Route path="/register-staff" element={<RegisterNewStaffPage/>}/>
          <Route path="/register-verification" element={<StaffRegisterVerificationPage/>}/>
          <Route path="/reset-password" element={<AdminResertPassword/>}/>
          <Route path="/patient-signin" element={<PatientSignIn />} />
          <Route path="/nurse-signin" element={<NurseSignIn/>}/>
          <Route path="/patient-landing-page" element={<PatientLandingPage />} />
          <Route path="/clinic-landing-page" element={<ClinicLandingPage />} />
          <Route path="/booking_form" element={<AppointmentBookingForm />} />
          <Route path="/confirm-booking" element={<ConfirmBooking />} />
          <Route path="/signup" element={<PatientSignUp />} />
          <Route path="/add-patient" element={<AddPatients onAddPatient={handleAddPatient} />} />
          <Route path="/patient-list" element={<PatientList />} />
          
        </Routes>
        </div>
    </Router>
  );
}

export default App;