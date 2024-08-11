import '../../../../../styles/modal.css';
export default function ModalBodyMessageComp({bodyMessage}){
    return(
        <div className="modal_body_message_container">
            <p>{bodyMessage}</p>
        </div>
    );
}