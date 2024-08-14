import React from 'react';

const PreCheckingForm = () => {
  return (
    <div className="pre-checking">
      <h3>Pre-Checking</h3>
      <label>Reasons for visit</label>
      <input type="text" placeholder="Enter reasons for patient's visit" />
      <label>Temperature</label>
      <input type="text" placeholder="Patient's Temp" />
      <label>Blood Pressure</label>
      <input type="text" placeholder="mmHg" />

      <div className="urgency-level">
        <label>Patient urgency level</label>
        <div className="urgency-options">
          <input type="radio" id="critical" name="urgency" value="critical" />
          <label htmlFor="critical">Critical</label>
          <input type="radio" id="old" name="urgency" value="old" />
          <label htmlFor="old">Old</label>
          <input type="radio" id="neutral" name="urgency" value="neutral" />
          <label htmlFor="neutral">Neutral</label>
        </div>
      </div>
    </div>
  );
};

export default PreCheckingForm;
