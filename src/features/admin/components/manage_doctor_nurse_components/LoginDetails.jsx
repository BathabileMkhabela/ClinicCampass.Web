import React from 'react';

const LoginDetails = ({ newPassword, handleGeneratePassword }) => {
  return (
    <div className="login-details-container">
      <h4 className="title">Login Details</h4>
      <div className="input-groupA">
        <button type="button" onClick={handleGeneratePassword} className="generate-password-button">Generate New Temporary Password</button>
      </div>
      {newPassword && (
        <div className="new-password-display">
          <p>New Password: <strong>{newPassword}</strong></p>
        </div>
      )}
    </div>
  );
};

export default LoginDetails;
