import AdminDashboardPage from "./features/admin/pages/admin_dashboard_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./features/admin/pages/adminLogin_page";
import HomePage from "./features/home_page/page/home_page";
import PreCheckupPage from "./features/admin/pages/pre-checkup_page";
import PatientsWaitingConsultPage from "./features/admin/pages/patients_waiting_consultation_page";
import ConsultationRoomPage from "./features/admin/pages/consultation_room_page";
import ViewStaffPage from "./features/admin/pages/view_staff_page";
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
        </Routes>

    </Router>
  );
}

export default App;