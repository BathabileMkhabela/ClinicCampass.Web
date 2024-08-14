import React from 'react';

function StaffNumberInput({ setStaffNumber }) {
  return (
    <div className="form-group4">
      <label>Staff Number</label><br />
      <input
        type="text"
        maxLength="6"
        onChange={(event) => setStaffNumber(event.target.value)}
        className="control-form2 large-input2"
      />
    </div>
  );
}

export default StaffNumberInput;
