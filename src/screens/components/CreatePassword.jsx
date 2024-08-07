import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // handle password creation
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="create-password">
    <Header />

      <main>
        <h2>Create Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePassword;
