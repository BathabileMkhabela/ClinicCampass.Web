import ModalYesButton from "./modal_yes_button_comp";
import ModalNoButtonComp from "./modal_no_button_comp";
import useOpenCloseDialogStore from "../../../../states/openDialogStore";
export default function ModalYesNoBtnContainerComp(){
    const setCloseModal = useOpenCloseDialogStore((state)=>state.closeModal);
    const setAdminAuthPWDModal = useOpenCloseDialogStore((state)=>state.toggleToAdminAuthPWDModal)

    return(
        <div  className="buttons_container">
            <ModalYesButton onClickAction={setAdminAuthPWDModal}/>
            <ModalNoButtonComp onClickAction={setCloseModal}/>
        </div>
    );
}