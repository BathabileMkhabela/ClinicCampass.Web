import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/Register';
import Login from './screens/Login';
import AddDoc from './screens/AddDoc';
import CreateP from './screens/CreateP';
import ConfirmBooking from './screens/ConfirmBooking';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClinicReg from './screens/ClinicReg';
import RegDone from './screens/RegDone';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar 
           toggleButtons={toggleButtons}
        />
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
          <Route path="/signup" element={<Register/>} />
          <Route path="/patienthomepage" element={<PatientHomepage />} />

        </Routes>
      </div>
    </Router>
  );
}
export default App;
