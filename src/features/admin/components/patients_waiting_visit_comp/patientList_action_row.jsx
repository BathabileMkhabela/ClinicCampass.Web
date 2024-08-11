import CancelPatientBtnComp from "./cancel_patient_btn_comp";
import ConsultButtonComp from "./consult_btn_comp";
import "../../../../styles/admin_styles.css";
export default function PatientListActionRowBnt(){
    return(
        <div className="patientList_acion_row_btns_container">
            <ConsultButtonComp/>
            <CancelPatientBtnComp/>
        </div>
    );
}