import { useEffect, useState } from "react";
import Switch from "../ui/switch";
import { Settings } from "lucide-react";
import { useSharedDataStore } from "@/store/shared-data-store";
import type { Notification } from "@/types";
import { mockNotifications } from "@/mocks";
import NotificationCard from "../partials/cards/notification-card";
import { cn } from "@/lib/cn";
import { mockFeedItems } from "@/mocks";
import FeedItemCard from "../partials/cards/feed-item-card";

const headerClassName = "font-mplus text-xl font-bold";

export default function Notification() {
    const [numberOfNotifications, setNumberOfNotifications] = useState(4);
    const [anyNotificationsLeft, setAnyNotificationsLeft] = useState(true);

    const { notifications, posts, setNotifications, setPosts } =
        useSharedDataStore((state) => state);

    const [isRepost, setIsRepost] = useState(false);

    const filteredNotifications = notifications
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, numberOfNotifications);

    const handleMoreNotifications = () => {
        if (anyNotificationsLeft) {
            setNumberOfNotifications((prev) => prev + 4);
            if (numberOfNotifications + 4 >= notifications.length) {
                setAnyNotificationsLeft(false);
            }
        } else {
            setNumberOfNotifications(4);
            setAnyNotificationsLeft(true);
        }
    };

    useEffect(() => {
        setNotifications(mockNotifications);
        setPosts(mockFeedItems);
    }, [setNotifications, setPosts]);

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
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2">
                        {filteredNotifications.map((notification) => (
                            <NotificationCard
                                key={notification.id}
                                notification={notification}
                            />
                        ))}
                    </div>

                    <span
                        onClick={handleMoreNotifications}
                        className={cn(
                            "font-osans text-xs text-center text-foreground-muted",
                            "hover:underline cursor-pointer",
                        )}
                    >
                        {anyNotificationsLeft ? "Load more" : "Back to Default"}
                    </span>
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
                        <span className="font-osans text-sm">Reposts</span>

                        <Switch
                            defaultValue={isRepost}
                            onChange={setIsRepost}
                        />
                    </div>
                </div>

                {/* posts body */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 py-6">
                    {posts.map((post) => (
                        <FeedItemCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
