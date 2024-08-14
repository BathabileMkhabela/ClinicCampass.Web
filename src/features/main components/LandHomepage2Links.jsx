import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

const notifications = [
    "Your blood test results will be back on the 26th of September. You can come and fetch them.",
    "Your appointment with Dr. Smith is scheduled for 10 AM tomorrow.",
    "Reminder: Your annual check-up is due next month."
];

const LandHomepage2Links = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
      setShowNotifications(!showNotifications);
  };

  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signout">SignOut</Link></li>
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
      <div className="notification-container1">
        <div className="notification-icon1" onClick={handleNotificationClick}>
          <FontAwesomeIcon icon={faBell} className="bell-icon1" />
        </div>
        {showNotifications && (
          <div className="notification-dropdown1">
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LandHomepage2Links;
