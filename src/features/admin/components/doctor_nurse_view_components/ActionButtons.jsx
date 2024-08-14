import React from 'react';
import { useNavigate } from 'react-router-dom';

function ActionButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/mainWelcome")}
        className="back-btnB"
      >
        Back
      </button>
      <button
        onClick={() => navigate("/DocNurseReg")}
        className="buttonB"
      >
        Add Doctor/Nurse
      </button>
    </div>
  );
}

export default ActionButtons;
