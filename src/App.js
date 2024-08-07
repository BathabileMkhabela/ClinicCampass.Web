import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/components/Register';
import Login from './screens/components/Login'
import Welcomer from './screens/components/welcomer';
import AboutUs from './screens/components/AboutUs';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ForgotPassword from './screens/components/ForgotPassword';
import CreatePassword from './screens/components/CreatePassword';
import MainWelcome from './screens/components/MainWelcome';
// import PatientAppointList from './screens/components/PatientAppoint';
import IncomingAppointments from './screens/components/InAppointment';
import PreCheckup from './screens/components/PreCheckUp';
import DoctorNurseView from './screens/components/ViewDocNurse';
import PatientList from './screens/components/PatientList';
import ManageDoctorNurse from './screens/components/ManageNurseDoc';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcomer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Sign Up' element={<Register />} />
        <Route path='/about' element ={<AboutUs />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/createPassword' element={<CreatePassword />} />
        <Route path='/mainWelcome' element={<MainWelcome />} />
        <Route path='/inAppointment' element={<IncomingAppointments />} />
        <Route path='/precheckup' element={<PreCheckup />} />
        <Route path='/doctornurseview' element={<DoctorNurseView />} />
        <Route path='/patientlist' element={<PatientList />} />
        <Route path='/managenursedoc' element={<ManageDoctorNurse />} />

      </Routes>
    </Router>
  );
}
export default App;
