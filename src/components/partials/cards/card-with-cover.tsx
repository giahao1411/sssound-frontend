import PlayButton from "@/components/ui/play-button";
import { usePlayTrack } from "@/hooks/use-play-track";
import { cn } from "@/lib/cn";
import type { Suggestion } from "@/types";
import { mapToTrack } from "@/utils/map-to-track";
import { CirclePlus, MoreHorizontal, VolumeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CardWithCoverProps {
    item: Suggestion;
}

const iconClassName =
    "text-white/70 hover:text-white hover:scale-103 transition-color";

export default function CardWithCover({ item }: CardWithCoverProps) {
    const { isPlaying, handlePlay } = usePlayTrack(mapToTrack(item));

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <span className="font-osans text-xs text-foreground-muted select-none">
                More like {item.artist.username}
            </span>

            {/* using img for background cover */}
            <div
                className="flex flex-col flex-shrink-0 cursor-pointer rounded-lg overflow-hidden"
                style={{
                    backgroundImage: `url(${item.coverUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* overlay */}
                <div
                    className={cn(
                        "flex flex-col justify-between",
                        "bg-black/40 backdrop-blur-xs rounded-lg p-4 pb-6",
                        "min-h-[490px] xl:min-h-[580px] 2xl:min-h-[600px]",
                    )}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* top section */}
                    <div className="flex items-center gap-4">
                        <img
                            src={item.coverUrl}
                            alt="Cover"
                            className="w-26 h-26 object-cover rounded-md shadow-lg"
                        />

                        <div className="flex flex-col gap-2 text-white/80">
                            <Link
                                to={`/track/${item.id}`}
                                className="font-mplus text-2xl font-semibold hover:underline"
                            >
                                {item.title}
                            </Link>
                            <span className="text-xs font-osans">
                                <span className="text-gray-300">
                                    {item.type.charAt(0).toUpperCase() +
                                        item.type.slice(1)}{" "}
                                    •{" "}
                                </span>
                                <Link
                                    to={`/artist/${item.artist.id}`}
                                    className="text-white/80 hover:underline"
                                >
                                    {item.artist.username}
                                </Link>
                            </span>
                        </div>
                    </div>

                    {/* bottom section */}
                    <div
                        className={cn(
                            "flex items-center justify-between px-4",
                            isHovered ? "opacity-100 " : "opacity-0 ",
                            "transition-all duration-300 ease-out",
                        )}
                    >
                        <div
                            className={cn(
                                "flex items-center gap-2 p-2 bg-black/80 rounded-2xl",
                                "hover:scale-102 hover:opacity-80 transition-transform",
                            )}
                        >
                            <VolumeOff size={16} className="text-white/80" />
                            <span className="font-osans text-xs text-white/80">
                                Preview
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <MoreHorizontal
                                size={30}
                                className={iconClassName}
                            />

                            <CirclePlus size={30} className={iconClassName} />

                            <PlayButton
                                playing={isPlaying}
                                onToggle={handlePlay}
                                className={cn(
                                    "w-12 h-12 bg-white text-black",
                                    "hover:bg-white/90 hover:scale-103 transition-transform",
                                )}
                                iconSize={24}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
