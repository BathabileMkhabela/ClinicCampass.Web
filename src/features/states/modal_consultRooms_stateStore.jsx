import { create } from 'zustand';
import ModalConsultRoomBtnComp from '../admin/components/patients_waiting_visit_comp/modal_components/modal_consultatioRoom_btn_comp';

const useModalConsultRoomsStore = create((set) => ({
    consultRoomComponents: [<ModalConsultRoomBtnComp roomNumberDesc={"Room 1"}/>,<ModalConsultRoomBtnComp roomNumberDesc={"Room 2"}/>,<ModalConsultRoomBtnComp roomNumberDesc={"Room 3"}/>,<ModalConsultRoomBtnComp roomNumberDesc={"Room 4"}/>,<ModalConsultRoomBtnComp roomNumberDesc={"Room 4"}/>,],
    addConsulRoomComp: () => set((state) => ({
 
    })),
    navigateToConsultRoom: () => set((state) => ({
   
    })),
  }));
  
  
  export default useModalConsultRoomsStore;