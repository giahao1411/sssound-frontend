export const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (diff < minute) {
        return "Just now";
    }

    if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} minutes ago`;
    }

    if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} hours ago`;
    }

    if (diff < day * 2) {
        return "Yesterday";
    }

    return new Date(timestamp).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

export const formatRelativeTime = (timestamp: number) => {
    const now = Date.now();
    const diff = Math.max(0, now - timestamp);

    const units = [
        { label: "year", ms: 365 * 24 * 60 * 60 * 1000 },
        { label: "month", ms: 30 * 24 * 60 * 60 * 1000 },
        { label: "day", ms: 24 * 60 * 60 * 1000 },
        { label: "hour", ms: 60 * 60 * 1000 },
        { label: "minute", ms: 60 * 1000 },
    ];

    if (diff < 60 * 1000) return "just now";

    for (const unit of units) {
        const value = Math.floor(diff / unit.ms);
        if (value >= 1) {
            return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
};

export const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
