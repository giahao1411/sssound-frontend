import { Bell, Home, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur">
            <div className="flex items-center justify-evenly h-15.5 max-w-8xl px-7">
                <div className="flex bg-surface rounded-full p-1.5">
                    <img
                        src="/avatar.jpg"
                        alt="user-avatar"
                        className="w-8 h-8 object-cover rounded-full"
                    />
                </div>

                <div className="flex flex-1 w-full justify-center items-center gap-2">
                    <div className="bg-surface rounded-full">
                        <Button
                            className="h-10 w-10 p-0 rounded-full"
                            variant="ghost"
                        >
                            <Link to="/test">
                                <Home className="h-6 w-6 text-foreground-muted hover:transition-all hover:scale-101 hover:text-foreground" />
                            </Link>
                        </Button>
                    </div>

                    {/* Search */}
                    <div className="relative flex-1 max-w-md hover:transition-all">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted" />
                        <Input
                            placeholder="What do you want to listen to?"
                            className="pl-9 bg-surface border-border rounded-full hover:"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <Bell
                        size={19}
                        className="text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground"
                    />

                    <Settings
                        size={19}
                        className="text-foreground-muted hover:transition-all hover:scale-105 hover:text-foreground"
                    />
                </div>
            </div>
        </header>
    );
}
