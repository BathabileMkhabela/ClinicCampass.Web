import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/admin_styles.css';
import StaffNumberInput from '../../admin/components/admin_sign_in_components/StaffNumberInput';
import PasswordInput from '../../admin/components/admin_sign_in_components/PasswordInput';
import LoginButton from '../../admin/components/admin_sign_in_components/LoginButton';
import ResetButton from '../../admin/components/admin_sign_in_components/ResetButton';

function AdminSignIn() {
  const users = [
    { staffNumber: '123456', password: 'Admin12?' },
    { staffNumber: '654321', password: 'Prince12?' }
  ];

  const [staffNumber, setStaffNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main_container2">
      <ToastContainer />
      <div className="reg-form3">
        <h2>Admin Login</h2>
        <StaffNumberInput setStaffNumber={setStaffNumber} />
        <PasswordInput setPassword={setPassword} />
        <LoginButton staffNumber={staffNumber} password={password} users={users} />
        <ResetButton />
      </div>
    </div>
  );
}

export default AdminSignIn;
