import React from 'react';

function VerifyButton({ submit }) {
  return (
    <div>
      <button className='reg-button' onClick={submit}>Verify</button>
    </div>
  );
}

export default VerifyButton;
