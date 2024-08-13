import React from 'react';
import '../../../styles/homepage_styles.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Homepage1 = ({ buttonsVisible }) => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <video autoPlay muted loop className="background-video">
        <source src={require('../../../assets/BackgroundVideo.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
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
      </div>
      
    </div>
  );
};

export default Homepage1;




























