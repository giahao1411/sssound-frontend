import { Outlet } from "react-router-dom";
import { ThemeToggle } from "./layouts/theme-toggle";

export default function AuthLayout() {
    return (
        <div className="bg-background text-foreground">
            <Outlet />

            <div className="fixed bottom-6 right-6 z-50">
                <ThemeToggle />
            </div>
        </div>
    );
}
