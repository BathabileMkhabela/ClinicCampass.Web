import React from 'react';

export const ClinicDropdown = ({ Clinic, setClinic, error }) => {
    return (
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
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

