import { create } from "zustand";

type Store = {
  booleanState: boolean;
  toggleBooleanState: () => void;
};

const useStore = create<Store>((set) => ({
  booleanState: false,
  toggleBooleanState: () =>
    set((state) => ({ booleanState: !state.booleanState })),
}));

export default useStore;
