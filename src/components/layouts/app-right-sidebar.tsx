import { Settings, Bell, User, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import { useRightSidebarStore } from "@/store/right-sidebar-store";
import RightSidebarHeader from "./ui/right-sidebar-header";
import { useState } from "react";
import { Button } from "../ui/button";

export default function RightSidebar() {
    const { open, toggle } = useRightSidebarStore();
    const [isHover, setIsToggle] = useState(false);

    return (
        <aside
            className={cn(
                "bg-surface flex flex-col transition-all duration-300",
                open ? "lg:w-[275px] xl:w-[350px]" : "w-[56px]",
            )}
            onClick={!open ? toggle : undefined}
            onMouseEnter={() => setIsToggle(true)}
            onMouseLeave={() => setIsToggle(false)}
        >
            {/* collapsed view */}
            {!open && (
                <Button
                    variant="ghost"
                    className="flex items-center justify-center cursor-pointer hover:bg-surface-muted transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggle();
                    }}
                >
                    <ChevronLeft className="w-6 h-6" />
                </Button>
            )}

            {/* expanded view */}
            {open && (
                <>
                    {/* header */}
                    <RightSidebarHeader
                        title="Now Playing"
                        open={open}
                        isHover={isHover}
                        toggle={toggle}
                    />

                    {/* content */}
                    <div className="flex-1 overflow-auto px-3 flex flex-col gap-4">
                        <img
                            src="https://picsum.photos/400"
                            className="rounded-xl object-cover"
                        />

                        <div>
                            <h3 className="font-semibold">Lo-fi Beats</h3>
                            <p className="text-sm text-muted-foreground">
                                Chill vibes for coding
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Action icon={<User />} label="View artist" />
                            <Action icon={<Bell />} label="Follow" />
                            <Action icon={<Settings />} label="Options" />
                        </div>
                    </div>
                </>
            )}
        </aside>
    );
}

function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-muted cursor-pointer">
            {icon}
            <span className="text-sm">{label}</span>
        </div>
    );
}
