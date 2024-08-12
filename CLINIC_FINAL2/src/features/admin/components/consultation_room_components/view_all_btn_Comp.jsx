import viewAllicon from "../../../../assets/admin_assets/icons/viewAllStaff_icon.svg"
import "../../../../styles/admin_styles.css";
import { useNavigate } from 'react-router-dom';
export default function ViewAllBtnComp(){
    const navigate = useNavigate();
    return(
        <div className="viewAll">
        <button type="button" onClick={()=>navigate('/view-staff')}><img src={viewAllicon} alt="" />View Staff</button>
        </ div>
    );
}