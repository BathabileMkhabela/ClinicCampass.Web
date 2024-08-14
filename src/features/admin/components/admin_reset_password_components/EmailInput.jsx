import React from 'react';

function EmailInput({ setEmail }) {
  return (
    <div className="form-group4">
      <label>Email</label><br />
      <input
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        className="control-form2 large-input2"
      />
    </div>
  );
}

export default EmailInput;
