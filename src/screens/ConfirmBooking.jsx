import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function ConfirmBooking() {
    const navigate = useNavigate();
    

    return (
        <div className='container'>
            <Header />
            <div className='content'>
                <h1>Thank you for booking your appointment</h1>
                <br/>
                <h4>Please check your emails for a detailed confirmation</h4>
                <div className='check-image'>
                    <img src={require('./checkbox.png')} alt="successfil image" className="checkbox-image" height={400}/>
                </div>
                <div>
                    <button className='close-button'>Close</button>
                </div>
            </div>
            <div className='footer'>
                <h4>Contact us</h4>
                <ul>
                    <li>+27 11 222 3333</li>
                    <li>@ClinicC</li>
                    <li>@Clini_C</li>
                </ul>
                <div className='logo-footer'>
                    <img src={require('./logo.png')} alt="logo" className="logo" height={150}/>
                </div>
            </div>
        </div>

    );
}

export default ConfirmBooking;
