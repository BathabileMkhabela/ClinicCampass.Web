import React, { useState } from "react";
import "../../../../styles/modal.css";
import useOpenCloseDialogStore from "../../../states/openDialogStore";
import ModalActionComponent from "./modal_components/modal_action_component";
export default function Modal({iconContainer,bodyContainer,buttonsContainer}) {
    const setModal = useOpenCloseDialogStore((state)=>state.closeModal);
    const modal = useOpenCloseDialogStore((state)=>state.isModalOpen);


  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={setModal} className="overlay"></div>
          <div className="modal-content_container">
            <div className="modal-content">
                  {iconContainer}
                  {bodyContainer}
                  <ModalActionComponent actionBtsContainer={buttonsContainer}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}