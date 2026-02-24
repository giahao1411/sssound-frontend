import type { Track } from "@/types";
import { create } from "zustand";

type PlayTrackStore = {
    track: Track | null;
    playing: boolean;

    playTrack: (track: Track) => void;
    toggle: () => void;
};

export const usePlayTrackStore = create<PlayTrackStore>((set) => ({
    track: null,
    playing: false,

    playTrack: (track: Track) => set({ track, playing: true }),
    toggle: () => set((s) => ({ playing: !s.playing })),
}));
