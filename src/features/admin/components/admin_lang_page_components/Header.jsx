// Header.js
import React from "react";

export const Header = ({ dateTime }) => {
  return (
    <header>
      <div className="adminInfo">
        <div className="clinicInfo">
          <p>KwaMhlanga Clinic</p>
          <p><span className="admin-name">Admin:</span> Lebo Sethole</p>
        </div>
        <div className="dateTime">
          <p>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</p>
        </div>
      </div>
    </header>
  );
};


