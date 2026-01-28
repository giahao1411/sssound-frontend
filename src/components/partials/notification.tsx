import { useState } from "react";
import Switch from "../ui/switch";
import { followerMocks } from "@/mocks/notification";
import { formatTime } from "@/utils/time-parser";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/lib/cn";

export default function Notification() {
    const [isRepost, setIsRepost] = useState(false);

    const filteredFollowers = followerMocks
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 6);

    return (
        <div className="flex flex-col gap-6">
            {/* notification icon */}
            <div className="flex flex-col gap-4">
                {/* title and settings icon */}
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Notifications</span>
                    <Settings className="w-5 h-5 cursor-pointer text-foreground-muted hover:text-foreground" />
                </div>

                {/* notifications body */}
                <div className="grid grid-cols-2 gap-2">
                    {filteredFollowers.map((follower) => (
                        <div
                            key={follower.id}
                            className="flex item-center justify-between hover:bg-surface-muted p-2 rounded-lg cursor-pointer"
                        >
                            <div className="flex items-center justify-between">
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
                            </div>

                            <Button
                                variant="section"
                                className={cn(
                                    "text-xs",
                                    follower.followed &&
                                        "text-success font-bold",
                                )}
                            >
                                {follower.followed
                                    ? "Following"
                                    : "Follow back"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* title and enable status */}
            <div className="flex flex-col gap-4">
                {/* title and switch */}
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">
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
                <div className=""></div>
            </div>
        </div>
    );
}
