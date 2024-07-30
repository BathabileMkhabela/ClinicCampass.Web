import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navigationbar.css';
import logo from './Logo.jpg';

const notifications = [
    "Your blood test results will be back on the 26th of September. You can come and fetch them.",
    "Your appointment with Dr. Smith is scheduled for 10 AM tomorrow.",
    "Reminder: Your annual check-up is due next month."
];

const Navigationbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (searchTerm.toLowerCase() === 'soshanguve clinic') {
        navigate('/search');
      }
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  // Check if the current path is the one where the notification icon should be visible
  const showNotificationIcon = location.pathname === '/';
  
  // Check if the current path is the one where the search bar should be visible
  const showSearchBar = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span className="system-name">ClinicCompass</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signout">SignOut</Link></li>
      </ul>
      {showSearchBar && (
        <div className="navbar-search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      )}
      {showNotificationIcon && (
        <div className="notification-container">
          <div className="notification-icon" onClick={handleNotificationClick}>
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
          </div>
          {showNotifications && (
            <div className="notification-dropdown">
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index}>{notification}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigationbar;




