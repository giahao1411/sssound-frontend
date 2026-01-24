import { RECENT_OPTIONS } from "@/constants/app";
import { useToggleOutside } from "@/hooks/use-toggle-outside";
import { cn } from "@/lib/cn";
import type { SortOrder, RecentsOption } from "@/types/app";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

interface RecentsDropdownProps {
    isSearch: boolean;
    selectedOption: RecentsOption;
    order: SortOrder;
    setSelectedOption: (option: RecentsOption) => void;
    setOrder: (order: SortOrder) => void;
}

export function RecentsDropdown({
    isSearch,
    selectedOption,
    order,
    setSelectedOption,
    setOrder,
}: RecentsDropdownProps) {
    const [open, setOpen] = useState(false);

    const ref = useToggleOutside<HTMLDivElement>(open, () => setOpen(false));

    const handleSort = (item: RecentsOption) => {
        if (selectedOption === item) {
            setOrder(order === "asc" ? "desc" : "asc");
        } else {
            setSelectedOption(item);
            setOrder("desc");
        }
    };

    return (
        <div ref={ref} className={cn("relative")}>
            {/* trigger and display current selection */}
            <div
                onClick={() => setOpen((v) => !v)}
                className={cn(
                    "flex items-center gap-2 text-foreground-muted cursor-pointer select-none",
                    "hover:text-foreground hover:scale-105"
                )}
            >
                {!isSearch ? (
                    <>
                        <span className="text-xs">{selectedOption}</span>
                        <TfiMenuAlt size={18} />
                    </>
                ) : (
                    <TfiMenuAlt size={18} />
                )}
            </div>

            {/* dropdown */}
            <div
                className={cn(
                    "absolute right-0 mt-2 w-44 rounded-md",
                    "bg-surface border border-border shadow-lg",
                    "transition-all duration-150 ease-out origin-top",
                    open
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none",
                )}
            >
                <ul className="py-1 text-xs">
                    <li className="px-3 py-2 pointer-events-none">Sort by</li>

                    {RECENT_OPTIONS.map((item) => (
                        <li
                            key={item}
                            className={cn(
                                "m-1 px-3 py-2 cursor-pointer hover:bg-surface-muted",
                                selectedOption === item && "text-success",
                            )}
                            onClick={() => {
                                setSelectedOption(item);
                                handleSort(item);
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <span className="">{item}</span>

                                {selectedOption === item && (
                                    <ArrowDown
                                        size={16}
                                        className={cn(
                                            order === "asc"
                                                ? "rotate-180"
                                                : "rotate-0",
                                        )}
                                    />
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
