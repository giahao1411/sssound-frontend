import TrackContent from "./track-content";
import { formatRelativeTime } from "@/utils/time-parser";
import Badge from "./badge";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import type { Album, Track } from "@/types";

interface ShareModalProps {
    item: Track | Album;
}

export default function ShareModal({ item }: ShareModalProps) {
    const handleCopy = (url: string) => {
        navigator.clipboard.writeText(url);
    };

    return (
        <div className="space-y-5">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">
                        {formatRelativeTime(item.createdAt)}
                    </span>

                    {item.type === "Track" ? (
                        <div className="flex items-center gap-1">
                            {item.tags &&
                                item.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        title={`#${tag}`}
                                        className="bg-surface-muted-hover hover:opacity-80"
                                    />
                                ))}
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Badge
                                title={item.artist.username}
                                className="bg-surface-muted-hover hover:opacity-80"
                            />
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-5">
                    <img
                        src={item.coverUrl}
                        alt="Track Cover"
                        className="w-16 h-16 rounded-lg"
                    />

                    <div className="flex flex-col flex-1 items-start gap-12">
                        <div className="w-full flex items-center justify-between">
                            <TrackContent item={item} isInModal={true} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bạn có thể thêm copy link, social buttons ở đây */}
            <div className="flex items-center gap-2">
                <Input
                    value={`https://sssound.com/track/${item.id}`}
                    className="border-0 pointer-events-none"
                />

                <div className="bg-background p-2 rounded-md hover:opacity-80 cursor-pointer">
                    <Copy
                        size={20}
                        className="text-foreground-muted cursor-pointer hover:text-foreground"
                        onClick={() =>
                            handleCopy(`https://sssound.com/track/${item.id}`)
                        }
                    />
                </div>
            </div>
        </div>
    );
}
