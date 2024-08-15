import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Register from './screens/components/Register';
import Login from './screens/components/Login'
import Welcomer from './screens/components/welcomer';
import AboutUs from './screens/components/AboutUs';
import ForgotPassword from './screens/components/ForgotPassword';
import CreatePassword from './screens/components/CreatePassword';
import MainWelcome from './screens/components/MainWelcome';
import IncomingAppointments from './screens/components/InAppointment';
import PreCheckup from './screens/components/PreCheckUp';
import DoctorNurseView from './screens/components/ViewDocNurse';
import PatientList from './screens/components/PatientList';
import ManageDoctorNurse from './screens/components/ManageNurseDoc';
import DocNurseRegister from './screens/components/DocNurseRegister';
import AddingPatient from './screens/components/AddPatient'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcomer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element ={<AboutUs />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/createPassword' element={<CreatePassword />} />
        <Route path='/mainWelcome' element={<MainWelcome />} />
        <Route path='/inAppointment' element={<IncomingAppointments />} />
        <Route path='/precheckup' element={<PreCheckup />} />
        <Route path='/doctornurseview' element={<DoctorNurseView />} />
        <Route path='/patientlist' element={<PatientList />} />
        <Route path='/managenursedoc' element={<ManageDoctorNurse />} />
        <Route path='/DocNurseReg' element={<DocNurseRegister />} />
        <Route path='/addingPatient' element={<AddingPatient />} />

      </Routes>
    </Router>
  );
}
export default App;
