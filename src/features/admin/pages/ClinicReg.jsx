import React, { useState } from 'react';
import '../../../styles/admin_styles.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../admin/components/clinic_registration_components/Header';
import WelcomeIcon from '../../admin/components/clinic_registration_components/WelcomeIcon';
import PasswordInput from '../../admin/components/clinic_registration_components/PasswordInput';
import VerifyButton from '../../admin/components/clinic_registration_components/VerifyButton';

function ClinicReg() {
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function submit() {
    if (password !== '123456') {
      setError('Incorrect password. Please try again.');
      return;
    }
    
    setError(''); 
    console.log('Password is correct. Proceed with verification.');
    navigate('/regDone'); 
  }

  return (
    <div className='container'>
      <div className='clinicReg-content'>
        <Header />
        <WelcomeIcon />
        <div className='p-verify'>
          <p>Verify user account!</p>
        </div>
        <div className='verify-text'>
          <p>Enter admin password to verify and continue</p>
        </div>
        <PasswordInput
          password={password}
          handlePasswordChange={handlePasswordChange}
          error={error}
        />
        <VerifyButton submit={submit} />
      </div>
    </div>
  );
}

export default ClinicReg;
