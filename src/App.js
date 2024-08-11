import AdminDashboardPage from "./features/admin/pages/admin_dashboard_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import AdminLoginPage from "./features/admin/pages/adminLogin_page";
import HomePage from "./features/home_page/page/home_page";
import PreCheckupPage from "./features/admin/pages/pre-checkup_page";
import PatientsWaitingConsultPage from "./features/admin/pages/patients_waiting_consultation_page";
import ConsultationRoomPage from "./features/admin/pages/consultation_room_page";
import ViewStaffPage from "./features/admin/pages/view_staff_page";
import ManageStaffPage from "./features/admin/pages/manage_staff_page";
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
=======
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
import DocNursInfo from "./features/admin/pages/DocNursInfo"
import ManageDocNurse from "./features/admin/pages/ManageDocNurse"
import AddDocNurse from "./features/admin/pages/AddDocNurse"
import ClinicReg from "./features/admin/pages/ClinicReg"
import ConfirmBooking from "./features/patient/pages/ConfirmBooking"
import RegDone from "./features/admin/pages/RegDone"
import PreCheckup from "./features/admin/pages/PreCheckUp";

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
          <Route path="/docnursinfo" element={<DocNursInfo />} />
          <Route path="/doctorinfo" element={<ManageDocNurse />} />
          <Route path="/addnursedoc" element={<AddDocNurse />} />
          <Route path="/createPassword" element={<ClinicReg />} />
          <Route path="/regDone" element={<RegDone />} />
          <Route path="/addDoc" element={<AddDocNurse />} />
          <Route path="/precheckUp" element={<PreCheckup />} />
          
>>>>>>> 6189567ea6302cda04367bb48c99f4115aed398f
        </Routes>

    </Router>
  );
}

export default App;
