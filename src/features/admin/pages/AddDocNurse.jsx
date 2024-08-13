import React, { useState } from 'react';
import '../../../styles/admin_styles.css';
import { useNavigate } from 'react-router-dom';
import { ClinicDropdown } from '../../admin/components/add_doctor_nurse_components/ClinicDropdown';
import { PersonalInformationForm } from '../../admin/components/add_doctor_nurse_components/PersonalInformationForm';
import { ContactInformationForm } from '../../admin/components/add_doctor_nurse_components/ContactInformationForm';

function AddDocNurse() {
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

        // Add validation logic...


        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const data = { FirstName, LastName, PracticeNumber, Contact, Email, Contact2, Designation, Clinic, Specialty, Room };
            console.log(data);
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
                
                <ClinicDropdown Clinic={Clinic} setClinic={setClinic} error={errors.Clinic} />

                <PersonalInformationForm
                    FirstName={FirstName} setFirstName={setFirstName}
                    LastName={LastName} setLastName={setLastName}
                    PracticeNumber={PracticeNumber} setPracticeNumber={setPracticeNumber}
                    Designation={Designation} setDesignation={setDesignation}
                    Specialty={Specialty} setSpecialty={setSpecialty}
                    errors={errors}
                />

                <ContactInformationForm
                    Contact={Contact} setContact={setContact}
                    Contact2={Contact2} setContact2={setContact2}
                    Email={Email} setEmail={setEmail}
                    Designation={Designation} Room={Room} setRoom={setRoom}
                    errors={errors}
                />
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

export default AddDocNurse;
