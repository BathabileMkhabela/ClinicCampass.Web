import "../../../../styles/admin_styles.css"
export default function CancelPatientBtnComp({setCancelAppmntDialog}){
    return(
        <div className="cancel_patient_btn_container patientList_action_rowBtns">
            <button type="button" onClick={setCancelAppmntDialog}>Cancel</button>
        </div>
    );
}