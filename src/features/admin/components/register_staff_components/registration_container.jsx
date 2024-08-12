import "../../../../styles/admin_styles.css";
import DesignationDropDown from "./designation_dropDown.";
export default function StaffRegistrationContainer(){
    return(
        <div className="staff_register_container">
            <div className="personal_info_container">
                <DesignationDropDown/>
            </div>
            <div className="staff_register_separatorLine"></div>
            <div className="contact_info_container">

            </div>
        </div>
    );
}