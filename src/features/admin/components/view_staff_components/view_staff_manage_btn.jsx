 import "../../../../styles/admin_styles.css";
 import { useNavigate } from 'react-router-dom';
 export default function ViewStaffManageBtnComp(){
     const navigate = useNavigate();
    return(
         <div className="view_staff_manageBtn_container">
             <button type="button" onClick={()=>navigate('/manage-staff')}>Manage</button>
         </div>
     );
 }