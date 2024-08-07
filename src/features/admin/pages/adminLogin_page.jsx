import TopHomeHeader from "../../components/header";
import LoginTitle from "../components/adminLogin_components/logInTitle";
import TextFieldComponent from "../components/adminLogin_components/textField_component";
import LoginButtonComponent from "../components/adminLogin_components/login_btn_component";
import { useNavigate } from 'react-router-dom';
export default function AdminLoginPage(){
    const navigate = useNavigate();
    return(
        <div className="login_page">
            <TopHomeHeader/>
            <div className="login_container"> 
                <LoginTitle/>
                <TextFieldComponent label={"Staff Number"} name={"staffNumber"} type={"text"} placeholder={"Enter your staff Number"}/>
                <TextFieldComponent label={"Password"} name={"password"} type={"password"} placeholder={"Enter your password"}/>
                <LoginButtonComponent login={() => navigate('/Admin-dashboard')}/>
            </div>
        </div>
    );

}