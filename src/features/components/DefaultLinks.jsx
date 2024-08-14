import React from 'react';
import { Link } from 'react-router-dom';

const DefaultLinks = ({ toggleButtons, location }) => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/signup">SignUp</Link></li>
    {location.pathname === '/' && (
      <button onClick={toggleButtons} className="toggle-buttons1">Toggle Buttons</button>
    )}
  </>
);

export default DefaultLinks;
