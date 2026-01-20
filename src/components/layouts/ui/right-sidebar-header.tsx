import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { ChevronLeft, MoreHorizontal } from "lucide-react";

interface RightSidebarHeaderProps {
    title: string;
    open: boolean;
    isHover: boolean;
    toggle: () => void;
}

export default function RightSidebarHeader({
    title,
    open,
    isHover,
    toggle,
}: RightSidebarHeaderProps) {
    return (
        <div className="sticky top-0 z-10 h-14 flex items-center justify-between px-3 bg-surface">
            <div className="flex items-center space-x-2">
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggle();
                    }}
                    variant="ghost"
                    className={cn(
                        "p-0 transition-all duration-200 ease-out",
                        isHover
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none",
                    )}
                >
                    <ChevronLeft
                        size={20}
                        className={cn(
                            "transition-transform duration-200",
                            open && "rotate-180",
                        )}
                    />
                </Button>

                <span
                    className={cn(
                        "font-semibold transition-transform duration-200 ease-out",
                        isHover ? "translate-x-0" : "-translate-x-5",
                    )}
                >
                    {title}
                </span>
            </div>

            <Button
                variant="ghost"
                className={cn(
                    "p-0 transition-all duration-200 ease-out",
                    isHover
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none",
                )}
            >
                <MoreHorizontal size={19} />
            </Button>
        </div>
    );
}
