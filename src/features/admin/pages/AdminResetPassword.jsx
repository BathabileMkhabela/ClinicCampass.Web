import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Implement the reset password logic here
    toast.success('Password reset link has been sent to your email.');
  };

  return (
    <div className="main_container">
      <ToastContainer />
      <div className="reg-form">
        <h2>Reset Password</h2>
        <div className="form-group">
          <label>Email</label><br />
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className="control-form large-input"
          />
        </div>
        <div className="form-group">
          <button className="reset-button" onClick={handleReset}>Send Reset Link</button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
