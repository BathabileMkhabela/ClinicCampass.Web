import React from 'react';

const CancelAppointmentModal = ({ handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>
          Are you sure you want to cancel this patient's appointment (8803245945087)?
        </p>
        <div className="button-group">
          <button onClick={handleCloseModal} className="btn-cancel">
            No
          </button>
          <button onClick={handleCloseModal} autoFocus className="button">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelAppointmentModal;
