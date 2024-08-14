import React from 'react';

const WelcomeIcon = () => {
  return (
    <div className='welcome-icon'>
      <img 
        src={require('../../../../assets/admin_assets/images/registration_complete_icon.png')} 
        alt="welcome icon" 
        className="logo" 
        height={150}
      />
    </div>
  );
};

export default WelcomeIcon;
