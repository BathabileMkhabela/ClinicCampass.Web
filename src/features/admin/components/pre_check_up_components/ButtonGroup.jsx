import React from 'react';

const ButtonGroup = ({ handleCancelClick }) => {
  return (
    <div className="button-group">
      <button className="btn-cancel" onClick={handleCancelClick}>
        Cancel <br /> appointment
      </button>
      <button className="save-btn">Save</button>
    </div>
  );
};

export default ButtonGroup;
