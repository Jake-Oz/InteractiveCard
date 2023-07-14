import { create } from "zustand";
import { Inputs } from "../components/Form";

interface CardDataStore {
  cardData: Inputs;
  setCardData: (values: Inputs) => void;
  removeAllData: () => void;
}

const useCardData = create<CardDataStore>((set) => ({
  cardData: { cardHolder: "", cardNumber: "", month: 0, year: 0, cvc: 0 },
  setCardData: (values) =>
    set((state) => ({ cardData: { ...state.cardData, ...values } })),
  removeAllData: () => set({}, true),
}));

export default useCardData;
