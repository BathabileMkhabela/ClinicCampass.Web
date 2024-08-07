import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
import './style.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const App = () => {
    const [formInput, setFormInput] = useState({
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [validationStatus, setValidationStatus] = useState({
        length: false,
        uppercase: false,
        numbers: false,
        match: false,
    });

    const handleUserInput = (name, value) => {
        setFormInput(prevInput => ({
            ...prevInput,
            [name]: value,
        }));
        if (name === 'password' || name === 'confirmPassword') {
            updateValidationStatus(name === 'password' ? value : formInput.password, name === 'confirmPassword' ? value : formInput.confirmPassword);
        }
    };

    const updateValidationStatus = (password, confirmPassword) => {
        setValidationStatus({
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            numbers: /\d.*\d/.test(password),
            match: confirmPassword ? password === confirmPassword : false,
        });
    };

    const validateFormInput = (event) => {
        event.preventDefault();

        toast.dismiss();

        let hasError = false;

        if (!formInput.password) {
            toast.error("Password should not be empty");
            hasError = true;
        }

        if (!validationStatus.length || !validationStatus.uppercase || !validationStatus.numbers) {
            toast.error("Password does not meet the required criteria");
            hasError = true;
        }

        if (formInput.confirmPassword !== formInput.password) {
            toast.error("Passwords do not match");
            hasError = true;
        }

        if (!hasError) {
            toast.success("Validation success");
            setFormInput({
                password: "",
                confirmPassword: "",
            });
            setValidationStatus({
                length: false,
                uppercase: false,
                numbers: false,
                match: false,
            });
        }
    };

    const getStatusIcon = (isValid) => {
        return isValid ? <i className="fas fa-check-circle valid-icon"></i> : <i className="fas fa-times-circle invalid-icon"></i>;
    };

    return (
        <div className="container">
            <Header />
            <div className="password">
                <h4 className="title">CREATE PASSWORD</h4>

                <div className="card-body">
                    <form onSubmit={validateFormInput}>
                        <div className="input-group">
                            <input
                                value={formInput.password}
                                onChange={({ target }) => handleUserInput(target.name, target.value)}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Enter Password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                className="show-hide-btn"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <div className="input-group">
                            <input
                                value={formInput.confirmPassword}
                                onChange={({ target }) => handleUserInput(target.name, target.value)}
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                className="input"
                                placeholder="Confirm Password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(prev => !prev)}
                                className="show-hide-btn"
                                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <div className="button-group">
                            <button type="button" className="back-button">Back</button>
                            <button type="submit" className="submit-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="validation-container">
                <div className="validation-content">
                    <p className={validationStatus.length ? "valid" : "invalid"}>
                        {getStatusIcon(validationStatus.length)} At least 8 characters
                    </p>
                    <p className={validationStatus.uppercase ? "valid" : "invalid"}>
                        {getStatusIcon(validationStatus.uppercase)} At least one uppercase letter
                    </p>
                    <p className={validationStatus.numbers ? "valid" : "invalid"}>
                        {getStatusIcon(validationStatus.numbers)} At least two numbers
                    </p>
                    {formInput.confirmPassword && (
                        <p className={validationStatus.match ? "valid" : "invalid"}>
                            {getStatusIcon(validationStatus.match)} Passwords match
                        </p>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default App;
