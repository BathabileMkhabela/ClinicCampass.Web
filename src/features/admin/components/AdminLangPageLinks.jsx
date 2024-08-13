import React from 'react';
import { Link } from 'react-router-dom';


const AdminLangPageLinks = () => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/settings">Settings</Link></li>
  </>
);

export default AdminLangPageLinks;