import TopHomeHeader from "../../components/header";
import LoginTitle from "../components/adminLogin_components/logInTitle";
import TextFieldComponent from "../components/adminLogin_components/textField_component";
import LoginButtonComponent from "../components/adminLogin_components/login_btn_component";
import { useNavigate } from 'react-router-dom';
import useOpenCloseDialogStore from "../../states/openDialogStore";
import useAdminAuthStore from "../../states/admin_auth_stateStore";
export default function AdminLoginPage(){

    
    const getAdminAuthStaffNum = useAdminAuthStore((state)=>state.adminStaffNum);
    const getAdminAuthPWD = useAdminAuthStore((state)=>state.adminPWD);
    function authStaffMember(){
        if(getAdminAuthStaffNum === String(document.getElementById("staffNumber").value) && getAdminAuthPWD === String(document.getElementById("staffPassword").value)){
           navigate('/Admin-dashboard');
        }else{
            alert(`${getAdminAuthPWD } ${getAdminAuthStaffNum}`)
        }
    };
    const navigate = useNavigate();
    return(
        <div className="login_page">
            <TopHomeHeader/>
            <div className="login_container"> 
                <LoginTitle/>
                <TextFieldComponent  inputID={"staffNumber"} label={"Staff Number"} name={"staffNumber"} type={"text"} placeholder={"Enter your staff Number"}/>
                <TextFieldComponent inputID={"staffPassword"} label={"Password"} name={"password"} type={"password"} placeholder={"Enter your password"}/>
                <LoginButtonComponent login={authStaffMember}/>
            </div>
        </div>
    );

}