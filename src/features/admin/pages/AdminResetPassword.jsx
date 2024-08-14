import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import EmailInput from '../../admin/components/admin_reset_password_components/EmailInput';
import ResetButton from '../../admin/components/admin_reset_password_components/ResetButton';
import BackButton from '../../admin/components/admin_reset_password_components/BackButton';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const [email, setEmail] = useState('');

  return (
    <div className="main_container2">
      <ToastContainer />
      <div className="reg-form3">
        <h2>Reset Password</h2>
        <EmailInput setEmail={setEmail} />
        <ResetButton />
        <BackButton />
      </div>
    </div>
  );
}

export default ResetPassword;
