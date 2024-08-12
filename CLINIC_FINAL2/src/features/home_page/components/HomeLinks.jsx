import React from 'react';
import { Link } from 'react-router-dom';

const HomeLinks = ({ toggleButtons, location }) => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/signout">SignOut</Link></li>
    {location.pathname === '/' && (
      <button onClick={toggleButtons} className="toggle-buttons1">Toggle Buttons</button>
    )}
  </>
);

export default HomeLinks;
