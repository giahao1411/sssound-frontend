import { create } from "zustand";

type LeftSidebarStore = {
    collapsed: boolean;
    toggle: () => void;
};

export const useLeftSidebarStore = create<LeftSidebarStore>((set) => ({
    collapsed: false,
    toggle: () => set((s) => ({ collapsed: !s.collapsed })),
}));
