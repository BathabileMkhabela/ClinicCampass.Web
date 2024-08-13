import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonGroup = ({ onSubmit }) => {
  const navigate = useNavigate();

  return (
    <div className="button-group">
      <button onClick={() => navigate("/adminlandpage")} className="back-btn">
        Back
      </button>
      <button onClick={onSubmit} className="submit-btn">
        Submit Patient
      </button>
    </div>
  );
}

