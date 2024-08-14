import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResetButton() {
  const navigate = useNavigate();

  const resetPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div className="form-group">
      <button className="reset-button1" onClick={resetPassword}>Reset Password</button>
    </div>
  );
}

export default ResetButton;
