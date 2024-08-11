import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function RegDone() {
    const navigate = useNavigate();

    function submit() {
        navigate('/addDoc'); 
    }

    return (
        <div className='container'>
            <div className='regDone-content'>
                <div className='verify-header'>
                    <h3>KwaMhlanga Clinic</h3>
                </div>
                <div className='welcome-icon'>
                    <img src={require('../../../assets/admin_assets/images/registration_complete_icon.png')} alt="welcome icon" className="logo" height={150}/>
                </div>

                <div className='verify-text'>
                    <p>New healthcare provider profile created <br/> and active.</p>
                </div>
                
                <div>  
                    <button className='reg-button' onClick={submit}>Done</button>
                </div>
            </div>
        </div>
    );
}

export default RegDone;