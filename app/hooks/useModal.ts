import { create } from "zustand";

interface FormModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModal = create<FormModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModal;
