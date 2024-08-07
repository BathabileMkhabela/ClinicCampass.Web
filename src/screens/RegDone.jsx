import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function RegDone() {
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
            <div className='regDone-content'>
                <div className='verify-header'>
                    <h3>KwaMhlanga Clinic</h3>
                </div>
                <div className='welcome-icon'>
                    <img src={require('./registration_complete_icon.png')} alt="welcome icon" className="logo" height={150}/>
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
