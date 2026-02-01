import PlayButton from "@/components/ui/play-button";
import { cn } from "@/lib/cn";
import type { Suggestion } from "@/types/playlist";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PlaylistCardSqrProps {
    item: Suggestion;
    playing: string | null;
    setPlaying: (trackId: string | null) => void;
}

const textClassName = "text-xs truncate";

export default function CardSqr({
    item,
    playing,
    setPlaying,
}: PlaylistCardSqrProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            data-playlist-card
            className={cn(
                "flex flex-col flex-shrink-0 gap-2 w-30 xl:w-38 cursor-pointer",
                "transition-transform duration-200",
            )}
        >
            <Link
                to={`/${item.type}/${item.id}`}
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={item.coverImageUrl}
                    alt={item.title}
                    className={cn(
                        "w-30 h-30 xl:w-38 xl:h-38 object-cover",
                        item.type === "artist" ? "rounded-full" : "rounded-lg",
                    )}
                />

                {item.type !== "artist" && (
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className={cn(
                            "absolute inset-0 flex items-center justify-center",
                            isHovered
                                ? "opacity-100 scale-100 backdrop-blur-xs rounded-lg"
                                : "opacity-0 scale-90",
                            "transition-all duration-200 ease-out",
                        )}
                    >
                        <PlayButton
                            playing={playing === item.id}
                            setPlaying={(next) =>
                                setPlaying(next ? item.id : null)
                            }
                            className="w-15 h-15"
                            iconSize={24}
                        />
                    </div>
                )}
            </Link>

            <div className="flex flex-col min-w-0">
                <span
                    className={cn(
                        "text-foreground font-bold",
                        textClassName,
                        item.type === "artist" && "text-center",
                    )}
                >
                    {item.title}
                </span>
                {item.featuring && (
                    <span
                        className={cn(
                            "text-foreground-muted",
                            textClassName,
                            item.featuring.length === 0 && "invisible",
                        )}
                    >
                        {item.featuring?.join(", ") || "placeholder"}
                    </span>
                )}
            </div>
        </div>
    );
}
