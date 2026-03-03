import type { Track } from "@/types";
import { create } from "zustand";

type PlayMusicStore = {
    track: Track | null;
    playing: boolean;

    playTrack: (track: Track) => void;
    toggle: () => void;
};

export const usePlayMusicStore = create<PlayMusicStore>((set) => ({
    track: null,
    playing: false,

    playTrack: (track: Track) => set({ track, playing: true }),
    toggle: () => set((s) => ({ playing: !s.playing })),
}));
