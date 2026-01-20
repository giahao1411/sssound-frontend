import { Home, Search, Library } from "lucide-react";
import { useLeftSidebarStore } from "@/store/left-sidebar-store";
import { cn } from "@/lib/cn";
import LeftSidebarHeader from "./ui/left-sidebar-header";
import { useState } from "react";
import LeftNavItem from "./ui/left-nav-item";

const navMocks = [
    { icon: <Home />, label: "Home" },
    { icon: <Search />, label: "Search" },
    { icon: <Library />, label: "Library" },
];

export default function AppLeftSidebar() {
    const { collapsed, toggle } = useLeftSidebarStore();
    const [isHover, setIsHover] = useState(false);

    return (
        <aside
            className={cn(
                "min-h-screen bg-surface flex flex-col transition-all duration-300",
                collapsed ? "w-[72px]" : "w-[210px]",
            )}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {/* Header */}
            <LeftSidebarHeader
                collapsed={collapsed}
                isHover={isHover}
                toggle={toggle}
            />

            {/* Nav */}
            <nav
                className={cn(
                    "flex-1 flex flex-col gap-1",
                    collapsed && "items-center mt-3",
                )}
            >
                {navMocks.map((item) => (
                    <LeftNavItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        collapsed={collapsed}
                    />
                ))}
            </nav>
        </aside>
    );
}
