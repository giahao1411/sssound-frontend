import { Bell, Home, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { cn } from "@/lib/cn";
import ToolTip from "../ui/tool-tip";
import type { Position } from "@/types/app";

const tooltips = [
    { id: "user-tooltip", content: "Profile", position: "bottom" },
    { id: "home-tooltip", content: "Home", position: "bottom" },
    { id: "search-tooltip", content: "Search", position: "bottom" },
    { id: "browse-tooltip", content: "Browse", position: "bottom" },
    { id: "noti-tooltip", content: "Notifications", position: "bottom" },
    { id: "setting-tooltip", content: "Settings", position: "bottom-start" },
];

export default function AppHeader() {
    return (
        <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur">
            <div className="flex items-center justify-evenly h-15.5 max-w-8xl px-7">
                <div className="flex bg-surface rounded-full p-1.5 cursor-pointer">
                    <img
                        id="user-tooltip"
                        src="/avatar.jpg"
                        alt="user-avatar"
                        className="w-8 h-8 object-cover rounded-full"
                    />
                </div>

                <div className="flex flex-1 w-full justify-center items-center gap-2">
                    <div className="bg-surface rounded-full">
                        <Button
                            id="home-tooltip"
                            className="h-10 w-10 p-0 rounded-full"
                            variant="ghost"
                        >
                            <Link to="/test">
                                <Home className="h-6 w-6 text-foreground-muted hover:transition-all hover:scale-101 hover:text-foreground" />
                            </Link>
                        </Button>
                    </div>

                    {/* search */}
                    <div className="relative flex-1 max-w-md hover:transition-all">
                        <Search
                            id="search-tooltip"
                            className={cn(
                                "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted cursor-pointer",
                                "hover:text-foreground",
                            )}
                        />
                        <Input
                            placeholder="What do you want to listen to?"
                            className="pl-9 bg-surface border-border rounded-full hover:bg-surface-muted"
                        />

                        <span className="pointer-events-none absolute right-12 top-1/2 h-5 w-px -translate-y-1/2 bg-foreground-muted" />

                        <Link to="/browse">
                            <Button
                                id="browse-tooltip"
                                variant="ghost"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-0 h-8 w-8 rounded-full"
                            >
                                <AiOutlineAppstore className="h-5 w-5 text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <Bell
                        id="noti-tooltip"
                        size={19}
                        className="text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground"
                    />

                    <Settings
                        id="setting-tooltip"
                        size={19}
                        className="text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground"
                    />
                </div>
            </div>

            {tooltips.map((tooltip) => (
                <ToolTip
                    key={tooltip.id}
                    anchorId={tooltip.id}
                    content={tooltip.content}
                    position={tooltip.position as Position}
                />
            ))}
        </header>
    );
}
