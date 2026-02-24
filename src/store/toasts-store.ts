import type { ToastType } from "@/types/core/app";
import { create } from "zustand";

type ToastState = {
    open: boolean;
    type: ToastType;
    title: string;
    description: string;

    showSuccess: (title: string, desc?: string) => void;
    showError: (title: string, desc?: string) => void;
    showInfo: (title: string, desc?: string) => void;
    close: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
    open: false,
    type: "info",
    title: "",
    description: "",

    showSuccess: (title, description = "") =>
        set((state) => ({
            ...state,
            type: "success",
            title,
            description,
            open: true,
        })),

    showError: (title, description = "") =>
        set((state) => ({
            ...state,
            type: "error",
            title,
            description,
            open: true,
        })),

    showInfo: (title, description = "") =>
        set((state) => ({
            ...state,
            type: "info",
            title,
            description,
            open: true,
        })),

    close: () => set({ open: false }),
}));
