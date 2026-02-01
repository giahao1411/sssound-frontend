import PlayButton from "@/components/ui/play-button";
import type { TrackPost } from "@/types/notification";
import { formatDuration } from "@/utils/time-parser";
import { Link } from "react-router-dom";

interface TrackContentProps {
    post: TrackPost;
    playingTrack?: string | null;
    isInModal?: boolean;
    setPlayingTrack?: (trackId: string | null) => void;
}

export default function TrackContent({
    post,
    playingTrack,
    isInModal = false,
    setPlayingTrack,
}: TrackContentProps) {
    return (
        <div className="w-full flex items-center justify-between">
            {/* track info, play button */}
            <div className="flex items-center gap-4">
                <PlayButton
                    playing={playingTrack === post.id}
                    setPlaying={(playing) =>
                        setPlayingTrack &&
                        setPlayingTrack(playing ? post.id : null)
                    }
                    className="w-10 h-10"
                    isInModal={isInModal}
                />

                <div className="flex flex-col">
                    <Link
                        className="text-sm text-foreground-muted hover:underline"
                        to={`/profile/${post.artist}`}
                    >
                        {post.artist}
                    </Link>
                    <span className="font-bold">{post.title}</span>
                </div>
            </div>

            <span className="text-sm text-foreground-muted">
                {formatDuration(post.duration)}
            </span>
        </div>
    );
}
