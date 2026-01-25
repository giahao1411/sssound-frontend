import { Search } from "lucide-react";
import { useLeftSidebarStore } from "@/store/left-sidebar-store";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { useToggleOutside } from "@/hooks/use-toggle-outside";
import type { RecentsOption, Sections, SortOrder } from "@/types/app";
import type { LibraryItem } from "@/types/library-item";
import { RecentsDropdown } from "./ui/recent-dropdown";
import { Input } from "../ui/input";
import LeftSidebarHeader from "./ui/left-sidebar-header";
import LibaryItem from "./ui/library-item";

const libItemMocks: LibraryItem[] = [
    {
        id: "1",
        coverImg: "./avatar.jpg",
        title: "Ng'bthg",
        type: "Album",
        artist: "Ngọt",
        isPinned: true,
    },
    {
        id: "2",
        coverImg: "./avatar.jpg",
        title: "Chillhop Essentials - Spring 2023",
        type: "Playlist",
        artist: "Various Artists",
        isPinned: false,
    },
    {
        id: "3",
        coverImg: "./avatar.jpg",
        title: "Keshi",
        type: "Artist",
        artist: "",
        isPinned: false,
    },
    {
        id: "4",
        coverImg: "./avatar.jpg",
        title: "Suýt 1",
        type: "EP",
        artist: "Ngọt",
        isPinned: true,
    },
];

export default function AppLeftSidebar() {
    const { collapsed, toggle } = useLeftSidebarStore();
    const [isHover, setIsHover] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    // state for sections and recents
    const [selectedSection, setSelectedSection] = useState<Sections>("Default");
    const [selectedOption, setSelectedOption] =
        useState<RecentsOption>("Recently Played");
    const [order, setOrder] = useState<SortOrder>("desc");

    const searchRef = useToggleOutside<HTMLDivElement>(isSearch, () =>
        setIsSearch(false),
    );

    // items ordering - hook useMemo avoid re-calculating on each render
    const orderedItems = useMemo(() => {
        const pinned = libItemMocks
            .filter((item) => item.isPinned)
            .sort((a, b) => a.title.localeCompare(b.title));

        const normal = libItemMocks
            .filter((item) => !item.isPinned)
            .sort((a, b) => a.title.localeCompare(b.title));

        return [...pinned, ...normal];
    }, []);

    return (
        <aside
            className={cn(
                "min-h-screen bg-surface flex flex-col transition-all duration-300 px-3",
                collapsed ? "w-[72px]" : "lg:w-[210px] xl:w-[260px]",
            )}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {/* header */}
            <LeftSidebarHeader
                collapsed={collapsed}
                isHover={isHover}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                toggle={toggle}
            />

            {/* body */}
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

                    <RecentsDropdown
                        isSearch={isSearch}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        order={order}
                        setOrder={setOrder}
                    />
                </div>
            )}

            {/* items */}
            <div
                className={cn(
                    "flex-1 flex flex-col",
                    collapsed && "items-center mt-3",
                )}
            >
                {orderedItems.map((item) => (
                    <LibaryItem
                        key={item.id}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
        </aside>
    );
}
