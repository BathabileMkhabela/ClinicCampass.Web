import { useState } from 'react';
import './AdminStyle.css';
import { useNavigate } from 'react-router-dom';


function AddNurse() {
    const navigate = useNavigate();

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [PracticeNumber, setPracticeNumber] = useState('');
    const [Contact, setContact] = useState('');
    const [Contact2, setContact2] = useState('');
    const [Designation, setDesignation] = useState('');
    const [Clinic, setClinic] = useState('');
    const [Specialty, setSpecialty] = useState('');
    const [Room, setRoom] = useState('');
    
    const [errors, setErrors] = useState({});

    function submit() {
        const newErrors = {};

        if (FirstName === '') 
            newErrors.FirstName = 'Enter first name';
        if (LastName === '') 
            newErrors.LastName = 'Enter last name';
        if (PracticeNumber === '') 
            newErrors.PracticeNumber = Designation === 'nurse' ? 'Enter Staff Number' : 'Enter Practice Number';
        else if (Designation === 'doctor' && !/^[0-9]{6}$/.test(PracticeNumber)) 
            newErrors.PracticeNumber = 'Enter valid practice number';
        else if (Designation === 'nurse' && !/^[0-9]{6}$/.test(PracticeNumber)) 
            newErrors.PracticeNumber = 'Enter valid staff number';
        if (Contact === '') 
            newErrors.Contact = 'Enter your contact';
        else if (!/^[0-9]{10}$/.test(Contact)) 
            newErrors.Contact = 'Enter valid cell number';
        if (Contact2 && !/^[0-9]{10}$/.test(Contact2)) 
            newErrors.Contact2 = 'Enter valid phone number';
        if (Email === '') 
            newErrors.Email = 'Enter email address';
        else if (!/\S+@\S+\.\S+/.test(Email)) 
            newErrors.Email = 'Enter valid email address';

        // Dropdown validations
        if (Designation === '') 
            newErrors.Designation = 'Select your designation';
        if (Clinic === '') 
            newErrors.Clinic = 'Select your clinic';
        if (Designation === 'doctor' && Specialty === '') 
            newErrors.Specialty = 'Select your specialty';
        if (Designation === 'doctor' && Room === '') 
            newErrors.Room = 'Assign a consultation room';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Log the collected data to the console
            const data = { FirstName, LastName, PracticeNumber, Contact, Email, Contact2, Designation, Clinic, Specialty, Room };
            console.log(data);

            // Proceed to the next page
            navigate('/createPassword');
        }
    }

    function back(){
        navigate('/backtoadd');

    }

    return (
        <div className='container'>
            
            <div className='content'>
                <h1>Register new Nurse/Doctor</h1>
                <div className='clinic-dropdown'>
                    <select 
                        className='dropdown' 
                        value={Clinic}
                        onChange={(event) => setClinic(event.target.value)}
                    >
                        <option value="">Choose your clinic</option>
                        <option value="clinic1">KwaMhlanga Clinic</option>
                        <option value="clinic2">Kwaggafontein Clinic</option>
                    </select>
                    {errors.Clinic && <p className="error-message">{errors.Clinic}</p>}
                </div>

                <div className='personal-form'>
                    <h3>Personal Information</h3>

                    <div className="form-group">
                        <select
                            className='dropdown'
                            value={Designation}
                            onChange={(event) => setDesignation(event.target.value)}
                        >
                            <option value="">Designation</option>
                            <option value="doctor">Doctor</option>
                            <option value="nurse">Nurse</option>
                        </select>
                        {errors.Designation && <p className="error-message">{errors.Designation}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            value={FirstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            className="control-form"
                            placeholder='Name'
                        />
                        {errors.FirstName && <p className="error-message">{errors.FirstName}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            value={LastName}
                            placeholder="Surname"
                            type="text"
                            onChange={(event) => setLastName(event.target.value)}
                            className="control-form"
                        />
                        {errors.LastName && <p className="error-message">{errors.LastName}</p>}
                    </div>
                    
                    <div className="form-group">
                        <input
                            value={PracticeNumber}
                            placeholder={Designation === 'nurse' ? "Staff Number" : "Practice Number"}
                            type="text"
                            onChange={(event) => setPracticeNumber(event.target.value)}
                            className="control-form"
                        />
                        {errors.PracticeNumber && <p className="error-message">{errors.PracticeNumber}</p>}
                    </div>
                    
                    {/* Conditionally render the specialty dropdown */}
                    {Designation === 'doctor' && (
                        <div className='clinic-dropdown'>
                            <select 
                                className='dropdown'
                                value={Specialty}
                                onChange={(event) => setSpecialty(event.target.value)}
                            >
                                <option value="">Specialty</option>
                                <option value="gp">General Practitioner (GP)</option>
                                <option value="occ-med">Occupational Medicine Physician</option>
                                <option value="gynecologist">Gynecologist</option>
                                <option value="cardiologist">Cardiologist</option>
                            </select>
                            {errors.Specialty && <p className="error-message">{errors.Specialty}</p>}
                        </div>
                    )}
                    
                </div>
            
                <div className='contact-form'>
                    <h4>Contact Details</h4>
                    <div className="form-group">
                        <input
                            value={Contact}
                            placeholder="Cell Number"
                            type="text"
                            onChange={(event) => setContact(event.target.value)}
                            className="control-form"
                        />
                        {errors.Contact && <p className="error-message">{errors.Contact}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            value={Contact2}
                            placeholder="Cell Number2 (Optional)"
                            type="text"
                            onChange={(event) => setContact2(event.target.value)}
                            className="control-form"
                        />
                        {errors.Contact2 && <p className="error-message">{errors.Contact2}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            value={Email}
                            placeholder="Email Address"
                            type="text"
                            onChange={(event) => setEmail(event.target.value)}
                            className="control-form"
                        />
                        {errors.Email && <p className="error-message">{errors.Email}</p>}
                    </div>
                    
                    {/* Conditionally render the room assignment dropdown */}
                    {Designation === 'doctor' && (
                        <div className='clinic-dropdown'>
                            <select 
                                className='dropdown'
                                value={Room}
                                onChange={(event) => setRoom(event.target.value)}
                            >
                                <option value="">Assign Consultation Room</option>
                                <option value="room1">Room Number 04</option>
                                <option value="room2">Room Number 07</option>
                            </select>
                            {errors.Room && <p className="error-message">{errors.Room}</p>}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-group">
                <button onClick={submit} className='reg-button'>Register</button>
            </div>
            <div>
                <button onClick={back} className='back-button'>Back</button>
            </div>
        </div>
    );
}

export default AddNurse;

