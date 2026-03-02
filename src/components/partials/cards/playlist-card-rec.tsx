import PlayButton from "@/components/ui/play-button";
import { usePlayTrack } from "@/hooks/use-play-track";
import { cn } from "@/lib/cn";
import type { Suggestion } from "@/types";
import { mapToTrack } from "@/utils/map-to-track";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PlaylistCardRecProps {
    playlist: Suggestion;
}

export default function PlaylistCardRec({ playlist }: PlaylistCardRecProps) {
    const { isPlaying, handlePlay } = usePlayTrack(mapToTrack(playlist));

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/user/playlist/${playlist.id}`}
            className={cn(
                "flex items-center justify-between rounded-sm cursor-pointer",
                "bg-surface-muted-hover/50 hover:opacity-80",
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center gap-2">
                <img
                    src={playlist.coverUrl}
                    alt={playlist.title}
                    className="w-12 h-12 2xl:w-16 2xl:h-16 object-cover rounded-l-sm"
                />

                <span className="font-osans text-xs font-semibold">
                    {playlist.title}
                </span>
            </div>

            <div
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className={cn("p-2", isHovered ? "opacity-100" : "opacity-0")}
            >
                <PlayButton playing={isPlaying} onToggle={handlePlay} />
            </div>
        </Link>
    );
}
