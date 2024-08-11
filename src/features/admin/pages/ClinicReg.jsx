import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';


function ClinicReg() {
    const navigate = useNavigate();
    
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function submit() {
        
        if (password !== 'password') {
            setError('Incorrect password. Please try again.');
            return;
        }
        
        setError(''); 
        console.log('Password is correct. Proceed with verification.');
        navigate('/regDone'); 
    }

    return (
        <div className='container'>
           
            <div className='clinicReg-content'>
                <div className='verify-header'>
                    <h3>Registering user to KwaMhlanga <br/>Clinic</h3>
                </div>
                <div className='welcome-icon'>
                    <img src={require('../../../assets/admin_assets/images/clinic_welcome_icon.png')} alt="welcome icon" className="logo" height={150}/>
                </div>

                <div className='p-verify'>
                    <p>Verify user account!</p>
                </div>
                <div className='verify-text'>
                <p>Enter admin password to verify and continue</p>
                </div>
                <div className="admin-passowrd">
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="control-form"
                        placeholder="Enter admin password"
                    />
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div>  
                    <button className='reg-button' onClick={submit}>Verify</button>
                </div>
            </div>
        </div>
    );
}

export default ClinicReg;
