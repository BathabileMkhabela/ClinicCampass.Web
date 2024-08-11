import "../../../../styles/admin_styles.css"
export default function PreCheckButtonComp({navigate}){
    return(
        <div className="pre-check_row_actionBtn">
            <button type="button" className="pre_check_btn" onClick={navigate}>Pre-checkup</button>
        </div>
    );
}