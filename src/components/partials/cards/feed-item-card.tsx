import type { FeedItem } from "@/types";
import { formatRelativeTime } from "@/utils/time-parser";
import { Link } from "react-router-dom";
import Badge from "../utility-ui/badge";
import TrackContent from "../utility-ui/track-content";
import ActionButton from "../utility-ui/action-button";

interface FeedItemCardsProps {
    post: FeedItem;
}

const content = {
    TRACK: "posted a track",
    ALBUM: "posted an album",
    EP: "posted an EP",
    REPOST_TRACK: "reposted a track",
    REPOST_ALBUM: "reposted an album",
    REPOST_EP: "reposted an EP",
};

export default function FeedItemCard({ post }: FeedItemCardsProps) {
    // check if has field 'track' to determine if it's a track or album/ep
    const media = "track" in post ? post.track : post.album;

    return (
        <div className="flex flex-col gap-4">
            {/* post header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="./avatar.jpg"
                        alt="User Avatar"
                        className="w-7 h-7 rounded-full"
                    />

                    <span className="font-osans text-sm">
                        <Link
                            className="hover:underline"
                            to={`/profile/${post.user.id}`}
                        >
                            <strong>{post.user.username}</strong>
                        </Link>{" "}
                        {content[post.type]}{" "}
                        {formatRelativeTime(post.timestamp)}
                    </span>
                </div>

                {/* tags */}
                {post.type === "TRACK" ||
                    (post.type === "REPOST_TRACK" && (
                        <div className="flex items-center gap-1">
                            {post.track.tags &&
                                post.track.tags.map((tag) => (
                                    <Badge key={tag} title={`#${tag}`} />
                                ))}
                        </div>
                    ))}
            </div>

            {/* post cover and content */}
            <div className="flex items-center gap-5">
                <img
                    src={post.coverUrl}
                    alt="Track Cover"
                    className="w-32 h-32 rounded-lg"
                />

                <div className="flex flex-col flex-1 items-start gap-12">
                    <div className="w-full flex items-center justify-between">
                        {/* track info, play button */}
                        <TrackContent item={media} />
                    </div>

                    {/* action buttons */}
                    <ActionButton post={post} />
                </div>
            </div>
        </div>
    );
}
