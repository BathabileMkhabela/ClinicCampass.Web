import React from 'react';
import '../../../styles/admin_styles.css';
import { useNavigate } from 'react-router-dom';

const RegDone = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addDoc'); 
  };

  return (
    <div className='container'>
      <div className='regDone-content'>
        <div className='verify-header'>
          <h3>KwaMhlanga Clinic</h3>
        </div>
        <div className='welcome-icon'>
          <img 
            src={require('../../../assets/admin_assets/images/registration_complete_icon.png')} 
            alt="welcome icon" 
            className="logo" 
            height={150}
          />
        </div>
        <div className='verify-text'>
          <p>New healthcare provider profile created and active.</p>
        </div>
        <div>  
          <button className='reg-button' onClick={handleClick}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default RegDone;
