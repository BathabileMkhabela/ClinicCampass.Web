import "../../../../styles/admin_styles.css"
export default function ConsultButtonComp({setModalNumber}){
    return(
        <div className="consult_btn_container patientList_action_rowBtns">
            <button type="button" onClick={setModalNumber}>Consult</button>
        </div>
    );
}