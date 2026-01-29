import { Button } from "@/components/ui/button";
import type { TrackPost } from "@/types/notification";
import { formatDuration } from "@/utils/time-parser";
import { FaPause, FaPlay } from "react-icons/fa6";

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
                <Button
                    variant="media"
                    disabled={isInModal}
                    className="p-0 w-11 h-11 rounded-full"
                    onClick={() =>
                        setPlayingTrack &&
                        setPlayingTrack(
                            playingTrack === post.id ? null : post.id,
                        )
                    }
                >
                    {playingTrack && <FaPlay className="pl-0.5" size={18} />}

                    {playingTrack === post.id ? (
                        <FaPause className="pl-0.5" size={18} />
                    ) : (
                        <FaPlay className="pl-0.5" size={18} />
                    )}
                </Button>

                <div className="flex flex-col">
                    <span className="text-sm text-foreground-muted">
                        {post.artist}
                    </span>
                    <span className="font-bold">{post.title}</span>
                </div>
            </div>

            <span className="text-sm text-foreground-muted">
                {formatDuration(post.duration)}
            </span>
        </div>
    );
}
