import '../../../../../styles/modal.css';
export default function ModalAdminAuthPWDBodyComp({patientsID,patientsName}){
    return(
        <div className="admin_authPWD_modal_body_container">
            <div className="modal_patients_info">
                <p><span className="modal_patients_info_title">Name:</span> {patientsName}</p>
                <p><span className="modal_patients_info_title">ID:</span> {patientsID}</p>
            </div>
            <div className="modal_adminPWD_textField">
                <label for="adminPwd">Admin Password:<input type="password" placeholder="admin password" id="adminPwd" className='admin_auth_pwdModal'/></label>
            </div>
        </div>
    );
}