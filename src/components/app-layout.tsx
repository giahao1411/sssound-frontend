import { Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Outlet />

            {/* theme toggle */}
            <div className="fixed bottom-6 right-6 z-50">
                <ThemeToggle />
            </div>
        </div>
    );
}
