import React from 'react';

function PasswordInput({ password, handlePasswordChange, error }) {
  return (
    <div className="admin-password">
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="control-form"
        placeholder="Enter admin password"
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default PasswordInput;
