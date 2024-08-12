import BackIconComp from "../patients_waiting_visit_comp/back_icon_comp";
import "../../../../styles/admin_styles.css";
import { useNavigate } from 'react-router-dom';
export default function ViewStaffBackBtnComp(){
    const navigate = useNavigate();
    return(
        <div className="view_staff_backbtn_container">
            <button type="button" onClick={()=>navigate('/consultation-room')}>{<BackIconComp/>}Back</button>
        </div>
    );
}