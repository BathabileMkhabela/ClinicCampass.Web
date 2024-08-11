import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './AdminSignIn.css';

function AdminSignIn() {
  const users = [
    { staffNumber: '123456', password: 'Admin12?' },
    { staffNumber: '654321', password: 'Prince12?' }
  ];

  const [staffNumber, setStaffNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const isValidStaffNumber = (staffNumber) => {
    const staffNumberRegex = /^\d{6}$/;
    return staffNumberRegex.test(staffNumber);
  };

  const login = () => {
    if (!isValidStaffNumber(staffNumber)) {
      toast.warn('Staff number must be exactly 6 digits.');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.warn('Password is not strong enough. It must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.');
      return;
    }

    let isFound = false;
    for (let k = 0; k < users.length; k++) {
      if (users[k].staffNumber === staffNumber && users[k].password === password) {
        isFound = true;
        break;
      }
    }

    if (isFound) {
      toast.success('Login successfully');
      setTimeout(() => {
        navigate('/adminlandpage');
      }, 2000); // Wait for 2 seconds before navigating
    } else {
      toast.warn('User not found');
    }
  };

  const resetPassword = () => {
    // Navigate to the reset password page or trigger the reset password action
    navigate('/reset-password'); // Adjust the path as necessary
  };

  return (
    <div className="main_container2">
      <ToastContainer />
      <div className="reg-form3">
        <h2>Admin Login</h2>
        <div className="form-group4">
          <label>Staff Number</label><br />
          <input
            type="text"
            maxLength="6"
            onChange={(event) => setStaffNumber(event.target.value)}
            className="control-form2 large-input2"
          />
        </div>
        <div className="form-group4">
          <label>Password</label><br />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="control-form2 large-input2"
          />
        </div>
        <div className="form-group4">
          <button className="login-button2" onClick={login}>Submit</button>
        </div>
        <div className="form-group">
          <button className="reset-button1" onClick={resetPassword}>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default AdminSignIn;
