import { create } from "zustand";

type Store = {
  active: number;
  increase: () => void;
  setStep: (x: number) => void;
  reset: () => void;
};

export const useSteps = create<Store>()((set) => ({
  active: 1,
  // set the stepper to the first step
  reset: () => set({ active: 1 }),

  // loops back if it exceeds 3
  increase: () =>
    set((state) => ({
      active: state.active < 3 ? state.active + 1 : 1,
    })),
  setStep: (x: number) => {
    set(() => ({
      active: x >= 1 && x <= 3 ? x : 1, // handles edge cases
    }));
  },
}));
