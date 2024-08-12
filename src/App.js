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
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Admin-login" element={<AdminLoginPage/>}/>
          <Route path="/Admin-dashboard" element={<AdminDashboardPage/>}/>
          <Route path="/Pre-checkup" element={<PreCheckupPage/>}/>
          <Route path="/patients-list" element={<PatientsWaitingConsultPage/>}/>
          <Route path="/consultation-room" element={<ConsultationRoomPage/>}/>
          <Route path="/view-staff" element={<ViewStaffPage/>}/>
          <Route path="/manage-staff" element={<ManageStaffPage/>}/>
          <Route path="/register-staff" element={<RegisterNewStaffPage/>}/>
          <Route path="/register-verification" element={<StaffRegisterVerificationPage/>}/>
        </Routes>

    </Router>
  );
}

export default App;