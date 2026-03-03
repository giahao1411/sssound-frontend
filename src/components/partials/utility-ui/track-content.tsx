import PlayButton from "@/components/ui/play-button";
import { usePlayMusic } from "@/hooks/use-play-music";
import type { Album, Track } from "@/types";
import { getMedia } from "@/utils/get-media";
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
    const { media, mediaType } = getMedia(item);

    const { isPlaying, handlePlay } = usePlayMusic(item);

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
                        to={`/user/${media.artist.id}`}
                    >
                        {media.artist.username}
                    </Link>
                    <Link
                        to={`/${mediaType}/${media.id}`}
                        className="font-bold hover:underline"
                    >
                        {media.title}
                    </Link>
                </div>
            </div>

            <span className="text-sm text-foreground-muted">
                {formatDuration(media.duration)}
            </span>
        </div>
    );
}
