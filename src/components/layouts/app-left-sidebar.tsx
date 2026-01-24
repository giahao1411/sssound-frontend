import { Home, Search, Library } from "lucide-react";
import { useLeftSidebarStore } from "@/store/left-sidebar-store";
import { cn } from "@/lib/cn";
import LeftSidebarHeader from "./ui/left-sidebar-header";
import { useState } from "react";
import LeftNavItem from "./ui/left-nav-item";
import { Input } from "../ui/input";
import { useToggleOutside } from "@/hooks/use-toggle-outside";
import { RecentsDropdown } from "./ui/recent-dropdown";
import type { RecentsOption, SortOrder } from "@/types/app";

const navMocks = [
    { icon: <Home />, label: "Home" },
    { icon: <Search />, label: "Search" },
    { icon: <Library />, label: "Library" },
];

export default function AppLeftSidebar() {
    const { collapsed, toggle } = useLeftSidebarStore();
    const [isHover, setIsHover] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const [selectedOption, setSelectedOption] =
        useState<RecentsOption>("Recently Played");
    const [order, setOrder] = useState<SortOrder>("desc");

    const searchRef = useToggleOutside<HTMLDivElement>(isSearch, () =>
        setIsSearch(false),
    );

    return (
        <aside
            className={cn(
                "min-h-screen bg-surface flex flex-col transition-all duration-300 px-3",
                collapsed ? "w-[72px]" : "lg:w-[210px] xl:w-[260px]",
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

            {/* Body */}
            {!collapsed && (
                <div
                    ref={searchRef}
                    className="flex items-center justify-between mt-1 mb-4"
                >
                    <div className="relative flex-1 h-7">
                        <div
                            className={cn(
                                "absolute top-1/2 z-1 -translate-y-1/2 text-foreground-muted cursor-pointer",
                                "hover:text-foreground hover:bg-surface-muted rounded-full",
                                isSearch
                                    ? "pointer-events-none left-1.5"
                                    : "p-1.5",
                            )}
                        >
                            <Search
                                size={16}
                                onClick={() => setIsSearch(true)}
                            />
                        </div>

                        <div
                            className={cn(
                                "absolute left-0 top-0 h-full",
                                "transition-all duration-200 ease-out",
                                isSearch
                                    ? "opacity-100 w-full translate-x-0"
                                    : "opacity-0 w-0 translate-x-2 pointer-events-none",
                            )}
                        >
                            <Input
                                autoFocus={isSearch}
                                placeholder="Search in Library..."
                                className={cn(
                                    "h-full w-8/10 pl-8 text-xs",
                                    "bg-surface-muted border-none",
                                    "hover:bg-surface-muted-hover focus:bg-surface-muted-hover focus:ring-0",
                                )}
                            />
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-2 text-foreground-muted hover:text-foreground hover:scale-105 cursor-pointer">
                        {!isSearch ? (
                            <>
                                <span className="text-xs">Recents</span>
                                <TfiMenuAlt size={18} />
                            </>
                        ) : (
                            <TfiMenuAlt size={18} />
                        )}
                    </div> */}
                    <RecentsDropdown
                        isSearch={isSearch}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        order={order}
                        setOrder={setOrder}
                    />
                </div>
            )}

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
