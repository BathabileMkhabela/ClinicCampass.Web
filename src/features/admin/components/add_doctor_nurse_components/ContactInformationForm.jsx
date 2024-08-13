import React from 'react';

export const ContactInformationForm = ({ Contact, setContact, Contact2, setContact2, Email, setEmail, Designation, Room, setRoom, errors }) => {
    return (
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
    );
}


