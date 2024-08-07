import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css";

function Login() {
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
  }

  const isValidStaffNumber = (staffNumber) => {
    const staffNumberRegex = /^\d{6}$/;
    return staffNumberRegex.test(staffNumber);
  }

  const login = () => {
    if (!isValidStaffNumber(staffNumber)) {
      toast.warn('Staff number must be exactly 6 digits.');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.warn('Password is not strong enough. It must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.');
      return;
    }

    var isFound = false;
    for (var k = 0; k < users.length; k++) {
      if (users[k].staffNumber === staffNumber && users[k].password === password) {
        isFound = true;
        break;
      }
    }

    if (isFound) {
      toast.success('Login successfully');
      setTimeout(() => {
        navigate('/LandingPage');
      }, 2000); // Wait for 2 seconds before navigating
    } else {
      toast.warn('User not found');
    }
  }

  return (
    <div className="main_container">
      <ToastContainer />
      <div className="reg-form">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label>Staff Number</label><br />
          <input
            type="text"
            maxLength="6"
            onChange={(event) => setStaffNumber(event.target.value)}
            className="control-form large-input"
          />
        </div>
        <div className="form-group">
          <label>Password</label><br />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="control-form large-input"
          />
        </div>
        <div className="form-group">
          <button className="login-button" onClick={login}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
