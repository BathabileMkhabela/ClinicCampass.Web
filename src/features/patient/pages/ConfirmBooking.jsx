import { useState } from 'react';
import './Bookingform.css';
import { useNavigate } from 'react-router-dom';


function ConfirmBooking() {
    const navigate = useNavigate();

    const handleClose = () => {
       
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='clinicReg-content'>
                <h2>Thank you for booking your appointment</h2>
                <br />
                <h5>Please check your emails for a detailed confirmation</h5>
                <div className='check-image'>
                    <img src={require('../../../assets/admin_assets/images/booking.png')} alt="successful booking" className="checkbox-image" height={320} />
                </div>
                <div>
                    <button className='reg-button' onClick={handleClose}>Close</button>
                </div>
            </div>
            
        </div>
    );
}

export default ConfirmBooking;