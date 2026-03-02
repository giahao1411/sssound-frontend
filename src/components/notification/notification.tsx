import { useState } from "react";
import Switch from "../ui/switch";
// import { followerMocks, postMocks } from "@/mocks/notification";
import { formatRelativeTime, formatTime } from "@/utils/time-parser";
import { Settings } from "lucide-react";
// import { cn } from "@/lib/cn";
import Badge from "../partials/ui/badge";
import ActionButton from "../partials/ui/action-button";
import TrackContent from "../partials/ui/track-content";
import { Link } from "react-router-dom";
import { useSharedDataStore } from "@/store/shared-data-store";
import type { Notification } from "@/types";

const content = {
    NEW_TRACK: "released a new track",
    NEW_ALBUM: "released a new album",
    NEW_EP: "released a new EP",
    LIKE_TRACK: "liked your track",
    LIKE_ALBUM: "liked your album",
    LIKE_EP: "liked your EP",
    REPOST_TRACK: "reposted your track",
    REPOST_ALBUM: "reposted your album",
    REPOST_EP: "reposted your EP",
};

const headerClassName = "font-mplus text-xl font-bold";

export default function Notification() {
    const { notifications, posts } = useSharedDataStore((state) => state);

    const [isRepost, setIsRepost] = useState(false);

    const filteredNotifications = notifications
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 6);

    return (
        <div className="flex flex-col gap-6">
            {/* notification icon */}
            <div className="flex flex-col gap-4">
                {/* title and settings icon */}
                <div className="flex items-center justify-between">
                    <span className={headerClassName}>Notifications</span>
                    <Settings className="w-5 h-5 cursor-pointer text-foreground-muted hover:text-foreground" />
                </div>

                {/* notifications body */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2">
                    {filteredNotifications.map((noti) => (
                        <div
                            key={noti.id}
                            className="flex item-center justify-between p-2 rounded-lg cursor-pointer"
                        >
                            <Link
                                to={`/profile/${noti.sender.id}`}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={noti.sender.avatarUrl}
                                        alt={noti.sender.username}
                                        className="w-10 h-10 rounded-full"
                                    />

                                    <div className="flex flex-col items-start text-xs">
                                        <span>
                                            <strong>
                                                {noti.sender.username}
                                            </strong>{" "}
                                            {content[noti.type]}
                                        </span>
                                        <span>
                                            {formatTime(noti.timestamp)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* title and enable status */}
            <div className="flex flex-col">
                {/* title and switch */}
                <div className="flex items-center justify-between">
                    <span className={headerClassName}>
                        Hear the latest posts from the people you're following
                    </span>

                    <div className="flex items-center gap-2">
                        <span className="text-sm">Reposts</span>

                        <Switch
                            defaultValue={isRepost}
                            onChange={setIsRepost}
                        />
                    </div>
                </div>

                {/* posts body */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 py-6">
                    {posts.map((post) => {
                        const isTrack =
                            post.type === "TRACK" ||
                            post.type === "REPOST_TRACK";

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

                                        <span className="text-sm">
                                            <Link
                                                className="hover:underline"
                                                to={`/profile/${post.user.id}`}
                                            >
                                                <strong>
                                                    {post.user.username}
                                                </strong>
                                            </Link>{" "}
                                            posted a {post.type}{" "}
                                            {formatRelativeTime(post.timestamp)}
                                        </span>
                                    </div>

                                    {/* tags */}
                                    {post.type === "TRACK" ||
                                        (post.type === "REPOST_TRACK" && (
                                            <div className="flex items-center gap-1">
                                                {post.track.tags &&
                                                    post.track.tags.map(
                                                        (tag) => (
                                                            <Badge
                                                                key={tag}
                                                                title={`#${tag}`}
                                                            />
                                                        ),
                                                    )}
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
                                            <TrackContent
                                                item={
                                                    isTrack
                                                        ? post.track
                                                        : post.album
                                                }
                                            />
                                        </div>

                                        {/* action buttons */}
                                        <ActionButton post={post} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
