import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Shuffle } from "lucide-react";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { RangeInput } from "@/components/ui/range-input";
import PlayButton from "@/components/ui/play-button";

interface FooterControlProps {
    handleShuffle: () => void;
    handleRepeat: () => void;
    playing: boolean;
    toggle: () => void;
    shuffled: boolean;
    repeated: "off" | "one" | "all";
}

export default function FooterControl({
    handleShuffle,
    handleRepeat,
    playing,
    toggle,
    shuffled,
    repeated,
}: FooterControlProps) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-5">
                {/* shuffle */}
                <div className="flex flex-col gap-1 items-center justify-center mt-2">
                    <Button
                        variant="ghost"
                        className="p-0"
                        onClick={handleShuffle}
                    >
                        <Shuffle
                            className={cn(shuffled ? "text-success" : "")}
                            size={18}
                        />
                    </Button>

                    <span
                        className={cn(
                            "w-1 h-1 rounded-full transition-opacity",
                            shuffled ? "bg-success opacity-100" : "opacity-0",
                        )}
                    />
                </div>

                {/* previous */}
                <Button variant="ghost" className="p-0">
                    <IoIosSkipBackward size={22} />
                </Button>

                {/* play / pause */}
                <PlayButton playing={playing} onToggle={toggle} />

                {/* next */}
                <Button variant="ghost" className="p-0">
                    <IoIosSkipForward size={22} />
                </Button>

                {/* repeat */}
                <div className="flex flex-col gap-1 items-center justify-center mt-2">
                    <Button
                        variant="ghost"
                        className="p-0"
                        onClick={handleRepeat}
                    >
                        {repeated === "one" ? (
                            <LuRepeat1 className="text-success" size={20} />
                        ) : (
                            <LuRepeat
                                className={`${
                                    repeated === "all" ? "text-success" : ""
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

            <div className="flex items-center justify-center space-x-2 text-xs text-foreground-muted w-full">
                <span>1:15</span>
                <RangeInput className="w-96" />
                <span>3:45</span>
            </div>
        </div>
    );
}
