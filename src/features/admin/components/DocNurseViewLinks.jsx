import React from 'react';
import { Link } from 'react-router-dom';


const DocNurseViewLinks = () => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/setting">Setting</Link></li>
  </>
);

export default DocNurseViewLinks;