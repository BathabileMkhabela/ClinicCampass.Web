import React from 'react';

const DoctorInfoForm = ({ doctorInfo, handleDoctorInfoChange, editMode, handleEditClick, handleBlur, saveDoctorInfo }) => {
  return (
    <div className="doctor-info-container">
      <h4 className="title-doctor">Doctor's Information</h4>
      <form onSubmit={saveDoctorInfo}>
        {['name', 'surname', 'email', 'phone'].map((field) => (
          <div className="input-wrapper" key={field}>
            <label htmlFor={field} className="input-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <div className="input-groupA">
              <input
                id={field}
                value={doctorInfo[field]}
                onChange={({ target }) => handleDoctorInfoChange(target.name, target.value)}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                className="input"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                disabled={!editMode[field]}
                onBlur={() => handleBlur(field)}
              />
              <button className="edit-button" type="button" onClick={() => handleEditClick(field)}>
                <i className="fas fa-edit"></i>
              </button>
            </div>
          </div>
        ))}
        <div className="button-group">
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default DoctorInfoForm;
