import CancelPatientBtnComp from "./cancel_patient_btn_comp";
import ConsultButtonComp from "./consult_btn_comp";
import "../../../../styles/admin_styles.css";
import useOpenCloseDialogStore from "../../../states/openDialogStore";
export default function PatientListActionRowBnt(){
    const setModalNumber = useOpenCloseDialogStore((state)=>state.toggleToSelectConsultRoomModal);
    const setCancelAppmntDilogAuthPWD = useOpenCloseDialogStore((state)=>state.toggleToAdminAuthPWDModal);
    return(
        <div className="patientList_acion_row_btns_container">
            <ConsultButtonComp setModalNumber={setModalNumber}/>
            <CancelPatientBtnComp setCancelAppmntDialog={setCancelAppmntDilogAuthPWD}/>
        </div>
    );
}