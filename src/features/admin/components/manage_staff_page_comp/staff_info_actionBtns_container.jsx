import deleteIcon from "../../../../assets/admin_assets/icons/remove_doctore_bin_white_icon.svg";
import addNewMemberIcon from "../.././../../assets/admin_assets/icons/add_new_staff_icon.svg";
import "../../../../styles/admin_styles.css";
import useOpenCloseDialogStore from "../../../states/openDialogStore";
import { useNavigate } from 'react-router-dom';

export default function StaffInfoActionBtns(){
    const navigate = useNavigate();
    const setRemoveStaff = useOpenCloseDialogStore((state)=>state.setModalRemoveStuffConfirm);
    return(
        <div className="staff_info_actionBtns">
            <button type="button" className="deleteMember_button" onClick={setRemoveStaff}><img src={deleteIcon} alt="" className="deleteIcon"/>Remove member</button>
            
        </div>
    );
}