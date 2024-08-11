import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import './PatientSignIn.css';

function AdminSignIn() {
  const users = [
    { idNumber: '9902250601408', password: 'Admin12?' },
    { idNumber: '9902250601408', password: 'Prince12?' }
  ];

  const [idNumber, setStaffNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }

  const isValidStaffNumber = (idNumber) => {
    const staffNumberRegex = /^\d{13}$/;
    return staffNumberRegex.test(idNumber);
  }

  const login = () => {
    if (!isValidStaffNumber(idNumber)) {
      toast.warn('ID number must be exactly 13 digits.');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.warn('Password is not strong enough. It must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.');
      return;
    }

    var isFound = false;
    for (var k = 0; k < users.length; k++) {
      if (users[k].idNumber === idNumber && users[k].password === password) {
        isFound = true;
        break;
      }
    }

    if (isFound) {
      toast.success('Login successfully');
      setTimeout(() => {
        navigate('/landhomepage2');
      }, 2000); // Wait for 2 seconds before navigating
    } else {
      toast.warn('User not found');
    }
  }

  return (
    <div className="main_container1">
      <ToastContainer />
      <div className="reg-form1">
        <h2>Patient Login</h2>
        <div className="form-group2">
          <label>ID Number</label><br />
          <input
            type="text"
            maxLength="13"
            onChange={(event) => setStaffNumber(event.target.value)}
            className="control-form1 large-input1"
          />
        </div>
        <div className="form-group2">
          <label>Password</label><br />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="control-form1 large-input1"
          />
        </div>
        <div className="form-group2">
          <button className="login-button1" onClick={login}>Login</button>
        </div>
        <div className="form-group2">
          <Link to="/forgot-password" className="forgot-password-link1">Forgot Password?</Link>
        </div>
        <div className="form-group2">
          <p>Don't have an account? <Link to="/register" className="sign-up-link1">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default AdminSignIn;


