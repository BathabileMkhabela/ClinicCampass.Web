import React, { useState, useEffect } from "react";
import './Style101.css'

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="adminInfo">
      <div className="clinicInfo">
        <p>KwaMhlanga clinic</p>
        <p>Admin: Lebo Sethole</p>
      </div>

      <div className="dateTime">
        <p>{dateTime.toLocaleDateString()}</p>
        <p>{dateTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
