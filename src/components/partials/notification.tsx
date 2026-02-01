import { useState } from "react";
import Switch from "../ui/switch";
import { followerMocks, postMocks } from "@/mocks/notification";
import { formatRelativeTime, formatTime } from "@/utils/time-parser";
import { Settings } from "lucide-react";
import { cn } from "@/lib/cn";
import Badge from "./ui/badge";
import ActionButton from "./ui/action-button";
import TrackContent from "./ui/track-content";
import { Link } from "react-router-dom";
import type { FollowNotification } from "@/types/notification";

export default function Notification() {
    const [notifications, setNotifications] =
        useState<FollowNotification[]>(followerMocks);

    const [isRepost, setIsRepost] = useState(false);
    const [playingTrack, setPlayingTrack] = useState<string | null>(null);

    const filteredFollowers = notifications
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 6);

    const handleFollow = (noti: FollowNotification) => {
        setNotifications((prev) =>
            prev.map((n) =>
                n.id === noti.id ? { ...n, followed: !n.followed } : n,
            ),
        );
        // handle update to backend here
    };

    return (
        <div className="flex flex-col gap-6">
            {/* notification icon */}
            <div className="flex flex-col gap-4">
                {/* title and settings icon */}
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">Notifications</span>
                    <Settings className="w-5 h-5 cursor-pointer text-foreground-muted hover:text-foreground" />
                </div>

                {/* notifications body */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2">
                    {filteredFollowers.map((follower) => (
                        <div
                            key={follower.id}
                            className="flex item-center justify-between p-2 rounded-lg cursor-pointer"
                        >
                            <Link
                                to={`/profile/${follower.username}`}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={follower.avatar}
                                        alt={follower.username}
                                        className="w-10 h-10 rounded-full"
                                    />

                                    <div className="flex flex-col items-start text-xs">
                                        <span>
                                            <strong>{follower.username}</strong>{" "}
                                            is following you
                                        </span>
                                        <span>
                                            {formatTime(follower.timestamp)}
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <span
                                className={cn(
                                    "text-xs flex items-center hover:opacity-80",
                                    follower.followed &&
                                        "text-success font-bold",
                                )}
                                onClick={() => handleFollow(follower)}
                            >
                                {follower.followed
                                    ? "Following"
                                    : "Follow back"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* title and enable status */}
            <div className="flex flex-col">
                {/* title and switch */}
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
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
                    {postMocks.map((post) => (
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
                                            to={`/profile/${post.artist}`}
                                        >
                                            <strong>{post.artist}</strong>
                                        </Link>{" "}
                                        posted a {post.type}{" "}
                                        {formatRelativeTime(post.createdAt)}
                                    </span>
                                </div>

                                {/* tags */}
                                <div className="flex items-center gap-1">
                                    {post.tags &&
                                        post.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                title={`#${tag}`}
                                            />
                                        ))}
                                </div>
                            </div>

                            {/* post cover and content */}
                            <div className="flex items-center gap-5">
                                <img
                                    src={post.trackCover}
                                    alt="Track Cover"
                                    className="w-32 h-32 rounded-lg"
                                />

                                <div className="flex flex-col flex-1 items-start gap-12">
                                    <div className="w-full flex items-center justify-between">
                                        {/* track info, play button */}
                                        <TrackContent
                                            post={post}
                                            playingTrack={playingTrack}
                                            setPlayingTrack={setPlayingTrack}
                                        />
                                    </div>

                                    {/* action buttons */}
                                    <ActionButton post={post} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
