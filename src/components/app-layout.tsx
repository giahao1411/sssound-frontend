import { Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import AppHeader from "./layouts/app-header";
import AppLeftSidebar from "./layouts/app-left-sidebar";
import AppRightSidebar from "./layouts/app-right-sidebar";
import AppFooter from "./layouts/app-footer";

export default function AppLayout() {
    return (
        <div className="h-screen bg-background text-foreground flex flex-col">
            <AppHeader />

            <div className="flex flex-1 overflow-hidden px-3 gap-3">
                <div className="flex overflow-auto rounded-xl">
                    <div className="flex-1">
                        <AppLeftSidebar />
                    </div>
                </div>

                <main className="flex-1 rounded-xl overflow-auto bg-surface p-4">
                    <div className="h-full">
                        <Outlet />
                    </div>
                </main>

                <div className="flex overflow-auto rounded-xl">
                    <div className="flex-1">
                        <AppRightSidebar />
                    </div>
                </div>
            </div>

            {/* theme toggle */}
            <div className="fixed bottom-22 right-5 z-100">
                <ThemeToggle />
            </div>

            <AppFooter />
        </div>
    );
}
