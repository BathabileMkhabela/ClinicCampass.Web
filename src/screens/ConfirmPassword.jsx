import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function ConfirmPassword() {
    const navigate = useNavigate();
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Email, setEmail] = useState('');

    function submit() {
        if (NewPassword === '') {
            alert('Enter new password');
            return;
        }
        if (ConfirmPassword === '') {
            alert('Confirm pasword');
            return;
        }
        var NewPassword = ConfirmPassword;
        if (!NewPassword.match(ConfirmPassword)) {
            alert('Password does not match');
            return;
        }
        var data = { NewPassword, ConfirmPassword}
        console.log(data);
        navigate('/login')
    }
    return (
        <div>
            <Header />
            <div className="pass-group">
            <h2>Confirm Password or Reset Password</h2>
            <div className="password-group">
                <input placeholder="New Password" type="text" onChange={(event) => setNewPassword(event.target.value)} className="control-form" />
            </div>
            <div className="password-group">
                <input placeholder = "Confirm Password" type="text" onChange={(event) => setConfirmPassword(event.target.value)} className="control-form" />
            </div>
            <div className="password-group">
                <button onClick={() => submit()}>Submit</button>
            </div>
            </div>
        </div>
    );
}

export default ConfirmPassword;