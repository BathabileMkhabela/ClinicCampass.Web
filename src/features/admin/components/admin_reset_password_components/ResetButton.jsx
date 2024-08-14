import React from 'react';
import { toast } from 'react-toastify';

function ResetButton() {
  const handleReset = () => {
    // Implement the reset password logic here
    toast.success('Password reset link has been sent to your email.');
  };

  return (
    <div className="form-group4">
      <button className="reset-button1" onClick={handleReset}>Send Reset Link</button>
    </div>
  );
}

export default ResetButton;
