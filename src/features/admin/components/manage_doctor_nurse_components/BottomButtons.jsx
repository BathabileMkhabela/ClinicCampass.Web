import React from 'react';

const BottomButtons = ({ handleRemoveDoctor, handleAddNewDoctor, handleGoBack }) => {
  return (
    <div className="bottom-buttons">
      <button type="button" onClick={handleRemoveDoctor} className="remove-button">
        <i className="fas fa-trash-alt"></i> Remove Doctor
      </button>
      <button type="button" onClick={handleAddNewDoctor} className="add-button">
        <img src={require('../../../../assets/admin_assets/images/add_new_staff_icon.png')} alt="Add New" className="close-icon" height={17}/> Add New Doctor/Nurse
      </button>
      <button type="button" onClick={handleGoBack} className="back-button">
        <i className="fas fa-arrow-left"></i> Back
      </button>
    </div>
  );
};

export default BottomButtons;
