
import React, { useState } from 'react';
import Navbar from './NavBar';




function Forgotp() {

  return(
 <div>  
    <Navbar/>
    <div className="main_container">
        <div className="reg-form">
          
              <h1>Forgot Password</h1>
              <label>Email</label><br />
            <input type="email"  className="control-form" /><br />
           
            <button type="submit" id = "btn_submit" class="btn btn-secondary">Submit</button>
        </div>
    </div>

  </div> 
  );


}


export default Forgotp;