import { create } from "zustand";

interface ZustandStore {
  count: number;
}

export const useStore = create<ZustandStore>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
