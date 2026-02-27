import { Search } from "lucide-react";
import { useLeftSidebarStore } from "@/store/left-sidebar-store";
import { cn } from "@/lib/cn";
import { useMemo, useState } from "react";
import { useToggleOutside } from "@/hooks/use-toggle-outside";
import { RecentsDropdown } from "./ui/recent-dropdown";
import { Input } from "../ui/input";
import LeftSidebarHeader from "./ui/left-sidebar-header";
import {
    filterBySearch,
    filterBySection,
    sortByOrder,
    sortPinnedFirst,
} from "@/utils/app-left-sidebar";
import ToolTip from "../ui/tool-tip";
import LibraryItem from "./ui/library-item";
import type { Position, RecentsOption, Sections, SortOrder } from "@/types";

const tooltips = [
    { id: "search-lib-tooltip", content: "Search in Library", position: "top" },
];

export default function AppLeftSidebar() {
    const { collapsed, toggle } = useLeftSidebarStore();
    const [isHover, setIsHover] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    // input search state
    const [searchInput, setSearchInput] = useState("");

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
        return sortPinnedFirst([]);
    }, []);

    // handle section change effect on items
    const sectionItems = useMemo(() => {
        return {
            pinned: filterBySection(orderedItems.pinned, selectedSection),
            normal: filterBySection(orderedItems.normal, selectedSection),
        };
    }, [orderedItems, selectedSection]);

    // handle option change effect on items
    const optionItems = useMemo(() => {
        return sortByOrder(sectionItems, order);
    }, [sectionItems, order]);

    // handle search effect on items
    const filteredItems = useMemo(() => {
        const merged = [...optionItems.pinned, ...optionItems.normal];

        if (!isSearch) return merged;
        return filterBySearch(merged, searchInput);
    }, [optionItems, isSearch, searchInput]);

    return (
        <aside
            className={cn(
                "bg-surface flex flex-col transition-all duration-300",
                collapsed
                    ? "px-0 w-[72px]"
                    : "px-3 lg:w-[210px] xl:w-[260px] 2xl:w-[260px]",
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
                                "absolute top-1/2 z-1 -translate-y-1/2 text-foreground-muted rounded-full cursor-pointer",
                                "hover:text-foreground hover:bg-surface-muted",
                                isSearch
                                    ? "pointer-events-none left-1.5"
                                    : "p-1.5",
                            )}
                        >
                            <Search
                                id="search-lib-tooltip"
                                size={16}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setIsSearch((s) => !s)}
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
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
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
                    collapsed && "items-center",
                )}
            >
                {filteredItems &&
                    filteredItems.map((item) => (
                        <LibraryItem
                            key={item.id}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
            </div>

            {tooltips.map((tooltip) => (
                <ToolTip
                    key={tooltip.id}
                    anchorId={tooltip.id}
                    content={tooltip.content}
                    position={tooltip.position as Position}
                />
            ))}
        </aside>
    );
}
