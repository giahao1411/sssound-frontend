import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

type ThemeStore = {
    theme: Theme;
    setTheme: (t: Theme) => void;
    toggle: () => void;
};

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: "dark",

            setTheme: (t) => set({ theme: t }),

            toggle: () => {
                const t = get().theme;
                set({ theme: t === "dark" ? "light" : "dark" });
            },
        }),
        { name: "theme-store" },
    ),
);
