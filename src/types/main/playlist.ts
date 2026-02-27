import type { Track } from "./track";
import type { User } from "./user";

export interface Playlist {
    id: string;
    title: string;
    description?: string;
    coverUrl?: string;
    isPublic: boolean;
    isPinned: boolean;

    owner: User;
    tracks?: Track[];

    createdAt: string;
    updatedAt: string;
}
