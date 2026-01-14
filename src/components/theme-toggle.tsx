import { useThemeStore } from "@/store/theme-store";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggle } = useThemeStore();

    return (
        <div className="border-2 border-border rounded-full">
            <Button className="p-2" variant="ghost" onClick={toggle}>
                {theme === "dark" ? (
                    <Moon className="text-icon" />
                ) : (
                    <Sun className="text-icon" />
                )}
            </Button>
        </div>
    );
}
