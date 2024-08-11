export default function ModalNoButtonComp({onClickAction}){
    return(
        <div className="modal_no_button_container modal_prompt_btns"> 
            <button type="button" className="modal_no_button" onClick={onClickAction}>No</button>
        </div>
    );
}