import { usePlayTrackStore } from "@/store/play-music-store";
import type { Track } from "@/types";

export function usePlayTrack(track: Track) {
    const isCurrentTrack = usePlayTrackStore((s) => s.track?.id === track.id);

    const isPlaying = usePlayTrackStore(
        (s) => s.playing && s.track?.id === track.id,
    );

    const playTrack = usePlayTrackStore((s) => s.playTrack);
    const toggle = usePlayTrackStore((s) => s.toggle);

    const handlePlay = () => {
        if (isCurrentTrack) {
            toggle();
        } else {
            playTrack(track);
        }
    };

    return {
        isCurrentTrack,
        isPlaying,
        handlePlay,
    };
}
