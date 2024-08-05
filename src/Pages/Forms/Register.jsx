import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    surname: '',
    idNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [nextOfKinInfo, setNextOfKinInfo] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e, setInfo, info) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (patientInfo.password !== patientInfo.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful!');
    navigate('/home');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2 className="register-header">Patient Registration</h2>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="patient-name">Name</label>
            <input
              type="text"
              id="patient-name"
              name="name"
              value={patientInfo.name}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
            <label htmlFor="patient-surname">Surname</label>
            <input
              type="text"
              id="patient-surname"
              name="surname"
              value={patientInfo.surname}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
            <label htmlFor="patient-idNumber">ID Number</label>
            <input
              type="text"
              id="patient-idNumber"
              name="idNumber"
              value={patientInfo.idNumber}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
            <label htmlFor="patient-phoneNumber">Phone Number</label>
            <input
              type="text"
              id="patient-phoneNumber"
              name="phoneNumber"
              value={patientInfo.phoneNumber}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
            <label htmlFor="patient-email">Email</label>
            <input
              type="email"
              id="patient-email"
              name="email"
              value={patientInfo.email}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={patientInfo.password}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={patientInfo.confirmPassword}
              onChange={(e) => handleInputChange(e, setPatientInfo, patientInfo)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nextOfKin-name">Next of Kin Name</label>
            <input
              type="text"
              id="nextOfKin-name"
              name="name"
              value={nextOfKinInfo.name}
              onChange={(e) => handleInputChange(e, setNextOfKinInfo, nextOfKinInfo)}
              required
            />
            <label htmlFor="nextOfKin-surname">Next of Kin Surname</label>
            <input
              type="text"
              id="nextOfKin-surname"
              name="surname"
              value={nextOfKinInfo.surname}
              onChange={(e) => handleInputChange(e, setNextOfKinInfo, nextOfKinInfo)}
              required
            />
            <label htmlFor="nextOfKin-phoneNumber">Next of Kin Phone Number</label>
            <input
              type="text"
              id="nextOfKin-phoneNumber"
              name="phoneNumber"
              value={nextOfKinInfo.phoneNumber}
              onChange={(e) => handleInputChange(e, setNextOfKinInfo, nextOfKinInfo)}
              required
            />
          </div>
        </div>
        <div className="button-group">
          <button type="submit">Register</button>
          <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default Register;


