import React from 'react';
import { Link } from 'react-router-dom';

const AboutLinks = () => (
  <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/signout">SignOut</Link></li>
  </>
);

export default AboutLinks;