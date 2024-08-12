import '../../styles/admin_styles.css';
import LogoComponent from './logo_comp';
export default function TopHomeHeader({navlink,navlink2,navlink3,navlink4}){
    return(
        <div class="top-header">
            <LogoComponent/>
            <div className="nav_links_container">
            <nav>
                <ul>
                {navlink}
                {navlink2}
                {navlink3}
                {navlink4}
                 </ul>
            </nav>
                
            </div>
        </div>
    );
}