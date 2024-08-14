import React from 'react';

function WelcomeIcon() {
  return (
    <div className='welcome-icon'>
      <img
        src={require('../../../../assets/admin_assets/images/clinic_welcome_icon.png')}
        alt="welcome icon"
        className="logo"
        height={150}
      />
    </div>
  );
}

export default WelcomeIcon;
