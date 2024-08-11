import React from "react";

function DocNursInfo() {
     return (
        <button onClick={() => window.location.href = "/doctorinfo"} className="button">
        View Nurse/Doctor
    </button>

     );
};

export default DocNursInfo;
