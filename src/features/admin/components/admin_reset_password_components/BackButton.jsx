import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <div className="form-group4">
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
}

export default BackButton;
