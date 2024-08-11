import { create } from 'zustand';

const useOpenCloseDialogStore = create((set) => ({
  isModalOpen: false,
  modalNumber: 0,
  setModalConfirmCancel: () => set({ modalNumber: 1 }),
  setModalAdminAuthPWD: () => set({ modalNumber: 2 }),
  setModalConsultRoom: () => set({ modalNumber: 3 }),
  setModalRemoveStuffConfirm: () => set({modalNumber: 4 }),

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
}));


export default useOpenCloseDialogStore;