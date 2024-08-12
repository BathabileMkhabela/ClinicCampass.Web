import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Id, setId] = useState('');
  const [Contact, setContact] = useState('');
  const [KinName, setKinName] = useState('');
  const [KinSurname, setKinSurname] = useState('');
  const [KinContact, setKinContact] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1);

  const validateStep1 = () => {
    if (FirstName === '') return 'Enter first name';
    if (LastName === '') return 'Enter last name';
    if (Id === '') return 'Enter ID Number';
    if (!/^[0-9]{13}$/.test(Id)) return 'Enter valid ID number';
    if (Contact === '') return 'Enter your contact';
    if (!/^[0-9]{10}$/.test(Contact)) return 'Enter valid phone number';
    if (Email === '') return 'Enter email';
    if (!/\S+@\S+\.\S+/.test(Email)) return 'Enter valid email address';
    if (KinName === '') return 'Enter next of kin name';
    if (KinSurname === '') return 'Enter next of kin surname';
    if (KinContact === '') return 'Enter next of kin contact number';
    if (!/^[0-9]{10}$/.test(KinContact)) return 'Enter valid contact number';
    return null;
  };

  const handleNext = () => {
    const error = validateStep1();
    if (error) {
      toast.error(error);
    } else {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleRegister = () => {
    if (Password === '' || ConfirmPassword === '') {
      toast.error('Please enter and confirm your password');
      return;
    }
    if (Password !== ConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const data = { FirstName, LastName, Id, Contact, Email, KinName, KinSurname, KinContact, Password };
    console.log(data);
    toast.success('Registration successful!');
    setTimeout(() => {
      navigate('/landhomepage2');
    }, 2000);
  };

  return (
    <div className='container1'>
      <ToastContainer />
      <div className='content1'>
        {step === 1 ? (
          <>
            <h2>Patient's Registering Form</h2>
            <div className='reg-form2'>
              <h3>Patient's Information</h3>
              <div className="form-group3">
                <input type="text" onChange={(event) => setFirstName(event.target.value)} className="control-form" placeholder='Name' />
              </div>
              <div className="form-group3">
                <input placeholder="Surname" type="text" onChange={(event) => setLastName(event.target.value)} className="control-form" />
              </div>
              <div className="form-group3">
                <input placeholder="Contact" type="text" onChange={(event) => setContact(event.target.value)} className="control-form" />
              </div>
              <div className="form-group3">
                <input placeholder="ID Number" type="text" onChange={(event) => setId(event.target.value)} className="control-form" />
              </div>
              <div className="form-group3">
                <input placeholder="Email" type="text" onChange={(event) => setEmail(event.target.value)} className="control-form" />
              </div>
            </div>
            <div className='kin-form1'>
              <h3>Next of Kin's Information</h3>
              <div className='form-group3'>
                <input placeholder="Name" type="text" onChange={(event) => setKinName(event.target.value)} className="control-form" />
              </div>
              <div className='form-group3'>
                <input placeholder="Surname" type="text" onChange={(event) => setKinSurname(event.target.value)} className="control-form" />
              </div>
              <div className='form-group3'>
                <input placeholder="Contact" type="text" onChange={(event) => setKinContact(event.target.value)} className="control-form" />
              </div>
              <div className="form-group3">
                <button className="back-button3" onClick={handleNext}>Next</button>
              </div>
            </div>
          </>
        ) : (
          <div className="password1">
            <h2>Create Password</h2>
            <div className="form-group3">
              <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} className="control-form" />
            </div>
            <div className="form-group3">
              <input type="password" placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)} className="control-form" />
            </div>
            <div className="button-group1">
              <button className="back-button3" onClick={handleBack}>Back</button>
              <button className="submit-button2" onClick={handleRegister}>Register</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;



