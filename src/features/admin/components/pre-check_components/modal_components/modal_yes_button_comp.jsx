export default function ModalYesButton({onClickAction}){
    return(
        <div className="modal_yes_button_container modal_prompt_btns"> 
            <button type="button" className="modal_yes_button" onClick={onClickAction}>Yes</button>
        </div>
    );
}