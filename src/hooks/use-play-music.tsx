import { usePlayMusicStore } from "@/store/play-music-store";
import type { Album, Track } from "@/types";
import { getMedia } from "@/utils/get-media";

export function usePlayMusic(media: Track | Album) {
    const { media: currentMedia } = getMedia(media);

    const isCurrentTrack = usePlayMusicStore(
        (s) => s.track?.id === currentMedia?.id,
    );

    const isPlaying = usePlayMusicStore(
        (s) => s.playing && s.track?.id === currentMedia?.id,
    );

    const playTrack = usePlayMusicStore((s) => s.playTrack);
    const toggle = usePlayMusicStore((s) => s.toggle);

    const handlePlay = () => {
        if (!currentMedia) return;

        if (isCurrentTrack) {
            toggle();
        } else {
            playTrack(currentMedia);
        }
    };

    return { isCurrentTrack, isPlaying, handlePlay };
}
