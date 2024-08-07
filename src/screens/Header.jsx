import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {

    return (
    <div id="header">
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={require('./logo.png')} alt="logo" className="logo" height={80}/>
                <h2 className="heading">ClinicCompass</h2>
            </div>

                <div className="nav-links">
                    <Link to= '/' className="nav_button">Sign Up</Link>
                    <Link to='/clinicReg' className="nav_button">Home</Link>
                    <Link to='/regDone' className="nav_button">Login</Link> 
                </div>

        </nav>
    </div>
    
    );
}

export default Header;