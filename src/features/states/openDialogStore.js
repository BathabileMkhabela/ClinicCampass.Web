import { create } from 'zustand';


const useOpenCloseDialogStore = create((set) => ({
  isModalOpen: false,
  modalNumber: 0,
  setModalRemoveStuffConfirm: () => set({
    isModalOpen: true,
    modalNumber: 4 }),
    setModalGeneratetempPwd: () => set({
      isModalOpen: true,
      modalNumber: 5 }),

  toggleCancelPatientAppntModal: () => set((state) => ({
    isModalOpen: true,
    modalNumber: 1,
  })),
  closeModal: () => set((state) => ({
    isModalOpen: false,
    modalNumber: 0,
  })),
  toggleToAdminAuthPWDModal: () => set((state) => ({
    isModalOpen: true,
    modalNumber: 2,
  })),
  toggleToSelectConsultRoomModal: () => set((state) => ({
    isModalOpen: true,
    modalNumber: 3,
  })),
}));


export default useOpenCloseDialogStore;