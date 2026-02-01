import type { MediaType } from "./app";

export type Suggestion = {
    id: string;
    title: string;
    type: MediaType;
    tracks: string[]; // Array of track IDs
    featuring?: string[];
    description?: string;
    coverImageUrl?: string;
    lastPlayedTimestamp?: number;
};
