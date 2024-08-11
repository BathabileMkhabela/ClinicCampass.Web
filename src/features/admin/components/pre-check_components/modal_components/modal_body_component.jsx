export default function ModalBodyComponent({firstBody,secondBody}){
    return(
        <div className="modal_body_container">
            <div className="first_modal_body">
                 {firstBody}
                 {secondBody}
            </div>
        </div>
    );
}