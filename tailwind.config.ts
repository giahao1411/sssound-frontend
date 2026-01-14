import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",

                foreground: "var(--foreground)",
                icon: "var(--icon)",

                surface: "var(--surface)",
                "surface-muted": "var(--surface-muted)",

                border: "var(--border)",

                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
            },
        },
    },
    plugins: [],
};

export default config;
