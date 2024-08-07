import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../images/logo.jpg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import IncomingAppointments from "./InAppointment";

const HomePage = () => {
  return (
    <div className="homepage">
    
      <Header />
      <div className="main-content">
        <main>
          {/* <h1>Stay Informed About Your Nearest Clinic</h1>
          <p>Discover Your Nearest Clinic</p>
          <p>Use our search bar to quickly find the nearest clinic to you.</p>
          <p>
            Get comprehensive information about its services, operating hours,
            and availability of the Doctors to ensure you receive the care you
            need promptly and efficiently.
          </p> */}
          <IncomingAppointments />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
