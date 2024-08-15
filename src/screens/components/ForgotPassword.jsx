import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would send the email to your backend for processing
    // Example: await fetch('/api/forgot-password', { method: 'POST', body: JSON.stringify({ email }) });

    setMessage('If an account with that email exists, a password reset link has been sent.');
  };

  return (
    <div>
        <Header />

      <main>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <button className="button" type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      </main>
      <Footer />
    </div>
    
  );
};

export default ForgotPassword;
