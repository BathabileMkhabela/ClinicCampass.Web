import React from 'react';
import './Style101.css'
import logo from '../images/logo.jpg'
import Footer from './Footer';
import Header from './Header';
import DateNTime from "./DateNTime";

function App() {
  return (
    <div className="about">
    <Header />
      <main>
          <h1>OUR MISSION</h1>
          <p>
            At ClinicCompass, our mission is to revolutionize the healthcare experience within community clinics by providing an integrated, user-friendly platform that enhances the management of doctor availability, patient appointments, and blood test results. We aim to streamline clinic operations, reduce administrative burdens, and improve patient satisfaction by:
          </p>
          <ul>
            <img src={logo} alt='logo' className='logo' height={250} />
            <li>Offering patients real-time access to doctor schedules for easy and efficient appointment booking.</li>
            <li>Ensuring doctors receive timely notifications about their schedules, enabling effective time management.</li>
            <li>Automating the tracking and notification process for blood test results, guaranteeing prompt patient communication.</li>
          </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
