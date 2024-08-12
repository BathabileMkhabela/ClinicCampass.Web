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
import ResetPasswordLinks from '../admin/components/ResetPasswordLinks';
import AdminLangPageLinks from '../admin/components/AdminLangPageLinks';
import DocNurseViewLinks from '../admin/components/DocNurseViewLinks'
import ManageDocNurseLinks from '../admin/components/ManageDocNurseLinks';
import AddDocNurseLinks from '../admin/components/AddDocNurseLinks';

const Navigationbar = ({ toggleButtons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (searchTerm.toLowerCase() === 'kwamhlanga clinic') {
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
      case '/search':
        return <PatientHomepageLinks />;
      case '/confrm-booking':
        return <PatientHomepageLinks />
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
        case '/reset-password':
          return <ResetPasswordLinks />
        case '/adminlandpage':
          return <AdminLangPageLinks />
        case '/docnursinfo':
          return <DocNurseViewLinks />
        case '/managenursedoc':
          return <ManageDocNurseLinks />
        case '/addnursedoc':
          return <AddDocNurseLinks />
        case '/createPassword':
          return <AddDocNurseLinks />
        case '/regDone':
          return <AddDocNurseLinks />
      default:
        return <DefaultLinks toggleButtons={toggleButtons} location={location} />;
    }
  };

  return (
    <nav className="navbar1">
      <div className="navbar-logo1">
        <img src={logo} alt="Logo" className="logo1" />
        <span className="system-name1">ClinicCompass</span>
      </div>
      <ul className="navbar-links1">
        {renderLinks()}
      </ul>
    </nav>
  );
};

export default Navigationbar;








