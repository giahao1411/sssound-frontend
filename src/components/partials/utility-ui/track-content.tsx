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
    // check the item type to determine if it's a track or album
    // then map it to a track for consistent handling
    const media =
        item.type === "Track" ? mapToTrack(item) : mapToAlbum(item).tracks[0];

    const { isPlaying, handlePlay } = usePlayTrack(media);

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

                <div className="flex flex-col font-osans">
                    <Link
                        className="text-sm text-foreground-muted hover:underline"
                        to={`/profile/${media.artist.id}`}
                    >
                        {media.artist.username}
                    </Link>
                    <span className="font-bold">{media.title}</span>
                </div>
            </div>

            <span className="text-sm text-foreground-muted">
                {formatDuration(media.duration)}
            </span>
        </div>
    );
}
