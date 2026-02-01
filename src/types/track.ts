import type { TrackType } from "./app";

export type Track = {
    id: string;
    title: string;
    artist: string;
    type: TrackType;
    album: string;
    duration: number; // duration in seconds
    coverImageUrl: string;
    audioUrl: string;
};
