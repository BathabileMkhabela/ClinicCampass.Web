import React from 'react';
import { Link } from 'react-router-dom';

const PatientHomepageLinks = () => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/signout">SignOut</Link></li>
  </>
);

export default PatientHomepageLinks;
