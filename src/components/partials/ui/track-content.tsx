import PlayButton from "@/components/ui/play-button";
import { usePlayTrack } from "@/hooks/use-play-track";
import type { Album, Track } from "@/types";
import { mapToAlbum } from "@/utils/map-to-album";
import { mapToTrack } from "@/utils/map-to-track";
import { formatDuration } from "@/utils/time-parser";
import { Link } from "react-router-dom";

interface TrackContentProps {
    item: Track | Album;
    isInModal?: boolean;
}

export default function TrackContent({
    item,
    isInModal = false,
}: TrackContentProps) {
    const itemContent =
        item.type === "TRACK" ? mapToTrack(item) : mapToAlbum(item).tracks[0];

    const { isPlaying, handlePlay } = usePlayTrack(itemContent);

    return (
        <div className="w-full flex items-center justify-between">
            {/* track info, play button */}
            <div className="flex items-center gap-4">
                <PlayButton
                    playing={isPlaying}
                    onToggle={handlePlay}
                    className="w-10 h-10"
                    isInModal={isInModal}
                />

                <div className="flex flex-col">
                    <Link
                        className="text-sm text-foreground-muted hover:underline"
                        to={`/profile/${itemContent.artist.id}`}
                    >
                        {itemContent.artist.username}
                    </Link>
                    <span className="font-bold">{itemContent.title}</span>
                </div>
            </div>

            <span className="text-sm text-foreground-muted">
                {formatDuration(itemContent.duration)}
            </span>
        </div>
    );
}
