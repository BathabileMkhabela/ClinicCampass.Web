import React from 'react';

function PasswordInput({ setPassword }) {
  return (
    <div className="form-group4">
      <label>Password</label><br />
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        className="control-form2 large-input2"
      />
    </div>
  );
}

export default PasswordInput;
