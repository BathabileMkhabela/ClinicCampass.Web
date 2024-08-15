 import BackIconComp from "../patients_waiting_visit_comp/back_icon_comp";
 import "../../../../styles/admin_styles.css";
 import { useNavigate } from 'react-router-dom';
 import addNewMemberIcon from "../../../../assets/admin_assets/icons/add_new_staff_icon.svg"
 export default function ViewStaffBackBtnComp(){
     const navigate = useNavigate();
     return(
         <div className="view_staff_actionbtns">
             <button type="button" className="view_staff_backbtn" onClick={()=>navigate('/consultation-room')}>{<BackIconComp/>}Back</button>
             <button type="button" className="addNewMember_button" onClick={()=>navigate('/register-staff')}><img src={addNewMemberIcon} alt="" className="addNewMemberIcon"/>Add new Doctor/Nurse</button>
         </div>
     );
 }