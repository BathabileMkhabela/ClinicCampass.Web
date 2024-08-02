import React from 'react';
import './Homepage1.css';
import backgroundImage from '../Background.jpg';
import { useNavigate } from 'react-router-dom';

const Homepage1 = ({ buttonsVisible }) => {
  const navigate = useNavigate();

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="welcome-message">
        <h1>Know when your doctor’s available</h1>
        <p>Secure your spot at your local clinic</p>
      </div>
      <div className={`sign-in-buttons ${buttonsVisible ? 'visible' : 'hidden'}`}>
        <button onClick={() => navigate('/patient-signin')}>Patient Sign In</button>
        <button onClick={() => navigate('/doctor-signin')}>Doctor Sign In</button>
        <button onClick={() => navigate('/nurse-signin')}>Nurse Sign In</button>
        <button onClick={() => navigate('/admin-signin')}>Admin Sign In</button>
      </div>
      <button className="next-button" onClick={() => navigate('/landhomepage2')}>Next</button>
    </div>
  );
};

export default Homepage1;
























