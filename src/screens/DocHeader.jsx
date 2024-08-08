import { Link } from "react-router-dom";
import React, { useState } from 'react';

function DocHeader() {

    return (
    <div id="header">
        <img src={'./logo.png'} alt="logo" className="logo"/>
        <div className="heading">
            <h2 className="heading">ClinicCompass</h2>
        </div>

        <Link to='/login' id="links" className="nav_button">Notifications</Link> 
        <Link to= '/' id="links" className="nav_button">Sign out</Link>
        <Link to='/docRegister' id="links" className="nav_button">Schedule</Link>
        <Link to='/login' id="links" className="nav_button">Home</Link> 
        
    </div>
    
    );
}

export default Header;