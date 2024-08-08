import { create } from "zustand";

type Store = {
  active: number;
  increase: () => void;
  setStep: (x: number) => void;
};

export const useSteps = create<Store>()((set) => ({
  active: 0,
  reset: () => set({ active: 0 }),
  increase: () =>
    set((state) => {
      if (state.active < 2) return { active: state.active + 1 };
      else return { active: 0 };
    }),
  setStep: (x: number) => {
    set((state) => {
      if (x < 3) {
        return { active: x };
      }
      return state;
    });
  },
}));
