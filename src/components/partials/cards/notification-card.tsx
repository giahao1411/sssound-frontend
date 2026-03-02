import type { Notification } from "@/types";
import { formatTime } from "@/utils/time-parser";
import { Link } from "react-router-dom";

interface NotificationCardProps {
    notification: Notification;
}

const content = {
    LIKE_TRACK: "liked your track",
    LIKE_ALBUM: "liked your album",
    LIKE_EP: "liked your EP",
};

export default function NotificationCard({
    notification,
}: NotificationCardProps) {
    const media =
        notification.type === "LIKE_TRACK"
            ? notification.track
            : notification.album;

    return (
        <div className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center gap-4">
                <Link
                    to={`/profile/${notification.sender.id}`}
                    className="cursor-pointer"
                >
                    <img
                        src={notification.sender.avatarUrl}
                        alt={notification.sender.username}
                        className="w-10 h-10 rounded-full"
                    />
                </Link>

                <div className="flex flex-col items-start text-xs font-osans">
                    <span>
                        <Link
                            to={`/profile/${notification.sender.id}`}
                            className="font-bold hover:underline"
                        >
                            {notification.sender.username}
                        </Link>{" "}
                        {content[notification.type]}{" "}
                        <Link
                            to={`/media/${media.id}`}
                            className="font-bold hover:underline"
                        >
                            {media.title}
                        </Link>
                    </span>
                    <span>{formatTime(notification.timestamp)}</span>
                </div>
            </div>
        </div>
    );
}
