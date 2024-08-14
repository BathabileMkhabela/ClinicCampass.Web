import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    // Implement the reset password logic here
    toast.success('Password reset link has been sent to your email.');
  };

  const handleBack = () => {
    navigate('/admin-signin');
  };

  return (
    <div className="main_container2">
      <ToastContainer />
      <div className="reg-form3">
        <h2>Reset Password</h2>
        <div className="form-group4">
          <label>Email</label><br />
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className="control-form2 large-input2"
          />
        </div>
        <div className="form-group4">
          <button className="reset-button1" onClick={handleReset}>
            Send Reset Link
          </button>
        </div>
        <div className="form-group4">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
