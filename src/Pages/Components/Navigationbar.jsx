import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navigationbar.css';
import logo from './Health_Icon.webp';

<<<<<<< HEAD
=======
/*Notifications on the landing page of the patient*/
>>>>>>> 04b03598cffa28daf321e5b630fe2939d3456689
const notifications = [
    "Your blood test results will be back on the 26th of September. You can come and fetch them.",
    "Your appointment with Dr. Smith is scheduled for 10 AM tomorrow.",
    "Reminder: Your annual check-up is due next month."
];

const Navigationbar = ({ toggleButtons }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

<<<<<<< HEAD
=======
    /*Handleling the search when the user press enter it must navigate the clinic page*/
>>>>>>> 04b03598cffa28daf321e5b630fe2939d3456689
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

<<<<<<< HEAD
    /*const handleSignOut = () => {
        navigate('/signout');
    };*/

=======
>>>>>>> 04b03598cffa28daf321e5b630fe2939d3456689
    // Render different links and elements based on the current route
    const renderLinks = () => {
        if (location.pathname === '/home') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signout">SignOut</Link></li>
                    {location.pathname === '/' && (
                        <button onClick={toggleButtons} className="toggle-buttons">Toggle Buttons</button>
                    )}
                </>
            );
        } else if (location.pathname === '/landhomepage2') {
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
                </>
            );
        } else if (location.pathname === '/patienthomepage') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signout">SignOut</Link></li>
                </>
            );
        }  else if (location.pathname === '/booking') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signout">SignOut</Link></li>
                </>
            );
        }
        else if (location.pathname === '/patient-signin') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </>
            );
        }
<<<<<<< HEAD
=======
        else if (location.pathname === '/admin-signin') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </>
            );
        }
>>>>>>> 04b03598cffa28daf321e5b630fe2939d3456689
        else if (location.pathname === '/signup') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </>
            );
        }
<<<<<<< HEAD
=======
        else if (location.pathname === '/register') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </>
            );
        }
>>>>>>> 04b03598cffa28daf321e5b630fe2939d3456689
        else if (location.pathname === '/patient-homepage') {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signout">SignOut</Link></li>
                </>
            );
        }
        
        else {
            return (
                <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    {location.pathname === '/' && (
                        <button onClick={toggleButtons} className="toggle-buttons">Toggle Buttons</button>
                    )}
                </>
            );
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







