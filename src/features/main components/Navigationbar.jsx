import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/navigationbar.css';
import logo from '../../assets/admin_assets/images/Health_Icon.webp';
import LandHomepage2Links from './LandHomepage2Links';
import AboutLinks from '../components/TopTwo2HeaderLinks';
import DefaultLinks from '../components/DefaultLinks';
import TopFourHeaderLinks from '../components/TopFourHeaderLinks';
import TopTwoHeaderLinks from '../components/TopTwoHeaderLinks';
import TopThreeHeaderLinks from '../components/TopThreeHeaderLinks';
import TopThree2HeaderLinks from '../components/TopThree2HeaderLinks'


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
        return <DefaultLinks toggleButtons={toggleButtons} location={location} />;
      case '/landhomepage2':
        return (
          <LandHomepage2Links 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            handleSearch={handleSearch} 
          />
        );
      case '/search':
        return <TopThree2HeaderLinks />;
      case '/confrm-booking':
        return <TopThree2HeaderLinks />
      case '/booking':
        return <TopThree2HeaderLinks />;
      case '/patient-signin':
        return <TopTwoHeaderLinks />;
      case '/admin-signin':
        return <TopTwoHeaderLinks />;
      case '/signup':
        return <TopTwoHeaderLinks />;
      case '/register':
        return <TopTwoHeaderLinks />;
        case '/about':
            return <AboutLinks />;
        case '/reset-password':
          return <TopTwoHeaderLinks />
        case '/adminlandpage':
          return <TopThreeHeaderLinks />
        case '/docnursinfo':
          return <TopFourHeaderLinks />
        case '/managenursedoc':
          return <TopFourHeaderLinks />
        case '/addnursedoc':
          return <TopFourHeaderLinks />
        case '/createPassword':
          return <TopFourHeaderLinks />
        case '/regDone':
          return <TopFourHeaderLinks />
          case '/regDone':
            return <TopFourHeaderLinks />
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








