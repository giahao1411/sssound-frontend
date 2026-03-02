import { Disc3, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import { AiFillAppstore, AiOutlineAppstore } from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BsBell, BsBellFill } from "react-icons/bs";
import { cn } from "@/lib/cn";
import ToolTip from "../ui/tool-tip";
import type { Position } from "@/types";

const tooltips = [
    { id: "user-tooltip", content: "Profile", position: "bottom" },
    { id: "home-tooltip", content: "Home", position: "bottom" },
    { id: "search-header-tooltip", content: "Search", position: "bottom" },
    { id: "browse-tooltip", content: "Browse", position: "bottom" },
    { id: "noti-tooltip", content: "Notifications", position: "bottom" },
    { id: "setting-tooltip", content: "Settings", position: "bottom-start" },
];

export default function AppHeader() {
    return (
        <header className="sticky top-0 z-15 w-full bg-background/80 backdrop-blur">
            <div className="flex items-center justify-evenly h-15.5 max-w-8xl px-7">
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                    <Disc3 className="mb-1.5" />
                    <h2 className="font-josefin font-bold text-2xl">SSSOUND</h2>
                </Link>

                <div className="flex flex-1 w-full justify-center items-center gap-2">
                    <div className="bg-surface rounded-full  hover:text-foreground hover:scale-105">
                        <Button
                            id="home-tooltip"
                            className="h-10 w-10 p-0 rounded-full"
                            variant="ghost"
                        >
                            <NavLink to="/">
                                {({ isActive }) => {
                                    const className =
                                        "h-6 w-6 hover:transition-all";

                                    return isActive ? (
                                        <GoHomeFill
                                            className={cn(
                                                className,
                                                "text-foreground",
                                            )}
                                        />
                                    ) : (
                                        <GoHome className={cn(className)} />
                                    );
                                }}
                            </NavLink>
                        </Button>
                    </div>

                    {/* search */}
                    <div className="relative flex-1 max-w-md hover:transition-all">
                        <Search
                            id="search-header-tooltip"
                            className={cn(
                                "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted cursor-pointer",
                                "hover:text-foreground",
                            )}
                        />
                        <Input
                            placeholder="What do you want to listen to?"
                            className="pl-9 bg-surface border-border rounded-full hover:bg-surface-muted"
                        />

                        <span className="pointer-events-none absolute right-12 top-1/2 h-5 w-[1.5px] -translate-y-1/2 bg-border-muted" />

                        <NavLink to="/browse">
                            {({ isActive }) => {
                                const className =
                                    "h-6 w-6 hover:transition-all hover:scale-105 hover:text-foreground";

                                return (
                                    <Button
                                        id="browse-tooltip"
                                        variant="ghost"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-0 h-8 w-8 rounded-full"
                                    >
                                        {isActive ? (
                                            <AiFillAppstore
                                                className={cn(
                                                    className,
                                                    "text-foreground",
                                                )}
                                            />
                                        ) : (
                                            <AiOutlineAppstore
                                                className={cn(className)}
                                            />
                                        )}
                                    </Button>
                                );
                            }}
                        </NavLink>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <NavLink to="/notifications">
                        {({ isActive }) => {
                            const className =
                                "text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground";

                            return isActive ? (
                                <BsBellFill
                                    id="noti-tooltip"
                                    size={19}
                                    className={cn(className, "text-foreground")}
                                />
                            ) : (
                                <BsBell
                                    id="noti-tooltip"
                                    size={19}
                                    className={cn(className)}
                                />
                            );
                        }}
                    </NavLink>

                    <Settings
                        id="setting-tooltip"
                        size={19}
                        className={cn(
                            "text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground",
                            "cursor-pointer",
                        )}
                    />

                    <img
                        id="user-tooltip"
                        src="/avatar.jpg"
                        alt="user-avatar"
                        className={cn(
                            "w-8 h-8 object-cover rounded-full",
                            "cursor-pointer",
                        )}
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
