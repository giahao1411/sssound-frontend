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
