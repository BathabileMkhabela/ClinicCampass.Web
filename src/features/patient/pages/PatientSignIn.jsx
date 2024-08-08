import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './PatientSignIn.css';

const Login = () => {
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy validation logic; replace with real authentication
    if (idNumber === '1234567890' && password === 'password') {
      navigate('/landhomepage2');
    } else {
      setError('ID number or password is incorrect');
    }
  };

  return (
    <div className="login-container">
      <h2>Patient Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="login-form">
        <input
          type="text"
          placeholder="ID Number"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <div className="login-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

