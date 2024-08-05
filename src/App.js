import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Pages/Components/Navigationbar";
import LandHomepage2 from './Pages/Homepages/LandHomepage2'
import PatientHomepage from "./Pages/Homepages/PatientHomepage";
import './App.css'
import Bookingform from "./Pages/Forms/Bookingform";
import Homepage1 from "./Pages/Homepages/Homepage1";
import Register from "./Pages/Forms/Register";
import Login from "./Pages/Forms/PatientSignIn";

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

        </Routes>
      </div>
    </Router>
  );
}

export default App;