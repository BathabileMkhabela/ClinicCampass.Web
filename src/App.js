import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Pages/Components/Navigationbar";
import LandHomepage2 from './Pages/Homepages/LandHomepage2'
import PatientHomepage from "./Pages/Homepages/PatientHomepage";
import './App.css'
import Bookingform from "./Pages/Forms/Bookingform";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<LandHomepage2 />} />
          <Route path="/search" element={<PatientHomepage />} />
          <Route path="/booking" element={<Bookingform />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/signout" element={<div>Signout Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;