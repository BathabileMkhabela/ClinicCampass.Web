import '../../styles/app_style.css';
import logo from '../../assets/admin_assets/images/c_logo.svg'
export default function LogoComponent(){
    return(
        <div class="logo-container">
            <img src={logo} alt="" />
        </div>
    );
}