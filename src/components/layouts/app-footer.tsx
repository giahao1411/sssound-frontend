import { Volume2 } from "lucide-react";
import { useState } from "react";

import { RangeInput } from "../ui/range-input";
import FooterControl from "./ui/footer-control";
import { usePlayTrackStore } from "@/store/play-music-store";

type RepeatState = "off" | "one" | "all";

export default function AppFooter() {
    const [shuffled, setShuffled] = useState(false);
    const [repeated, setRepeated] = useState<RepeatState>("off");
    const [volume, setVolume] = useState(70);

    const { playing, toggle } = usePlayTrackStore();

    const handleShuffle = () => {
        setShuffled(!shuffled);
    };

    const handleRepeat = () => {
        if (repeated === "off") {
            setRepeated("all");
        } else if (repeated === "all") {
            setRepeated("one");
        } else {
            setRepeated("off");
        }
    };

    return (
        <footer className="h-20 bg-background/80 px-4 flex items-center justify-between">
            {/* track info */}
            <div className="flex items-center gap-3 min-w-[240px]">
                <img
                    src="https://picsum.photos/80"
                    className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                    <p className="text-sm font-medium">Lo-fi Beats</p>
                    <p className="text-xs text-muted-foreground">
                        Chillhop Music
                    </p>
                </div>
            </div>

            {/* controls */}
            <FooterControl
                handleShuffle={handleShuffle}
                handleRepeat={handleRepeat}
                playing={playing}
                toggle={toggle}
                shuffled={shuffled}
                repeated={repeated}
            />

            {/* volume */}
            <div className="flex items-center gap-3 min-w-[200px] justify-end">
                <Volume2 className="w-5 h-5" />
                <RangeInput
                    min={0}
                    max={100}
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                />
            </div>
        </footer>
    );
}
