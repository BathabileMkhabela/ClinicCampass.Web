import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginButton({ staffNumber, password, users }) {
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
      }, 2000);
    } else {
      toast.warn('User not found');
    }
  };

  return (
    <div className="form-group4">
      <button className="login-button2" onClick={login}>Submit</button>
    </div>
  );
}

export default LoginButton;
