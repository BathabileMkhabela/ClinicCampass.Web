import "../../../../../styles/modal.css"
export default function ModalConsultRoomBtnComp({roomNumberDesc}){
    return(
        <div className="modal_consultRmBtn_container">
            <button type="button">{roomNumberDesc}</button>
        </div>
    );
}