import React from 'react';
import { Link } from 'react-router-dom';


const TopTwoHeaderLinks = () => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </>
);

export default TopTwoHeaderLinks;