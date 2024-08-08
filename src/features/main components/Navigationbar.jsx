import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigationbar.css';
import logo from '../../assets/admin_assets/images/Health_Icon.webp';


import HomeLinks from '../home_page/components/HomeLinks';
import LandHomepage2Links from '../patient/components/LandHomepage2Links';
import PatientHomepageLinks from '../patient/components/PatientHomepageLinks';
import BookingLinks from '../patient/components/BookingLinks';
import PatientSignInLinks from '../patient/components/PatientSignInLinks';
import AdminSignInLinks from '../admin/components/AdminSignInLinks';
import SignupLinks from '../patient/components/SignUpLinks';
import RegisterLinks from '../patient/components/RegisterLinks';
import AboutLinks from './AboutLinks';
import DefaultLinks from './DefaultLinks';

const Navigationbar = ({ toggleButtons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (searchTerm.toLowerCase() === 'soshanguve clinic') {
        navigate('/search');
      }
    }
  };

  const renderLinks = () => {
    switch (location.pathname) {
      case '/home':
        return <HomeLinks toggleButtons={toggleButtons} location={location} />;
      case '/landhomepage2':
        return (
          <LandHomepage2Links 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            handleSearch={handleSearch} 
          />
        );
      case '/patienthomepage':
        return <PatientHomepageLinks />;
      case '/booking':
        return <BookingLinks />;
      case '/patient-signin':
        return <PatientSignInLinks />;
      case '/admin-signin':
        return <AdminSignInLinks />;
      case '/signup':
        return <SignupLinks />;
      case '/register':
        return <RegisterLinks />;
        case '/about':
            return <AboutLinks />;
      default:
        return <DefaultLinks toggleButtons={toggleButtons} location={location} />;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span className="system-name">ClinicCompass</span>
      </div>
      <ul className="navbar-links">
        {renderLinks()}
      </ul>
    </nav>
  );
};

export default Navigationbar;








