import { useThemeStore } from "@/store/theme-store";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggle } = useThemeStore();

    return (
        <div className="rounded-full border border-border bg-surface shadow hover:opacity-80 hover:scale-105 transition-all">
            <Button
                className="h-9 w-9 rounded-full p-0"
                variant="ghost"
                onClick={toggle}
            >
                {theme === "dark" ? (
                    <Moon className="text-foreground-muted" />
                ) : (
                    <Sun className="text-foreground-muted" />
                )}
            </Button>
        </div>
    );
}
