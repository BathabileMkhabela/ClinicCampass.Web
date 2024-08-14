// import TopHomeHeader from "../../components/header";
// import LoginTitle from "../components/adminLogin_components/logInTitle";
// import TextFieldComponent from "../components/adminLogin_components/textField_component";
// import LoginButtonComponent from "../components/adminLogin_components/login_btn_component";
// import { useNavigate } from 'react-router-dom';
// import useOpenCloseDialogStore from "../../states/openDialogStore";
// import useAdminAuthStore from "../../states/admin_auth_stateStore";
// export default function AdminLoginPage(){

    
//     const getAdminAuthStaffNum = useAdminAuthStore((state)=>state.adminStaffNum);
//     const getAdminAuthPWD = useAdminAuthStore((state)=>state.adminPWD);
//     function authStaffMember(){
//         if(getAdminAuthStaffNum === String(document.getElementById("staffNumber").value) && getAdminAuthPWD === String(document.getElementById("staffPassword").value)){
//            navigate('/Admin-dashboard');
//         }else{
//             alert('You have entered a wrong staff number/Password')
//         }
//     };
//     const navigate = useNavigate();
//     return(
//         <div className="login_page">
//             <TopHomeHeader/>
//             <div className="login_container"> 
//                 <LoginTitle/>
//                 <TextFieldComponent  inputID={"staffNumber"} label={"Staff Number"} name={"staffNumber"} type={"text"} placeholder={"Enter your staff Number"}/>
//                 <TextFieldComponent inputID={"staffPassword"} label={"Password"} name={"password"} type={"password"} placeholder={"Enter your password"}/>
//                 <LoginButtonComponent login={authStaffMember}/>
//             </div>
//         </div>
//     );

// }

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/admin_stylesB.css';

function AdminSignIn() {
  const users = [
    { staffNumber: '123456', password: 'Admin12?' },
    { staffNumber: '654321', password: 'Prince12?' },
  ];

  const [staffNumber, setStaffNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const isValidStaffNumber = (staffNumber) => {
    const staffNumberRegex = /^\d{6}$/;
    return staffNumberRegex.test(staffNumber);
  };

  const login = () => {
    if (!isValidStaffNumber(staffNumber)) {
      toast.warn('Staff number must be exactly 6 digits.');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.warn('Password is not strong enough. It must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.');
      return;
    }

    let isFound = false;
    for (let k = 0; k < users.length; k++) {
      if (users[k].staffNumber === staffNumber && users[k].password === password) {
        isFound = true;
        break;
      }
    }

    if (isFound) {
      toast.success('Login successfully');
      setTimeout(() => {
        navigate('/Admin-dashboard');
      }, 2000);
    } else {
      toast.warn('User not found');
    }
  };

  const resetPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div className="main_container2">
      <ToastContainer />
      <div className="reg-form3">
        <h2>Admin Login</h2>
        <div className="form-group4">
          <label>Staff Number</label><br />
          <input
            type="text"
            maxLength="6"
            onChange={(event) => setStaffNumber(event.target.value)}
            className="control-form2 large-input2"
          />
        </div>
        <div className="form-group4">
          <label>Password</label><br />
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            className="control-form2 large-input2"
          />
        </div>
        <div className="form-group4">
          <button className="login-button2" onClick={login}>Submit</button>
        </div>
        <div className="form-group">
          <button className="reset-button1" onClick={resetPassword}>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default AdminSignIn;
