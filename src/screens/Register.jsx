import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function AddNurse() {
    const navigate = useNavigate();
    
    // State for form fields
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Id, setId] = useState('');
    const [Contact, setContact] = useState('');
    const [KinName, setKinName] = useState('');
    const [KinSurname, setKinSurname] = useState('');
    const [KinContact, setKinContact] = useState('');
    
    // State for error messages
    const [errors, setErrors] = useState({});

    function submit() {
        const newErrors = {};

        // Validate form fields and set error messages
        if (FirstName === '') newErrors.FirstName = 'Enter first name';
        if (LastName === '') newErrors.LastName = 'Enter last name';
        if (Id === '') newErrors.Id = 'Enter ID Number';
        else if (!/^[0-9]{13}$/.test(Id)) newErrors.Id = 'Enter valid ID number';
        if (Contact === '') newErrors.Contact = 'Enter your contact';
        else if (!/^[0-9]{10}$/.test(Contact)) newErrors.Contact = 'Enter valid phone number';
        if (Email === '') newErrors.Email = 'Enter email address';
        else if (!/\S+@\S+\.\S+/.test(Email)) newErrors.Email = 'Enter valid email address';
        if (KinName === '') newErrors.KinName = 'Enter next of kin name';
        if (KinSurname === '') newErrors.KinSurname = 'Enter next of kin surname';
        if (KinContact === '') newErrors.KinContact = 'Enter next of kin contact number';
        else if (!/^[0-9]{10}$/.test(KinContact)) newErrors.KinContact = 'Enter valid contact number';

        // Update errors state
        setErrors(newErrors);

        // If there are no errors, proceed
        if (Object.keys(newErrors).length === 0) {
            const data = { FirstName, LastName, Id, Contact, Email, KinName, KinSurname, KinContact };
            console.log(data);
            navigate('/createPassword');
        }
    }

    return (
        <div className='container'>
            <Header />
            
            <div className='content'>
                <h1>Register</h1>
                <div className='reg-form'>
                    <h3>User</h3>
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={(event) => setFirstName(event.target.value)}
                            className="control-form"
                            placeholder='Name'
                        />
                        {errors.FirstName && <p className="error-message">{errors.FirstName}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Surname"
                            type="text"
                            onChange={(event) => setLastName(event.target.value)}
                            className="control-form"
                        />
                        {errors.LastName && <p className="error-message">{errors.LastName}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Contact"
                            type="text"
                            onChange={(event) => setContact(event.target.value)}
                            className="control-form"
                        />
                        {errors.Contact && <p className="error-message">{errors.Contact}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="ID Number"
                            type="text"
                            onChange={(event) => setId(event.target.value)}
                            className="control-form"
                        />
                        {errors.Id && <p className="error-message">{errors.Id}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Email"
                            type="text"
                            onChange={(event) => setEmail(event.target.value)}
                            className="control-form"
                        />
                        {errors.Email && <p className="error-message">{errors.Email}</p>}
                    </div>
                </div>
            
                <div className='kin-form'>
                    <h4>Next of Kin</h4>
                    <div className='form-group'>
                        <input
                            placeholder="Name"
                            type="text"
                            onChange={(event) => setKinName(event.target.value)}
                            className="control-form"
                        />
                        {errors.KinName && <p className="error-message">{errors.KinName}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder="Surname"
                            type="text"
                            onChange={(event) => setKinSurname(event.target.value)}
                            className="control-form"
                        />
                        {errors.KinSurname && <p className="error-message">{errors.KinSurname}</p>}
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder="Contact"
                            type="text"
                            onChange={(event) => setKinContact(event.target.value)}
                            className="control-form"
                        />
                        {errors.KinContact && <p className="error-message">{errors.KinContact}</p>}
                    </div>
                    <div className="form-group">
                        <button onClick={submit} className='next-button'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNurse;
