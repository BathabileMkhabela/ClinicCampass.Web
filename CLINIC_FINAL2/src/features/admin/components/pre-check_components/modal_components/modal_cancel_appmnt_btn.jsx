import "../../../../../styles/modal.css"
import cancelAppmntIconSrc from "../../../../../assets/admin_assets/icons/cancel_appmnt_btnIcon.svg";
export default function ModalCancelAppmntBtnComp(){
    return(
        <div className="modal_cancel_AppmntBtn_Container">
            <button type="button" className="modal_cancel_appmnt">
                <img src={cancelAppmntIconSrc} alt="" className="cancel_appmnt_icon"/><p>Cancel</p>
            </button>
        </div>
    );
}