import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addDoc'); 
  };

  return (
    <div>  
      <button className='reg-button' onClick={handleClick}>Done</button>
    </div>
  );
};

export default SubmitButton;
