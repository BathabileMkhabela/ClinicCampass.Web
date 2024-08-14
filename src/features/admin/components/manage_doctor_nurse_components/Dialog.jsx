import React from 'react';

const Dialog = ({ show, onSubmit, onCancel, action, adminPassword, setAdminPassword }) => {
  if (!show) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h4>Enter Admin Password</h4>
        <input
          type="password"
          value={adminPassword}
          onChange={({ target }) => setAdminPassword(target.value)}
          className="admin-password-input"
        />
        <div className="button-group">
          <button type="button" onClick={onSubmit} className="submit-button">Submit</button>
          <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
