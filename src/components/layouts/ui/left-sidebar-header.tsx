import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/constants/app";
import { cn } from "@/lib/cn";
import type { Sections } from "@/types/app";
import { ChevronLeft, Plus, X } from "lucide-react";

interface LeftSidebarHeaderProps {
    collapsed: boolean;
    isHover: boolean;
    selectedSection: Sections;
    setSelectedSection: (section: Sections) => void;
    toggle: () => void;
}

export default function LeftSidebarHeader({
    collapsed,
    isHover,
    selectedSection,
    setSelectedSection,
    toggle,
}: LeftSidebarHeaderProps) {
    const visibleSections =
        selectedSection === "Default" ? SECTIONS : [selectedSection];

    return (
        <div className="sticky top-0 z-10 bg-surface">
            {/* title and toggle */}
            <div
                className={cn(
                    "h-14 flex items-center",
                    collapsed
                        ? "justify-center flex-col my-3"
                        : "justify-between",
                )}
            >
                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        className={cn(
                            "p-0 transition-all duration-200 ease-out",
                            collapsed
                                ? "p-3 opacity-100"
                                : isHover
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95 pointer-events-none",
                        )}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggle();
                        }}
                    >
                        <ChevronLeft
                            size={collapsed ? 27 : 20}
                            className={cn(
                                "transition-transform",
                                collapsed && "rotate-180",
                            )}
                        />
                    </Button>

                    {!collapsed && (
                        <span
                            className={cn(
                                "font-semibold transition-transform duration-200 ease-out",
                                isHover ? "translate-x-1" : "-translate-x-5",
                            )}
                        >
                            My Library
                        </span>
                    )}
                </div>

                <Button
                    className="p-1 rounded-full bg-surface-muted hover:opacity-400"
                    variant="ghost"
                >
                    <Plus size={collapsed ? 22 : 19} />
                </Button>
            </div>

            {/* sections */}
            {!collapsed && (
                <div className="mb-2 relative">
                    <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1 flex-1 overflow-x-auto scroll-smooth no-scrollbar">
                            {/* remove selected section */}
                            {selectedSection !== "Default" && (
                                <div
                                    onClick={() =>
                                        setSelectedSection("Default")
                                    }
                                    className="p-1 rounded-full bg-surface-muted text-foreground-muted cursor-pointer hover:bg-surface-muted-hover"
                                >
                                    <X />
                                </div>
                            )}

                            {visibleSections.map((section) => (
                                <Button
                                    key={section}
                                    variant="section"
                                    className={cn(
                                        "px-3 py-1.5 rounded-2xl whitespace-nowrap",
                                        section === selectedSection &&
                                            "bg-foreground text-background hover:bg-foreground-muted",
                                    )}
                                    onClick={() => setSelectedSection(section)}
                                >
                                    {section}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
