import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";


function Doctorslogin() {
    const users = [
        { practiceNumber: "123456", password: 'Bafedile12?' },
        { practiceNumber: '654321', password: 'Prince12?' }
    ];

    const [practiceNumber, setPracticeNumber] = useState('');
    const [password, setPassword] = useState('');

    const isStrongPassword = (password) => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    }

    const isValidPracticeNumber = (practiceNumber) => {
        const practiceNumberRegex = /^\d{6}$/;
        return practiceNumberRegex.test(practiceNumber);
    }

    const login = () => {
        if (!isValidPracticeNumber(practiceNumber)) {
            toast.warn("Practice number must be exactly 6 digits.");
            return;
        }

        if (!isStrongPassword(password)) {
            toast.warn("Password is not strong enough. It must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.");
            return;
        }

        var isFound = false;
        for (var k = 0; k < users.length; k++) {
            if (users[k].practiceNumber === practiceNumber && users[k].password === password) {
                isFound = true;
                break;
            }
        }

        if (isFound) {
            toast.success("Login successfully");
            window.location.href = '/LandingPage';
        } else {
            toast.warn("User not found");
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="Nav">
                <NavBar />
            </div>
            <div className="main_container">
                <div className="reg-form">
                    <h2>Doctor Login</h2>
                    <div className="form-group">
                        <label>Practice Number</label><br />
                        <input
                            type="text"
                            maxLength="6"
                            onChange={(event) => setPracticeNumber(event.target.value)}
                            className="control-form"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label><br />
                        <input
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            className="control-form"
                        />
                    </div>
                    <div className="form-group">
                        <button className="login-button" onClick={login}>Login</button>
                    </div>
                    <div className="form-group">
                        <Link to='/Forgotp' className="nav_button">Forgot Password?</Link>
                    </div>
                    <div className="form-group">
                        <Link to='/Register' className="nav_button">Don't have an account?</Link>
                        <Link to='/Doctorslogin' className="nav_button">Sign Up</Link>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default Doctorslogin;
