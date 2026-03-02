import { Button } from "@/components/ui/button";
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollingRowProps {
    children: React.ReactNode;
}

export default function ScrollingRow({ children }: ScrollingRowProps) {
    const { scrollRef, canScrollLeft, canScrollRight, scrollByCards } =
        useHorizontalScroll();

    return (
        <div className="relative">
            <Button
                variant="ghost"
                onClick={() => scrollByCards("left")}
                className={cn(
                    "absolute left-2 top-1/2 -translate-y-1/2 z-10",
                    "bg-background/80 backdrop-blur p-2 rounded-full shadow hover:bg-background",
                    "transition-opacity",
                    canScrollLeft
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none",
                )}
            >
                <ChevronLeft />
            </Button>

            {/* child component herer */}
            <div
                ref={scrollRef}
                className="overflow-x-auto no-scrollbar scroll-smooth"
            >
                <div className="flex items-center flex-nowrap gap-8">
                    {children}
                </div>
            </div>

            <Button
                variant="ghost"
                onClick={() => scrollByCards("right")}
                className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 z-10",
                    "bg-background/80 backdrop-blur p-2 rounded-full shadow hover:bg-background",
                    "transition-opacity",
                    canScrollRight
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none",
                )}
            >
                <ChevronRight />
            </Button>
        </div>
    );
}
