import PlayButton from "@/components/ui/play-button";
import { cn } from "@/lib/cn";
import type { Suggestion } from "@/types/playlist";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PlaylistCardRecProps {
    playlist: Suggestion;
    playingTrack: string | null;
    setPlayingTrack: (trackId: string | null) => void;
}

export default function PlaylistCardRec({
    playlist,
    playingTrack,
    setPlayingTrack,
}: PlaylistCardRecProps) {
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
                    src={playlist.coverImageUrl}
                    alt={playlist.title}
                    className="w-12 h-12 2xl:w-16 2xl:h-16 object-cover rounded-l-sm"
                />

                <span className="text-xs font-semibold">{playlist.title}</span>
            </div>

            <div
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className={cn("p-2", isHovered ? "opacity-100" : "opacity-0")}
            >
                <PlayButton
                    playing={playingTrack === playlist.id}
                    setPlaying={(playing) =>
                        setPlayingTrack(playing ? playlist.id : null)
                    }
                />
            </div>
        </Link>
    );
}
