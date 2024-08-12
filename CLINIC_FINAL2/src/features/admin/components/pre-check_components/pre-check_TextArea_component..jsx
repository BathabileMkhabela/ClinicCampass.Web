
export default function PrecheckReasonTextAreaComp(){
    return(
        <div className="precheck_textarea_container">
            <label for="visit_reason">Reasons for visit</label>
            <textarea
            id="visit"
            className="visit_reason_textarea"
            col="30"
            row="3"
            placeholder="Enter reason for patient's visit">  
            </textarea>
        </div>
    );
}