import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function ClinicReg() {
    const navigate = useNavigate();
    
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Hardcoded password
    const HARD_CODED_PASSWORD = 'Admin1234';

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function submit() {
        // Check if the entered password matches the hardcoded password
        if (password !== 'password') {
            setError('Incorrect password. Please try again.');
            return;
        }
        
        // Handle successful password verification here
        setError(''); // Clear error if validation passes
        console.log('Password is correct. Proceed with verification.');
        navigate('/nextPage'); // Navigate to the next page after successful verification
    }

    return (
        <div className='container'>
            <Header />
            <div className='clinicReg-content'>
                <div className='verify-header'>
                    <h3>Registering user to KwaMhlanga <br/>Clinic</h3>
                </div>
                <div className='welcome-icon'>
                    <img src={require('./clinic_welcome_icon.png')} alt="welcome icon" className="logo" height={150}/>
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
