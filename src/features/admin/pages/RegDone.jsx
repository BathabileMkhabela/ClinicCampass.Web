import React from 'react';
import '../../../styles/admin_styles.css';
import Header from '../../admin/components/registration_done_components/Header';
import WelcomeIcon from '../components/registration_done_components/WelcomeIcon';
import VerificationText from '../../admin/components/registration_done_components/VerificationText';
import SubmitButton from '../../admin/components/registration_done_components/SubmitButton';

const RegDone = () => {
  return (
    <div className='container'>
      <div className='regDone-content'>
        <Header />
        <WelcomeIcon />
        <VerificationText />
        <SubmitButton />
      </div>
    </div>
  );
};

export default RegDone;
