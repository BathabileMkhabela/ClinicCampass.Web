import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./features/main components/Navigationbar";
import LandHomepage2 from './features/patient/pages/LandHomepage2'
import PatientHomepage from "./features/patient/pages/PatientHomepage";
import Bookingform from "./features/patient/pages/Bookingform";
import Homepage1 from "./features/home_page/page/Homepage1";
import Register from "./features/patient/pages/Register";
import Login from "./features/patient/pages/PatientSignIn";
import AdminSignIn from "./features/admin/pages/AdminSignIn"
import AdminResetPassword from "./features/admin/pages/AdminResetPassword"

const App = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);


  const toggleButtons = () => {
    setButtonsVisible(!buttonsVisible);
  };

  
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
          <Route path="/admin-signin" element={<AdminSignIn />} />
          <Route path="/reset-password" element={<AdminResetPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
