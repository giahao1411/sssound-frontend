import { FaPause, FaPlay } from "react-icons/fa6";
import { Button } from "./button";
import { cn } from "@/lib/cn";

interface PlayButtonProps {
    playing: boolean;
    setPlaying: (playing: boolean) => void;
    className?: string;
    iconSize?: number;
    isInModal?: boolean;
}

export default function PlayButton({
    playing,
    setPlaying,
    className,
    iconSize = 18,
    isInModal,
}: PlayButtonProps) {
    return (
        <Button
            variant="media"
            disabled={isInModal}
            className={cn("p-0 w-8 h-8 rounded-full", className)}
            onClick={() => setPlaying && setPlaying(!playing)}
        >
            {playing && isInModal && (
                <FaPlay className="pl-0.5" size={iconSize} />
            )}

            {playing ? (
                <FaPause size={iconSize} />
            ) : (
                <FaPlay className="pl-0.5" size={iconSize} />
            )}
        </Button>
    );
}
