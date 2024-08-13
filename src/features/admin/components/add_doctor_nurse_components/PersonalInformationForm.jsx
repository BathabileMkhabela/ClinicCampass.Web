import React from 'react';

export const PersonalInformationForm = ({ FirstName, setFirstName, LastName, setLastName, PracticeNumber, setPracticeNumber, Designation, setDesignation, Specialty, setSpecialty, errors }) => {
    return (
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
    );
}


