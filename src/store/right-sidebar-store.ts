import { create } from "zustand";

type RightSidebarStore = {
    open: boolean;
    toggle: () => void;
};

export const useRightSidebarStore = create<RightSidebarStore>((set) => ({
    open: true,
    toggle: () => set((s) => ({ open: !s.open })),
}));
