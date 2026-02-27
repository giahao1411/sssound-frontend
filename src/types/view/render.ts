import type { SuggestionType } from "../core/media";
import type { User } from "../main/user";

export interface PlayingTrack {
    id: string;
    coverUrl: string;
    title: string;
    artist: string;
    audioSrc: string;
}

export interface Suggestion {
    id: string;
    title: string;
    type: SuggestionType;

    artist: User;

    description?: string;
    audioUrl?: string;
    coverUrl: string;

    trackIds?: string[];

    featuring?: string[];
}

export interface RecentlyPlayed extends Suggestion {
    lastPlayedAt: number;
}

export interface LibraryItem {
    id: string;
    coverUrl: string;
    title: string;
    type: SuggestionType;
    artist: string;
    isPinned: boolean;
}
