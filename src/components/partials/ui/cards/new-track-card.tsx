import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { MoreHorizontal } from "lucide-react";

export default function NewTrackCard() {
    return (
        <div
            className={cn(
                "flex items-center p-4 rounded-md text-foreground gap-6",
                "bg-gradient-to-tr from-background-1/2 to-surface-muted",
            )}
        >
            <img src="./avatar.jpg" alt="User Avatar" className="w-52 h-52" />

            <div className="flex flex-1 flex-col gap-5">
                {/* noti type and fixed 'sponsored' */}
                <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">Track</span>
                    <span className="p-1.5 rounded-md bg-surface font-semibold">
                        Sponsored
                    </span>
                </div>

                {/* title and description */}
                <div className="flex flex-col gap-3 w-2/3">
                    <span className="text-3xl font-bold">Cá Hồi</span>
                    <span className="line-clamp-2 text-sm text-foreground-muted">
                        Nghĩ thật vui được làm kiếp con người
                    </span>
                </div>

                {/* action buttons */}
                <div className="flex items-center gap-3">
                    <Button variant="custom" className="rounded-3xl px-6">
                        Play
                    </Button>

                    <Button
                        variant="custom"
                        className="rounded-3xl text-foreground border border-foreground-muted bg-transparent"
                    >
                        Add to Playlist
                    </Button>

                    <MoreHorizontal
                        size={22}
                        className={cn(
                            "text-foreground-muted hover:text-foreground cursor-pointer",
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
