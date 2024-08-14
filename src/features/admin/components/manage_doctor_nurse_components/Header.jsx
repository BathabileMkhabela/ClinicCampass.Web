import React from 'react';

const Header = ({ practiceNumber }) => {
  return (
    <div className="header">
      <h1 className="main-title">Manage Nurse/Doctor</h1>
      <p className="practice-number">Practice Number: {practiceNumber}</p>
    </div>
  );
};

export default Header;
