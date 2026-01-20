import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Shuffle } from "lucide-react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { RangeInput } from "@/components/ui/range-input";

interface FooterControlProps {
    handleShuffle: () => void;
    handleRepeat: () => void;
    playing: boolean;
    setPlaying: (playing: boolean) => void;
    shuffled: boolean;
    repeated: "off" | "one" | "all";
}

export default function FooterControl({
    handleShuffle,
    handleRepeat,
    playing,
    setPlaying,
    shuffled,
    repeated,
}: FooterControlProps) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-5">
                {/* Shuffle Button */}
                <div className="flex flex-col gap-1 items-center justify-center mt-2">
                    <Button
                        variant="ghost"
                        className="p-0"
                        onClick={handleShuffle}
                    >
                        <Shuffle
                            className={cn(shuffled ? "text-selected" : "")}
                            size={18}
                        />
                    </Button>

                    <span
                        className={cn(
                            "w-1 h-1 rounded-full transition-opacity",
                            shuffled ? "bg-selected opacity-100" : "opacity-0",
                        )}
                    />
                </div>

                {/* Previous */}
                <Button variant="ghost" className="p-0">
                    <IoIosSkipBackward size={22} />
                </Button>

                {/* Play/Pause */}
                <Button
                    variant="media"
                    className="p-0 w-8 h-8 rounded-full"
                    onClick={() => setPlaying(!playing)}
                >
                    {playing ? (
                        <FaPause size={18} />
                    ) : (
                        <FaPlay className="pl-0.5" size={18} />
                    )}
                </Button>

                {/* Next */}
                <Button variant="ghost" className="p-0">
                    <IoIosSkipForward size={22} />
                </Button>

                {/* Repeat Button */}
                <div className="flex flex-col gap-1 items-center justify-center mt-2">
                    <Button
                        variant="ghost"
                        className="p-0"
                        onClick={handleRepeat}
                    >
                        {repeated === "one" ? (
                            <LuRepeat1 className="text-selected" size={20} />
                        ) : (
                            <LuRepeat
                                className={`${
                                    repeated === "all" ? "text-selected" : ""
                                }`}
                                size={20}
                            />
                        )}
                    </Button>

                    <span
                        className={cn(
                            "w-1 h-1 rounded-full transition-opacity",
                            repeated !== "off"
                                ? "bg-selected opacity-100"
                                : "opacity-0",
                        )}
                    />
                </div>
            </div>

            {/* Fake progress bar */}
            <div className="flex items-center justify-center space-x-2 text-xs text-foreground-muted w-full">
                <span>1:15</span>
                <RangeInput className="w-96"/>
                <span>3:45</span>
            </div>
        </div>
    );
}
