import '../../styles/admin_styles.css';
import LogoComponent from './logo_comp';
export default function TopHomeHeader(){
    return(
        <div class="top-header">
            <LogoComponent/>
           { /*<div className="dashBoard">DashBoard</div>*/}
        </div>
    );
}